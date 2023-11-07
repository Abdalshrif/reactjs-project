import React from 'react';
 function About() {
              
    return (
     <>
         <br/>
        <h1 className="text-center text-info"> About Us</h1>
        <section id="news" className="py-5">
            <div className="container">
                <div className="row align-items-center justify-content-center flex-row-reverse">
                    <div className="col-md">
                        <img className="img-fluid" src="Images/about.svg" alt="" />
                    </div>
                    <div className="col-md py-4 text-dark">
                        <h2 className="text-info">Some Info About Our Company</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis possimus fugit quibusdam itaque eius. Blanditiis praesentium voluptate, laboriosam corrupti harum, illo recusandae temporibus enim, exercitationem facilis eligendi vitae atque odit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, iure Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
                        <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime cumque, libero exercitationem vero corrupti quibusdam beatae sapiente quae eligendi delectus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, temporibus.</p>
                    </div>
                </div>
            </div>
        </section>
      </>  
    );
 }
 export default About;