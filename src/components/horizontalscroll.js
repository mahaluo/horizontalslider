import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './scroll.scss';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';
import image6 from '../assets/images/image6.jpeg';
import image7 from '../assets/images/image7.jpeg';
import image8 from '../assets/images/image8.jpeg';
 
// list of items
const list = [
  { name: 'image1', img: image1},
  { name: 'image2', img: image2},
  { name: 'image3', img: image3},
  { name: 'image4', img: image4},
  { name: 'image5', img: image5},
  { name: 'image6', img: image6},
  { name: 'image7', img: image7},
  { name: 'image8', img: image8},
];
 
// One item component
// selected prop will be passed
const MenuItem = ({selected, img}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >
    <img src={img} alt="artwork"></img>
    </div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
    return <MenuItem text={name} key={name} img={el.img} selected={selected} />;
  });
 
 
// const Arrow = ({ text, className }) => {
//   return (
//     <div
//       className={className}
//     >{text}</div>
//   );
// };
 
 
// const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
// const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'item1';
 
export class HorizontalScroll extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
        //   arrowLeft={ArrowLeft}
        //   arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}

          alignCenter={false}
          dragging={true}
          clickWhenDrag={false}
          scrollToSelected={false}
          hideArrows={false}
          hideSingleArrow={false}
          inertiaScrolling={false}
        />
      </div>
    );
  }
}