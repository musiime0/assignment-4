
//switch
let elevator=1

switch(elevator){

    case 1:
        console.log("elevator 1")
        break;
        case 2:
            console.log("elevator 2")
            break;
            case 3:
                console.log("elevator 3")
                break;
}

//for loop
console.log("code:" + 1)
console.log("code:" + 2)
console.log("code:" + 3)
console.log("code:" + 4)
console.log("code:" + 5)

for(let i = 5; 
    i >= 0; --1) {
    console.log("code:" + i)
}

//While loop
let i = 1

while(i < 5){
    console.log("code:" + i)
    i++
}
//Array
var names = ["jane","jeff","jim"];
console.log(names[0])

names[0] = 6
console.log(names[0])
console.log(names[1])
console.log(names[2])

names[0] = "joy"
console.log(names[0])

//For In
var numbers = [1,2,3]
for (let i in numbers) {
    console.log(i)

}