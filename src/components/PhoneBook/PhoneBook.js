import React from 'react';
import PropTypes from 'prop-types';
import css from './PhoneBook.module.css';
class FormHandler extends React.Component {
  state = {
   name: '',
   number: ''
  };

onChangeHandler = event => {
  const { name, value } = event.currentTarget
  this.setState({[name]: value})
}
  
handlerSumbit = e => {
  e.preventDefault()
  this.props.onSubmit(this.state)
  this.reset()

}
  
  reset = () => {
    this.setState({ name: '', number: ''})
  }

  render() {
    return (
      <form onSubmit={this.handlerSumbit} className={css.form}>
        <ul className={css.list}>
          <li className={css.item}>
            <label>
              Name:
              <input value={this.state.name}  onChange={this.onChangeHandler} name='name' type="text"></input>
            </label>
          </li>
          <li className={css.item}> 
            <label>
              Number:
              <input value={this.state.number}  name='number' onChange={this.onChangeHandler} type="tel" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required></input>
            </label>
          </li>
        </ul>
        <button className={css.btn} type="submit">Add to Contacts</button>
      </form>
    );
  }
}

FormHandler.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormHandler;
