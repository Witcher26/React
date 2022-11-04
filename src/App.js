import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import Image from "./components/Image"
import Users from "./components/Users"
import AddUser from "./components/AddUser"

import logo from './img/logo.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: 1,
          firstname: 'Bob',
          lastname: 'Marley',
          bio: 'Lorem',
          age: 40,
          isHappy: true
        },
        {
          id: 2,
          firstname: 'Johm',
          lastname: 'Doe',
          bio: 'Not a lorem',
          age: 22,
          isHappy: false
        }
      ],
      helpText: "help text!!",
      pressYourEnter: "pressYourEnter!",
      userData: ""
    }
    this.inputClick = this.inputClick.bind(this)
    this.AddUser = this.AddUser.bind(this)
    this.deleleteUser= this.deleleteUser.bind(this)
    this.editUser= this.editUser.bind(this)
  }

  componentDidMount(prevPro) {
    if (this.state.helpText !== "Help")
      console.log("Some")
  }


  render() {
    return (<div className="header">
      <Header title="Список пользователей" author="Zvezdilin IL" />
      <Header name="Igor" lastName=" Zvezdilin" />
      <Content name="Компонент Content" />
      <h1>{this.state.helpText}</h1>
      <h2>{this.state.userData}</h2>
      <input placeholder={this.state.pressYourEnter}
        onChange={(event) => this.setState({ userData: event.target.value })}
        onClick={this.inputClick} onMouseEnter={this.mouseOver} />
      <p>{this.state.helpText == "help text!" ? "Yes" : "No"}</p>
      <Image image={logo} />
      {/* <img src={logo}/> */}
      <main>
        <Users users={this.state.users} onEdit={this.editUser} onDelete = {this.deleleteUser}/>
      </main>
      <aside>
        <AddUser onAdd={this.AddUser} />

      </aside>
    </div>)
  }

  inputClick() {
    this.setState({ helpText: "Changed in helpText" })
    this.setState({ pressYourEnter: "Changed in pressYourEnter" })
    console.log("Clicked")
  }
  mouseOver() { console.log("Mouse Over") }
  AddUser(user) {
    const id = this.state.users.length+1;
    this.setState({ users: [...this.state.users, { id, ...user }] })
  }

  deleleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user){
    let allUsers = this.state.users
    allUsers[user.id-1] = user

    this.setState({users: []}, ()=>{
      this.setState({users: [...allUsers]})
    })
  }


}

export default App

