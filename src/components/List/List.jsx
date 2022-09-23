import ItemSocial from 'components/ItemSocial';
import ItemText from 'components/ItemText';
import ItemTextFooter from 'components/ItemTextFooter';
import ItemTextWithBtn from 'components/ItemTextWithBtn';
import s from './List.module.scss';
import { v4 as uuidv4 } from 'uuid';

const List = ({ array, name }) => {
  return (
    <ul className={s[name]}>
      {array?.map(elem => {
        if (name === 'itemTextWithBtn') {
          return <ItemTextWithBtn elem={elem} name={name} key={uuidv4()} />;
        }
        if (name === 'itemText') {
          return <ItemText elem={elem} name={name} key={uuidv4()} />;
        }
        if (name === 'itemTextFooter') {
          return <ItemTextFooter elem={elem} name={name} key={uuidv4()} />;
        }
        if (name === 'itemSocial') {
          return <ItemSocial elem={elem} name={name} key={uuidv4()} />;
        }
        return <></>;
      })}
    </ul>
  );
};

export default List;
