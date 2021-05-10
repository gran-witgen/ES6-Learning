let products = [
    {name: "きゅうり", type: "野菜", quantity: 0, price:1},
    {name: "バナナ", type: "フルーツ", quantity: 10, price:15},
    {name: "セロリ", type: "野菜", quantity: 30, price:9},
    {name: "オレンジ", type: "フルーツ", quantity: 3, price:5},
]

let filter_products = []

for (let i = 0; i < products.length; i += 1){
    if (products[i]["type"] === "フルーツ"){
        filter_products.push(products[i])
    }
}

console.log(filter_products)

let only_fruit_products = products.filter(function(product){
    return product["type"] === "フルーツ"
})

console.log(only_fruit_products)

// &&を使うことで絞り込む条件を追加することができる
let more_filter_products = products.filter(function(product){
    return product["type"] === "野菜" && product["quantity"] > 0 && product["price"] < 10
})

console.log(more_filter_products)

let post = {
    id: 4, title: "初めての投稿"
}

let comments = [
    {postId: 4, content: "good entry"},
    {postId: 3, content: "nice"},
    {postId: 4, content: "soso"},
]

function commnetsForPost(post, comments){
    return comments.filter(function(comment){
        return comment["postId"] === post["id"]
    })
}

let comment_post = commnetsForPost(post, comments)
console.log(comment_post)