import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {ContactForm} from '../../components'
import {createContact} from '../../store/contactSlice'

const INITIAL_VALUE = {
  firstName: '',
  lastName: '',
  status: 'active',
  number: '',
}

function ContactCreate() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSave = values => {
    dispatch(createContact({...values}))
    navigate('/')
  }

  return (
    <ContactForm
      buttonText={'Save Contact'}
      onButtonPress={handleSave}
      initialValue={INITIAL_VALUE}
      header={'Create New Contact'}
    />
  )
}
export default ContactCreate
