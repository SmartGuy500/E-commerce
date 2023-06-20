const data = localStorage.getItem("cartItem")
const products = JSON.parse(data)
console.log(products)

const container = document.querySelector(".container")
try{products.forEach((product, index) =>{
    const item = document.createElement('div')
    item.classList.add("item")
    item.innerHTML= `
    <div class="imageCont"><img class="image" src="${product.image}" /></div>
    <h2 style="color: lightgray;">${product.title}</h2>
    <h3 style="color: lightgray;">£ ${product.price}</h3>
    <button class="Remove">Remove from cart</button> 
    `

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