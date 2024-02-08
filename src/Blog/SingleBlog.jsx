import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import NosPack from '../shop/NosPack';
const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];




const SingleBlog = () => {
    const [blog,setBlog]=useState(blogList);
    const {id} =useParams()
    const result=blog.filter((b) =>b.id===Number(id));
    console.log(result[0])
  return (
    <div>
      <PageHeader head=" Single Blog Pages"  cettepage="Blog/ Blog Details"/>
      <div className='blog-section blog-single padding-tb section-bg'>
        <div className='conatiner'>
            <div className='row justify-content-center'>
                <div className='col-lg-8 col-12'> 
                <article >
                    <div className='section-wrapper'>
                        <div className='row row-cols-1 justify-content-center g-4'>
                            <div className='col'>
                                <div className='post-item style-2'>
                                    <div className='post-inner'>
                                        {
                                            result.map((item) =>(
                                                <div key={item.id}>
                                                    <div className='post-thumb'>
                                                       <p> <img src="https://www.entreprises-magazine.com/wp-content/uploads/2021/06/DSC4876-1068x732.jpg" alt="" className='w-100' width='80' /></p>
                                                    </div>
                                                    <div className='post-content'>
                                                        <h3> {item.title} </h3>
                                                        <div className='meta-post'>
                                                   
                                                        <ul className='lab-ul'>
                                                            {
                                                              item.metaList.map((val,i) =>(
                                                              <li key={i}> <i className={val.iconName }/> {val.text} </li>
                                                                      ))
                                                                       }

                                                                      </ul>

                                                                  </div>
                                                                  <p> <b>La Starup Baity.tn,</b> leader de e-commerce, s'est spécialisée dans la vente en ligne des meubles et de tous les articles de décoration.

                                                                      Baity.tn a créé 42 emplois directes et plus de 500 indirectes, ce qui a permis aux petits artisans de développer leur commerce.

                                                                      Suite à la pandémie du Covid 19 et grâce à une stratégie d'innovation, Baity.tn est la première Marketplace spécialisée dans l’aménagement en Tunisie.

                                                                      <br /> <b>La marketplace Baity.tn </b>offre des solutions qui s'adaptent aux besoins du client dans l'ameublement et l'aménagement de sa maison, proposant une large gamme de produits répondant à tous les besoins de sa clientèle </p>
                                                                      <blockquote>
                                                                        <p>
                                                                        fondateur et CEO de Baity.tn a rapporté qu'il ne s'agit pas simplement d'une plateforme de vente, en effet elle apprend aux vendeurs la transformation de leur commerce en numérique et aide ainsi à l'inclusion financière.
                                                                        </p>
                                                                        <cite>
                                                                        <a href="#"> ...Mr Saber Gharsellaoui </a>
                                                                      </cite>
                                                                      </blockquote>
                                                                      <p> <b>Je suis Saber Gharsellaoui </b>, maîtrisard en sciences informatiques de la faculté des sciences de Tunis et doué pour la programmation. J'ai commencé ma carrière comme professeur d'informatique depuis 2006 et étant donné que j'étais doué dans le domaine du développement informatique, j'ai réalisé en parallèle plusieurs projets web à la suite desquels j'ai obtenu un master professionnel en BI Business intelligence.
                                                                          Ensuite, j'ai occupé le poste d'un responsable de développement de plateforme en 2014 et 2015 dans une société d'e-commerce et depuis 2017, j'ai lancé ma propre boîte : baity.tn.</p>
                                                                          <img src="https://www.entreprises-magazine.com/wp-content/uploads/2021/06/baity-696x385.gif" alt="" />
                                                                          <p>J'étais toujours passionné par les nouvelles technologies et l'innovation. L'idée de créer ma propre boîte dans le domaine des TIC était présente depuis que j'étais étudiant.
                                                                           En 2017, j'ai détecté que les Tunisiens ont commencé à s'habituer à l'e-commerce. Cependant, le marché manquait d'un site spécialisé dans le meuble et les accessoires de la maison. Ces achats sont certes des achats réfléchis, mais les clients se trouvent dans l'obligation de se déplacer et de visiter plusieurs Showrooms avant de se décider, chose qui est coûteuse et n'est pas disponible pour les habitants des zones rurales. Ainsi, j'ai décidé de lancer Baity.tn afin de répondre à ces besoins.
                                                                            Aujourd'hui, je suis fier que Baity.tn soit l'une des startups 100% tunisiennes les plus performantes qui génère 42 emplois directs et 300 emplois indirects.
                                                                            Par ailleurs, nous tenons à remercier l'équipe de Smart capital pour le travail fourni pour aider les startups tunisiennes.</p>
                                                                            <img src="https://www.entreprises-magazine.com/wp-content/uploads/2021/06/DSC4843-3-1068x668.jpg" alt="" />
                                                                            <p>Dès son lancement baity.tn a eu recours à des compétences 100% tunisiennes dont la moyenne d'âge est inférieure à 30 ans. En effet et malgré les difficultés du démarrage, j'ai cru au projet et j'ai résisté jusqu'au bout pour cueillir les fruits de la réussite.
                                                                               Un autre facteur majeur de cette croissance est l'innovation et l'intégration des nouvelles technologies dans chaque maillon de la chaîne.
                                                                               Nous avons présenté aux clients des services inédits tels que le choix sur mesure en ligne ;
                                                                               Baity.tn possède sa propre flotte logistique spécialisée par des techniciens qui offrent un service complet avec des livraisons sur toute la Tunisie.</p>
                                                                               <div className='tags-section'>
                                                                                <ul className='tags lab-ul'>
                                                                                  <li>
                                                                                    <a href="#"> Agency </a>
                                                                                  </li> <li>
                                                                                    <a href="#"> Business </a>
                                                                                  </li> <li>
                                                                                    <a href="#"> Personal </a>
                                                                                  </li>

                                                                                </ul>
                                                                                <ul className='lab-ul social-icons'>
                                                                                  {
                                                                                    socialList.map((val,i) =>(
                                                                                      <li key={i}>
                                                                                        <a href="#" className={val.className}>
                                                                                          <i className={val.iconName}></i>
                                                                                        </a>

                                                                                      </li>
                                                                                    ))

                                                                                  }
                                                                                </ul>

                                                                               </div>

                                                                     

                                                                  </div>



                                                                  </div>
                                            ))
                                        }

                                    </div>

                                </div>
                                <div className='navigations-part'>
                                  <div className='left'>
                                    <a href="#" className='prev'>
                                      <i className='icofont-double-left'></i> Previous Blog 
                                    </a>
                                    <a href="#" className='title'>
                                       le blog precedent
                                    </a>
                                    </div>

                                    <div className='right'>
                                    <a href="#" className='prev'>
                                      <i className='icofont-double-right'></i> Previous Blog 
                                    </a>
                                    <a href="#" className='title'>
                                       le blog suivant
                                    </a>
                                    </div>
                                  </div>
                                  
                                  
                                
                                

                            </div>

                        </div>

                    </div>

                </article>
                
                
                
                  </div>
                <div className='col-lg-4 col-12'> 
                <NosPack/>

                
                
                  </div>


                

            </div>

        </div>

      </div>

    </div>
  )
}

export default SingleBlog