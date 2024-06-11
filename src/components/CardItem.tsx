import { Button, Card, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ICardItemprops {
  id: number;
  images: string;
  title: string;
  price: number;
  description: string;
}

const overflowHid = {
  overflow: 'hidden',
  display: '-webkit-box',
  textOverflow: 'ellipsis',
};

export const CardItem = ({ id, images, title, price, description }: ICardItemprops) => {
  return (
    <Col lg="2">
      <Card>
        <Card.Img src={images[0]} style={{ height: '200px', objectFit: 'contain' }}></Card.Img>
        <Card.Body>
          <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">{title}</Tooltip>}>
            <Link to={`/products/${id}`}>
              <Card.Title
                className="text-decoration-none text-dark"
                style={{ ...overflowHid, height: '48px', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2' }}
              >
                {title}
              </Card.Title>
            </Link>
          </OverlayTrigger>
          <Card.Text style={{ ...overflowHid, height: '75px', WebkitBoxOrient: 'vertical', WebkitLineClamp: '3' }}>
            {description}
          </Card.Text>
          <Card.Text>${price}</Card.Text>
        </Card.Body>
        <Button variant="dark">Добавить в корзину</Button>
      </Card>
    </Col>
  );
};
