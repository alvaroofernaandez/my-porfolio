import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

const IconMedia = () => {
  return (
    <>
    <div className="flex gap-3 justify-center md:justify-start mt-4 ">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="size-8 bg-[#0077b5] hover:bg-white hover:text-black transition-all duration-300 ease-in-out p-1 rounded"/>
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="size-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out"/>
      </a>
      <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
        <FaDiscord className="size-8 bg-[#5964f2] p-1 rounded hover:bg-white hover:text-black transition-all duration-300 ease-in-out"/>
      </a>
    </div>
    </>
  )
}

export default IconMedia