import React, { useState } from 'react';
import Ratting from '../components/Ratting';

const reviwtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Monsieur moncef",
    date: "Posted on JAN 02, 2024 at 6:57 am",
    desc: "c'est un bon travail merci et continuer ",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Madame Maryem",
    date: "Posted on Jul 18, 2023 at 6:57 am",
    desc: " bon Qualite merci pour votre service",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Monsieur Mohamed",
    date: "Posted on Jun 10, 2023 at 4:01 am",
    desc: "merci pour la rapidite de livraison et je remercie le service client pour sa conformité ",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Madame Sameh",
    date: "Posted on FEV 17, 2022 at 15:57 am",
    desc: " quelle équipe merci beaucoup pour votre service ",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  const [reviewdata, setReviewData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewdata, [name]: value });
  };

  const getdata = async (e) => {
    const { Name, Email, Message } = reviewdata;
    e.preventDefault();
    const option = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        Name,
        Email,
        Message,
      }),
    };
    const res = await fetch(
      'https://react-ecommerce-86f33-default-rtdb.firebaseio.com/reviewData.json',
      option
    );
    console.log(res);
    if (res) {
      alert("Message Sent");
    } else {
      alert("Error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted :", reviewdata);
  };

  return (
    <>
      <ul className={`review-nav lab-ul ${reviewShow ? "revActive" : "DescActive"}`}>
        <li className='desc' onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className='rev' onClick={() => setReviewShow(!reviewShow)}>
          Reviews 4
        </li>
      </ul>
      <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
        <div className='review-showing'>
          <ul className='content lab-ul'>
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className='post-thumb'>
                  <img src={review.imgUrl} alt='' />
                </div>
                <div className='post-content'>
                  <div className='entry-meta'>
                    <div className='posted-on'>
                      <a href='#'>{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className='entry-content'>
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className='client-review'>
            <div className='review-form'>
              <div className='review-title'>
                <h6>{reviwtitle}</h6>
                <form action="action" className='row' onSubmit={handleSubmit}>
                  <div className='col-md-4 col-12'>
                    <input type='text' name='Name' id='name' placeholder='Full Name *' value={reviewdata.Name} onChange={handleChange} />
                  </div>
                  <div className='col-md-4 col-12'>
                    <input type='email' name='Email' id='email' placeholder='Your Email *' value={reviewdata.Email} onChange={handleChange} />
                  </div>
                  <div className='col-md-4 col-12'>
                    <div className='rating'>
                      <span className='me-2'>Your Rating</span>
                      {/* Assuming Ratting is a component that handles the rating input */}
                      <Ratting />
                    </div>
                  </div>
                  <div className='col-md-12 col-12'>
                    <textarea name='Message' id='message' rows="8" placeholder='Type Here Message' value={reviewdata.Message} onChange={handleChange}></textarea>
                  </div>
                  <div className='col-12'>
                    <button type='submit' className='default-button' onClick={getdata}>
                      <span>Submit Review</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='description'>
          <p>Dimension : Couchage : 190*155 cm // L 220 * P 95 // Assise : 43 cm <br />
            Matière : Acier en haute qualité - tissu : toile<br />
            3 places <br />
            Couleur : Gris<br />
            Catégorie : C1</p>
        </div>
      </div>
    </>
  );
};

export default Review;
