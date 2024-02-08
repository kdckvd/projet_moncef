import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { GoogleMap } from '../components/GoogleMap';

const subTitle = "Contactez-nous";
const title = "Nous sommes toujours impatients d'avoir de vos nouvelles !";
const conSubTitle = "Contactez-nous pour entrer en relation avec nous";
const conTitle = "Remplissez le formulaire ci-dessous afin que nous puissions mieux vous connaître et comprendre vos besoins";
const btnText = "Send our Message";

const contactList = [
  {
    imgUrl: "/src/assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "مجمع سنتر اكس التجاري - El Menzah Gouvernorat de Tunis",
  },
  {
    imgUrl: "/src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+216 70 60 78 00",
  },
  {
    imgUrl: "/src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "contact@baity.tn",
  },
  {
    imgUrl: "/src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "baity.tn",
  },
];

const Contact = () => {
  const [contactdata, setContactData] = useState({
    Name: '',
    Email: '',
    Numbere: '',
    Subject: '',
    Message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactdata, [name]: value });
  };

  const getdata = async (e) => {
    e.preventDefault();
    const { Name, Email, Numbere, Subject, Message } = contactdata;
    const option = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        Name,
        Email,
        Numbere,
        Subject,
        Message,
      }),
    };
    try {
      const res = await fetch(
        'https://react-ecommerce-86f33-default-rtdb.firebaseio.com/contactdata.json',
        option
      );
      console.log(res);
      if (res.ok) {
        alert("Message Sent");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted :", contactdata);
  };

  return (
    <div>
      <PageHeader head="Contactez-nous" cettepage="Contact" />
      <div className='map-address-section padding-tb section-bg'>
        <div className='container'>
          <div className='section-header text-center'>
            <span className='subtitle'> {subTitle} </span>
            <h2 className='title'> {title} </h2>
          </div>

          <div className='section-wrapper'>
            <div className='row flex-row-reverse'>
              <div className='col-xl-4 col-lg-5 col-12'>
                <div className='contact-wrapper'>
                  {contactList.map((val, i) => (
                    <div key={i} className='contact-item'>
                      <div className='contact-thumb'>
                        <img src={val.imgUrl} alt="" />
                      </div>
                      <div className='contact-content'>
                        <h6 className='title'> {val.title} </h6>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='col-xl-8 col-lg-7 col-12'>
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='contact-section padding-tb'>
        <div className='container'>
          <div className='section-header text-center'>
            <span className='subtitle'> {conSubTitle} </span>
            <h2> {conTitle} </h2>
          </div>
          <div className='section-wrapper'>
            <form className='contact-form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <input type="text" name='Name' id='name' placeholder='Your Name *' value={contactdata.Name} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <input type="email" name='Email' id='email' placeholder='Your Email *' value={contactdata.Email} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <input type="number" name='Numbere' id='number' placeholder='Phone Number *' value={contactdata.Numbere} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <input type="text" name='Subject' id='subject' placeholder='Subject *' value={contactdata.Subject} onChange={handleChange} />
              </div>
              <div className='form-group w-100'>
                <textarea name='Message' id='' rows="8" placeholder='Your Message' value={contactdata.Message} onChange={handleChange} />
              </div>
              <div className='form-group w-100 text-center'>
                <button className='lab-btn' onClick={getdata}>
                  {btnText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
