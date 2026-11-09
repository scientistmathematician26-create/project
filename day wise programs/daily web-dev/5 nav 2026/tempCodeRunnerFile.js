const alpa=function(a,v){
    console.log(a+v)
}
alpa(3,3)
const num=[1,2,3,4,5,6]
const area=(radius) =>radius*radius*3.14
const areaArray=num.map(val=>area(val))
const cf=(radius)=>radius*2*3.14
const circumfrance=num.map(va=>cf(va))
console.log(areaArray)
console.log(circumfrance)

