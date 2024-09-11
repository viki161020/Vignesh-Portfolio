// "use client";
// // @flow strict
// import { isValidEmail } from '@/utils/check-email';
// import emailjs from '@emailjs/browser';
// import axios from 'axios';
// import { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { TbMailForward } from "react-icons/tb";
// import { toast } from 'react-toastify';

// function ContactWithCaptcha() {
//   const [input, setInput] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [captcha, setCaptcha] = useState(null);
//   const [error, setError] = useState({
//     email: false,
//     required: false,
//   });

//   const checkRequired = () => {
//     if (input.email && input.message && input.name) {
//       setError({ ...error, required: false });
//     }
//   };

//   // const handleSendMail = async (e) => {
//   //   e.preventDefault();
//   //   if (!captcha) {
//   //     toast.error('Please complete the captcha!');
//   //     return;
//   //   };

//   //   if (!input.email || !input.message || !input.name) {
//   //     setError({ ...error, required: true });
//   //     return;
//   //   } else if (error.email) {
//   //     return;
//   //   } else {
//   //     setError({ ...error, required: false });
//   //   };

//   //   const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
//   //   const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
//   //   const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

//   //   try {
//   //     const res = await emailjs.send(serviceID, templateID, userInput, options);
//   //     const teleRes = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, userInput);

//   //     if (res.status === 200 || teleRes.status === 200) {
//   //       toast.success('Message sent successfully!');
//   //       setUserInput({
//   //         name: '',
//   //         email: '',
//   //         message: '',
//   //       });
//   //       setCaptcha(null);
//   //     };
//   //   } catch (error) {
//   //     toast.error(error?.text || error);
//   //   };
//   // };

//   const handleSendMail = async (e) =>{
//     e.preventDefault();

//     emailjs
//       .sendForm('service_9y3ia4j', 'template_aqpbzo3', form.current, {
//         publicKey: 'vO9B2zWg0sjDpSYQ-',
//       })
//       .then(
//         () => {
//           toast.success("Email Received, Thank You!")
//           console.log('SUCCESS!');
//           setsuccess(true)
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//           setsuccess(false)
//           toast.error("Oops!, Something went wrong")
//         },
//       );
//   }
//   return (
//     <div className="">
//       <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
//         Contact with me
//       </p>
//       <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
//         <p className="text-sm text-[#d3d8e8]">
//           {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
//         </p>
//         <div className="mt-6 flex flex-col gap-4">
//           <div className="flex flex-col gap-2">
//             <label className="text-base">Your Name: </label>
//             <input
//               className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
//               type="text"
//               maxLength="100"
//               required={true}
//               onChange={(e) => setInput({ ...input, name: e.target.value })}
//               onBlur={checkRequired}
//               value={input.name}
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-base">Your Email: </label>
//             <input
//               className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
//               type="email"
//               maxLength="100"
//               required={true}
//               value={input.email}
//               onChange={(e) => setInput({ ...input, email: e.target.value })}
//               onBlur={() => {
//                 checkRequired();
//                 setError({ ...error, email: !isValidEmail(input.email) });
//               }}
//             />
//             {error.email &&
//               <p className="text-sm text-red-400">Please provide a valid email!</p>
//             }
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-base">Your Message: </label>
//             <textarea
//               className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
//               maxLength="500"
//               name="message"
//               required={true}
//               onChange={(e) => setInput({ ...input, message: e.target.value })}
//               onBlur={checkRequired}
//               rows="4"
//               value={input.message}
//             />
//           </div>
//           <ReCAPTCHA
//             sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//             onChange={(code) => setCaptcha(code)}
//           />
//           <div className="flex flex-col items-center gap-2">
//             {error.required &&
//               <p className="text-sm text-red-400">
//                 Email and Message are required!
//               </p>
//             }
//             <button
//               className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
//               role="button"
//               onClick={handleSendMail}
//             >
//               <span>Send Message</span>
//               <TbMailForward className="mt-1" size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactWithCaptcha;

"use client";
import React, { useRef, useState } from 'react';
import styled from "styled-components";
// import MapChart from "./MapComponent.jsx";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
// import instagram from "../../../public/svg/instagram.svg";
// import gmail from "../../../public/svg/gmail.svg";
// import linkedin from "../../../public/svg/linkedin.svg";
// import Link from 'next/link.js';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  flex: display;
  justify-content: center;
  color:white;
