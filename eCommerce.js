// document.addEventListener('mouseover',function(e){
//     e.document.styleSheets(`background-color: yellow`)
// })

const categories = document.querySelector('.categories')
const products = document.querySelector('.products')
const form = document.querySelector('.form')
let searchParam = ''

let cartItem = []


const fetchCategories = async() => {
    const response = await fetch ("https://dummyjson.com/products/categories")
    const data = await response.json()
    console.log(data)

    data.forEach(async (category) =>{
        const list =document.createElement('ul')
        list.classList.add("list")
        list.innerHTML = `
        <div class = "categoryTitle">${category}</div> 
        `
        const parentUL = document.createElement('div')
        parentUL.classList.add('parentul')

        const response = await fetch (`https://dummyjson.com/products/category/${category}`)
        const data = await response.json()
        const categoryTitle = list.querySelector(".categoryTitle")
        data.products.forEach((product) => {
            const item = document.createElement('ul')
            item.classList.add('item')
            item.innerHTML = `
            <li class = "categoryProduct">${product.title}</li> 
            `
            parentUL.appendChild(item)
            categoryTitle.appendChild(parentUL)
        })
        categories.appendChild(list)
    })

}

form.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const input = form.querySelector('.input')
    searchParam = input.value
    products.innerHTML = ''
    console.log(searchParam)

    try{
        searchProducts(searchParam)
    }catch(error) {
        console.log(error)
    }


})

const searchProducts = async (product)=>{
    const response = await fetch(`https://dummyjson.com/products/search?q=${product}`)
    const data = await response.json()
    data.products.forEach((item)=>{
        console.log(item)
        const container = document.createElement('div')
        container.classList.add('containerProduct')
        container.innerHTML = `
            <div class="productImage"><img src="${item.thumbnail}"/></div>
            <h2>${item.title}</h2>
            <h3>£ ${item.price}</h3>
            <button class="cartButton">Add to cart</button>
        `

    const cartButton = container.querySelector('.cartButton')
    cartButton.addEventListener('click', ()=> {
        const cartProduct = {
            title: item.title,
            price: item.price,
            image: item.thumbnail, 
        }
        cartItem.push(cartProduct)
        console.log(cartItem)
        localStorage.setItem("cartItem", JSON.stringify(cartItem))
        cartNum.innerHTML = cartItem.length
    })
    products.appendChild(container)
  })
}

categories.addEventListener('click', (e)=>{
    console.log(e.target.tagName)
    const collapsable = e.target.querySelector('.parentul')
    if (e.target.tagName === 'DIV') {
        collapsable.classList.toggle('hidden')
    }
})

// searchProducts()

fetchCategories()