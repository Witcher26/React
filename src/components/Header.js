import React from "react"
import Button from "./Button"

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <header>{this.props.title}
        <Button />
        </header>

        <header>{this.props.author}</header>
        <header>{this.props.name}</header>
        <header>{this.props.lastName}</header>

      </div>
    )
  }
}

export default Header