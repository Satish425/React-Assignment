import {useEffect, useState} from 'react'
import { fetchProducts,updateProductTitle,deleteProduct} from './dummyData/dummyAPI'

const App = () => {
  const [products,setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [showError,setshowError] = useState(null);
  const [filters, setFilters] = useState({
  title: "",
  brand: "",
  category: "",
  price: "",
  rating: ""
});

const filteredProducts = products.filter(p => {
  return (
    (!filters.title || p.title === filters.title) &&
    (!filters.brand || p.brand === filters.brand) &&
    (!filters.category || p.category === filters.category) &&
    (!filters.price || p.price === Number(filters.price)) &&
    (!filters.rating || p.rating === Number(filters.rating))
  );
});
const getUniqueValues = (key) => {
  return [...new Set(filteredProducts.map(p => p[key]))];
};

const resetFilters = () => {
  setFilters({
    title: "",
    brand: "",
    category: "",
    price: "",
    rating: ""
  });
};

  useEffect(()=>{
     fetchProducts()
    .then((data) => {
      setProducts(data);
      setLoader(false);
    })
    .catch(() => {
      setshowError("Failed to load products");
      setLoader(false);
    });
  },[]);

  if (showError) 
    return <p style={{color:"red"}}>{showError}</p>;

  if(loader==true){
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <div style={{marginTop:"5px", marginBottom: "5px",display:'flex',gap:"5px"}}>
  <select value={filters.title} onChange={(e) => setFilters({ ...filters, title: e.target.value })}>
    <option value="">All Titles</option>
    {getUniqueValues("title").map(v => (
      <option key={v} value={v}>{v}</option>
    ))}
  </select>

  <select value={filters.brand} onChange={(e) => setFilters({ ...filters, brand: e.target.value })}>
    <option value="">All Brands</option>
    {getUniqueValues("brand").map(v => (
      <option key={v} value={v}>{v}</option>
    ))}
  </select>

  <select value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
    <option value="">All Categories</option>
    {getUniqueValues("category").map(v => (
      <option key={v} value={v}>{v}</option>
    ))}
  </select>

  <select value={filters.price} onChange={(e) => setFilters({ ...filters, price: e.target.value })}>
    <option value="">All Prices</option>
    {getUniqueValues("price").map(v => (
      <option key={v} value={v}>{v}</option>
    ))}
  </select>

  <select value={filters.rating} onChange={(e) => setFilters({ ...filters, rating: e.target.value })}>
    <option value="">All Ratings</option>
    {getUniqueValues("rating").map(v => (
      <option key={v} value={v}>{v}</option>
    ))}
  </select>
  <button onClick={resetFilters}>Reset Filters</button>
</div>
      <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {filteredProducts.map((pd)=>(
          <tr key = {pd.id}>
            <td>
              <input
                value={pd.title}
                onChange={(e) =>
                  updateProductTitle(pd.id, e.target.value)
                    .then(setProducts)
                }
              />
            </td>
            <td>{pd.brand}</td>
            <td>{pd.category}</td>
            <td>{pd.price}</td>
            <td>{pd.rating}</td>
            <td>
                <button onClick={() =>
                    deleteProduct(pd.id).then(setProducts)}>
                  Delete
                </button>
            </td>
          </tr>
          ))}
          {filteredProducts.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
      </tbody>
    </table>
    </div>
  )
}

export default App