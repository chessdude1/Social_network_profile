import { connect } from "react-redux"
import { Redirect } from "react-router"
import {Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../utilites/validators"
import { InputLogin } from "../../common/FormsControl"
import {LoginThunkCreator, SetAuthUserData} from '../../redux/auth_reducer'


const maxlength = maxLengthCreator(100)

const LoginForm = (props) => {
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
             <button>Login</button>
         </div>
     </form>)
}




const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export const Login = (props) => {
    const onSubmit = (formData) => {
        props.LoginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        debugger
        return (<Redirect to={'/Profile/'} />)
    }

    return( <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
