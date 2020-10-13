import React from "react";

const HomeContent=()=>
{
    return(
        <div>
                <div>
        <section className="heading">
          <div className="inner">
            <p className="wow fadeInUp">Let's make life happlier</p>
            <h1 className="wow fadeInUp"></h1>
            
          </div>
        </section>
        <section className="cta">
          <div className="inner">
            <div className="left" >
              <h3 className="wow fadeInUp">Welcome to your health center</h3>
              <p className="wow fadeInUp">Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis.
  
  Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.</p>
            </div>
            <div className="right">
              <img src="http://res.cloudinary.com/dgpmuegqe/image/upload/v1521165802/female_doc_zdj4ay.jpg" alt=""/>
            </div>
          </div>
        </section>
        <section className="display">
          <div className="inner">
            <h3>Our Doctors</h3>
            <div className="cards">
              <div className="one">
                <img  className="wow fadeInUp" data-wow-duration="2s" src="https://ae01.alicdn.com/kf/HTB1ld7BRXXXXXa7XpXXq6xXFXXXO/2018-women-hospital-medical-doctor-nurse-uniform-dental-clinic-beauty-salon-working-uniform-drugstore-clothes-long.jpg" alt=""/>
                <div className="text">
                  <h3>Nate Baston</h3>
                <p>General Principal</p>
                </div>
                
              </div>
              <div className="two">
                <img  className="wow fadeInUp" data-wow-delay=".5s" data-wow-duration="2s" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOkG0-m6taQYnX9638rQlHqpRnW7uaUb6BAU5t4rS5fzTTdES" alt=""/>
                <div className="text">
                   <h3>Jason Kidds</h3>
                <p>Precident</p>
                </div>
               
              </div>
              <div className="three">
                <img  className="wow fadeInUp" data-wow-delay="1s" data-wow-duration="2s" src="https://www.tuftsmedicalcenter.org/-/media/Images/Physicians/Dinitz_Amy.ashx" alt=""/>
                <div className="text">
                      <h3>Nate Robbinson</h3>
                <p>General Practitioner</p>
                </div>
            
              </div>
            </div>
          </div>
        </section>
       
    </div>
        </div>
    );
};

export default HomeContent;