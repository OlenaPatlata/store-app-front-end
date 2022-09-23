import Button from 'components/Button';
import s from './ItemTextFooter.module.scss';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import List from 'components/List';
import Media from 'react-media';

const ItemTextFooter = ({ elem, name }) => {
  const [keyName] = Object.keys(elem);
  const [toShow, SetToShow] = useState(false);
  return (
    <Media
      queries={{ small: '(max-width: 1439px', medium: '(min-width: 1440px)' }}
    >
      {matches => (
        <>
          {matches.small && (
            <li className={s[name]}>
              <div className={s.topWrapper}>
                <div
                  className={s.textWrapper}
                  onClick={() => SetToShow(!toShow)}
                >
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
          )}
          {matches.medium && (
            <li className={s[name]}>
              <div className={s.topWrapper}>
                <div
                  className={s.textWrapper}
                  onClick={() => SetToShow(!toShow)}
                >
                  {keyName}
                </div>
              </div>
              <List array={elem[keyName]} name="itemText" />
            </li>
          )}
        </>
      )}
    </Media>
  );
};

export default ItemTextFooter;
