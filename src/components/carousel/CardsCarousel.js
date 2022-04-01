import React, { PropTypes } from "react";
import MovieCard from "../card/Card";
import TryCard from "../card/TryCard";
import Card from "../card/TryCard";
import "./CardsCarousel.css";

class CarouselImage extends React.Component {
  constructor(props) {
    console.log("vvvv", props.movie);
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: "",
    };
    // this.rightClick = this.moveRight.bind(this);
    // this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    var items = [];
    var level;
    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        <Item key={index} id={this.state.items[index]} level={level} />
      );
    }
    return items;
  }

  // moveLeft() {
  //   var newActive = this.state.active;
  //   newActive--;
  //   this.setState({
  //     active: newActive < 0 ? this.state.items.length - 1 : newActive,
  //     direction: "left",
  //   });
  // }

  // moveRight() {
  //   var newActive = this.state.active;
  //   this.setState({
  //     active: (newActive + 1) % this.state.items.length,
  //     direction: "right",
  //   });
  // }

  render() {
    return (
      <div id="carousel" className="noselect">
        <div>
          <p style={{ color: "black" }}>Recent added movies</p>
        </div>
        <div className="arrow arrow-left" onClick={this.leftClick}>
          <i className="fi-arrow-left"></i>
        </div>
        {/* <ReactCSSTransition transitionName={this.state.direction}> */}
        <div>{this.generateItems()}</div>
        {/* </ReactCSSTransition> */}
        <div className="arrow arrow-right" onClick={this.rightClick}>
          <i className="fi-arrow-right"></i>
          <div className="cards-container">
            {/* <MovieCard movie={this.props.movie} /> */}

            <TryCard />
            <TryCard />
            <TryCard />
            <TryCard />
          </div>
        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }

  render() {
    const className = "item level" + this.props.level;
    return <div className={className}>{this.props.id}</div>;
  }
}

export default CarouselImage;
