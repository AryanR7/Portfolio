import React from "react";

const Testimonials = ({ data }) => {
  if (data) {
    var testimonials = data.testimonials.map(function (testimonials) {
      var bookImage = "images/" + testimonials.image;
      return (
        <li key={testimonials.text}>
          
            <p>{testimonials.text}</p>
            
            <img  alt={testimonials.text} src={bookImage} />
        </li>
      );
    });
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="three columns header-col">
            <h1>
              <span>My Favorite books </span>
            </h1>
          </div>

          <div className="ten columns flex-container ">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
