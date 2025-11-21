import React from 'react';
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import gps_icon from '../../assets/gps-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {
    const [result, setResult]=React.useState("");
    const onsubmit=async(event)=>{
        event.preventDefault();
        setResult("Sending...")
        const formData=new FormData(event.target);
        formData.append("access_key","7e44f5da-383a-4097-86b3-cedd25d1755c");
        const res=await fetch("https://api.web3forms.com/submit",{
             method: "POST",
             body: formData
        }).then((res)=>res.json());

        if(res.success){
            setResult(res.message);
            event.target.reset()
        }else{
            setResult(res.message);
        }
    }
  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Sending a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rerum eveniet amet! Sint, maiores delectus voluptatum, error iste repellat repudiandae, quis adipisci assumenda ducimus autem iusto quaerat nemo laudantium ut?</p>
            <ul>
                <li><img src={mail_icon} alt="" />tolashamstitches@gmailcom</li>
                <li><img src={phone_icon} alt="" />(+234) 8188546010</li>
                <li><img src={gps_icon} alt="" />77, Unilag Estate, Ginti,Ikorodu, Lagos, Nigeria</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onsubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Mobile Number' required />
                <label>Write Your Message</label>
                <textarea name="messge" id="" rows="6" placeholder='How can we help you' required></textarea>
                <button className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" className='whitearrow'/></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  );
}

export default Contact;
