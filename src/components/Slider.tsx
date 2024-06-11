import { Carousel, Col, Image, Row } from 'react-bootstrap';

export const Slider = () => {
  return (
    <Row className="d-flex justify-content-center">
      <Col lg="6">
        <Carousel data-bs-theme="dark">
          <Carousel.Item style={{ textAlign: 'center' }}>
            <Image
              src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
              alt="first slide"
              width={500}
            />
            <Carousel.Caption>
              <h5>Косметика</h5>
              <p>В нашем магазине представлена эксклюзивная косметика со всего мира.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ textAlign: 'center' }}>
            <img
              src="https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png"
              alt="second slide"
              width={500}
            />
            <Carousel.Caption>
              <h5>Мебель</h5>
              <p>Изысканная итальянская мебель всегда ждет Вас в нашем магазине.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ textAlign: 'center' }}>
            <img
              src="https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png"
              alt="third slide"
              width={500}
            />
            <Carousel.Caption>
              <h5>Продукты</h5>
              <p>Натуральные продукты из ферм со всех уголков планеты.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};
