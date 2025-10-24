// const getData=new Promise(function(resolve,reject){
//     setTimeout(function(e){
//         console.log("Data recieved")
//         resolve()
//     },5000)


// })
// getData.then(function(){
//     console.log("promise consumed");
// })



// function getData(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("Data fetched succesfully")

//         },1000)
//     })
// }

// async function fetchData(){
//     console.log("Fetching ....");
//     const result=await getData();
//     console.log(result);
//     console.log("Done")
// }
// fetchData()




function retrievedata(){

    return new Promise(function(resolve,reject){

        let success=false;
        setTimeout(function(){
            if(success){
                resolve("it is a success")
            }
            else{
                reject("The value of success is false");
            }

        },2000)
    })

}

async function xy(){
    try{
        console.log("Fetching Data");
        const data=await retrievedata();
        console.log("Done");

    }catch(error){
        console.log("Error:",error)

    }

}
xy();


