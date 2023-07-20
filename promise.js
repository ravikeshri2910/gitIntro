// Code done by youtuber
let promise1 = Promise.resolve("Hello world");
let promise2 = 15;
let promise3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Good buy")
    }, 2000)
})

;
Promise.all([promise1, promise2, promise3]).then((v)=>{
    console.log(v)
})



// Task for last seen
let activity =[]
let lastActivity = new Promise((resolve, rej)=>{

    setTimeout(()=>{
        activity.push("post");
        resolve("Post-Done")
    },2000)
});

let lastseen = new Promise((resolve,rej)=>{
    setTimeout(()=>{
        let seen = new Date();
        resolve("seen="+seen.getMinutes())
    })
})


Promise.all([lastActivity, activity, lastseen]).then((value)=>{
    console.log(value)
})