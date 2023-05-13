
import { Link } from "react-router-dom"

const Main=()=>{
    return (
        <div className="mainContainer">
            <h1>Kitap Dünyasına Hoş Geldiniz</h1>
            <Link to={'/books'}>Kitaplara Göz Atmak İçin Lütfen Tıklayınız</Link>            
        </div>
    )
}
export default Main