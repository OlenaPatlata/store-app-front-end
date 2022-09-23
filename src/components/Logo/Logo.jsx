import s from './Logo.module.scss';
const Logo = ({ size }) => {
  return (
    <div className={s[size]}>
      <span className={s.logoText}>Aurora</span>
    </div>
  );
};

export default Logo;
