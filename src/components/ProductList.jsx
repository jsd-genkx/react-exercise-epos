import PropTypes from "prop-types";
import Product from "./Product";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
