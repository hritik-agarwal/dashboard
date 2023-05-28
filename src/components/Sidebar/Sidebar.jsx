
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

function Sidebar() {
  const getNavStyle = (isActive, page) => {
    return isActive ? styles.active : undefined
  }
  return (
    <aside className={styles.sidebarContainer}>
      <nav className={styles.sidebarLinkContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.header}>Dashboard</div>
        </div>
        <NavLink
          to='/contact'
          className={({isActive}) => getNavStyle(isActive, 'Contacts Page')}>
          <img
            className={styles.icon}
            src={require('../../assets/contact.png')}
            alt=''
          />
          Contacts
        </NavLink>
        <NavLink
          to='/chart'
          className={({isActive}) => getNavStyle(isActive, 'Chart Page')}>
          <img
            className={styles.icon}
            src={require('../../assets/chart.png')}
            alt=''
          />
          Chart
        </NavLink>
      </nav>
    </aside>
  )
}
export default Sidebar
