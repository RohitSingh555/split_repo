import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faFacebookMessenger, } from "@fortawesome/free-brands-svg-icons";
import { HomeButtons_Solid } from './HomeButtons';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="px-4 pt-12 pb-6 dark:bg-gray-100 dark:text-gray-800">
      <hr className="border-1 border-gray-300 opacity-30"></hr>
      <div className="container flex flex-col lg:flex-row justify-between py-12 mx-auto space-y-32 lg:space-y-0">
        <div className="lg:w-64">
          <a rel="noopener noreferrer" href="#" className="flex  pb-5">
            <img src="/SplitStay.png" className="h-10" alt="SplitStay Logo"></img>
          </a>
          <p className="max-w-sm text-gray-500 lg:max-w-none">Simple innate summer fat appear basket his desire joy.</p>
          <div className="flex justify-start space-x-3 mt-4 text-IconColor text-2xl">
            <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center ">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center ">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center ">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center ">
            <FontAwesomeIcon icon={faFacebookMessenger} />
            </a>
            <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center ">
            <FontAwesomeIcon icon={faInfinity} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 lg:w-2/3 lg:grid-cols-3">
          <div className="space-y-5">
            <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <a rel="noopener noreferrer" href="#">Home</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">About Us</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Pricing</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold text-lg">Terms</h3>
            <ul className="space-y-3">
              <li>
                <a rel="noopener noreferrer" href="#">Policy</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Terms of Service</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Free Resources</a>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold text-lg">Join Our Newsletter</h3>
            <form className="mt-6">
              <label htmlFor="UserEmail" className="sr-only">Email</label>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Your email address"
                  className="w-full sm:w-3/4 rounded-md p-2 sm:text-sm"
                />
                <HomeButtons_Solid className="py-3 sm:py-0 sm:w-2/4" onClick={() => console.log('Login clicked')}>
                  Subscribe
                </HomeButtons_Solid>
              </div>
            </form>
            <p className="mt-4 max-w-xs text-xs text-gray-300 lg:max-w-none">Will send you weekly updates on popular trips</p>
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700 opacity-10"></hr>
      <div className="py-6 text-sm text-center dark:text-gray-600 md:pb-24">Copyright @ SplitStay 2023. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
