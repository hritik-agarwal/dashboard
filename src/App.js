import {Route, Routes} from 'react-router-dom'

import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import {
  Home,
  Chart,
  Contact,
  ContactCreate,
  ContactDisplay,
  ContactEdit,
} from './pages'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Sidebar />
        <section className={styles.contentContainer}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='contact' element={<Contact />}>
              <Route index element={<ContactDisplay />} />
              <Route path='create' element={<ContactCreate />} />
              <Route path='edit' element={<ContactEdit />} />
            </Route>
            <Route path='chart' element={<Chart />} />
          </Routes>
        </section>
      </div>
    </div>
  )
}

export default App
