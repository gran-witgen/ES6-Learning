let colors = ["blue", "red", "green"]

for (let i = 0; i < colors.length; i += 1){
    console.log(colors[i])
}

colors.forEach(function(color){
    console.log(color)
})

let numbers = [1, 2, 3, 4, 5]

let sum = 0

numbers.forEach(function(number){
    sum += number
})

console.log(sum)