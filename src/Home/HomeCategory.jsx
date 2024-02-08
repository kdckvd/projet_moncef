import React from 'react'
import { Link } from 'react-router-dom';

const subTitle = "Choisissez n'importe quels produits.";
const title = "Achetez tout avec nous.";
const btnText ="Commencez maintenant.";

const categoryList = [
{
imgUrl: 'src/assets/images/category/01.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Canapé d angle Sandra',
},
{
imgUrl: 'src/assets/images/category/02.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Meuble TV Ostral',
},
{
imgUrl: 'src/assets/images/category/03.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Chambre à coucher Aline',
},
{
imgUrl: 'src/assets/images/category/04.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Lit Salima',
},
{
imgUrl: 'src/assets/images/category/05.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Buffet De Cuisine',
},
{
imgUrl: 'src/assets/images/category/06.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Dressing BMD004',
},
]
const HomeCategory = () => {
  return (
    <div className='category-section style-4 padding-tb'>
    <div className='container'>
    
        <div className='section-header text-center  '>
        <span className='subtitle'> {subTitle} </span>
        <h2 className='tiltle'> {title}</h2>
        </div>
        
        <div className='section-wrapper'>
            <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                {
                    categoryList.map((val,i) =>(<div key={i}>
                        <Link to="/shop" className='category-item' >
                            <div className='category-inner'>
                                <div className='category-thumb' >
                                    <img src={val.imgUrl} alt='' />
                                </div>
                               
                               <div className='category-content'>
                                <div className='cate-icon'>
                                    <i className={val.iconName}></i>
                                </div>
                                <Link to="/shop"> <h6>{val.title} </h6></Link>

                               </div>

                            </div>
                        </Link>

                    </div>))
                     
                    
                }
            </div>
                <div className='text-center mt-5'>
                <Link to="/shop" className='lab-btn'><span> {btnText} </span></Link>
                </div>  

        </div>

    </div>
    </div>
  )
}

export default HomeCategory