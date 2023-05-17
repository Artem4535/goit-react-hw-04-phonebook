import PropTypes from 'prop-types';
import css from './Contacts.module.css'
export default function Contacts ({contacts, deleteContact}) {
    return(
        <>

         <ul className={css.list}>
          {contacts.map(({name, number, id}) => <li key={id} className={css.item}>
            <p>{name}: {number}</p>
            <button onClick={() => deleteContact(id)} type="button">Delete</button>
          </li>)}
         </ul>
        </>
        
    )
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};