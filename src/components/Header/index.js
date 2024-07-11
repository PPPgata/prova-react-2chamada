import { Link } from "react-router-dom";
import "./style.css"

const Header = ()=>{
    return(
        <header>
            <nav className='nav-bar'>
                <div className='logo'>
                    <h1>MyFinance</h1>
                </div>
                <div className='nav-list'>
                    <ul>
                    <Link to="/"><li className='nav-item'><p className='nav-link'>home</p></li></Link>
                    <Link to="/lancamentos"><li className='nav-item'><p className='nav-link'>lançamentos</p></li></Link>
                    </ul>
                </div>
            </nav>
      </header>
    )
}

export default Header;