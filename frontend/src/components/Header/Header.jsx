import './Header.css'
import TenYearLogo from '../../assets/TenYearLogo.jpg'
const Header=()=>{
    return(
        <div className='Header-main'>
           
            <span className='Heading'>TT Travels</span> 
            <img src={TenYearLogo} alt="Logo" className='logo'/>
            
        </div>
    )
}

export default Header