import {Outlet, Route, Routes} from 'react-router-dom'

import styles from './App.module.css'
import {Redirect, Sidebar} from './components'
import {Error, Chart, ContactEdit, ContactCreate, ContactDisplay} from './pages'

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <section className={styles.contentContainer}>
        <Routes>
          <Route path='/' element={<Redirect path={'/contact'} />} />
          <Route path='chart' element={<Chart />} />
          <Route path='contact' element={<Outlet />}>
            <Route index element={<ContactDisplay />} />
            <Route path='edit' element={<ContactEdit />} />
            <Route path='create' element={<ContactCreate />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
