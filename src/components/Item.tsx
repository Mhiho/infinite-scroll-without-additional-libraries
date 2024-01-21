import { Card, Image, Space } from 'antd';
import { ItemI } from '../types/Item';
import { API_KEY } from '../config/API_KEY';

export const Item = ({ name, image, powerstats, biography, id }: ItemI) => {
  return (
    <>
      <Space direction='vertical' size='large'>
        <a href={`https://www.superheroapi.com/api.php/${API_KEY}/${id}`}>
          <Card title={name}>
            <Image width={180} src={image.url} />
            <div>
              <p>alignment: {biography.alignment}</p>
              <p>strenght: {powerstats.strenght}</p>
              <p>intelligence: {powerstats.intelligence}</p>
              <p>speed: {powerstats.speed}</p>
              <p>durability: {powerstats.durability}</p>
              <p>power: {powerstats.power}</p>
              <p>combat: {powerstats.combat}</p>
            </div>
          </Card>
        </a>
      </Space>
    </>
  );
};
