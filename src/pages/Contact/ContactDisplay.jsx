import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {IMAGE} from '../../assets'
import {ContactCard} from '../../components/'
import {deleteContact} from '../../store/contactSlice'
import styles from './styles/ContactDisplay.module.css'

function ContactDisplay() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contact)

  const goToCreateContact = () => navigate('create')
  const handleEditContact = contact => navigate(`edit`, {state: contact})
  const handleDeleteContact = contact => dispatch(deleteContact(contact.id))

  const createButton = (
    <button onClick={goToCreateContact} className={styles.createContactButton}>
      Create Contact
    </button>
  )

  const noContact = (
    <div className={styles.displayContactContainer}>
      <img className={styles.nodataIcon} src={IMAGE.noData} alt='' />
      <div>
        <p>No contact found.</p>
        <p>Please add some content by clicking on Create Contact button.</p>
      </div>
      {createButton}
    </div>
  )

  const withContact = (
    <>
      <p className={styles.listContactHeader}>List of Contacts</p>
      {createButton}
      <section className={styles.contactCardContainer}>
        {contacts.map(contact => (
          <ContactCard
            contact={contact}
            handleEditContact={handleEditContact}
            handleDeleteContact={handleDeleteContact}
          />
        ))}
      </section>
    </>
  )

  return <>{contacts.length === 0 ? noContact : withContact}</>
}
export default ContactDisplay
