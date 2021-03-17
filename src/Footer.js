import React from 'react';
import './Footer.css';
import MultiplicaTalent from './images/multiplicaTalentLogo.png'

const Footer = () => {
    return (
        <footer>
            <p>Powered by</p>
            <img src={MultiplicaTalent} alt=""/>
            <p>and created by Alejandro Sanchez</p>
        </footer>
    )
}

export default Footer
