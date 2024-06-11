import { useParams } from 'react-router-dom';
import { IProduct } from '../types/product';
import { useState, useEffect } from 'react';
import { api } from '../api/api';
import { Col, Image, Row } from 'react-bootstrap';

export const SingleProductPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<IProduct>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.getProductById(id);
        const { data } = res;
        setItem(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {item && (
        <Row className="justify-content-center">
          <Col lg="4" className="text-center">
            <h4>{item.title}</h4>
            <Image src={item.images} alt={item.title} width={350} />
            <h5>${item.price}</h5>
            <p>{item.description}</p>
          </Col>
        </Row>
      )}
    </>
  );
};
