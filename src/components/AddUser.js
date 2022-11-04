import React from "react"
import Button from "./Button"

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render() {
        return (
            <form ref={(el) => this.clearMyform = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({ firstname: e.target.value })} />
                <input placeholder="Фамилия" onChange={(e) => this.setState({ lastname: e.target.value })} />
                <textarea placeholder="Био" onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder="Возраст" onChange={(e) => this.setState({ age: e.target.value })} />
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked })} />
                <button type="button" onClick={() => {
                    this.clearMyform.reset()
                    this.userAdd = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        bio: this.state.bio,
                        age: this.state.bio,
                        isHappy: this.state.isHappy,
                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd

                    )
                }
                }>
                    Добавить</button>
            </form>
        )
    }
}


export default AddUser