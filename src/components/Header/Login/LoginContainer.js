import {Login} from './Login'
import { connect } from "react-redux"
import {LoginThunkCreator} from '../../redux/auth_reducer'

let mapStateToProps = (state) => {
    return {
        userEmail : state.Auth.email,
        isAuth : state.Auth.isAuth,
        captchaURL : state.Auth.captchaUrl
    }
}

let LoginContainer = connect(mapStateToProps, {LoginThunkCreator})(Login)

export default LoginContainer


