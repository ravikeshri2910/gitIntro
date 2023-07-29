
const multiply = (a,b) => {
    return a*b
}

console.log(multiply(5,2))


const student = {

    name : "Abay",
    roll_no : 1,
    age : 25,
    passed(){
        return "Passed all subject"
    }

}

console.log(student.age)
console.log(student.passed())

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
