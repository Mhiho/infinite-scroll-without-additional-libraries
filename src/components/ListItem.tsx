import { ItemI } from '../types/Item';
import { Item } from './Item';

export const ListItem = ({ items }: { items: ItemI[] }) => {
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {items.map((item: ItemI) => (
        <Item
          key={item.name + item.id}
          name={item.name}
          image={item.image}
          powerstats={item.powerstats}
          biography={item.biography}
          id={item.id}
        />
      ))}
      ;
    </div>
  );
};
