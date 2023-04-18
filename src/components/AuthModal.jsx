import { useState } from 'react';
import { useGlobalContext } from '../context/global_context';
import Modal from './Modal';
import { useAuthContext } from '../context/auth_context';
import FormRow from './FormRow';

const AuthModalContent = () => {
  const { closeModal } = useGlobalContext();
  const { userSignUp, userSignIn } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormSignUp, setIsFormSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormSignUp) {
      userSignUp(email, password);
    } else {
      userSignIn(email, password);
    }

    closeModal();
  };

  return (
    <Modal title={isFormSignUp ? 'Register' : 'Login'}>
      <form onSubmit={handleSubmit}>
        <FormRow
          type="email"
          name="email"
          value={email}
          placeholder="Your Email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormRow
          type="password"
          name="password"
          value={password}
          placeholder="Your Password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn submit-btn" type="submit">
          Submit
        </button>
      </form>
      <p className="footer-text">
        {isFormSignUp ? 'Already registered?' : 'New user?'}&nbsp;
        <button
          type="button"
          className="btn-text"
          onClick={() => setIsFormSignUp(!isFormSignUp)}
        >
          {isFormSignUp ? 'Login' : 'Register'}
        </button>
      </p>
    </Modal>
  );
};

export default AuthModalContent;
