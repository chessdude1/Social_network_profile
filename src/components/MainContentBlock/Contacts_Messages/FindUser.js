import { Formik, Form, Field} from 'formik';
import React from "react";

const UsersSearchFormValidate = (values) => {
    const errors = {}
    return errors
}


export const FindUser = (props) => {
    let submit = (values) =>{
        props.OnFilterChanged(values.find)
      }
    return ( <div>
          <Formik
         initialValues={{ find: 'Enter Person Name' }}
         validate={UsersSearchFormValidate}
         onSubmit={ submit}>
           <Form>
             <Field type="textarea" name="find" />
             <button type="submit" >
               Find
             </button>
           </Form>
       </Formik>
       </div>
       )
  };