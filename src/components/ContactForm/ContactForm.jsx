import { Component } from 'react';
import shortid from 'shortid';
import './ContactForm.module.scss';
import Button from '@material-ui/core/Button';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getData(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className="form__input">
          Name:
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number:
          <input
            id={this.numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <div className="btnAdd">
          <Button
            variant="contained"
            type="button"
            className="btn"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            type="submit"
          >
            Add
          </Button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
