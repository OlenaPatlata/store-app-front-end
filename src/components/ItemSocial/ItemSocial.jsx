import { BsInstagram, BsTwitter, BsSnapchat, BsYoutube } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import Button from 'components/Button';
import Media from 'react-media';
import s from './ItemSocial.module.scss';
const ItemSocial = ({ elem, name }) => {
  const [keyName] = Object.keys(elem);
  const handleClick = () => console.log('Link to social media');

  return (
    <Media
      queries={{ small: '(max-width: 1439px', medium: '(min-width: 1440px)' }}
    >
      {matches => (
        <>
          {matches.small && (
            <li className={s[name]}>
              <Button
                icon={true}
                onClick={handleClick}
                name={name}
                style={{ width: '19px', height: '19px' }}
              >
                {elem[keyName] === 'BsInstagram' && <BsInstagram />}
                {elem[keyName] === 'BsTwitter' && <BsTwitter />}
                {elem[keyName] === 'BsSnapchat' && <BsSnapchat />}
                {elem[keyName] === 'ImFacebook' && <ImFacebook />}
                {elem[keyName] === 'BsYoutube' && <BsYoutube />}
              </Button>
            </li>
          )}
          {matches.medium && (
            <li className={s[name]}>
              <Button
                icon={true}
                onClick={handleClick}
                name={name}
                style={{ width: '16px', height: '16px' }}
              >
                {elem[keyName] === 'BsInstagram' && <BsInstagram />}
                {elem[keyName] === 'BsTwitter' && <BsTwitter />}
                {elem[keyName] === 'BsSnapchat' && <BsSnapchat />}
                {elem[keyName] === 'ImFacebook' && <ImFacebook />}
                {elem[keyName] === 'BsYoutube' && <BsYoutube />}
              </Button>
            </li>
          )}
        </>
      )}
    </Media>
  );
};

export default ItemSocial;
