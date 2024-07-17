import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

import BgImg from "../components/Bg";

const About = () => {
  return (
    <div>
      <Navbar />
      <BgImg
        heading="
व्यवसाय सुरु करण्याआधी"
        text="नवीन व्यवसाय सुरू करणे (starting a new business) हा एक रोमांचक आणि आव्हानात्मक प्रयत्न आहे. तुम्ही तुमच्या आयुष्यातील उद्योजकीय स्वप्नाचा पाठपुरावा करत असाल किंवा नवीन उद्योगात पाऊल टाकत असाल तरीही, काळजीपूर्वक नियोजन आणि अंमलबजावणीसह (Planning and Execution) प्रक्रियेकडे जाणे महत्त्वाचे आहे. तुम्हाला तुमच्या व्यवसायाच्या सुरुवातीच्या टप्प्यात मार्ग दाखवण्यात मदत करण्यासाठी, आम्ही एक सर्वसमावेशक चेकलिस्ट संकलित केली आहे. ज्यामध्ये तुम्हाला तुमचा व्यवसाय सुरू करण्यापूर्वी विचार करणे आवश्यक असलेल्या प्रमुख गोष्टींचा समावेश आहे. चला तर मग आपण जाणून घेऊयात नवीन व्यवसाय सुरु करण्यापूर्वी (things you need to start a business) काय काय करायला हवे."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
