import React from "react";

const Footer=()=>
{
    return(
        <div>
            <div>
             <section className="contact">
          <div className="inner">
                      <div className="male-doctor">
              <img className="wow slideInUp" src="http://pluspng.com/img-png/doctor-hd-png--567.png" alt=""/>
            </div>
            <div className="form">
               <h3>Contact Us</h3>
             <form action=""  className="wow slideInUp" data-wow-delay=".5s">
              <p>
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Your Full Name"/>
              </p>
              <p>
                <label for="company">Company</label>
                <input type="text" id="company" placeholder="Company Trading Nmae"/>
              </p>
              <p>
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Email Address"/>
              </p>
              <p>
                <label for="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="Phone Number"/>
              </p>
              <p className="full">
                <label for="message">Message</label>
                <textarea name="" placeholder="please give more details"></textarea>
              </p>
              <p className="full">
                <button>Submit</button>
              </p>
            </form>
            </div>               
          </div>
        </section>
        <div className="push"></div>
      </div>
      <footer>
        <p>Created & Designed by BICS &copy; Copyright 2020</p>
      </footer>
            </div>
    );
};

export default Footer;