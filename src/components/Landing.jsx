import Logo from '../assets/logo_lp.svg'
import Circle from '../assets/circle_lp.svg'
import CircleFilled from '../assets/filled_lp.svg'
// import Circle2 from '../assets/circle_circle.svg'
import Line from '../assets/line_lp.svg'
import a1 from '../assets/a1.svg'
import a2 from '../assets/a2.svg'
import dive from '../assets/dive_lp.svg'
import butt from '../assets/but_lp.svg'
import bigImg from '../assets/bigImg.svg'
import p1_lp from '../assets/p1_lp.svg'
import p2_lp from '../assets/p2_lp.svg'
import p3_lp from '../assets/p3_lp.svg'
import p4_lp from '../assets/p4_lp.svg'

import './Landing.css'
import AboutUs from './Aboutus/AboutUs'
import { NavLink } from 'react-router-dom'
const Landing = () => {
  return (
    <div className="lp">
      <nav className="lp_navbar">
        <div className="main_nav_lp">
          <img src={Logo} alt="logo" />
          <img src={Circle} alt="circle" />
          <img src={Circle} alt="circle" />
          <img src={Circle} alt="circle" />

          <div className="down_lp_nav">
            {/* <img className='Circle_ci' src={Circle2} alt="pic" /> */}
            <img className='gg_circle1' src={Circle} alt="circle" />
            <img src={CircleFilled}  className='gg_circle2' alt="circle" />

            <img className='Line_li' src={Line} alt="pic" />
          </div>
        </div> 
      </nav>
      <div className="down_lp_full">
        <div className="left_lp">
        <div className="imges_down_lp">
          <img className='g_circle1' src={Circle} alt="1" />
          <img className='g_circle2'src={CircleFilled} alt="1" />
          <img className='Lo l' src={CircleFilled} alt="2" />
          <img className='l' src={CircleFilled} alt="2" />
          <img className='l' src={CircleFilled} alt="2" />
          <img className='li' src={Line} alt="3" />
        </div>
        <h1>BIG-f.</h1>
        <div className="about_lp">
          <img className='a1' src={a1} alt="" />
          <img src={a2} className='a2' alt="" />
        </div>

<img src={dive} alt="" />

<div className="sign_buttons_lp">
<NavLink to='/login'>

  <button className='signin_lp'>
    <span className='sign_lp'>sign</span>
    <span className='in_lp'>in</span>
    <img src={butt} alt="" />
  </button>
</NavLink>
<NavLink to='/signup'>

    <button  className='signup_lp'>
    <span className='signu_lp'>sign</span>
    <span className='up_lp'>up</span>
    <img src={butt} alt="" />
  </button>
</NavLink>

</div>
        
        </div>
        <div className="right_lp">
        <div className="images">
          <img className='bigImg' src={bigImg} alt="" />
          <img src={p1_lp} alt="" />
          <img src={p2_lp} alt="" />
          <img src={p3_lp} alt="" />
          <img src={p4_lp} alt="" />
        </div>
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default Landing;

