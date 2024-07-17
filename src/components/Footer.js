import "./FooterStyle.css";

import React from "react";

import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={60}
                style={{
                  color: "#fff",
                  marginLeft: "1rem",
                }}
              />
            </h4>
            <p>:</p>
            <div>
              <p>
                फॅक्टरी पत्ता: प्लॉट नंबर . डी. ८७ माळेगाव एम आय डी सी,सिन्नर,
                जि नाशिक.
              </p>

              <p>
                शोरूम : आहेर गाव पाचोरे वणी फाटा, मुंबई-आग्रा हाइवे,पिंपळगाव
                बसवंत, ता निफाड, जि नाशिक.
              </p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={60}
                style={{
                  color: "#fff",
                  marginLeft: "1rem",
                }}
              />
            </h4>
            <p>:</p>
            <div>
              <p>८९५६५७९३३९ / ८४८४९८००३०</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <h1>आव्हाड इंजिनीअरिंग प्रा.लि.</h1>
            <p>सर्व प्रकारचे शेती औजारांचे निर्माते..!</p>
          </div>
          <div className="social">
            <h4>
              <FaFacebook
                size={60}
                style={{ color: "#fff", marginRight: "4rem" }}
              />
              <FaInstagram
                size={60}
                style={{ color: "#fff", marginRight: "4rem" }}
              />
              <FaWhatsapp
                size={60}
                style={{ color: "#fff", marginRight: "8rem" }}
              />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
