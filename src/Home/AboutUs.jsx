import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const subTitle = "Pourquoi choisir Baity.tn ?";
const title = "DEVENIR UN VENDEUR ";
const desc = "faire des commandes sur n'importe quel appareil avec notre application et apprenez à tout moment ce que vous voulez. Il vous suffit de télécharger, d'installer et de commencer à commander.";
const btnText = "Postulez maintenant.";

const countList = [
{   
iconName: 'icofont-users-alt-4',
count: '12600',
text: 'Marchant Enrolled',
},
{
iconName: 'icofont-graduate-alt',
count: '30',
text: 'Certified Courses',
},
{
iconName: 'icofont-notification',
count: '100',
text: 'Rewards and GitCards',
},
];

const Aboutus = () => {
  return (
    <div className='instructor-section style-2 padding-tb section-bg-ash'>
        <div className='container'>
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3'>
                    <div className='col'>
                        {
                            countList.map((val,i) => (
                                <div key={i} className='count-item'>
                                    <div className='count-inner'>
                                        <div className='count-icon'>
                                            <i className={val.iconName}></i>   
                                        </div>
                                        <div className='count-content'>
                                            <h2>
                                                <span className='count'> <CountUp end={val.count}/> </span>
                                                <span>+</span>
                                            </h2>
                                            <p> {val.text} </p>
                                        </div>
                                    

                                    </div>

                                </div>
                            ))
                        }

                    </div>

                    <div className='col'>
                        <div className='instructor-content'>
                            <span className='subtitle'> {subTitle} </span>
                            <h2 className='title'> {title} </h2>
                            <p> {desc} </p>
                            <Link to="/sing-up" className='lab-btn'> {btnText} </Link>

                        </div>

                    </div>
                    <div className='col'>
                        <div>
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Aboutus