import React, { Component } from "react";

import quoteStart from "../assets/quote-start.svg";
import quoteEnd from "../assets/quote-end.svg";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonies: [
        {
          name: "Irma Willis",
          img: "https://randomuser.me/api/portraits/women/65.jpg",
          profession: "Food Blogger",
          date: "14th Feb, 2019",
          rating: 3,
          review:
            "This is the first time I've been at this place and I would definitely recommended it! Usually my go-to place is Thai Wok Kitchen over on Fourth Plain Blvd., but I wanted to give this place a shot. I ordered the pot stickers, Larb, and a side of steamed rice while my other friends ordered Pad Thai."
        },
        {
          name: "Lindsay B.",
          img: "https://s3-media3.fl.yelpcdn.com/photo/N5JtFVTK5fh9kChK2y-dsQ/90s.jpg",
          profession: "Foodie",
          date: "9th Oct, 2018",
          rating: 5,
          review:
            "Great spot. I can tell the food is fresh. Seriously, you NEED to try their iced coffee or iced tea. It's freaking CRAZY GOOD. Very sweet, but delicious. The food is great too, the pineapple fried rice and soups are amazing. Keep it coming, guys!"
        },
        {
          name: "Cindy H.",
          img: "https://randomuser.me/api/portraits/women/96.jpg",
          profession: "Journalist",
          date: "7th Oct, 2018",
          rating: 5,
          review:
            "Every time we've come to Wild Tiger we've been impressed.  The servers are friendly, hospitable, and helpful. The atmosphere is comfortable and decorated nicely without being over done. Food is delicious. We've never had anything we haven't liked. We've been to many Thai restaurants, and the Wild Tiger consistently has great food."
        }
      ],
      activeTab: 0
    };
  }

  generateCarousel = () => {
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
              <div className="col-10 offset-1">
                <div className="author">
                {/* TODO: Create your own Stars Rating UI */}
                  <div className="author__rating">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                  </div>
                  <img
                    className="author__image"
                    src={testimony.img}
                    alt="Irma Willis"
                  />
                  <div className="author__details">
                    <span className="author__name">
                      {testimony.name} | {testimony.profession}
                    </span>
                    <span className="author__date">{testimony.date}</span>
                  </div>
                </div>

                <p className="author__testimony">
                  <span className="quote quote-start">
                    <img src={quoteStart} alt="quote start" />
                  </span>
                  {testimony.review}
                  <span className="quote quote-end">
                    <img src={quoteEnd} alt="quote end" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  setTab = event => {
    // console.log(event.target.dataset.index);
    const { index } = event.target.dataset;
    this.setState({
      activeTab: +index
    });
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

  componentDidMount = () => {
    this.carouselInterval = setInterval(() => {
      this.setState(prevState => ({
        activeTab: (prevState.activeTab + 1)%prevState.testimonies.length
      }));
    }, 5000);
  };

  componentWillUnmount = () => {
    clearInterval(this.carouselInterval);
  }

  render() {
    var __sliderStyles = {
      // marginLeft: `${-100 * this.state.activeTab}%`,
      transform: `translateX( ${(-100 / this.state.testimonies.length) *
        this.state.activeTab}% )`,
      width: `${100 * this.state.testimonies.length}%`
    };

    return (
      <>
        <div className="carousel">
          {/* <div className="carousel__slider"> */}
          <div className="carousel__slider" style={__sliderStyles}>
            <this.generateCarousel />
          </div>
          <div className="carousel__controls">
            <this.generateControls />
          </div>
        </div>
        {/* TODO: Add Next, Previous Buttons */}
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
