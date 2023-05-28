import {useFormik} from 'formik'

import {IMAGE} from '../../assets'
import styles from './ContactForm.module.css'
import TextInput from '../Textinput/Textinput'
import contactSchema from '../../schema/contactSchema'

function ContactForm({initialValue, header, buttonText, onButtonPress}) {
  const {values, errors, touched, handleBlur, handleChange} = useFormik({
    initialValues: initialValue,
    validationSchema: contactSchema,
  })

  const handleButtonPress = () => onButtonPress(values)

  return (
    <div className={styles.container}>
      <header className={styles.header}>{header}</header>
      <div className={styles.cardContainer}>
        <img src={IMAGE.addContact} alt='' className={styles.illustration} />
        {Object.keys(values).map(field => {
          if (field === 'status') return null
          return (
            <TextInput
              name={field}
              onBlur={handleBlur}
              value={values[field]}
              onChange={handleChange}
              errorMessage={errors[field]}
              placeholder={`Type your ${field}`}
              error={errors[field] && touched[field] ? true : false}
            />
          )
        })}
        <select
          name='status'
          onBlur={handleBlur}
          value={values.status}
          onChange={handleChange}
          className={styles.statusContainer}>
          <option value='active'>Active</option>
          <option value='inActive'>In Active</option>
        </select>
        <button
          onClick={handleButtonPress}
          className={styles.saveContactButton}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}
export default ContactForm
