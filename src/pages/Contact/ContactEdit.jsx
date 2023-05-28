import {useFormik} from 'formik'
import contactSchema from '../../schema/contactSchema'
import TextInput from '../../components/Textinput/Textinput'
import {updateContact} from '../../store/contactSlice'

import styles from './styles/ContactEdit.module.css'
import {useDispatch} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'

function ContactEdit() {
  const {state} = useLocation()
  const {id, firstName, lastName, number, status} = state

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {values, errors, handleBlur, handleChange, touched} = useFormik({
    initialValues: {
      firstName,
      lastName,
      status,
      number,
    },
    validationSchema: contactSchema,
  })

  const handleSave = () => {
    const data = {
      id,
      firstName: values.firstName,
      lastName: values.lastName,
      number: values.number,
      status: values.status,
    }
    dispatch(updateContact(data))
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>Update Contact</header>
      <div className={styles.cardContainer}>
        <TextInput
          type='text'
          name='firstName'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          error={errors.firstName && touched.firstName ? true : false}
          errorMessage={errors.firstName}
        />
        <TextInput
          type='text'
          name='lastName'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          error={errors.lastName && touched.lastName ? true : false}
          errorMessage={errors.lastName}
        />
        <TextInput
          type='text'
          name='number'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.number}
          error={errors.number && touched.number ? true : false}
          errorMessage={errors.number}
        />
        <select
          name='status'
          className={styles.statusContainer}
          onChange={handleChange}
          value={values.status}
          onBlur={handleBlur}>
          <option value='active'>Active</option>
          <option value='inActive'>In Active</option>
        </select>
        <button onClick={handleSave} className={styles.saveContactButton}>
          Update Contact
        </button>
      </div>
    </div>
  )
}
export default ContactEdit
