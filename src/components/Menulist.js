import React, { Component } from "react";

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myRef = React.createRef(); // Create a ref object
  }

  componentDidMount = () => {
    // console.log("Menulist.js mounted");
    // if(this.props.fixScroll)
    //   this.props.fixScroll();
  };

  componentDidUpdate = () => {
    // console.log("Menulist.js updated");
    // console.log(this.myRef.current.offsetTop);
    // window.scrollTo(0, this.myRef.current.offsetTop);
  };

  render() {
    return (
      <>
        <div className="container foodmenu" ref={this.myRef}>
          <div className="foodmenu__header">
            <div className="foodmenu__category">{this.props.category}</div>
            {this.props.data.custom_text && (
              <div className="foodmenu__custom-text">
                {this.props.data.custom_text}
              </div>
            )}
          </div>
          <div className="foodmenu__grid">
            {this.props.data.custom_menu && (
              <div className="foodmenu__custom_menu foodmenu__item">
                {this.props.data.custom_menu.map(menu => {
                  return (
                    <div className="foodmenu__custom_menu-row" key={menu.item}>
                      <span>{menu.item}</span>
                      <span style={{ alignSelf: "flex-end" }}>
                        {menu.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
            {this.props.data.items.map(item => {
              return (
                <div
                  className="foodmenu__item new"
                  key={this.props.category + item.name + item.description }
                >
                  <div className="foodmenu__item__heading">
                    <span>{item.name}</span>
                    {/* Option: 1 */}
                    {item.custom_price && <span>{item.custom_price}</span>}
                    {item.price && (
                      <div>
                        {item.original_price && <s>{item.original_price}</s>}
                        <span className="happy-price">{item.price}</span>
                      </div>
                    )}
                    {/* Option: 2 */}
                    {/* {item.price && <span>{item.price} {item.custom_price && <span>{item.custom_price}</span>}</span>} */}
                  </div>
                  {item.description && (
                    <p className="foodmenu__item__description">
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default MenuList;

// const Menulist = props => {
//     // console.log(props);
//   return (
//     <>
//       <div className="container foodmenu">
//         <div className="foodmenu__category">{props.category}</div>
//         <div className="foodmenu__grid">
//           {props.list.map(item => {
//             return (
//               <div className="foodmenu__item new" key={props.category + item.name}>
//                 <div className="foodmenu__item__heading">
//                   <span className="foodmenu__item__heading-name">
//                     {item.name}
//                   </span>
//                   <span className="foodmenu__item__heading-price">
//                     ${item.price}
//                   </span>
//                 </div>
//                 <p className="foodmenu__item__description">
//                   {item.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menulist;
