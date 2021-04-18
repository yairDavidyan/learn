import './products.css';

function Products(props) {
    const { items } = props;
    


    return (
        <div className ="div-products">
            <div className="container=image">                
                <img alt={items.title} src={items.image} className="image"></img>
                <div className="title">{ items.title}</div>
            </div>
            <div className="description">{ items.description}</div>
            <div className="price">{items.price}</div>
        </div>
    );
}
export default Products;