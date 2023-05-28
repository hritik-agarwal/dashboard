import {useDispatch} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'

import {updateContact} from '../../store/contactSlice'
import {ContactForm} from '../../components'

function ContactEdit() {
  const {state} = useLocation()
  const {id, firstName, lastName, number, status} = state
  const INITIAL_VALUE = {firstName, lastName, number, status}

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleUpdate = values => {
    dispatch(updateContact({id, ...values}))
    navigate('/')
  }

  return (
    <ContactForm
      buttonText={'Update Contact'}
      onButtonPress={handleUpdate}
      initialValue={INITIAL_VALUE}
      header={'Update Contact Details'}
    />
  )
}
export default ContactEdit
