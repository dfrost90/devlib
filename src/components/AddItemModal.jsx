import { ref, set } from 'firebase/database';
import { useAuthContext } from '../context/auth_context';
import { useGlobalContext } from '../context/global_context';
import FormRow from './FormRow';
import Modal from './Modal';
import { db } from '../firebase';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const AddItemModalContent = () => {
  const { authUser } = useAuthContext();
  const { closeModal } = useGlobalContext();
  const [item, setItem] = useState({
    libName: '',
    libUrl: '',
    libCategories: '',
    libInfo: '',
    libID: nanoid(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // adding library to user db
    set(ref(db, `storage/${authUser?.uid}/${nanoid()}`), item);

    // adding library to all db
    set(ref(db, `storage/all/${nanoid()}`), item);

    closeModal();
  };

  return (
    <Modal title="Add item">
      <form onSubmit={handleSubmit}>
        <FormRow
          type="text"
          name="itemName"
          id="itemName"
          labelText="Name*"
          value={item.libName}
          handleChange={(e) => setItem({ ...item, libName: e.target.value })}
          placeholder="Enter library name"
          required={true}
        />
        <FormRow
          type="text"
          name="itemUrl"
          id="itemUrl"
          labelText="URL*"
          value={item.libUrl}
          handleChange={(e) => setItem({ ...item, libUrl: e.target.value })}
          placeholder="Enter library url"
          required={true}
        />
        <FormRow
          type="text"
          name="itemCategories"
          id="itemCategories"
          labelText="Categories*"
          value={item.libCategories}
          handleChange={(e) =>
            setItem({ ...item, libCategories: e.target.value })
          }
          required={true}
          placeholder="Enter categories, separated by coma"
        />
        <label className="form-label" htmlFor="itemDescription">
          Description*
        </label>
        <textarea
          className="form-textarea"
          name="itemDescription"
          id="itemDescription"
          value={item.libInfo}
          onChange={(e) => setItem({ ...item, libInfo: e.target.value })}
          required
          placeholder="Enter short description"
        ></textarea>
        <button type="submit" className="btn submit-btn">
          Submit
        </button>
      </form>
    </Modal>
  );
};
export default AddItemModalContent;
