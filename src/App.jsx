import {
  Navbar,
  List,
  AddItemModal,
  AuthModal,
  RemoveItemModal,
} from './components';
import { useGlobalContext } from './context/global_context';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { modalIsOpen, modal, theme } = useGlobalContext();
  return (
    <main>
      <Navbar />
      <List />

      {/* Modals */}
      {modalIsOpen && modal?.type === 'auth-modal' && <AuthModal />}
      {modalIsOpen && modal?.type === 'add-item-modal' && <AddItemModal />}
      {modalIsOpen && modal?.type === 'remove-item-modal' && (
        <RemoveItemModal />
      )}

      {/* Toast messages */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        pauseOnFocusLoss={false}
        transition={Flip}
        theme={theme === 'dark-theme' ? 'dark' : 'light'}
      />
    </main>
  );
}

export default App;
