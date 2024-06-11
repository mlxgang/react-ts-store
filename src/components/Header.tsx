import { Col, Nav, NavItem, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

export const Header = () => {
  return (
    <Row>
      <Col lg="12">
        <header className="bg-dark px-5 py-3 mb-5 rounded-bottom-3">
          <Navbar>
            <Navbar.Brand className="text-white">
              <h3>Duty FREE Moscow</h3>
            </Navbar.Brand>
            <Nav className="d-flex gap-3 text-white">
              <NavItem>
                <Link to="/" className="text-decoration-none text-white">
                  <h4>Главная</h4>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/products" className="text-decoration-none text-white">
                  <h4>Товары</h4>
                </Link>
              </NavItem>
            </Nav>
          </Navbar>
        </header>
      </Col>
    </Row>
  );
};
