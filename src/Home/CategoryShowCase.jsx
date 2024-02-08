    import React, { useState } from 'react'
    import Ratting from '../components/Ratting';
    import { Link } from 'react-router-dom';
    import { setItem } from 'localforage';
    

    const title="Nos Produit";


    const ProductData = [
        {

        imgUrl: 'src/assets/images/categoryTab/01.jpg',
        cate: 'Canapé',
        title: 'Canapé convertible 3 places Luxy moderne 190*155',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Canapé',
        price: '1890 TND',
        id: 1,
        },
        {
        imgUrl: 'src/assets/images/categoryTab/02.jpg',
        cate: 'Canapé',
        title: 'Canapé convertible Marseille- 190*155 - Gris claire',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Canapé',
        price: '1699 TND',
        id: 2,
        },
        {
        imgUrl: 'src/assets/images/categoryTab/03.jpg',
        cate: 'Canapé',
        title: 'Canapé Convertible Strasbourg -3 places - Gris charbon',
        author: 'src/assets/images/categoryTab/brand/03.jpg',
        brand: 'Canapé',
        price: '1890 TND',
        id: 3,
        },
        {
        imgUrl: 'src/assets/images/categoryTab/04.jpg',
        cate: 'CHAMBRE ENFANT',
        title: 'Chambre à coucher pour enfant Emna - Bois MDF stratifié - Blanc, Rose',
        author: 'assets/images/course/author/04.jpg',
        brand: 'CHAMBRE ENFANT',
        price: '1990 TND',
        id: 4,
        },
        {
        imgUrl: 'src/assets/images/categoryTab/05.jpg',
        cate: 'CHAMBRE ENFANT',
        title: 'Chambre à coucher Fares pour enfant - chêne et blanc',
        author: 'assets/images/course/author/05.jpg',
        brand: 'CHAMBRE ENFANT',
        price: '990 TND',
        id: 5,
        },
        {
            imgUrl: 'src/assets/images/categoryTab/06.jpg',
            cate: 'Tables et chaises',
            title: 'Table et 4 chaises en noble - Bois & Acier - Marron & Blanc',
            author: 'assets/images/course/author/06.jpg',
            brand: 'Tables et chaises',
            price: '1200 TND',
            id: 6,
            },
        {
        imgUrl: 'src/assets/images/categoryTab/07.jpg',
        cate: 'Bureau ',
        title: 'Bureau murale chene avec rangement',
        author: 'assets/images/course/author/07.jpg',
        brand: 'Bureau ',
        price: '290 TND',
        id: 7,
        },
        {
        imgUrl: 'src/assets/images/categoryTab/08.jpg',
        cate: 'Poufs',
        title: 'Poufs - Poire Kids XL - Orange - 70*90 cm',
        author: 'assets/images/course/author/08.jpg',
        brand: 'Poufs',
        price: '85 TND',
        id: 8,
        },
        {
        imgUrl: 'src/assets/images/categoryTab/09.jpg',
        cate: 'Pack Mariage',
        title: 'Pack mariage SCANDINAVE - Salon - meuble Tv - Table nord',
        author: 'assets/images/course/author/09.jpg',
        brand: 'Pack mariage  ',
        price: '2669 TND',
        id: 9,
        },
        {
            imgUrl: 'src/assets/images/categoryTab/10.jpg',
            cate: 'Pack Mariage',
            title: 'Pack Mariage Baity -    Salon - Chambre à coucher - Pack électro - pack décoration',
            author: 'assets/images/course/author/10.jpg',
            brand: 'Pack Mariage ',
            price: '9900 TND',
            id: 10,
            },
            {
                imgUrl: 'src/assets/images/categoryTab/11.jpg',
                cate: 'Décoration',      
                title: 'Lampadaire - ANANAS',
                author: 'assets/images/course/author/11.jpg',
                brand: 'Luminaire',
                price: '70 TND',
                id: 11,
                },
                {
                    imgUrl: 'src/assets/images/categoryTab/12.jpg',
                    cate: 'Jardin et exterieur',     
                    title: 'Gazon Artificiel Décoratif - Longueur de la fibre 10 mm - Polyéthylène 1m*1 ',
                    author: 'assets/images/course/author/12.jpg',
                    brand: 'décoration jardin',
                    price: '65 TND',
                    id: 12,
                    },
                
        ]
        

    const CategoryShowCase = () => {
    const [items,SetItems]=useState(ProductData);
    const filterItem =(categItem)=>{
        const updateItems=ProductData.filter((curElem) => {
            return curElem.cate===categItem;
        });
        SetItems(updateItems)

    }


    return (
        <div className='course-section style-3 padding-tb'>
    
        <div className='course-shape one'> <img src='/src/assets/images/shape-img/icon/01.png' alt=''  />  </div>
        <div className='course-shape two'> <img src='/src/assets/images/shape-img/icon/02.png' alt=''  />  </div>

        <div className='container' >
            <div className='section-header'>
                <h2 className='title'> {title} </h2>
                <div className='course-filter-group'> 
                    <ul className='lab-ul'>
                        <li  onClick={()=> SetItems(ProductData) } > ALL </li>
                        <li onClick={() => filterItem("Canapé")}>Salon</li>
                        <li  onClick={()=> filterItem("CHAMBRE ENFANT") } > Chambre </li>
                        <li  onClick={()=> filterItem("Tables et chaises") } > MEUBLE CUISINE </li>
                        <li  onClick={()=> filterItem("Décoration") } > Decoration </li>
                        <li  onClick={()=> filterItem("Pack Mariage") } > Pack Mariage </li>
                        <li  onClick={()=> filterItem("Jardin et exterieur") } > MEUBLES JARDIN </li>




                    </ul>
                </div>
            </div>

            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-md-1 course-filter'>
                    {
                            items.map((Product) => <div key={Product.id} className='col'>
                                <div className='course-item style-4'>
                                    <div className='course-inner'>
                                        <div className='course-thumb'>
                                       
                                            <img  src={Product.imgUrl} alt=''/>
                                       
                                            <div className='course-category'>
                                                <div className='course-cate'>
                                                    <a href='#' > {Product.cate}  </a>
                                                </div>
                                                <div className='course-reiew'>
                                                    <Ratting/>

                                                </div>


                                            </div>

                                        </div>

                                        <div className='course-content'>
                                        <Link to={`/shop/${Product.id}`}> <h6>{Product.title}</h6> </Link>
                                            <div className='course-footer'>
                                                <div className='course-author'>
                                                <Link to='/' className='ca-name' > {Product.brand} </Link>
                                                </div >
                                                <div className='course-price'>
                                                    {Product.price}
                                                    </div>


                                            </div>
                                        </div>
                                    

                                    </div>

                                </div>


                            </div>)
                    }
                </div>

            </div>




        </div>




        </div>
    )
    }

    export default CategoryShowCase