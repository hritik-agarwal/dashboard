import {useFormik} from 'formik'
import contactSchema from '../../schema/contactSchema'
import TextInput from '../../components/Textinput/Textinput'
import {createContact} from '../../store/contactSlice'

import styles from './styles/ContactCreate.module.css'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function ContactCreate() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {values, errors, handleBlur, handleChange, touched} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      status: 'active',
      number: '',
    },
    validationSchema: contactSchema,
  })

  const handleSave = () => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      number: values.number,
      status: values.status,
    }
    dispatch(createContact(data))
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>Create New Contact</header>
      <div className={styles.cardContainer}>
        <TextInput
          type='text'
          name='firstName'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          placeholder='Type your first name'
          error={errors.firstName && touched.firstName ? true : false}
          errorMessage={errors.firstName}
        />
        <TextInput
          type='text'
          name='lastName'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          placeholder='Type your last name'
          error={errors.lastName && touched.lastName ? true : false}
          errorMessage={errors.lastName}
        />
        <TextInput
          type='text'
          name='number'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.number}
          placeholder='Type your number'
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
          Save Contact
        </button>
      </div>
    </div>
  )
}
export default ContactCreate
