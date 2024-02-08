import React from 'react';
import { Link } from 'react-router-dom';

const title = "About Baity";
const ItemTitle = "Categories";
const quickTitle = "Informations";
const tweetTitle = "Services";

const addressList = [
  { iconName: 'icofont-google-map', text: 'Manouba, TUNSIA.' },
  { iconName: 'icofont-phone', text: '+216 70 607 800' },
  { iconName: 'icofont-envelope', text: 'contact@baity.tn ' }
];

const socialList = [
  { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook' },
  { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter' },
  { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin' },
  { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram' },
  { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest' }
];

const ItemList = [
  { text: 'Home', link: '/home' },
  { text: 'Shop', link: '/shop' },
  { text: 'Blog', link: '/blog' },
  { text: 'About', link: '/about' },
];

const quickList = [
  { text: 'Condition generale de vente', link: '#' },
  { text: 'Condition d utilisation ', link: '#' },
  { text: 'Nouveux Produits', link: '#' },
  { text: 'Contactez-nous', link: '#' },
 
];

const tweetList = [
  
  { text: ' Livraison', link: '#' },
  { text: 'Service après vente ', link: '#' },
  { text: ' Tendance et styles', link: '#' },
  { text: ' DEVENIR UN VENDEUR', link: '#' },
  { text: ' FACILITE DE PAIEMENT', link: '#' },
  { text: ' BAITY PRIME', link: '#' },


];


const Footer = () => {
  return ( 
    <footer className='style-2'>
        <div className='footer-top dark-view padding-tb'>
        <div className='container'>
            <div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 jusctify-content-center '>
                <div className='col'>
                    <div className='footer-item our-address'>
                        <div className='footer-inner'>
                            <div className='fotter-content'>
                                <div className='title'>
                                    <h4> {title} </h4>
                                </div>
                                <div className='content'>
                                   
                                    <ul className='lab-ul office-address'>
                                        {
                                            addressList.map((val,i) =>(
                                                <li key={i}>
                                                    <i className={val.iconName}> {val.text} </i>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                    <ul className='lab-ul social-icons'>
                                        {
                                            socialList.map((val,i) =>(
                                                <li key={i}>
                                                    <a href='#' className={val.className}>  <i className={val.iconName}> {val.text} </i> </a>
                                                </li>
                                            ) )
                                        }
                                    </ul>

                                </div>


                            </div>

                        </div>
                        
                    </div>

                </div>

                <div className='col'>
                    <div className='footer-item our-address'>
                        <div className='footer-inner'>
                            <div className='fotter-content'>
                                <div className='title'>
                                    <h4> {ItemTitle} </h4>
                                </div>
                                <div className='content'>
                                   
                                    <ul className='lab-ul office-address'>
                                        {
                                            ItemList.map((val,i) =>(
                                                <li key={i}>
                                                    <i className={val.iconName}> {val.text} </i>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                   

                                </div>


                            </div>

                        </div>
                        
                    </div>

                </div>

                <div className='col'>
                    <div className='footer-item our-address'>
                        <div className='footer-inner'>
                            <div className='fotter-content'>
                                <div className='title'>
                                    <h4> {quickTitle} </h4>
                                </div>
                                <div className='content'>
                                   
                                    <ul className='lab-ul office-address'>
                                        {
                                            quickList.map((val,i) =>(
                                                <li key={i}>
                                                    <i className={val.iconName}> {val.text} </i>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                   

                                </div>


                            </div>

                        </div>
                        
                    </div>

                </div>

                <div className='col'>
                    <div className='footer-item our-address'>
                        <div className='footer-inner'>
                            <div className='fotter-content'>
                                <div className='title'>
                                    <h4> {tweetTitle} </h4>
                                </div>
                                <div className='content'>
                                   
                                    <ul className='lab-ul office-address'>
                                        {
                                            tweetList.map((val,i) =>(
                                                <li key={i}>
                                                    <i className={val.iconName}> {val.text} </i>
                                                </li>
                                            ) )
                                        }
                                    </ul>
                                   

                                </div>


                            </div>

                        </div>
                        
                    </div>

                </div>


            </div>

        </div>

        </div>
        <div className='footer-bottom'>
            <div className='container'>
                <div className='section-wrapper'>
                    <p>
                        &copy;2024 <Link to='/'> Baity </Link> Designed by <a href='/' target='_blank'> STOUFA </a>
                    </p>

                </div>
            </div>

        </div>


    </footer>

  );
};

export default Footer;
