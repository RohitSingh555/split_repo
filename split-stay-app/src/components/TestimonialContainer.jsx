import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialContainer = () => {
  const testimonials = [
    {
      id: 1,
      imageSrc: '/sec-4.png',
      rating: 5,
      comment: 'I work remotely and explore on my own, now I can bring a new friend',
      name: 'Aphiar Ivius',
      role: 'Lead Wizard at Hogwards',
    },
    {
      id: 2,
      imageSrc: '/sec-4.png',
      rating: 4,
      comment: 'wow, I have been waiting for this for a long time',
      name: 'Aphiar Ivius',
      role: 'Lead Wizard at Hogwards',
    },
    {
      id: 3,
      imageSrc: '/sec-4.png',
      rating: 5,
      comment: 'I no longer have to wait on my friends to go on my next adventure',
      name: 'Aphiar Ivius',
      role: 'Lead Wizard at Hogwards',
    },
  ];

  return (
    <>
    <div className='TestimonialContainer py-10 md:py-32 p-4 md:p-4'>
        <div className="text-center mb-8">
      <h1 className="max-w-2xl mb-4 text-4xl font-bold m-auto tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Testimonials</h1>
      <p className="text-gray-600">People love the service we offer and we want to let you know</p>
    </div>
    <div className="flex flex-wrap justify-center max-w-screen-xl px-4 py-8 mx-auto">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <TestimonialCard
            imageSrc={testimonial.imageSrc}
            rating={testimonial.rating}
            comment={testimonial.comment}
            name={testimonial.name}
            role={testimonial.role}
          />
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default TestimonialContainer;
