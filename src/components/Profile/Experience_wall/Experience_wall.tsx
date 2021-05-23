import Experience_post_container from './Experience_profile/Experience_post_container'
import './Experience_wall.css'

const Experience_wall = () => {
  return (
    <div className='Experience_profile_block'>
      <p className='Experience_title'>Experience</p>
      <Experience_post_container /> 
    </div>
  );
};

export default Experience_wall;
