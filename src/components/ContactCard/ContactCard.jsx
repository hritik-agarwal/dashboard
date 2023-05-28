import styles from './ContactCard.module.css'

function ContactCard({contact, handleEditContact, handleDeleteContact}) {
  return (
    <article className={styles.contactCard} key={contact.id}>
      <div className={styles.contactCardDetail}>
        <h1 className={styles.name}  >
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
  )
}
export default ContactCard
