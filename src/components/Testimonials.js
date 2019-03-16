import React, { Component } from "react";

import quoteStart from "../assets/quote-start.svg";
import quoteEnd from "../assets/quote-end.svg";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonies: [
        {
          name: "Greg Armstrong",
          img:
            "https://randomuser.me/api/portraits/men/3.jpg",
          profession: "Foodie",
          date: "9th Oct, 2018",
          rating: 5,
          review:
            "Great spot. I can tell the food is fresh. Seriously, you NEED to try their iced coffee or iced tea. It's freaking CRAZY GOOD. Very sweet, but delicious. The food is great too, the pineapple fried rice and soups are amazing. Keep it coming, guys!"
        },
        {
          name: "Jessica Peters",
          img: "https://randomuser.me/api/portraits/women/44.jpg",
          profession: "Food Critic",
          date: "7th Oct, 2018",
          rating: 4.5,
          review:
            "Excellent eating experience.. from walking in the door and being greeted by employee, seated and drink order taken, was maybe 5 minutes. Meal was served hot and excellent taste. Server was very friendly and helpful."
        },
        {
          name: "Irma Willis",
          img: "https://randomuser.me/api/portraits/women/65.jpg",
          profession: "Food Blogger",
          date: "14th Feb, 2019",
          rating: 5,
          review:
            "This is the first time I've been at this place and I would definitely recommended it! Usually my go-to place is Thai Wok Kitchen over on Fourth Plain Blvd., but I wanted to give this place a shot. I ordered the pot stickers, Larb, and a side of steamed rice while my other friends ordered Pad Thai."
        },
        {
          name: "Kristin Terry",
          img: "https://randomuser.me/api/portraits/women/91.jpg",
          profession: "Foodie",
          date: "7th Oct, 2018",
          rating: 5,
          review:
            "Every time we've come to Wild Tiger we've been impressed.  The servers are friendly, hospitable, and helpful. The atmosphere is comfortable and decorated nicely without being over done. Food is delicious. We've never had anything we haven't liked. We've been to many Thai restaurants, and the Wild Tiger consistently has great food."
        },
        {
          name: "Tommy Mitchelle",
          img: "https://randomuser.me/api/portraits/men/94.jpg",
          profession: "Foodie",
          date: "7th Oct, 2018",
          rating: 4.5,
          review:
            "Called in pick-up. Ordered the chicken panang curry.  Creamy, fresh veggies and lovely spiciness level. The lime/spices really come through and tastes like an above average panang curry juxtaposed to other curries in the Vancouver/Portland area. This dish made me happy and I would order again when having a curry craving."
        },
      ],
      activeTab: 0
    };
  }

  generateRating = ({ rating }) => {
    // console.log("Rating Generated");
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating)
        stars.push(
          <span className="starWrapper" key={i}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </span>
        );
      // 3.5
      else if (i < rating + 1 && rating + 1 < i + 1)
        stars.push(
          <span className="starWrapper" key={i}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <defs>
                <path id="a" d="M0 0h24v24H0V0z" />
              </defs>
              <clipPath id="b">
                <use href="#a" overflow="visible" />
              </clipPath>
              <path
                clipPath="url(#b)"
                d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
              />
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
        </svg> */}
          </span>
        );
      else
        stars.push(
          <span className="starWrapper" key={i}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </span>
        );
    }

    return stars;
  };

  generateCarousel = () => {
    // console.log("Carousel Generated");
    var __slideStyles = {
      width: `${100 / this.state.testimonies.length}%`
    };

    return this.state.testimonies.map((testimony, index) => {
      return (
        <div
          className={"carousel__slide"}
          style={__slideStyles}
          key={testimony.name + testimony.date}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-10 col-md-8 offset-xs-1 offset-md-2">
              {/* <div className="col-8 offset-2"> */}
                {/* <div className="author__rating mobile">
                  <this.generateRating rating={testimony.rating} />
                </div> */}
                <div className="author">
                  <img
                    className="author__image"
                    src={testimony.img}
                    alt="Irma Willis"
                  />
                </div>
                <div className="author">
                  {/* <div className="author__rating"> */}
                  {/* <this.generateRating rating={testimony.rating}/> */}
                  {/* <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" /> */}
                  {/* </div> */}
                  {/* <img
                    className="author__image"
                    src={testimony.img}
                    alt="Irma Willis"
                  /> */}
                  <div className="author__details">
                    <span className="author__name">
                      {testimony.name}{" "}
                      {testimony.profession && <>| {testimony.profession}</>}
                    </span>
                    <div className="author__rating mobile">
                      <this.generateRating rating={testimony.rating} />
                    </div>
                    {/* <span className="author__date">{testimony.profession}</span> */}
                    <span className="author__date">{testimony.date}</span>
                  </div>
                  {/* <div className="author__rating mobile">
                  <this.generateRating rating={testimony.rating} />
                </div> */}
                </div>
                {/* <div className="author__rating mobile">
                  <this.generateRating rating={testimony.rating} />
                </div> */}
                <p className="author__testimony">
                  <span className="quote quote-start">
                    <img src={quoteStart} alt="quote start" />
                  </span>
                  {testimony.review}
                  <span className="quote quote-end">
                    <img src={quoteEnd} alt="quote end" />
                  </span>
                </p>
                {/* <div className="author">
                  <div className="author__details">
                    <span className="author__name">
                      {testimony.name}{" "}
                      {testimony.profession && <>| {testimony.profession}</>}
                    </span>
                    <div className="author__rating mobile">
                      <this.generateRating rating={testimony.rating} />
                    </div>
                    <span className="author__date">{testimony.date}</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  setTab = event => {
    const { index } = event.target.dataset;
    this.setState({
      activeTab: +index
    });
    this.startInterval();
  };

  nextSlide = () => {
    this.setState(prevState => ({
      activeTab: (prevState.activeTab + 1) % prevState.testimonies.length
    }));
    this.startInterval();
  };

  prevSlide = () => {
    this.setState(prevState => ({
      activeTab:
        (prevState.testimonies.length + prevState.activeTab - 1) %
        prevState.testimonies.length
    }));
    this.startInterval();
  };

  generateControls = () => {
    // clearInterval(this.carouselInterval);
    // console.log("Generate COntrols");
    return this.state.testimonies.map((testimony, index) => {
      return (
        <div
          className={"dot" + (this.state.activeTab === index ? " active" : "")}
          key={testimony.name + testimony.date + " control"}
          data-index={index}
          onClick={this.setTab}
        />
      );
    });
  };

  startInterval = () => {
    clearInterval(this.carouselInterval);
    this.carouselInterval = setInterval(() => {
      this.setState(prevState => ({
        activeTab: (prevState.activeTab + 1) % prevState.testimonies.length
      }));
    }, 10000);
  };

  componentDidMount = () => {
    this.startInterval();
  };

  componentWillUnmount = () => {
    clearInterval(this.carouselInterval);
  };

  render() {
    var __sliderStyles = {
      // marginLeft: `${-100 * this.state.activeTab}%`,
      transform: `translateX( ${(-100 / this.state.testimonies.length) *
        this.state.activeTab}% )`,
      width: `${100 * this.state.testimonies.length}%`
    };

    return (
      <>
        {/* <div className="happyhour">
          <h5 className="happyhour__heading">Testimonials</h5>
          <p className="happyhour__description">
          Hear it from our customers.
      </p>
        </div> */}
        <div className="buttons next" onClick={this.nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div className="buttons prev" onClick={this.prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div className="carousel">
          {/* <div className="carousel__slider"> */}
          <div className="carousel__slider" style={__sliderStyles}>
            <this.generateCarousel />
          </div>
          <div className="carousel__controls">
            <this.generateControls />
          </div>
        </div>
        {/* <div className="buttons prev">&lt;</div> */}
        {/* <div className="buttons next">&gt;</div> */}
        {/* <div className="carousel">
          
          <div className="testimony active"> col-12
            <div className="author">
              <div className="author__rating">
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star" />
                <span class="fa fa-star" />
              </div>
              <img
                className="author__image"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Irma Willis"
              />
              <div className="author__details">
                <span className="author__name">Irma Willis | Food Blogger</span>
                <span className="author__date">14th Feb, 2019</span>
              </div>
            </div>
          
            <p className="author__testimony">
              <div className="quote quote-start">
                <img src={quoteStart} alt="quote start" />
              </div>
              This is the first time I've been at this place and I would
              definitely recommended it! Usually my go-to place is Thai Wok
              Kitchen over on Fourth Plain Blvd., but I wanted to give this
              place a shot. I ordered the pot stickers, Larb, and a side of
              steamed rice while my other friends ordered Pad Thai.
              <div className="quote quote-end">
                <img src={quoteEnd} alt="quote end" />
              </div>
            </p>

          </div>
          <div className="controls">
            <div className="dot active" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        </div> */}
      </>
    );
  }
}

export default Testimonials;
