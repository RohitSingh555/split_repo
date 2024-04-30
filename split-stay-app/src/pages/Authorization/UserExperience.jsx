import React from "react";
import ExperienceDiv from "../../components/FormComponents/ExperienceDiv";
import SearchInput from "../../components/FormComponents/SearchInput";

const UserExperiencePage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between md:py-40 px-11">
        <h1 className=" font-bold text-2xl lg:text-4xl">Experiences</h1>
        <SearchInput />
        <ExperienceDiv
          imageURL="/Montgomery_1.png"
          title="104 Montogomery"
          description="104 Montogomery St. San Francisco, CA 94129, United States"
        />
        <ExperienceDiv
          imageURL="/Montgomery_1.png"
          title="104 Montogomery"
          description="104 Montogomery St. San Francisco, CA 94129, United States"
        />
      </div>
    </>
  );
};

export default UserExperiencePage;
