import { Component} from "react";
import "../Assets/StyleSheets/SignInForm.css";
class SignInForm extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            //khi dung classname="  " thi phải có css rồi
            <div classname="main">
                <h1>Đây là sign in form</h1>
                <h1>Đây là sign in form 2</h1>
                 
            </div>
        )
    }
}
export {
    SignInForm,
}

