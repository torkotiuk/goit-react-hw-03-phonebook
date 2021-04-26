import styles from './ContactList.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  container: {
    width: '350px',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
    border: '1px solid grey',
    borderRadius: '4px',
    padding: '10px',
  },
}));

const ContactList = ({ items, onDeleteContact, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3 className="title">ContactList</h3>
      {children}
      {items.map(contact => (
        <li key={contact.id} className={styles.ContactList__item}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <Button
            variant="contained"
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;
