import { useGlobalContext } from '../context/global_context';
import Modal from './Modal';
import styled from 'styled-components';

const RemoveItemModal = () => {
  const { closeModal } = useGlobalContext();

  const handleConfirm = () => {
    console.log('remove item log');

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
