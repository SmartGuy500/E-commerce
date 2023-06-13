// document.addEventListener('mouseover',function(e){
//     e.document.styleSheets(`background-color: yellow`)
// })

const categories = document.querySelector('.categories')
const products = document.querySelector('.products')
const form = document.querySelector('.form')
let searchParam = ''

const fetchCategories = async() => {
    const response = await fetch ("https://dummyjson.com/products")
    const data = await response.json()
    console.log(data)

    data.products.forEach(async (category) =>{
        const list =document.createElement('ul')
        list.classList.add("list")
        list.innerHTML = `
        <li class = "categoryTitle">${category.title}</li> 
        `

        const response = await fetch (`https://dummyjson.com/products/category/${category}`)
        const data = await response.json()
        const categoryTitle = list.querySelector(".categoryTitle")
        data.products.forEach((product) => {
            const item = document.createElement('ul')
            item.classList.add('item')
            item.innerHTML = `
            <li class = "categoryProduct">${product.title}</li> 
            `
            categoryTitle.appendChild(item)
        })
        categories.appendChild(list)
    })

}

form.addEventListener('submit',async (e)=>{
    e.preventDefault
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
            <button>Add to cart</button>
        `
        products.appendChild(container)
    })
}

// searchProducts()

fetchCategories()