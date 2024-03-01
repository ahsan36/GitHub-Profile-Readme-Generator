import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-24 md:mt-56">
        <div className="text-center mb-4">
            <div className="text-xl lg:text-2xl text-gray-600">

                {/* Made by Ahsan */}
                
                <span className="text-sky-400 text-sm">
                    Made by &nbsp;
                </span>

                <a href="https://md-ahsan-portfolio.netlify.app/"
                className="text-slate-400 text-xl hover:text-slate-900 font-semibold transition-all duration-200"
                > Ahsan</a>
            </div>
        </div>

        {/* Github and Linkedin Links */}

        <div className="flex justify-center">

            <a href="https://www.linkedin.com/in/mdahsanansari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 text-xl hover:text-slate-900 font-semibold transition-all duration-200 mx-2 mb-4 text-xl"
            ><FaLinkedinIn /></a>

            <a
                href="https://github.com/ahsan36"
                className="text-slate-400 hover:text-slate-900 font-semibold transition-all duration-200 mx-2 mb-4 text-xl"
                target="_blank"
                rel="noopener noreferrer"
            >
                <PiGithubLogoFill />
            </a>
        </div>
    </footer>
  )
}

export default Footer
