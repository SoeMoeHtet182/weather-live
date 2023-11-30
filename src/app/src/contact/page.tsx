import { MdOutlinePersonPin } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaMapLocationDot,FaGithub  } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function Contact() {
    return (
        <section>
            <h1 className="text-2xl text-center text-white pt-20" style={{height: "10vh"}}>Catch me up at</h1>
            <div className="flex justify-center items-center" style={{height: "80vh"}}>
                <ul style={{color: "#B0CBE8"}}>
                    <li><MdOutlinePersonPin style={{display: "inline"}}/> Soe Moe Htet</li>
                    <li><FaPhoneSquareAlt style={{display: "inline"}}/> 09-798819540</li>
                    <li><FaMapLocationDot style={{display: "inline"}}/> North Dagon, Yangon</li>
                    <li><CiMail style={{display: "inline"}}/> soemoehtet18203@gmail.com</li>
                    {/* <li><FaGithub style={{display: "inline"}}/> soemoehtet</li> */}
                </ul>
            </div>
        </section>
    )
}