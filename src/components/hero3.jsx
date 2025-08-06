import React from "react";


const Card = ({ imgSrc, title, desc }) => {
    return (
        <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
          

        <img
          src={imgSrc}
          width="60px"
          height="60px"
          alt="Lawrencegebäudereinigung featurs icon"
          className="mx-auto"
        />

           <div className="flex-1">

           <h3 className="text-lg text-white font-semibold mb-2">{title}</h3>
          <p className="leading-loose tracking-tighter leading-normal text-white">{desc}</p>
            
          </div> 
      
        
        
      </div>
    );
  };

function Hero3(){
        return(
            <section className="bg-black mt-4">
            <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
            <div className="flex gap-5 md:gap-10 flex-col flex-1">
                <div className="flex flex-col gap-4">
      
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
                   English-speaking customer support 7 days/week
                  </h2>
                </div>
                <h2 className="text-3xl md:text-2xl font-bold text-white text-center lg:text-left">
                Always ready to help
                  </h2>
                <Card
                  imgSrc='../src/assets/svg/phone.svg'
                  title="VIA PHONE"
                  desc="Get in contact with us via phone by calling +49 163 444 2034 where are always available by 8 am - 6 pm (Monday - Sunday)"
                />
                <Card
                  imgSrc='../src/assets/svg/email.svg'
                  title="VIA EMAIL"
                  desc="Get in contact with us via email by sending a mail to lawrencefabian297@yahoo.com where are always available 24/7 (every day)"
                />

                <Card
                  imgSrc='../src/assets/svg/chat.svg'
                  title="VIA CHAT"
                  desc="You can also reach us by Chat on our website 8 am - 6 pm (Monday - Sunday)"
                />
              </div>

              <div className="relative w-full flex-1">
                <img
                  src='../src/assets/team/clean50.jpeg'
                  width="300px"
                  height="300px"
                  alt="video banner"
                  className="object-cover  w-full"
                />
                
              </div>
             
            </div>
          </section>
        );
}

export default Hero3;