
import Lazyloading from "../../template/Lazyloading";
import a from '../../asset/images/who-we-are.webp'
import b from '../../asset/images/xpert1.webp'
import c from '../../asset/images/xpert2.webp'
import './whoWeAre.css'


const WhoWeAre = () => {
  return (
    <div className="container who-we-are">
      <div className="center">
        <h1>RELATED COURSES</h1>
        <p> Who We Are at IYSI</p>
        <div className="who-we-are-section">
          <div className="left">
            <Lazyloading className="xpert" src={b} alt="expert1"/>
            <h1 data-aos="zoom-in" data-aos-once="true">Meet Our Passionate Team of Experts</h1>
            <p data-aos="zoom-in" data-aos-once="true">
              Our team is composed of experienced architects, educators, and
              industry experts who are passionate about fostering the next
              generation of architectural talent.
            </p>
          </div>
          <div className="right">
          
            <h1  data-aos="zoom-in" data-aos-once="true">Revolutionizing Architectural Education and Practice at IYSI</h1>
            <p data-aos="zoom-in" data-aos-once="true">At IYSI, we transform the way architecture is taught and practiced. We offer comprehensive training programs on essential architectural software, provide a platform for community building, and advocate for a more inclusive industry.</p>
          <div>
          <Lazyloading alt="who we are" src={c}/>
          <Lazyloading alt="who we are" src={a}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
