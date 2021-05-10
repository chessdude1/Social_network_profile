import { connect } from "react-redux"
import { Redirect } from "react-router"
import {Field, InjectedFormProps, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../utilites/validators"
import { InputLogin } from "../../common/FormsControl"
import {LoginThunkCreator, SetAuthUserData} from '../../redux/auth_reducer'


const maxlength = maxLengthCreator(100)

type ownProps = {
    captchaURL : string | null
}
type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, ownProps> & ownProps> = (props) => {
    return( <form onSubmit={props.handleSubmit}>
         <div>
             <Field placeholder={'Login'} name={'email'} validate = {[required, maxlength]} component={InputLogin}></Field>
         </div>
         <div>
            <Field placeholder={'Password'} name={'password'} validate = {[required, maxlength]} component={InputLogin} type={'password'}></Field>
         </div>
         <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'}></Field>
         </div>
         <div>
        {props.error && <div className ='textError'>
            {props.error}
        </div>}
        <div>
        {props.captchaURL && <img src={props.captchaURL}></img>}
        </div>
        <div>
        {props.captchaURL && <Field placeholder={'Enter symbols'} component={'input'} name={'captcha'} ></Field>}
        </div>
             <button>Login</button>
         </div>
     </form>)
}




const LoginReduxForm = reduxForm<LoginFormValuesType, ownProps>({
    form: 'login'
})(LoginForm)

type MapStatePropsType = {
    captchaURL : string | null
    isAuth : boolean
    LoginThunkCreator : (email : string, password : string, rememberMe : boolean, captcha : string) => void
}

type MapDispatchPropsType = {
    LoginThunkCreator : (email : string, password : string, rememberMe : boolean, captcha : string) => void
}

export const Login: React.FC<MapStatePropsType > = (props) => {
    const onSubmit = (formData : any) => {
        props.LoginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    
    if (props.isAuth) {
        return (<Redirect to={'/Profile/'} />)
    }

    return( <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    )
}
