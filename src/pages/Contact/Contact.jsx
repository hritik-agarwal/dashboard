import {Outlet} from 'react-router-dom'
import styles from './styles/Contact.module.css'

function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.contactsContainer}>
        <Outlet />
      </div>
    </section>
  )
}
export default Contact