`;
  
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction:column;
    justify-content:center;
    justify-content: space-between;
    padding-top:130px;
  }
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display:none;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Title = styled.h1`
  font-size:30px;
  font-weight:200;
`;

const Form = styled.form`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: flex-end;
  gap:25px;
  padding:20px;
  border-radius:10px;
  // background:rgb(255,255,255,0.1);
  // box-shadow: 20px 18px 15px rgba(139, 80, 199, 0.8);
  backdrop-filter: blur(20px);
@media only screen and (max-width: 768px) {
  justify-content: center;
  gap:25px;
  padding:20px;
}
`;

const Input = styled.input`
  width:400px;
  padding:10px;
  border:1px solid #8b50c7;
  border-radius:5px;
  color:black;
  background-color:white;
@media only screen and (max-width: 768px) {
  width:300px;
}
`;

const TextArea = styled.textarea`
  width:400px;
  padding:20px;
  border:1px solid #8b50c7;
  border-radius:5px;
  color:black;
  background-color:white;
@media only screen and (max-width: 768px) {
  width:300px;
}
`;

const Button = styled.button`
  width:400px;
  background-color:#8b50c7;
  border-radius:5px;
  height:40px;
@media only screen and (max-width: 768px) {
  width:300px;
}
`;

const Footer = styled.div`
display:none;
@media only screen and (max-width: 768px) {
  display:flex;
  width:100%;
  justify-content:flex-start;
  flex-direction:row;
  background-color:rebeccapurple;
}
`;

const SocialList = styled.div`
@media only screen and (max-width: 768px) {
  display: flex;
  background-color:rebeccapurple;
  flex-direction:column;
  width:100%;
  justify-content: flex-start;
  gap:10px;
  padding-top:10px;
  padding-left:10px;
  padding-bottom:10px;
}
` ;

const SocialLink = styled.img`
@media only screen and (max-width: 768px) {
  width:20px;
  height:20px;
}
` ;

const SocialLeft = styled.div`
@media only screen and (max-width: 768px) {
  padding-top:10px;
  font-size:10px;
  width:110px;
  display:flex;
  flex-direction:column;
  gap:16px;
}
`;

const NumberEnd = styled.span`
`;

const GmailEnd = styled.span`
`;

const ContactWithCaptcha = ({contactRef}) => {
  const form = useRef();

  const [success, setsuccess] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9y3ia4j', 'template_aqpbzo3', form.current, {
        publicKey: 'vO9B2zWg0sjDpSYQ-',
      })
      .then(
        () => {
          toast.success("Email Received, Thank You!")
          console.log('SUCCESS!');
          setsuccess(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
          setsuccess(false)
          toast.error("Oops!, Something went wrong")
        },
      );
  };

  return (
    <Section ref={contactRef}>
      <Container>
        <Left>
          <Form ref={form} onSubmit={sendEmail}>
            <Title>Contact</Title>
            <Input placeholder="Name" name = "name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Message..."  name="message"/>
            <Button type="submit">SEND</Button>
          </Form>
          <Footer>
            {/* <SocialList>
              <Link href="https://www.linkedin.com/in/shathish-b-a6102920b/" target='_blank' className='flex flex-row gap-2 items-center'>
                <SocialLink src={linkedin?.src}/> Linkedin
              </Link>
              <Link href="mailto:shathishb065@gmail.com" target='_blank' className='flex flex-row gap-2 items-center'>
                <SocialLink src={gmail?.src}/> Gmail
              </Link>
              <Link href="https://www.instagram.com/i_shathish_b" target='_blank' className='flex flex-row gap-2 items-center'>
                <SocialLink src={instagram?.src}/> Instagram
              </Link>
            </SocialList> */}
            <SocialLeft>
            <NumberEnd>
              +91-9945076297
            </NumberEnd>
            <GmailEnd>
              shathishb065@gmail.com
            </GmailEnd>
            </SocialLeft>
          </Footer>
        </Left>
        <Right>
          {/* <MapChart/> */}
        </Right>
      </Container>
    </Section>
  );
};

export default ContactWithCaptcha;