import './FormsControl.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return ( <div >
        <textarea className={hasError && "formControl"} {...input} {...props}> </textarea>
        <div className='textError'>
         {hasError && <span>{meta.error}</span> }
        </div>
    </div>)
}

export const InputExperience = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return ( <div >
        <textarea className={hasError && "formControl"} {...input} {...props}> </textarea>
         <div className='textError'>
         {hasError && <span>{meta.error}</span> }
        </div>
    </div>)
}


export const InputLogin = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return ( <div >
        <textarea className={hasError && "formControl"} {...input} {...props}> </textarea>
        <div className='textError'>
         {hasError && <span>{meta.error}</span> }
        </div>
    </div>)
}
