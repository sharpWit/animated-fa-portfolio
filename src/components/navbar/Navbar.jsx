import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SharpWit
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/socials/github-icon.png" alt="" />
          </a>
          <a href="#">
            <img src="/socials/instagram-icon.png" alt="" />
          </a>
          <a href="#">
            <img src="/socials/linkedin-icon.png" alt="" />
          </a>
          <a href="#">
            <img src="/socials/telegram-icon.png" alt="" />
          </a>
          <a href="#">
            <img src="/socials/whatsapp-icon.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
