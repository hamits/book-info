
import { NavLink,useNavigate } from "react-router-dom"

const Header=()=>{
    const navigate=useNavigate()
    return(
        <header className="headerContainer">
            <h1 onClick={()=>navigate('/')}>Kitap Dünyası</h1>
            <div className="headerLink">
                <NavLink to={'/'}>Anasayfa</NavLink>
                <NavLink to={'/books'}>Kitaplar</NavLink>
            </div>
        </header>
    )
}

export default Header