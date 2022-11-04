import React from "react"

class Image extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={this.props.image} />
      </div>
    )
  }
}

export default Image