import { useGlobalContext } from '../context/global_context';
import FormRow from './FormRow';
import Modal from './Modal';

const AddItemModalContent = () => {
  const { closeAddModal } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal title="Add item" closeModal={closeAddModal}>
      <form onSubmit={handleSubmit}>
        <FormRow
          type="text"
          name="itemName"
          id="itemName"
          labelText="Name"
          placeholder="Enter library name"
        />
        <FormRow
          type="text"
          name="itemUrl"
          id="itemUrl"
          labelText="URL"
          placeholder="Enter library url"
        />
        <FormRow
          type="text"
          name="itemCategories"
          id="itemCategories"
          labelText="Categories"
          placeholder="Enter categories, separated by coma"
        />
        <label className="form-label" htmlFor="itemDescription">
          Description
        </label>
        <textarea
          className="form-textarea"
          name="itemDescription"
          id="itemDescription"
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
