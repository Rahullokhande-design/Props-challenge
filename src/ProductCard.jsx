import './App.css'
// import products from './data.jsx'

function ProductCard(props) {
  return (
     
        <div className="product-card" id={props.id}>
            <div className="product-image">
                {props.image === null ? <span className="no-image">No Image Available</span> : ""}
                {props.inStock !== true ? <img src={props.image} alt={props.name} style={{ opacity: 0.3 }} /> : <img src={props.image} alt={props.name} />}
            </div>
            <h4 className='product-title'>{props.name}</h4>
            <div className='price-section'>
                {/*<span className='price-text'>${props.price}</span>*/}
                {props.discountPrice === null ? <span className='price-text'>${props.price}</span> : <span className='price-text'>${props.discountPrice}</span>}
                {props.discountPrice !== null ? <span className='original-price'>${props.price}</span> : ""}
            </div>
            <p>{props.category}</p>
            {props.isNew && <span className="new-badge">New</span>}
            {props.inStock ? <span className="in-stock">In Stock</span> : <span className="out-of-stock">Out of Stock</span>}
            <div>
                {props.inStock ? <button className='add-to-cart-btn'>Add to Cart</button> : <button className='add-to-cart-btn' disabled>Out of Stock</button>}
                
    
            </div>
        </div>
    
  );
}

export default ProductCard;

