import { Component } from "react";
import {NavigationItem} from './NavigationItem';
import "../components/Navigation.css";
class Navigation extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="menu">
                <NavigationItem name ="Thương hiệu"/>
                <NavigationItem name = "Nam"/>
                <NavigationItem name = "Nữ"/>
                <NavigationItem name = "Dịch vụ"/>
                <NavigationItem name = "Liên hệ"/>
                
            </div>
        )
    }
}

export {
    Navigation,
}