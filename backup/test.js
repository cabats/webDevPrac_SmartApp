console.log(`2`+2-`2`)

const obj1 = {}
const obj2 = {
    name: `james`
}
const obj3 = {
    name: `anthony`
}

obj1[obj2] = {
    name: 'cabats'
}
obj1[obj3] = {
    name: `rafols`
}
console.log(obj1[obj2])
console.log(obj1.toString())

console.log(true/`xd`)

console.log(NaN==NaN)
console.log(NaN===NaN)

const arr = [1,2,3,4]
const result = arr.map((e)=>{
    if(e>2){
        return e;
    };
})

let stringConverted = arr.toLocaleString()

let arr2 = arr.map((e) =>{
    console.log(typeof(e))
})

console.log(arr)
console.log(stringConverted)
console.log(result)