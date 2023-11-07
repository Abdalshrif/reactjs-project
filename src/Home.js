function Home() {

    return (
      
  <>
 <section id="hero" class="bg-dark text-light text-center text-md-start py-5">
    <div className="container">
        <div className="d-sm-flex align-items-center justify-content-center">
            <div className="py-3">
                <h1 className="display-5">Welcome to <br /><span class="text-info">Example Company</span></h1>
                <p className="py-1 lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus facere tempora maxime quaerat quae ut sequi ea. Voluptates odit doloremque officia possimus pariatur dolorum quam consequatur repudiandae ea eos laboriosam nisi ratione perspiciatis architecto amet obcaecati repellendus, id cumque magnam?</p>
                <button className="btn btn-info">Get Start</button>
            </div>
          <img className="d-none d-sm-block img-fluid w-50" src="images/hero.svg" alt="" />
      </div>
    </div>
</section>

{/* ========================================== */
/* ========= Start Colege Section ============= */
/* ========================================== */}
<section id="colege" class="py-5" >
    <div className="container">
        <h2 className="main-title text-center text-info">
            Services
        </h2>
        <div className="row text-center">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card bg-dark text-light mb-3">
                    <div className="h1 mt-3">
                        <i className="bi bi-arrows-angle-contract"></i>
                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-title text-info">Create Website</h4>
                        <p className="card-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, hic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ea!</p>
                        <a href="#" className="btn btn-info">Learn More</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card bg-dark text-light mb-3">
                    <div className="h1 mt-3">
                        <i className="bi bi-arrows-angle-contract"></i>
                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-title text-info">Digital Markitng</h4>
                        <p className="card-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, hic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ea!</p>
                        <a href="#" class="btn btn-info">Learn More</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="card bg-dark text-light mb-3">
                    <div className="h1 mt-3">
                        <i className="bi bi-arrows-angle-contract"></i>
                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-title text-info">Content Writer</h4>
                        <p className="card-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, hic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ea!</p>
                        <a href="#" className="btn btn-info">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* ========================================== */
/* ========= Start News Section ============= */
/* ========================================== */}
<h2 className="text-center text-info">
   Our Loactions
</h2>
<section id="news" className="py-5 bg-dark">
    <div className="container">
        <div className="row align-items-center justify-content-center flex-row-reverse">
            <div className="col-md">
                <img className="img-fluid" src="Images/news.svg" alt="" />
            </div>
            <div className="col-md py-4 text-light">
                <h2 className="text-info">Here You Found Our Places </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis possimus fugit quibusdam itaque eius. Blanditiis praesentium voluptate, laboriosam corrupti harum, illo recusandae temporibus enim, exercitationem facilis eligendi vitae atque odit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, iure.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cumque, libero exercitationem vero corrupti quibusdam beatae sapiente quae eligendi delectus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, temporibus.</p>
            </div>
        </div>
    </div>
</section>

{/* ========================================== */
/* ========= Start QA Section ============= */
/* ========================================== */}
<section id="faq" className="py-5">
    <div className="container">
        <h2 className="main-title text-center text-info">
        What you Need  to Join Us 
        </h2>
        <div className="accordion accordion-flush" id="bt-faq">
          <div className="accordion-item">
              <h5 className="accordion-header" id="question-1">
                  <button className="accordion-button collasped"
                     type="button" data-bs-toggle="collapse"
                     data-bs-target="#answer-1">
                     Question One
                 </button>
              </h5>
              <div className="accordion-collapse collapse px-4 py-3"
                id="answer-1" data-bs-parent="#bt-faq">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, non error. A tempora vitae non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum mollitia laborum debitis quis rem unde ullam quas nobis quasi magnam!
              </div>
          </div>
          <div className="accordion-item">
            <h5 className="accordion-header" id="question-2">
                <button className="accordion-button collasped"
                   type="button" data-bs-toggle="collapse"
                   data-bs-target="#answer-2">
                   Question Three
               </button>
            </h5>
            <div className="accordion-collapse collapse px-4 py-3"
               id="answer-2" data-bs-parent="#bt-faq">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, non error. A tempora vitae non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum mollitia laborum debitis quis rem unde ullam quas nobis quasi magnam!
            </div>
        </div>
        <div className="accordion-item">
            <h5 className="accordion-header" id="question-3">
                <button className="accordion-button collasped"
                   type="button" data-bs-toggle="collapse"
                   data-bs-target="#answer-3">
                   Question Four
               </button>
            </h5>
            <div className="accordion-collapse collapse px-4 py-3" 
              id="answer-3" data-bs-parent="#bt-faq">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, non error. A tempora vitae non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum mollitia laborum debitis quis rem unde ullam quas nobis quasi magnam!
            </div>
        </div>

        </div>
    </div>

</section>

{/* ============================================ */
/* ========= Start footer Section ============== */
/* ============================================= */}
    <div className="footer bg-dark text-light text-center text-md-start py-5">        
        <p className="copyright text-center">
            copyright &copy; 2023 Devoloped by <span href="" class="text-info">Sharif Omer</span>
        </p>
    </div>
     </>
      
    );
}
export default Home;