import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './PhoneBook.module.css';

export function FormHandler({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handlerSumbit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handlerSumbit} className={css.form}>
      <ul className={css.list}>
        <li className={css.item}>
          <label>
            Name:
            <input
              value={name}
              onChange={onChangeHandler}
              name="name"
              type="text"
            ></input>
          </label>
        </li>
        <li className={css.item}>
          <label>
            Number:
            <input
              value={number}
              name="number"
              onChange={onChangeHandler}
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></input>
          </label>
        </li>
      </ul>
      <button className={css.btn} type="submit">
        Add to Contacts
      </button>
    </form>
  );
}

// class FormHandler extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   onChangeHandler = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handlerSumbit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handlerSumbit} className={css.form}>
//         <ul className={css.list}>
//           <li className={css.item}>
//             <label>
//               Name:
//               <input
//                 value={this.state.name}
//                 onChange={this.onChangeHandler}
//                 name="name"
//                 type="text"
//               ></input>
//             </label>
//           </li>
//           <li className={css.item}>
//             <label>
//               Number:
//               <input
//                 value={this.state.number}
//                 name="number"
//                 onChange={this.onChangeHandler}
//                 type="tel"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//               ></input>
//             </label>
//           </li>
//         </ul>
//         <button className={css.btn} type="submit">
//           Add to Contacts
//         </button>
//       </form>
//     );
//   }
// }

FormHandler.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormHandler;
