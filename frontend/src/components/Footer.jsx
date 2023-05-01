import React from "react";


function Footer() {

  return (
    <footer id="contact" className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <p className="md:text-lg">Made with <i className="fa-solid fa-heart mx-1" style={{color: "#fae5e5"}} ></i><br /><i class="fa-regular fa-copyright"></i> Brian Fuentes</p>
      </div> 
      <div>
        <span className="footer-title">Social</span> 
        <div className="flex gap-4 items-center">
          <a href="https://twitter.com/BrianFuentes124" target="_blank">
            <i className="fa-brands fa-square-twitter text-3xl md:text-5xl hover:text-[#1D9BF0]"></i>
          </a> 
          <a href="https://www.linkedin.com/in/brian-fuentes-18ab62182/" target="_blank">
            <i className="fa-brands fa-linkedin text-3xl md:text-5xl hover:text-[#0A66C2]"></i>
          </a> 
          <a href="https://github.com/brianf4" target="_blank">
            <i class="fa-brands fa-square-github text-3xl  hover:text-base-300 md:text-5xl"></i>
          </a>
          <a href="https://brianfuentes.netlify.app/"target="_blank">
            <i class="fa-solid fa-globe text-2xl md:text-4xl  hover:text-[#262A53]"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer