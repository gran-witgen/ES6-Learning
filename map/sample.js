let numbers = [1, 2, 3, 4, 5]

let double_numbers = []

for (let i = 0; i < numbers.length; i+= 1){
    double_numbers.push(numbers[i] * 2)
}

console.log(double_numbers)

// mapは新しい配列を返す
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
let double_numbers2 = numbers.map(function(number){
    return number * 2
})

console.log(double_numbers2)

let double_numbers3 = []
numbers.forEach(function(number){
    double_numbers3.push(number * 2)
})

console.log(double_numbers3)


let cars = [
    {
        type: "軽自動車", price: "安い"
    },
    {
        type: "高級車", price: "高い"
    }
]

let prices = cars.map(function(car){
    return car.price
})

console.log(prices)


function pluck(array, property) {
    let data = array.map(function(arr){
        return arr[property]
    })
    return data
}

var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];

var colorNames = pluck(colorObjects, 'color');
console.log(colorNames)