import React, { useEffect } from 'react'
import "../assets/CssFolder/homePageStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carousel from "bootstrap/js/dist/carousel";



function Home() {

  useEffect(() => {
    const element = document.querySelector("#carouselExample");
    new Carousel(element, {
      interval: 4000,
      ride: "carousel",
      pause: false
    });
  }, []);

  return (
    <>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="https://ggplastics3bucket01.s3.ap-south-2.amazonaws.com/100GramBlowMouldingMachine.png" className="d-block w-100 carousel-img" alt="machine1" />
          </div>

          <div className="carousel-item">
            <img src="https://ggplastics3bucket01.s3.ap-south-2.amazonaws.com/20GramBlowMouldingMachine.png" className="d-block w-100 carousel-img" alt="machine2" />
          </div>

          <div className="carousel-item">
            <img src="https://ggplastics3bucket01.s3.ap-south-2.amazonaws.com/5GramBlowMouldingMachine.png" className="d-block w-100 carousel-img" alt="machine3" />
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

      <div className="container my-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h2>About Us</h2>

            <p>
              We are a Chennai-based plastic moulding manufacturing company with over
              <strong> 40 years of experience</strong> in the plastic manufacturing industry.
              With decades of expertise and continuous improvement, we have built a strong
              reputation for delivering reliable and high-quality plastic products to our customers.
            </p>

            <p>
              Customer satisfaction is at the heart of everything we do. We prioritize
              understanding our clients’ needs and strive to provide solutions that meet
              their exact requirements. Our team also specializes in
              <strong> customized plastic moulding</strong>, allowing us to develop
              products tailored to specific customer demands.
            </p>

            <p>
              Currently, we manufacture a wide range of plastic products including
              <strong> homeopathy plastic bottles and caps, plastic dumb boxes, plastic fish floats,
                mosquito net corners, plastic chemical bottles</strong>, and
              <strong> 10-litre and 20-litre water can caps with inner components</strong>,
              along with other plastic moulded items.
            </p>

            <p>
              Our company operates with recognized certifications and registrations including
              <strong> GST, MSME, IEC, and Trademark</strong>, reflecting our commitment
              to quality, compliance, and professional business practices.
            </p>

            <p>
              With a legacy of over four decades, we continue to focus on
              <strong> innovation, quality manufacturing, and long-term customer relationships</strong>,
              ensuring dependable products and services for our clients.
            </p>
          </div>

          <div className="col-md-6">
            <img src="https://ggplastics3bucket01.s3.ap-south-2.amazonaws.com/InjectionMouldingMachine.png" className="img-fluid rounded" alt="About us" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home