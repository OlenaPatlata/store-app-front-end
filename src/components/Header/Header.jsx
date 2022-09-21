import s from './Header.module.scss';
import Button from 'components/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import useToggle from 'hooks/useToggle';
import ModalMenu from 'components/Modals/ModalMenu';
import { categoris } from 'assets/const';

const Header = () => {
  const [menuModal, setMenuModal] = useToggle();
  return (
    <div className={s.wrapper}>
      <Button
        onClick={e => {
          setMenuModal(true);
        }}
        name="menuBtn"
        icon={true}
      >
        <GiHamburgerMenu />
      </Button>
      {menuModal && (
        <ModalMenu
          categoris={categoris}
          open={menuModal}
          onClose={() => {
            setMenuModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Header;
