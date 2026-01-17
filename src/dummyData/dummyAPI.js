import productsData from "./products.json"
let products = [...productsData.products];

export const fetchProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products);
        },1000);
    })
};


export const updateProductTitle = (id,newTitle) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            products = products.map(pd => pd.id === id ? {...pd,title: newTitle} : pd);
            resolve(products);
        },500)
    })
}

export const deleteProduct = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      products = products.filter(p => p.id !== id);
      resolve(products);
    }, 300);
  });