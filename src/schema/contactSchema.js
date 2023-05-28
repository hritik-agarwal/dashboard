import * as yup from 'yup'

const numberRegex = /^[0-9]{10}$/

const contactSchema = yup.object({
  status: yup.string().required('status is required'),
  firstName: yup.string().required('first name is required'),
  lastName: yup.string(),
  number: yup
    .string()
    .matches(numberRegex, {message: 'add correct 10 digit number'})
    .required('number is required'),
})

export default contactSchema
