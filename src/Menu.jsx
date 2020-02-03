import React, { Component } from "react";
import InfinityMenu from "react-infinity-menu";
import "react-infinity-menu/src/infinity-menu.css";
import FirstMenu from "./FirstMenu.jsx";

let tree = [
  {
    name: "menu1" /*require*/,
    id: 1 /*require*/,
    isOpen: true /*require*/,
    customComponent: FirstMenu,
    children: [
      {
        name: "submenu1",
        id: 1,
        isOpen: true,
        customComponent: FirstMenu,
        children: [
          {
            name: "item1-1",
            id: 1
          },
          {
            name: "item1-2",
            id: 2
          }
        ]
      }
    ]
  }
];

class Menu extends React.Component {
  onNodeMouseClick(event, tree, node, level, keyPath) {
    this.setState({
      tree: tree
    });
  }

  onLeafMouseClick(event, leaf) {
    console.log(leaf.id); // Prints the leaf id
    console.log(leaf.name); // Prints the leaf name
  }

  onLeafMouseUp(event, leaf) {
    console.log(leaf.id); // Prints the leaf id
    console.log(leaf.name); // Prints the leaf name
  }

  onLeafMouseDown(event, leaf) {
    console.log(leaf.id); // Prints the leaf id
    console.log(leaf.name); // Prints the leaf name
  }

  render() {
    return (
      <InfinityMenu
        tree={this.state.tree}
        onNodeMouseClick={this.onNodeMouseClick}
        onLeafMouseClick={this.onLeafMouseClick} /*optional*/
        onLeafMouseDown={this.onLeafMouseDown} /*optional*/
        onLeafMouseUp={this.onLeafMouseUp} /*optional*/
        maxLeaves={5} /*optional*/
      />
    );
  }
}

export default Menu;
