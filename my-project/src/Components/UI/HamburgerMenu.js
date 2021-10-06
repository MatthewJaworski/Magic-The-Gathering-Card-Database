import React from 'react'
import Button from './Button'

const HamburgerMenu = () => {
    
    return (
        <div className=" py-4 border-t hamburgermenu flex justify-center min-w-full bg-gray-700">
          <Button text="advanced" />
          <Button text="make deck"/>
          <Button text="about"/>
        </div>
    )
}

export default HamburgerMenu
