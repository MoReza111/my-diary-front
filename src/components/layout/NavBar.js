import React , {useState} from 'react'

import './NavBar.css'

const NavBar = () => {
    const [search,setSearch] = useState(false)
    return (
        <nav className="nav">
            <div className="logo">
                <a href="/">دفترچه خاطرات من</a>
            </div>
            <div className="saerch">
                {search && <button><i className="fas fa-times"></i></button>}
                <input type="text" name="search" onFocus={ ()=> setSearch(true)} onBlur={()=>setSearch(false)}/>
                <button>{!search ?<i className="fas fa-search"></i> : <i className="fas fa-arrow-left"></i> }</button> 
            </div>
        </nav>
    )
}

export default NavBar
