import { Row, Col } from "react-bootstrap";
import product from "../product";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {product.map((product) => {
          return (
            <Col
              key={product._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="pb-4"
            >
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default HomeScreen;
