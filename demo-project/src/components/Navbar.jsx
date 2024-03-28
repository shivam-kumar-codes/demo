// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div
      className="fixes w-full px-[4.5vw] py-10 font-['Neue Montreal'] flex justify-between itema-center  
      backdrop-blur  bg-transparent "
    >
      <div className="logo w-40">
        <img src="https://s3-alpha-sig.figma.com/img/f9cc/c444/a82f854f01e0200063607dd2ef26f69c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zg586s7gjjq7poe21GX4NM73vPRI3RwFuFPxYuc1mDCSMo9whrIEixHKmzml2h99go2fOhe9w32z8YfLokXEtIfGJfNlAgsXlwjQfGz6Y8xWpLoxvIb1tobdEQtbidiSD-v9su9C~xG8dx3cZhDp~btfGIO-ov6tdSgW3F9drgg1uI4HzFglMZbcq-mMMVazcjyjkKsmXejpxpJFHO5w354Ax0g4~1fnTDjbeekkl8bODu0DIpFb-Wpn81KDSa9FhA7OEWQnsHaU6Y2iBMGtUBb9iL6bNB8WWWp4Tw0Zs1fOD4g~zhVT1sDA9Ep-2zqwwvTEshMUkMdgdthMccQOsw__" alt="" />
      </div>

      <div className="links flex gap-5">
        {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map(
          (item, index) => (
            <motion.a
              whileHover={{ scale: 1.1 }}
              key={index}
              className={`text-[1.2vw] capitalize cursor-pointer font-normal ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </motion.a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;