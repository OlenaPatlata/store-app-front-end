import s from './Hero.module.scss';
import Media from 'react-media';
const Hero = () => {
  return (
    <Media
      queries={{ small: '(max-width: 1439px', medium: '(min-width: 1440px)' }}
    >
      {matches => (
        <>
          {matches.small && <section className={s.wrapperMob}></section>}
          {matches.medium && (
            <section className={s.wrapperDesk}>
              <p className={s.text}>Hello! Welcome to Aurora</p>
            </section>
          )}
        </>
      )}
    </Media>
  );
};

export default Hero;
