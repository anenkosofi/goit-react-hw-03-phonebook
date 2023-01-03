import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem';
import { Contacts } from './ContactList.styled';
import { Notification } from 'components/Notification';

export function ContactList({ contacts, deleteContact }) {
  return (
    <Contacts>
      {contacts.length ? (
        contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={() => deleteContact(contact.id)}
          />
        ))
      ) : (
        <Notification />
      )}
    </Contacts>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
