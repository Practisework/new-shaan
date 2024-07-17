import "./HomeStyle.css";

import { Link } from "react-router-dom";

import BackgroundImg from "../assest/images/homeBackgroudImage.jpg";

import Culti from "../assest/images/1.png";
import Rota from "../assest/images/2.png";
import Palti from "../assest/images/3.png";
import Trolley from "../assest/images/4.png";

const Home = () => {
  return (
    <div className="home">
      <div className="bgimage">
        <img className="into-img" src={BackgroundImg} alt="BackgroundImg" />
      </div>

      <div className="para">
        <p>समजूतदार शेतकऱ्याची पहिली आवड</p>
        <h1> शान </h1>
        <h2>ॲग्रो</h2>
      </div>
      <div className="chitr">
        <img src={Culti} alt="Culti" />
        <img src={Rota} alt="Rota" />

        <div>
          <img src={Palti} alt="Palti" />
          <img src={Trolley} alt="Trolley" />
        </div>
      </div>
      <div className="rt">
        <Link to="/products" className="btn">
          औजारे बघा
        </Link>
      </div>
      <div className="lt">
        <Link to="contact" className="btn">
          संपर्क साधा
        </Link>
      </div>
    </div>
  );
};

export default Home;
