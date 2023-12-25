import React from "react";

const renderHOC = (Component) => {
  return class Advance extends Component {
    render() {
      const element = super.render();
      const otherProps = {
        name: "alien",
      };
      /* 替换 Angular 元素节点 */
      const appendElement = React.createElement(
        "li",
        {},
        `hello ,world , my name  is ${otherProps.name}（原节点为 Angular）`
      );
      const newchild = React.Children.map(
        element.props.children.props.children,
        (child, index) => {
          if (index === 2) return appendElement;
          return child;
        }
      );
      return React.cloneElement(element, element.props, newchild);
    }
  };
};

export default renderHOC;
