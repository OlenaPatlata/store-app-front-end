import s from './Header.module.scss';
import Button from 'components/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import useToggle from 'hooks/useToggle';
import ModalMenu from 'components/Modals/ModalMenu';
import { categoris } from 'assets/const';
import Media from 'react-media';
import Logo from 'components/Logo';
import { FiSearch } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import Basket from 'components/Basket';
import { useState } from 'react';
import List from 'components/List';
import { IconContext } from 'react-icons';
import { FaMapMarkerAlt } from 'react-icons/fa';
const Header = () => {
  const [menuModal, setMenuModal] = useToggle();
  const [searchShow, setSearchShow] = useToggle();
  const [fieldValue, setFieldValue] = useState('');
  const onFieldHandleChange = e => {
    setFieldValue(e.target.value);
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    console.log(`Are you looking ${fieldValue}?`);
    setFieldValue('');
  };
  return (
    <>
      <Media
        queries={{ small: '(max-width: 1439px', medium: '(min-width: 1440px)' }}
      >
        {matches => (
          <>
            {matches.small && (
              <header className={s.wrapperHeader}>
                <div
                  className={s.wrapperContainer}
                  style={
                    searchShow
                      ? { backgroundColor: 'white', color: 'black' }
                      : null
                  }
                >
                  <div className={s.wrapperTop}>
                    <div className={s.wrapperBtnMob}>
                      <Button
                        onClick={e => {
                          setMenuModal(true);
                        }}
                        name="menuBtn"
                        icon={true}
                      >
                        <GiHamburgerMenu />
                      </Button>
                      <Button
                        onClick={e => {
                          setSearchShow(true);
                        }}
                        name="menuBtn"
                        icon={true}
                      >
                        {searchShow ? <GrClose /> : <FiSearch />}
                      </Button>
                    </div>
                    <Logo size="smoll" />
                    <Basket />
                  </div>

                  {searchShow && (
                    <div className={s.formWrapperTop}>
                      <form onSubmit={onHandleSubmit} className={s.formWrapper}>
                        <input
                          type="text"
                          name="text"
                          id="text"
                          onChange={onFieldHandleChange}
                          value={fieldValue}
                          className={s.field}
                          placeholder="What are you looking for?"
                        />
                        <Button icon="true" type="submit" name="menuBtn">
                          <FiSearch />
                        </Button>
                      </form>
                    </div>
                  )}
                </div>
              </header>
            )}
            {matches.medium && (
              <header className={s.wrapperHeader}>
                <div className={s.wrapperContainer}>
                  <div className={s.wrapperFirst}>
                    <div className={s.text}>We deliver Worldwide</div>
                    <div className={s.mapWrapper}>
                      <IconContext.Provider
                        value={{
                          className: `${s.mapIconWrapper}`,
                          style: {
                            width: '8px',
                            height: '12px',
                          },
                        }}
                      >
                        <FaMapMarkerAlt />
                      </IconContext.Provider>
                      <span>Our stores</span>
                    </div>
                  </div>
                  <div className={s.wrapperTop}>
                    <Logo size="big" />
                    <form onSubmit={onHandleSubmit} className={s.formWrapper}>
                      <input
                        type="text"
                        name="text"
                        id="text"
                        onChange={onFieldHandleChange}
                        value={fieldValue}
                        className={s.field}
                        placeholder="What are you looking for?"
                      />
                      <Button icon="true" type="submit" name="menuBtn">
                        <FiSearch />
                      </Button>
                    </form>
                    <div className={s.wrapperBasket}>
                      <p className={s.text}>Hi, Angels!</p>
                      <Basket />
                    </div>
                  </div>
                  <div className={s.wrapperBottom}>
                    <List array={categoris} name="itemHeader" key="2" />
                  </div>
                </div>
              </header>
            )}
          </>
        )}
      </Media>
      {menuModal && (
        <ModalMenu
          categoris={categoris}
          open={menuModal}
          onClose={() => {
            setMenuModal(false);
          }}
        />
      )}
    </>
  );
};

export default Header;
