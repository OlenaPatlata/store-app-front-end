import s from './HomeData.module.scss';
import Header from './../Header/Header';
import Subscribe from 'components/Subscribe';

const HomeData = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Subscribe />
    </div>
  );
};

export default HomeData;
