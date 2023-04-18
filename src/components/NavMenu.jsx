import styled from 'styled-components';
import { FiUser, FiPlusSquare, FiSun, FiMoon } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';
import { useGlobalContext } from '../context/global_context';
import { useAuthContext } from '../context/auth_context';

const NavMenu = () => {
  const { theme, toggleTheme, openModal } = useGlobalContext();

  const { authUser, userSignOut } = useAuthContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button type="button" className="btn menu-btn" onClick={toggleTheme}>
          {theme === 'light-theme' ? <FiMoon /> : <FiSun />}
        </button>

        {authUser ? (
          <>
            <button
              type="button"
              className="btn menu-btn"
              onClick={() => openModal('add-item-modal')}
            >
              <FiPlusSquare />
            </button>

            <button
              type="button"
              className="btn menu-btn"
              onClick={userSignOut}
            >
              <AiOutlineLogout />
            </button>
          </>
        ) : (
          <button
            type="button"
            className="btn menu-btn"
            onClick={() => openModal('auth-modal')}
          >
            <FiUser />
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid var(--clr-border-color);
  border-width: 0 1px 0 0;

  .menu-btn {
    background: none;
    color: var(--clr-primary-8);
    font-size: 1.5rem;
  }

  .menu-btn:hover {
    color: var(--clr-primary-5);
  }

  .profile-image {
    margin-right: 0.25rem;
    width: 1.5rem;
  }
`;

export default NavMenu;
