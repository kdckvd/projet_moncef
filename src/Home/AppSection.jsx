import React from 'react'
import { Link } from 'react-router-dom';
const btnText="Inscrivez-vous gratuitement";
const title= "Achetez à tout moment, n'importe où.";
const desc="faire des commandes sur n'importe quel appareil avec notre application et apprenez à tout moment ce que vous voulez. Il vous suffit de télécharger, d'installer et de commencer à commander."

;



const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <Link to='/sing-up' className='lab-btn mb-4'> {btnText}</Link>
                <h2 className='title'> {title} </h2>
                <p> {desc} </p>

            </div>

            <div className='section-wrapper'>
                <ul className='lab-ul'>
                    <li> <a    href='https://play.google.com/store/apps/details?id=com.baity.tn.android&pli=1'> <img src="/src/assets/images/app/01.jpg" alt="" /> </a> </li>
                    <li> <a href='#'> <img src="/src/assets/images/app/02.jpg" alt="" /> </a> </li>


                </ul>

            </div>




        </div>

    </div>
  )
}

export default AppSection