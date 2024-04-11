// Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionText from '../components/SectionText';
import { HomeButtons_Solid } from '../components/HomeButtons';
import SectionContainer from '../components/SectionContainer';
import SectionImage from '../components/SectionImage';
import '../styles/home.css'
import Steps from '../components/Steps';
import TestimonialContainer from '../components/TestimonialContainer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className='Section1 md:p-28 p-3'>
        <div className=' sectionContainer1 md:p-12 p-5'>
      <SectionContainer className="flex flex-col sm:flex-row gap-4 sm:gap-8">
      <SectionText
        title="Share your stay,
        Split the cost "
        description="Turn your reserved lodging into shared savings and explore more for a fraction of the cost."
      >
        <HomeButtons_Solid className="py-4 px-14" onClick={() => console.log('Login clicked')}>Share a Stay</HomeButtons_Solid>
      </SectionText>
      <SectionImage
        imagePosition="right"
        imageSrc="/sec-1.png" // Replace with your image URL
      />
      </SectionContainer>
      </div>
      </div>

      <div className='Section2 md:p-20 p-3'>
      <SectionContainer className="flex gap-10 md:gap-36 sectionContainer2">
      <SectionImage
        imagePosition="right"
        imageSrc="/sec-3.png" // Replace with your image URL
      />
      <SectionText
      subtitle="Matching made easy"
        title="View and filter by shared interest"
        description="see like  minded individuals that share you
        lifestyle, hobbies, and travel preferences."
      >
        <HomeButtons_Solid className="py-4 px-14" onClick={() => console.log('Login clicked')}>View local splitters</HomeButtons_Solid>
      </SectionText>
      
      </SectionContainer>
      </div>
      <div className='Section3 md:p-20 p-3'>
      <SectionContainer className="flex gap-10 md:gap-36 sectionContainer3 ">
      
      <SectionText
      subtitle="Trust & safety"
        title="Connect with Peace of mind"
        description="see like  minded individuals that share you
        lifestyle, hobbies, and travel preferences."
      >
        <HomeButtons_Solid className="py-4 px-14" onClick={() => console.log('Login clicked')}>View local splitters</HomeButtons_Solid>
        
      </SectionText>
      <SectionImage
        imagePosition="right"
        imageSrc="/sec-4.png" // Replace with your image URL
      />
      
      </SectionContainer>
      </div>

     {/* section 4 */}
     <div className='Section1 md:p-28 p-3 '>
        <div className=' sectionContainer1 md:p-12 p-5'>
      <SectionContainer className="flex gap-10 md:gap-32 flex-col lg:flex-row">
      <SectionText
        title="Let's talk about how it works "
        description="Turn your reserved lodging into shared savings and explore more for a fraction of the cost."
        className=""
      >
        <HomeButtons_Solid className="py-4 px-14" onClick={() => console.log('Login clicked')}>Sign up now</HomeButtons_Solid>
      </SectionText>
      <Steps/>
      </SectionContainer>
      </div>
      </div>
      
      {/* Section 5 */}
<TestimonialContainer/>
      {/* section 6 */}

      <div className='Section6 md:p-20 p-3'>
      <div className=' sectionContainer1 md:p-12 p-5'>
      <SectionContainer className="flex gap-10 md:gap-32 ">
      <SectionText
        title="Get started with SplitStay today "
        description="Turn your reserved lodging into shared savings and explore more for a fraction of the cost."
      >
        <HomeButtons_Solid className="py-4 px-14" onClick={() => console.log('Login clicked')}>Sign up now</HomeButtons_Solid>
      </SectionText>
      <SectionImage
        imagePosition="right"
        imageSrc="/sec-4.png" 
      />
      </SectionContainer>
      </div>
      
</div>


{/* Footer */}
    </>
  );
}

export default Home;
