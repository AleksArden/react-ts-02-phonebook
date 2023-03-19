
import { ContactItem } from 'components/ContactItem/ContactItem';
import { IContact } from 'types/contact';

import css from './ContactList.module.css';

interface IProps {
  contacts: IContact[],
  onDelete: (id: string) => void,
}

export const ContactList= ({ contacts, onDelete }:IProps) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <ContactItem
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        </li>
      ))}
    </ul>
  );
};
