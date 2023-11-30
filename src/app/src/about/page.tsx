import { FaReact, FaLaravel } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

export default function About() {
    return (
        <section>
            <div className="m-auto w-3/5 pt-20 text-white">
                <h1 className="mb-2">
                    <span className="text-2xl">Hi,</span> I&apos;m <span className="text-xl">Soe Moe Htet</span>, the <span className="text-xl">developer</span> of this web.</h1>
                <h2 className="mb-5">I&apos;m a <span className="text-2xl">fullstack web developer</span> who utlize <FaReact style={{ display: "inline", color: "#5ED3F3"}}/> React.js and <IoLogoVue style={{ display: "inline", color: "#147f4b"}}/>Vue.js for seamless Ui/Ux and <FaLaravel style={{ display: "inline", color: "#F9322C"}}/> Laravel and <TbBrandNextjs style={{ display: "inline", color: "#000"}}/> next.js for backend.</h2>
                <h2 className="my-5 py-5"><span className="text-2xl">Let&apos;s</span> explore this web.</h2>
                <p className="pt-3">This web meets <a href="https://openweathermap.org/api" className="text-[#B0CBE8]">open weather api.</a>
                <br />I cooked this web for 4 days using nextjs. <span className="text-xl">And...</span>
                <br />Next.js got Framer-Motion, React Icons, React-Router-Dom, React-Redux-Toolkit, etc.</p>
                <h5 className="mt-20 text-xl text-center">Thanks for visiting!</h5>
            </div>
        </section>
    )
}