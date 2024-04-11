import React from 'react';

const TestimonialCard = ({ imageSrc, rating, comment, name, role }) => {
  return (
    <div className="max-w-xs mx-auto mb-8 ">
      <div className="bg-white rounded-lg  overflow-hidden shadow-[0px_6px_13px_1px_#00000024]">
        <div className="px-4 py-6">
          <div className="mt-4 text-center space-y-3">
            <div className="flex justify-center items-center text-Primarycolor">
              {[...Array(rating)].map((_, index) => (
                <svg
                  key={index}
                  className="h-5 w-5 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14.66l-5.56 3.14a1 1 0 01-1.48-1.05l1.07-6.25L.27 6.25a1 1 0 01.54-1.7l6.26-.91L9.54.74a1 1 0 011.92 0l2.46 3.9 6.26.91a1 1 0 01.54 1.7l-4.76 4.86 1.07 6.25a1 1 0 01-1.48 1.05L10 14.66z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="mt-2 text-gray-600">{comment}</p>
          <div className="flex items-center justify-center">
            <img
              className="h-16 w-16 rounded-full object-cover"
              src={imageSrc}
              alt="Testimonial"
            />
          </div>
          <div className="flex items-center justify-center">
            <b>{name}</b>
          </div>
          <div className="flex items-center justify-center">
            <p>{role}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
