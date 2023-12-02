import { MdOutlinePersonPin } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaMapLocationDot,FaGithub  } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { indieFlower } from "@/app/fonts/fonts";

export default function Contact() {
    return (
        <section>
            <h1 className={[indieFlower.className, 'text-2xl text-center text-white pt-20'].join(' ')} style={{height: "20vh", color: '#B0CBE8'}}>Catch me up at</h1>
            <div className="flex justify-center pt-24" style={{height: "80vh"}}>
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