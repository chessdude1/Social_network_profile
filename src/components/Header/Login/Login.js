import {Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
    return( <form onSubmit={props.handleSubmit}>
         <div>
             <Field placeholder={'Login'} name={'Login'} component={'input'}></Field>
         </div>
         <div>
            <Field placeholder={'Password'} name={'Password'} component={'input'}></Field>
         </div>
         <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'}></Field>
         </div>
         <div>
             <button>Login</button>
         </div>
     </form>)
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return( <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}