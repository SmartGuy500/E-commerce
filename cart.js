const data = localStorage.getItem("cartItem")
const products = JSON.parse(data)
console.log(products)

const container = document.querySelector(".container")
try{products.forEach((product) =>{
    const item = document.createElement('div')
    item.classList.add("item")
    item.innerHTML= `
    <div><img src="${product.image}" /></div>
    <button class="Remove">Remove from cart</button> 
    `

    const Remove = item.querySelector(".Remove")
    Remove.addEventListener('click', ()=> {
        localStorage.removeItem("cartItem")
    })

    container.appendChild(item)
} )}
catch(error){
    console.log(error)
}