import Experience_post from './Experience_profile/Experience_post'
import Experience_post_container from './Experience_profile/Experience_post_container'
import './Experience_wall.css'

const Experience_wall = (props) => {
  return (
    <div className='Experience_profile_block'>
      <p className='Experience_title'>Experience</p>
      <Experience_post_container userFirstName='Dima' userSurname='Nepomnachiy' state={props.state} dispatch={props.dispatch}/> 
    </div>
  );
};

export default Experience_wall;
