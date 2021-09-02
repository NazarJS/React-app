import React from 'react'

function Header (prop)  {
    return (
        <div className = 'Header'>
            <div className = 'Header__inner__news'>
                <span className = 'Header__news'>news</span>
            </div>
            <div className = 'Header__inner__portal'>
                 <span className = 'Header__inner__portal__span'>portal</span>
                 <div className='Header__login'></div>
            </div>
        </div>
    )
}
    


export default Header