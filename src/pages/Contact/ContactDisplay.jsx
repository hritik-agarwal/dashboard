import {useNavigate} from 'react-router-dom'
import styles from './styles/ContactDisplay.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {deleteContact} from '../../store/contactSlice'

function ContactDisplay() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contact)

  const goToCreateContact = () => {
    navigate('create')
  }

  const handleEditContact = contact => {
    navigate(`edit`, {state: contact})
  }

  const handleDeleteContact = contact => {
    dispatch(deleteContact(contact.id))
  }

  return (
    <>
      {contacts.length === 0 && (
        <div className={styles.displayContactContainer}>
          <img
            className={styles.nodataIcon}
            src={require('../../assets/nodata.png')}
            alt=''
          />
          <div>
            <p>No contact found.</p>
            <p>Please add some content by clicking on Create Contact button.</p>
          </div>
          <button
            onClick={goToCreateContact}
            className={styles.createContactButton}>
            Create Contact
          </button>
        </div>
      )}
      {contacts.length > 0 && (
        <p className={styles.listContactHeader}>List of Contacts</p>
      )}
      {contacts.length > 0 && (
        <button
          onClick={goToCreateContact}
          className={styles.createContactButton}>
          Create Contact
        </button>
      )}
      <section className={styles.contactCardContainer}>
        {contacts.map(contact => (
          <article className={styles.contactCard} key={contact.id}>
            <div className={styles.contactCardDetail}>
              <h1>
                {contact.firstName} {contact.lastName}
              </h1>
              <h6>{contact.number}</h6>
              <h6>({contact.status})</h6>
            </div>
            <button
              onClick={() => handleEditContact(contact)}
              className={styles.editButton}>
              Edit
            </button>
            <button
              onClick={() => handleDeleteContact(contact)}
              className={styles.deleteButton}>
              Delete
            </button>
          </article>
        ))}
      </section>
    </>
  )
}
export default ContactDisplay
