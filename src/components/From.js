import "./FromStyle.css";

import React from "react";

const From = () => {
  return (
    <div className="from">
      <form>
        <lable>तुमचे नाव :</lable>
        <input type="text"></input>

        <lable> तुमचा पत्ता :</lable>
        <input type="text"></input>

        <lable> ई-मेल आय.डी :</lable>
        <input type="text"></input>

        <lable>फोन नंबर :</lable>
        <input type="text"></input>

        <lable> तुम्ही खरेदी करू इच्छित असलेल्या औजाराचे नाव :</lable>
        <input type="text"></input>

        <button className="btn-non">नोंदणी पूर्ण करा </button>
      </form>
    </div>
  );
};

export default From;
