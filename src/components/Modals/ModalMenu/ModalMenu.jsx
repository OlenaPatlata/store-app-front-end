import s from './ModalMenu.module.scss';
import ModalWrapper from './../../ModalWrapper/ModalWrapper';
import List from 'components/List';
import Logo from 'components/Logo';
import Button from 'components/Button';
import { GrClose } from 'react-icons/gr';

const ModalMenu = ({ categoris, open, onClose }) => {
  return (
    <ModalWrapper open={open} onClose={onClose}>
      <div className={s.wrapper}>
        <div className={s.leftWrapper}>
          <div className={s.topWrapper}>
            <Button
              onClick={onClose}
              icon={true}
              name="closeBtn"
              style={{ width: '16px', height: '16px' }}
            >
              <GrClose />
            </Button>
            <Logo size="smoll" color="black" />
          </div>

          <List array={categoris} name="itemTextWithBtn" key="1" />
        </div>
        <div className={s.rightWrapper}></div>
      </div>
    </ModalWrapper>
  );
};

export default ModalMenu;
