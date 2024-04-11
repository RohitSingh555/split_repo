import React from 'react';
import SectionText from '../components/SectionText';
import SectionImage from '../components/SectionImage';
import SectionContainer from '../components/SectionContainer';
import { HomeButtons_Solid } from '../components/HomeButtons';
import OurTeam from '../components/OurTeam';

const AboutUs = () => {
  return (
    <div className="container mx-auto pt-52">
        <div className='flex flex-col items-center gap-24'>
<SectionText
        title="About us"
        className=" m-auto text-center"
        description="SplitStay is a trusted marketplace and social
        network for shared lodging. "
      />
      <SectionImage
        imagePosition="right"
        imageSrc="/about-hero.png" 
      />
      <SectionText
        title="Our Mission"
        className=" m-auto text-center pb-24"
        description="SplitStay is a trusted marketplace and social
        network for shared lodging.  "
      />
    </div>
    <div className='Section1 md:p-28 p-3 '>
        <div className=' sectionContainer1 md:p-12 p-5'>
      <SectionContainer className="flex flex-col sm:flex-row gap-4 sm:gap-8">
      <SectionText
        title="Many People, one adventure! Here every journey doubles as a friendship."
        // description="Turn your reserved lodging into shared savings and explore more for a fraction of the cost."
      >
      </SectionText>
      <SectionImage
        imagePosition="right"
        imageSrc="/about-1.png"
      />
      </SectionContainer>
      </div>
      </div>

      <div className="container mx-auto pt-24">
        <div className='flex flex-col items-center gap-24'>
<SectionText
        title="The Core of Our Team"
        className=" m-auto text-center"
        description="Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks. "
      />
    </div>
    <OurTeam/>
    </div>

    <div className='Section6 md:p-20 md:mb-24 p-3'>
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
    </div>
  );
};

export default AboutUs;
