import React from 'react'
import Shop from './Shop'
import { Link } from 'react-router-dom'
const title="NOS PACK MARIAGE"
const pack=[ {id:1,imgUrl: './src/assets/images/blog/10.jpg',titlee:"Pack mariage SCANDINAVE - Salon - meuble Tv - Table nord", prix:2669,
},{id:2,imgUrl: './src/assets/images/blog/11.jpg',titlee:"Pack Mariage Baity - Salon - Chambre à coucher - Pack électro - pack décoration", prix:9900,
}, {id:3,imgUrl: './src/assets/images/blog/12.jpg',titlee:" Pack Mariage Berlin - Canapé Opera - Meuble TV - Chambre à coucher - pack électro - pack cuisine - pack décoration", prix:9900,
}, {id:4,imgUrl: './src/assets/images/blog/13.jpg',titlee:"Pack mariage Laarousa- chambre à coucher - meuble Tv - canapé d'angle", prix:5590,
},{id:5,imgUrl: './src/assets/images/blog/14.jpg',titlee:"Pack Mariage Chambre à coucher Roma / Séjour convertible vienne / Table basse / Meuble Tv",
 prix:9190,
},{id:6,imgUrl: './src/assets/images/blog/15.jpg',titlee:" Pack Mariage Queen-Canapé Opéra-Meuble TV ORLY-Table basse industrielle-Table à manger POLGA", prix:4929,
},{id:7,imgUrl: './src/assets/images/blog/16.jpg',titlee:" Pack Mariage Saphir - Chambre Aline - canapé Sandra - Table Basse - Meuble TV",
 prix:8989,
},{id:8,imgUrl: './src/assets/images/blog/17.jpg',titlee:"Pack mariage - ALASKA- Chambre à coucher - meuble Tv - canapé convertible", 
prix:5740,
} ]

const NosPack = () => {
  return (

    <div className='widget widget-post'>
        <div className='widget-header'>
            <h5 className='title'> {title} </h5>
            </div>  

            <ul className='widget-wrapper'>
                {
                    pack.map((blog,i) => (
                        <li key={i} className='d-flex flex-wrap justify-content-between'> 
                        <div className='post-thumb'>
                            <Link to={'/blog/$ {blog.id}'}> <img src={blog.imgUrl} alt=''></img>  </Link>
                            </div>  
                            <div className='post-content'>
                                <Link to={'/blog/$ {blog.id}'}> <h5> {blog.titlee} </h5> </Link>
                                <p> <span> {blog.prix} TND </span></p>
                                </div> 

                        </li>
                    ))
                }

            </ul>

    </div>
  )
}

export default NosPack