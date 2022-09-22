import List from 'components/List';
import Media from 'react-media';
import s from './Footer.module.scss';
import { about } from 'assets/const';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Media
        queries={{ small: '(max-width: 1439px', large: '(min-width: 1440px)' }}
      >
        {matches => (
          <>
            {matches.small && <List array={about} name="itemTextFooter" />}
            {matches.large && <p>wsedrfg</p>}
          </>
        )}
      </Media>
    </footer>
  );
};

export default Footer;
