import {NavLink} from 'react-router-dom'
import styles from './Sidebar.module.css'
import {IMAGE} from '../../assets'

const getNavStyle = ({isActive}) => {
  return isActive ? styles.active : undefined
}

const NAVBAR = [
  {
    path: 'contact',
    name: 'Contact',
    icon: IMAGE.contactIcon,
  },
  {
    path: 'chart',
    name: 'Chart',
    icon: IMAGE.chartIcon,
  },
]

function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <nav className={styles.sidebarLinkContainer}>
        <div className={styles.header}>Dashboard</div>
        {NAVBAR.map((item, index) => (
          <NavLink key={index} to={item.path} className={getNavStyle}>
            <img alt={item.path} className={styles.icon} src={item.icon} />
            <p>{item.name}</p>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
export default Sidebar
