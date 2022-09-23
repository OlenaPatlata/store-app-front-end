import List from 'components/List';
import s from './Footer.module.scss';
import { about, socialIcons } from 'assets/const';
import Media from 'react-media';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <List array={about} name="itemTextFooter" />

      <Media
        queries={{ small: '(max-width: 1439px', medium: '(min-width: 1440px)' }}
      >
        {matches => (
          <>
            {matches.small && (
              <List array={socialIcons[0].Social} name="itemSocial" />
            )}
            {matches.medium && (
              <div>
                <div className={s.title}>Social</div>
                <List array={socialIcons[0].Social} name="itemSocial" />
              </div>
            )}
          </>
        )}
      </Media>

      <div className={s.copyright}>
        © Copyright, AELTC 2019. All Rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
