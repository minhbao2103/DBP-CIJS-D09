import { Component } from "react";
class NavigationItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <ul className="mini">{this.props.name}
            <li><a href="#">abc</a></li>
            <li><a href="#">123</a></li>
            <li><a href="#">111</a></li>
            </ul>
        )
    }
}

export {
    NavigationItem,
}