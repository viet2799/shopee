import { Link } from 'react-router-dom'
import HeaderRegister from '../../Components/HeaderRegister'
import Footer from '../../Components/Footer'

interface props {
  children: React.ReactNode
}

const RegisterLayout = ({ children }: props) => {
  return (
    <div className='min-h-screen'>
      <HeaderRegister />
      {children}
      <Footer/>
    </div>
  )
}

export default RegisterLayout
