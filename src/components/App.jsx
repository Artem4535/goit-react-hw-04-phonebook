import React from "react";
import { nanoid } from "nanoid";
import FormHandler from './PhoneBook/PhoneBook'
import Contacts from './Contacts/Contacts'
import Section from "./Section/Section";
import Filter from "./Filter/Filter";


export class App extends React.Component {
 state = {
  contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
              {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
              {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
              { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
   filter: '',
   a: 5,
 }
  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parseContacts = JSON.parse(contacts)

    if (parseContacts) {
     this.setState({contacts: parseContacts})
   }
  }

  componentDidUpdate(_,prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const stringifyContacts = JSON.stringify(this.state.contacts)
      localStorage.setItem('contacts', stringifyContacts)
    }
  }
  
  handlerSumtit = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }
    const findUser = this.state.contacts.find(({ name }) => name === contact.name)
    
    if (findUser) {
        alert(`${findUser.name} is already in contacts`);
      return;
    }
    
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }

  handlerFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }

  getVisibleContacts() {
    const {filter, contacts} = this.state
    const normalizedFilter = filter.toLocaleLowerCase()
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }
    
  
  render() {
    
    const visibleContacts = this.getVisibleContacts()
  return (
    <>
    <Section>
        <FormHandler onSubmit={this.handlerSumtit} />
    </Section>
      
      <Section>
        <Filter onChange={this.handlerFilter} value={this.state.filter} />
        <Contacts contacts={visibleContacts} title={'Contacts'} deleteContact={this.deleteContact} />
      </Section>
      
    </>
  )
 }
};

