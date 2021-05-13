import {Login} from './Login'
import { connect } from "react-redux"
import {LoginThunkCreator} from '../../redux/auth_reducer'
import { AppStateType } from '../../redux/redux-store'

type MapStatePropsType = {
    captchaURL : string | null,
    isAuth : boolean,
    userEmail : string | null
}
let mapStateToProps = (state : AppStateType) : MapStatePropsType => {
    return {
        userEmail : state.Auth.email,
        isAuth : state.Auth.isAuth,
        captchaURL : state.Auth.captchaUrl
    }
}
//@ts-ignore
let LoginContainer = connect(mapStateToProps, {LoginThunkCreator})(Login)

export default LoginContainer


