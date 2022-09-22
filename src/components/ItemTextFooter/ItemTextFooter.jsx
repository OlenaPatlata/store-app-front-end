import Button from 'components/Button';
import s from './ItemTextFooter.module.scss';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import List from 'components/List';

const ItemTextFooter = ({ elem, name }) => {
  const [keyName] = Object.keys(elem);
  const [toShow, SetToShow] = useState(false);
  return (
    <li className={s[name]} key={keyName}>
      <div>
        <div className={s.textWrapper} onClick={e => console.log(e)}>
          {keyName}
        </div>
        <Button
          name="chevronBtn"
          icon={true}
          onClick={() => SetToShow(!toShow)}
          style={{ width: '12px', height: '12px' }}
        >
          {toShow ? <BsChevronDown /> : <BsChevronRight />}
        </Button>
      </div>
      {toShow && <List array={elem[keyName]} name="itemText" />}
    </li>
  );
};

export default ItemTextFooter;
