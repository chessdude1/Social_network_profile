import Experience_post from './Experience_profile/Experience_post'
import './Experience_wall.css'

const Experience_wall = () => {
  return (
    <div className='Experience_profile_block'>
      <p className='Experience_title'>Experience</p>
      <Experience_post userFirstName='Dima' userSurname='Nepomnachiy'/> 
    </div>
  );
};

export default Experience_wall;
