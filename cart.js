const data = localStorage.getItem("cartItem")
const products = JSON.parse(data)
console.log(products)
const result = document.querySelector(".result")

let sum = 0

const container = document.querySelector(".container")
try{products.forEach((product, index) =>{
    const item = document.createElement('div')
    item.classList.add("item")
    sum += product.price
    item.innerHTML= `
    <div class="imageCont"><img class="image" src="${product.image}" /></div>
    <h2 style="color: lightgray;">${product.title}</h2>
    <h3 style="color: lightgray;" class="ItemPrice">£ ${product.price}</h3>
    <button class="Remove">Remove from cart</button> 
    `
    result.innerHTML = `Total: £ ${sum} `
    
    const Remove = item.querySelector(".Remove")
    Remove.addEventListener('click', ()=> {
        products.splice(index, 1)
        localStorage.setItem('cartItem', JSON.stringify(products))
        window.location.reload()
    })

    container.appendChild(item)
} )}
catch(error){
    console.log(error)
}

const clear = document.querySelector(".clear")
clear.addEventListener('click', ()=>{
    localStorage.removeItem("cartItem")
    window.location.reload()
})