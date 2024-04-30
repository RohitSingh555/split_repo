import React from "react";
import ExperienceDiv from "../../components/FormComponents/ExperienceDiv";
import SearchInput from "../../components/FormComponents/SearchInput";
import SearchDiv from "../../components/UserComponents/SearchDiv";

const UserExperiencePage = () => {
  return (
    <>
      <div className="flex flex-wrap max-w-screen-xl m-auto justify-between md:py-40 px-4">
        <SearchDiv
          placeholder="Search..."
          buttonText="Add"
          UnitName="Experiences"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ExperienceDiv
            imageURL="/Montgomery_1.png"
            avatarURL="/userimg.png"
            title="104 Montogomery"
            description="104 Montogomery St. San Francisco, CA 94129, United States"
          />
          <ExperienceDiv
            imageURL="/Montgomery_1.png"
            avatarURL="/userimg.png"
            title="104 Montogomery"
            description="104 Montogomery St. San Francisco, CA 94129, United States"
          />
          <ExperienceDiv
            imageURL="/Montgomery_1.png"
            avatarURL="/userimg.png"
            title="104 Montogomery"
            description="104 Montogomery St. San Francisco, CA 94129, United States"
          />
          <ExperienceDiv
            imageURL="/Montgomery_1.png"
            avatarURL="/userimg.png"
            title="104 Montogomery"
            description="104 Montogomery St. San Francisco, CA 94129, United States"
          />
          <ExperienceDiv
            imageURL="/Montgomery_1.png"
            avatarURL="/userimg.png"
            title="104 Montogomery"
            description="104 Montogomery St. San Francisco, CA 94129, United States"
          />
        </div>
      </div>
    </>
  );
};

export default UserExperiencePage;
