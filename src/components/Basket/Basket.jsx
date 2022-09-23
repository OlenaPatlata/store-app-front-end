import s from './Basket.module.scss';
import { IconContext } from 'react-icons';
import { MdOutlineShoppingBag } from 'react-icons/md';
const Basket = () => {
  return (
    <div className={s.wrapper}>
      <IconContext.Provider
        value={{
          className: `${s.basketWrapper}`,
          style: {
            width: '16px',
            height: '24px',
          },
        }}
      >
        <MdOutlineShoppingBag />
      </IconContext.Provider>
      <div className={s.amountWrapper}>
        <span className={s.amount}>99</span>
      </div>
    </div>
  );
};

export default Basket;
