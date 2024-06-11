import { Col, Row } from 'react-bootstrap';

export const AboutPage = () => {
  return (
    <Row className="d-flex justify-content-center">
      <Col lg="6" className="text-center">
        <h3 className="mb-5">О проекте</h3>
        <h5>Проект выполнен в рамках промежуточной аттестации</h5>
        <h5>
          <b>Выполнил:</b> Тойкичев Максим
        </h5>
        <h5>
          <b>Код проекта:</b> <a href="https://github.com/mlxgang/react-ts-store">github.com/react-ts-store</a>
        </h5>
      </Col>
    </Row>
  );
};
