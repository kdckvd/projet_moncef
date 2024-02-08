import React, { useState } from 'react';

const subTitle = "Sauvez la journée.";

const Register = () => {
    const [user, setUser] = useState({
        Name: '',
        Email: '',
        Number: ''
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const getdata = async (e)=>
    {
        const { Name,Email,Number}=user;
        e.preventDefault();
        const options ={
            method:'POST',
            headers:{
                'content-type':'aplication/json'
            },
            body:JSON.stringify({
                Name,Email,Number

            })
        }
        const res = await fetch(
            'https://react-ecommerce-86f33-default-rtdb.firebaseio.com/UserData.json',
            options
            )
            console.log(res)
            if(res)
            {
                alert("Message Sent")
            }
            else 
            {
                alert("Error")
            }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted:", user);
    }

    const title = (
        <h2 className='title'>Rejoignez-nous pour une journée entière d'atelier gratuit <b>sur la maîtrise <span> avancée </span></b> des ventes.</h2>
    );

    const decs = "Offre à durée limitée ! Dépêchez-vous !";

    return (
        <section className='register-section padding-tb pb-0'>
            <div className='container'>
                <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                    <div className='col'>
                        <div className='section-header'>
                            <span className='subtitle'>{subTitle}</span>
                            {title}
                            <p>{decs}</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='section-wrapper'>
                            <h4>Inscrivez-vous maintenant</h4>
                            <form className='register-form' onSubmit={handleSubmit}>
                                <input type='text' name='Name' placeholder='Username' className='reg-input' value={user.Name} onChange={handleChange} />
                                <input type='email' name='Email' placeholder='Email' className='reg-input' value={user.Email} onChange={handleChange} />
                                <input type='tel' name='Number' placeholder='Phone' className='reg-input' value={user.Number} onChange={handleChange} />
                                <button type='submit' className='lab-btn' onClick={getdata} >
                                    Inscrivez-vous maintenant
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
