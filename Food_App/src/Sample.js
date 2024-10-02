const p = new Promise((resolve, reject)=>{
    resolve("Success");
    reject("Failure");
})

const getdata   = ()=>{
    p.then(res=>console.log(res));
}

getdata();