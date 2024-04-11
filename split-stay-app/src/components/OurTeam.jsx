import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

const OurTeam = () => {
    return (
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex-col dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/Image.png" alt="Morgan Drew"></img>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#"><span className='text-Primarycolor'>Morgan</span> Drew</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Manager</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Morgan drives the platform and brand.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                </li>
                            </ul>
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex-col dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/Image-1.png" alt="Jeffery Walker"></img>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#"><span className='text-Primarycolor'>Jeffery</span> Walker</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Coperate Accountant</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jeffery Walker is our coperate Accountant.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                </li>
                            </ul>
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex-col dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="/Image-2.png" alt="Michael Avatar"></img>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#"><span className='text-Primarycolor'>Andrew</span> Steve</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Customer Care Lead</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Andrew Steve is our Customer Care Lead.</p>
                  <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </a>
                                </li>
                            </ul>
              </div>
          </div> 
         
      </div>  
  </div>
</section>
);
};

export default OurTeam;