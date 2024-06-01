import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  console.log(product);
  return (
    <>
      <Card className="rounded h-100">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body className="p-2">
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div" className="product-title">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as={"div"}>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as={"h3"}>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default Product;
