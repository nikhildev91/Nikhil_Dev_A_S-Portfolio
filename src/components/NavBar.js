import React from 'react';
// import Logo from '../assets/logo1.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ title }) {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex items-center justify-between px-4 bg-[#08192f] text-gray-300">
      <div>
        {/* <img src={Logo} alt="" style={{ width: '50px' }} /> */}

        <p
          className="text-4xl font-bold cursor-pointer"
          onClick={() => navigate('/')}
        >
          Portfolio
        </p>
      </div>
      {title === 'work_details' ? (
        <div>
          <p onClick={() => navigate('/')} className="font-bold cursor-pointer">
            {'<<== BACK'}
          </p>
        </div>
      ) : (
        <div>
          {/* menu */}

          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              {' '}
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              {' '}
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              {' '}
              <Link to="work" smooth={true} duration={500}>
                Works
              </Link>
            </li>
            <li>
              {' '}
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Humbuger */}
          <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

          {/* Mobile Menu */}

          <ul
            className={
              !nav
                ? 'hidden'
                : 'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'
            }
          >
            <li className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="py-6 text-4xl">
              {' '}
              <Link
                onClick={handleClick}
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="py-6 text-4xl">
              {' '}
              <Link
                onClick={handleClick}
                to="work"
                smooth={true}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li className="py-6 text-4xl">
              {' '}
              <Link
                onClick={handleClick}
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Social Media */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/nikhildevas"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/nikhildev91"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto: asdevnikhil@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1jjUsAGsIbsnSygEvEzvDLnxu6jM-m99-/view?usp=share_link"
            >
              Resume <BsPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
