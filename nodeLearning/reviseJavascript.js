
const multiply = (a,b) => {
    return a*b
}

// console.log(multiply(5,2))


const student = {

    name : "Abay",
    roll_no : 1,
    age : 25,
    passed(){
        return "Passed all subject"
    }

}

// console.log(student.age)
// console.log(student.passed())

// Using map in the function
let arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

let newArr = arr.map((fruits)=>{
    // console.log(fruits)
    if(fruits == " "){
       return fruits = "empty string"
    }else{
        return fruits
    }
})

console.log(newArr)
console.log(arr)


// Using Async and await
console.log("a");
console.log("b");
async function print(){

    await new Promise((res,rej)=>{
        setTimeout(()=>{
            res(console.log('c'))

        },3000)
    })
    await new Promise((res,rej)=>{
        setTimeout(()=>{
            res(console.log('d'))

        },0)
    })

    return 'e'
}

print().then((m)=>{
    console.log(m)
})