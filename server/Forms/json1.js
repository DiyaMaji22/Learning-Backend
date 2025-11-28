const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));

const FILE = "data.json";

// Create file if missing
if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, JSON.stringify([]));
}

// -------------------------------------
// SHOW FORM (JSON INPUT) + TABLE
// -------------------------------------
app.get("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

    // Build table from stored JSON
    let tableRows = data.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.rollno}</td>
            <td>${item.department}</td>
        </tr>
    `).join("");

    res.send(`
        <h1>Enter JSON Data</h1>

        <form method="POST" action="/save">
            <textarea name="jsonData" rows="10" cols="50" 
             placeholder='Example JSON:
{ "name": "Diya", "rollno": "21", "department": "CSE" }'
            required></textarea>
            <br><br>
            <button type="submit">Save JSON</button>
        </form>

        <hr>
        <h2>Saved Records</h2>

        <table border="1" cellpadding="10">
            <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Department</th>
            </tr>
            ${tableRows}
        </table>
    `);
});


app.post("/save", (req, res) => {
    try {
        // User-submitted raw JSON text
        const userJson = JSON.parse(req.body.jsonData);

        // Must be an object, not array
        if (typeof userJson !== "object" || Array.isArray(userJson)) {
            return res.send("<h3>Invalid JSON format! Must be an object.</h3>");
        }

        const data = JSON.parse(fs.readFileSync(FILE, "utf8"));
        data.push(userJson);  // Add object to array
        fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

        res.redirect("/");
    } catch (err) {
        res.send("<h3>Invalid JSON! Please check your input.</h3>");
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
