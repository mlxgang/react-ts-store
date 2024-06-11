import { Col, Nav, NavItem, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

export const Header = () => {
  return (
    <Row>
      <Col lg="12">
        <header className="bg-dark px-5 py-3 mb-5 rounded-bottom-3">
          <Navbar className="justify-content-around">
            <Navbar.Brand>
              <Link to="/" className="text-decoration-none text-white">
                <h3>Duty FREE Moscow</h3>
              </Link>
            </Navbar.Brand>
            <Nav className="d-flex gap-3 text-white mx-5">
              <NavItem>
                <Link to="/" className="text-decoration-none text-white">
                  <h5>Главная</h5>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/products" className="text-decoration-none text-white">
                  <h5>Товары</h5>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="text-decoration-none text-white">
                  <h5>О проекте</h5>
                </Link>
              </NavItem>
            </Nav>
          </Navbar>
        </header>
      </Col>
    </Row>
  );
};
