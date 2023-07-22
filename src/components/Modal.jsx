import { TfiClose } from 'react-icons/tfi';
import styled from 'styled-components';
import { useGlobalContext } from '../context/global_context';

const Modal = ({ children, title }) => {
  const { closeModal } = useGlobalContext();

  return (
    <Wrapper
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="modal-container">
        <button type="button" className="btn close-btn" onClick={closeModal}>
          <TfiClose />
        </button>
        {title && (
          <header>
            <h2>{title}</h2>
          </header>
        )}
        <div className="modal-content">{children}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-modal-overlay);
  bottom: 0;
  left: 0;
  padding: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  /* visibility: hidden; */
  /* opacity: 0; */
  transition: all 0.3s;

  .modal-container {
    background-color: var(--clr-modal-background);
    color: var(--clr-modal-text);
    left: 50%;
    padding: 2rem;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    width: 400px;
    max-width: 90%;
  }

  header {
    padding-right: 5rem;
  }

  p {
    color: var(--clr-modal-text);
  }

  .close-btn {
    background: transparent;
    color: var(--clr-modal-text);
    padding: 1rem;
    position: absolute;
    top: 0;
    right: 0;
  }

  .footer-text {
    margin: 2rem 0 0;
    text-align: center;
  }
`;

export default Modal;
