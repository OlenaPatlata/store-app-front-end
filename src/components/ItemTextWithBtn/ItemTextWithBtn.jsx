import Button from 'components/Button';
import s from './ItemTextWithBtn.module.scss';
import { BsChevronRight } from 'react-icons/bs';

const ItemTextWithBtn = ({ elem, name }) => {
  const [keyName] = Object.keys(elem);
  return (
    <li className={s[name]}>
      <div className={s.textWrapper} onClick={e => console.log(e)}>
        {keyName}
      </div>
      <Button
        name="chevronBtn"
        icon={true}
        onClick={e => console.log(e)}
        style={{ width: '12px', height: '12px' }}
      >
        <BsChevronRight />
      </Button>
    </li>
  );
};

export default ItemTextWithBtn;
