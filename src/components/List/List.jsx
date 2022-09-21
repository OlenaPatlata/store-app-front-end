import ItemTextWithBtn from 'components/ItemTextWithBtn';
import s from './List.module.scss';

const List = ({ array, name }) => {
  return (
    <ul className={s[name]}>
      {array?.map(elem => {
        if (name === 'itemTextWithBtn') {
          return <ItemTextWithBtn elem={elem} name={name} />;
        }
        return <></>;
      })}
    </ul>
  );
};

export default List;
