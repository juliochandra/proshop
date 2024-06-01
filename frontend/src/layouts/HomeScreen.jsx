import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

const HomeScreen = () => {
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/products");
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
