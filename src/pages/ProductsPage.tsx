import { api } from '../api/api';
import { IAPIResponse } from '../types/product';
import { CardItem } from '../components/CardItem';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export const ProductsPage = () => {
  const [data, setData] = useState<IAPIResponse>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.getProducts();
        const { data } = res;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        {data && (
          <Container className="d-flex flex-wrap gap-5 justify-content-center">
            {data.products.map(item => (
              <CardItem
                key={item.id}
                id={item.id}
                images={item.images}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ))}
          </Container>
        )}
      </Container>
    </>
  );
};
