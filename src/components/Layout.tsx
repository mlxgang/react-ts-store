import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from 'react-bootstrap';

export const Layout = () => {
  return (
    <Container className="d-flex flex-column justify-content-between" style={{ height: '100vh' }}>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
