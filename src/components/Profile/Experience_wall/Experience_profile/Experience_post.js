import "./Experience_post.css"

const Experience_post = (props) => {
    return ( <div className='Experience_post_block'>
        <div className='Experience_post_pic'>

        </div>
        <div className='Experience_post_description'>
            {props.userFirstName} <br/>
            {props.userSurname}
           <h1>UI/UX Designer</h1> 
           <p>2017 - 2018</p> 
        </div>
    </div>
        
    )
}

export default Experience_post;