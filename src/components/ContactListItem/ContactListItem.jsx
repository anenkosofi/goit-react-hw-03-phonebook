import PropTypes from 'prop-types';
import { HiOutlinePhone, HiOutlineUserCircle } from 'react-icons/hi';
import { Contact, ContactWrapper, Button } from './ContactListItem.styled';

export function ContactListItem({ contact: { name, number }, deleteContact }) {
  return (
    <Contact>
      <ContactWrapper>
        <p>
          <HiOutlineUserCircle size={20} />
          <span>{name}</span>
        </p>
        <p>
          <HiOutlinePhone size={20} />
          <span>{number}</span>
        </p>
      </ContactWrapper>
      <Button type="button" onClick={deleteContact}>
        Delete
      </Button>
    </Contact>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
