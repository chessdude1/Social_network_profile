import { Formik, Form, Field} from 'formik';
import React from "react";
import { useSelector } from 'react-redux';
import { GetUsersFilter } from '../../redux/selectors/Contact_messages_reducer';

const UsersSearchFormValidate = (values) => {
    const errors = {}
    return errors
}


export const FindUser = (props) => {
    let submit = (values) =>{
        props.OnFilterChanged(values.find, values.friend)
      }
    let filter = useSelector(GetUsersFilter)
    debugger
    return ( <div>
          <Formik
          enableReinitialize
         initialValues={{ find: filter.name, friend: filter.friend }}
         validate={UsersSearchFormValidate}
         onSubmit={ submit}>
           <Form>
           <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
             <Field type="textarea" name="find" />
             <button type="submit" >
               Find
             </button>
           </Form>
       </Formik>
       </div>
       )
  };