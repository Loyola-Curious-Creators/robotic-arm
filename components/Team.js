import React from 'react';
import Image from 'next/image';

const TeamSection = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <TeamMember
            name="Holden Caulfield"
            role="UI Developer"
            imageSrc="https://dummyimage.com/200x200"
            description="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
          />
          <TeamMember
            name="Alper Kamu"
            role="Designer"
            imageSrc="https://dummyimage.com/201x201"
            description="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
          />
          <TeamMember
            name="Atticus Finch"
            role="UI Developer"
            imageSrc="https://dummyimage.com/204x204"
            description="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
          />
          <TeamMember
            name="Henry Letham"
            role="Designer"
            imageSrc="https://dummyimage.com/206x206"
            description="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
          />
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, role, imageSrc, description }) => {
  return (
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageSrc} width={200} height={200} />
        <div className="flex-grow     sm:pl-8">
          <h2 className="title-font font-medium text-lg text-white">{name}</h2>
          <h3 className="text-gray-500 mb-3">{role}</h3>
          <p className="mb-4">{description}</p>
          <span className="inline-flex">
           
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
