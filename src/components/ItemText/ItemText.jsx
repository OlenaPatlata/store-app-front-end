import s from './ItemText.module.scss';

const ItemText = ({ elem, name }) => {
  return (
    <li className={s[name]}>
      <div className={s.textWrapper}>{elem.name}</div>
    </li>
  );
};

export default ItemText;
