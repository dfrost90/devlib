import { ref, remove } from 'firebase/database';
import { useGlobalContext } from '../context/global_context';
import Modal from './Modal';
import styled from 'styled-components';
import { useAuthContext } from '../context/auth_context';
import { db } from '../firebase';

const RemoveItemModal = () => {
  const { closeModal, modal } = useGlobalContext();
  const { authUser } = useAuthContext();

  const handleConfirm = () => {
    remove(ref(db, `storage/${authUser?.uid}/${modal?.context}`));

    closeModal();
  };

  return (
    <Modal title="Remove item?">
      <BtnContainer>
        <button type="button" className="btn" onClick={handleConfirm}>
          Confirm
        </button>
        <button type="button" className="btn cancel-btn" onClick={closeModal}>
          Dismiss
        </button>
      </BtnContainer>
    </Modal>
  );
};

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  .btn {
    width: 100%;
  }

  .cancel-btn {
    background-color: transparent;
    border: 1px solid var(--clr-primary-5);
  }
`;

export default RemoveItemModal;
