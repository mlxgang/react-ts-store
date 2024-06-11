import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <Row className="justify-content-center">
      <Col lg="auto">
        <h2>Ошибка 404. Запрашиваемая страница не найдена.</h2>
        <br />
        <h5>
          Вернуться на <Link to="/">главную</Link>.
        </h5>
      </Col>
    </Row>
  );
};
