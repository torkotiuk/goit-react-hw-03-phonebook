import React, { Component } from 'react';
import shortid from 'shortid';
import Section from './components/share/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const contactsString = localStorage.getItem('conts');
    const contactsArray = JSON.parse(contactsString);

    if (contactsArray) {
      this.setState({ contacts: contactsArray });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      // console.log('contacts was updated');
      localStorage.setItem('conts', JSON.stringify(this.state.contacts));
    }

    if (
      this.state.contacts.length > prevState.contacts.length &&
      prevState.contacts.length !== 0
    ) {
      this.toggleModal();
    }
  }

  getDataFromContactForm = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const normalizedThisFilterState = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedThisFilterState),
    );

    return (
      <Section>
        {/* Modal */}
        <IconButton onClick={this.toggleModal} arial-label="Add contact">
          <h2>Create contact</h2>
          <AddIcon width="40" height="40" fill="green" />
        </IconButton>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h2 className="title_form">Create new contact</h2>
            {/* <button type="button_x" onClick={this.toggleModal}>
            </button> */}
            <ContactForm getData={this.getDataFromContactForm} />
          </Modal>
        )}
        {/* End Modal */}

        <ContactList
          items={visibleContacts}
          onDeleteContact={this.deleteContact}
        >
          {/* {visibleContacts.length > 0 && (
            <Filter
              valueState={this.state.filter}
              filterByName={this.changeFilter}
            />
          )} */}

          <Filter
            valueState={this.state.filter}
            filterByName={this.changeFilter}
          />
        </ContactList>
      </Section>
    );
  }
}
export default App;
