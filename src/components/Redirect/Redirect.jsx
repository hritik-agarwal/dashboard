import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Redirect({path}) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/contact')
  }, [navigate])

  return <div>Redirect</div>
}
export default Redirect
