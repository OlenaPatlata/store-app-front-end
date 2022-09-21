import s from './Logo.module.scss';
const Logo = ({ size, color }) => {
  return (
    <div className={s[color]}>
      <span className={s[size]}>Aurora</span>
    </div>
  );
};

export default Logo;
