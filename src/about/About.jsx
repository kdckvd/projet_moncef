import React from 'react'
import PageHeader from '../components/PageHeader'

const subTitle = "À propos de notre marque"; const title = "Services de qualité supérieure et meilleures expériences."; const desc = "Baity.tn facilite la vie aux clients en proposant des produits avec l'un des meilleurs rapports qualité/prix en Tunisie, offrant l'opportunité de paiement par facilité et assurant également un service de livraison couvrant tout le territoire tunisien";

const year = "30+"; const expareance = "Years Of Experiences";

const aboutList = [ { imgUrl: '/src/assets/images/about/icon/01.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Instructeurs qualifiés', desc: 'Baity.tn a créé 42 emplois directes et plus de 500 indirectes, ce qui a permis aux petits artisans de développer leur commerce', },
 { imgUrl: '/src/assets/images/about/icon/02.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Obtenir un certificat', desc: ' Des promotions qui peuvent atteindre jusquà -70% sur 5000 articles variés: meubles, accessoires de décoration électroménager et quincaillerie ', }, { imgUrl: '/src/assets/images/about/icon/03.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Cours en ligne', desc: 'Suite à la pandémie du Covid 19 et grâce à une stratégie dinnovation, Baity.tn est la première Marketplace spécialisée dans l’aménagement en Tunisie', }, ]

const About = () => {
  return (
    <div>
              <PageHeader head=" À propos de notre marque "  cettepage="About"/>
              <div className='about-section style-3 padding-tb section-bg'>
                <div className='container'> 
                <div className='row justify-content-center row-cols-xl-2 row-cols-1 align-items-center'>
                    <div className='col'>
                        <div className='about-left'>
                            <div className='about-thumb'>
                                <img src="/src/assets/images/about/01.jpg" alt="" />
                            </div>
                            <div className='abs-thumb'>
                                <img src="/src/assets/images/about/02.jpg" alt="" />
                            </div>
                            <div className='about-left-content'>
                                <h3> {year} </h3>
                                <p> {expareance} </p>

                            </div>

                        </div>

                    </div>

                    <div className='col'>
                        <div className='about-right'>
                            <div className='section-header'>
                                <span className='subtitle'>
                                    {subTitle}
                                </span>
                                <h2 className='title'> {title} </h2>
                                <p> {desc}</p>
                            </div>
                            <div className='section-wrapper'>
                                <ul className='lab-ul'>
                                    {
                                        aboutList.map((val,i) =>(
                                            <li key={i}>
                                                <div className='sr-left'>
                                                    <img src={val.imgUrl} alt="" />
                                                    </div> 
                                                    <div className='sr-right'>
                                                        <h5> {val.title} </h5>
                                                        <p> {val.desc} </p>

                                                    </div>
                                            
                                            </li>
                                        ))
                                    } 

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

                </div>

              </div>

    </div>
  )
}

export default About