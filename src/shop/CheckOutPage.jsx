import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../components/Modal.css';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActivetTab] = useState("visa");
  const [checkdata, setCheckData] = useState({
    Name: '',
    Numberr: '',
    Datee: '',
    Cvv: '',
  });

  const hundleTabChange = (tabId) => {
    setActivetTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const hundleOrderConfirm = () => {
    alert("Your Order is placed successfully!");
    localStorage.removeItem("cart");
    navigate(from, { replace: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckData({ ...checkdata, [name]: value });
  };

  const getdata = async (e) => {
    e.preventDefault();
    const { Name, Numberr, Datee, Cvv } = checkdata;

    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name,
        Numberr,
        Datee,
        Cvv,
      }),
    };

    try {
      const res = await fetch(
        'https://react-ecommerce-86f33-default-rtdb.firebaseio.com/checkoutData.json',
        option
      );

      if (res.ok) {
        alert("Data Sent Successfully!");
      } else {
        alert("Error Sending Data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getdataPaypal = async (e) => {
    e.preventDefault();
    const { Name, Numberr, Datee, Cvv } = checkdata;

    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name,
        Numberr,
        Datee,
        Cvv,
      }),
    };

    try {
      const res = await fetch(
        'https://react-ecommerce-86f33-default-rtdb.firebaseio.com/checkoutData.json',
        option
      );

      if (res.ok) {
        alert("Paypal Data Sent Successfully!");
      } else {
        alert("Error Sending Paypal Data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='modalCard'>
      <Button variant='primary' className='py-2' onClick={handleShow}>
        Proceed to checkout
      </Button>
      <Modal show={show} onHide={handleClose} animation={false} className='modal fade' centered>
        <div className='modal-dialog'>
          <h5 className='px-3 mb-3'> Select Your Payment Method</h5>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='tabs mt-3'>
                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <a
                      className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                      id='visa-tab'
                      data-toggle='tab'
                      role='tab'
                      aria-controls='visa'
                      aria-selected={activeTab === "visa"}
                      onClick={() => hundleTabChange("visa")}
                      href='#visa'
                    >
                      <img src='https://i.imgur.com/sB4jftM.png' alt='' width='80'></img>
                    </a>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <a
                      className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                      id='paypal-tab'
                      data-toggle='tab'
                      role='tab'
                      aria-controls='paypal'
                      aria-selected={activeTab === "paypal"}
                      onClick={() => hundleTabChange("paypal")}
                      href='#paypal'
                    >
                      <img src='https://i.imgur.com/yK7EDD1.png' alt='' width='80'></img>
                    </a>
                  </li>
                </ul>

                <div className='tab-content' id='myTabContent'>
                  <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""} `}
                    id='visa'
                    role='tabpanel'
                    aria-labelledby='visa-tab'
                  >
                    <div className='mt-4 mx-4'>
                      <div className='text-center'>
                        <h5>Credit Card</h5>
                      </div>
                      <div className='form mt-3'>
                        <div className='inputbox'>
                          <input type="text" name='Name' id='name' className='form-control' required onChange={handleChange} />
                          <span>Card Name</span>
                        </div>
                        <div className='inputbox'>
                          <input type="text" name='Numberr' id='number' min="1" max="999" className='form-control' required onChange={handleChange} />
                          <span>Card Number</span><i className='fa fa-eye'></i>
                        </div>
                        <div className='d-flex flex-row'>
                          <div className='inputbox'>
                            <input type="text" name='Datee' id='date' className='form-control' required onChange={handleChange} />
                            <span>Expiration Date</span>
                          </div>
                          <div className='inputbox'>
                            <input type="text" name='Cvv' id='cvv' className='form-control' required onChange={handleChange} />
                            <span>CVV</span>
                          </div>
                        </div>
                        <div className='px-5 pay'>
                          <button className='btn btn-success btn-block' onClick={getdata}>
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""} `}
                    id='paypal'
                    role='tabpanel'
                    aria-labelledby='paypal-tab'
                  >
                    <div className='mt-4 mx-4'>
                      <div className='text-center'>
                        <h5>Paypal Acount Info</h5>
                      </div>
                      <div className='form mt-3'>
                        <div className='inputbox'>
                          <input type="text" name='Name' id='name' className='form-control' required onChange={handleChange} />
                          <span>Enter your email</span>
                        </div>
                        <div className='inputbox'>
                          <input type="text" name='Numberr' id='number' min="1" max="999" className='form-control' required onChange={handleChange} />
                          <span>Your name</span><i className='fa fa-eye'></i>
                        </div>
                        <div className='d-flex flex-row'>
                          <div className='inputbox'>
                            <input type="text" name='Datee' id='date' className='form-control' required onChange={handleChange} />
                            <span>Extra info</span>
                          </div>
                          <div className='inputbox'>
                            <input type="text" name='Cvv' id='cvv' className='form-control' required onChange={handleChange} />
                            <span></span>
                          </div>
                        </div>
                        <div className='px-5 pay'>
                          <button className='btn btn-success btn-block' onClick={getdataPaypal}>
                            Add Paypal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='mt-3 px-4 p-Disclaimer'><em>Le paiement décline :</em> en aucun cas le paiement ou le paiement partiel par le propriétaire pour tout matériel ou service.</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
