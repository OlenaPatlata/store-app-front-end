import s from './ItemHeader.module.scss';
const ItemHeader = ({ elem, name }) => {
  const [keyName] = Object.keys(elem);
  return <li className={s[name]}>{keyName}</li>;
};

export default ItemHeader;
