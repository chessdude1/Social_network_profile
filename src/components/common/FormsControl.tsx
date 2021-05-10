import './FormsControl.css'
import {Field, reduxForm, WrappedFieldInputProps } from "redux-form"

type FormControlParamsType = {
    input : any // WrappedFieldInputProps
    meta : {
        touched : boolean,
        error : string 
    }
}

type FormControlType = (params : FormControlParamsType) => React.ReactNode

export const Textarea :  FormControlType = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return ( <div >
        <textarea className={hasError && "formControl"} {...input} {...props}> </textarea>
        <div className='textError'>
         {hasError && <span>{meta.error}</span> }
        </div>
    </div>)
}

export const InputExperience :  FormControlType = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return ( <div >
        <textarea className={hasError && "formControl"} {...input} {...props}> </textarea>
         <div className='textError'>
         {hasError && <span>{meta.error}</span> }
        </div>
    </div>)
}


export const InputLogin :  FormControlType = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return ( <div >
        <textarea className={hasError && "formControl"} {...input} {...props}> </textarea>
        <div className='textError'>
         {hasError && <span>{meta.error}</span> }
        </div>
    </div>)
}




// export const createField = (placeholder, namee, validators, component,  props = {}, text= "") => {
//     <div>
//         <Field placeholder={placeholder} name={namee}
//         validate={validators}
//         component={component} 
//         {...props}/> {text}
//     </div>
// }
