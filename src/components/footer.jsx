import {FaFacebook,  FaTwitter, FaInstagramSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-black  px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <a href={"/"} className="text-3xl">
              

              <p className="text-2xl text-white">ROYALE CLEANERS</p>
            </a>
            <p className="max-w-xs mt-4 text-sm text-white">
              Quality Products At Its Best
            </p>
            <div className="flex mt-8 space-x-6 text-white">
              <a
                href="https://www.facebook.com/share/1CEzGKZygx/"
                target="_blank"
              >
                <FaFacebook size={20} className="hover:text-yellow hover:-translate-y-1 transition-all" />
              </a>
             
              {/* <a
                href=""
                target="_blank"
              >
                <FaaedinIn size={20} className="hover:text-yellow hover:-translate-y-1 transition-all" />
              </a> */}
              <a href="" target="_blank">
                <FaTwitter size={20} className="hover:text-yellow hover:-translate-y-1 transition-all" />
              </a>
              <a
                href="https://www.instagram.com/royalecleanersuk/?igsh=MWJvdGs1N2dvdWc2cQ%3D%3D#"
                target="_blank"
              >
                <FaInstagramSquare size={20} className="hover:text-yellow hover:-translate-y-1 transition-all" />
              </a>
            </div>

            <p className="leading-loose tracking-tighter  leading-normal mt-8 text-xs text-white">
            ROYALE CLEANERS. Home & Office Cleaning is an online marketplace that matches private and commercial<br/>cushrefmers with experienced cleaners in Austria, Belgium, France, Germany, Italy, Luxembourg, Poland, Portugal,<br/> Spain, and Sweden. Fabian family.. Home & Office Cleaning is a registered trademark of A&K Ventures OÜ,<br/> a company founded in July 2016 by Karol Kaczmarek and Amadeusz Annissimo.
        </p>
          </div>


        

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4 text-white">
            <div>
              <p className="font-medium">QUICK aS</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
              <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Home
                </a>

                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </a>
              
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Pricing
                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact Us
                </a>

                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Frequently Asked Questions
                </a>

                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Register As A Cleaner
                </a>

                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Cleaning Associate Portal
                </a>

                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Blog
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">SERVICES</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <a
                  href="/purewater"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Regular Basic Cleaning
                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  One-Time Basic Cleaning
                </a>
                <a
                  href="/purewater"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                 Last-Minute Basic Cleaning
                </a>
                <a
                  href="/printing"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Deep Cleaning
                </a>

                <a
                  href="/printing"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Move-In/Move-Out Cleaning
                </a>

                <a
                  href="/printing"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Office Cleaning
                </a>

                <a
                  href="/printing"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Sanitization & Disinfection
                </a>

                <a
                  href="/printing"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Laundry & Iorning
                </a>
               
              </nav>
            </div>
            <div>
              <p className="font-medium">COMPANY</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Global Website
                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Imprint
                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms & Condition
                </a>

                <a
                  href="/policy"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </a>

                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                
                >
                <p>+44-7349-791131</p>
            
                </a>
                 <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                
                >
                <p>info@royalecleaners.co.uk</p>
            
                </a>

                
              </nav>
            </div>
            <div>
              <p className="font-medium">CITIES</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms &amp; Conditions
                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Returns Policy
                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Accessibility
                </a>
              </nav>
            </div>


            <div>
              <p className="font-medium">IN OTHER COUNTRIES</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Austria

                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Belgium

                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  France
                </a>
                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Italy
                </a>


                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Luxembourg
                </a>


                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Poland
                </a>

                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Spain
                </a>

                <a
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Portugal
                </a>
              </nav>
             
              
            </div>

            <div>
              <p className="font-medium">CONVENIENT ONLINE PAYMENTS</p>

              <div className="grid grid-cols-4 gap-4">

                <img  src='/assets/svg/bank.svg' alt="Lawrencegebäudereinigung payment" width={60} height={60}/>
                <img  src='/assets/svg/master.svg' alt="Lawrencegebäudereinigung payment" width={60} height={60} />
                <img  src='/assets/svg/maestro.svg' alt="Lawrencegebäudereinigung payment" width={60} height={60} />
                <img  src='/assets/svg/american.svg' alt="Lawrencegebäudereinigung payment" width={60} height={60} />

              </div>
              
            </div>


           


          </div>
        </div>
        {/* <p className="mt-8 text-xs text-white">
        SPIC AND SPAN. Home & Office Cleaning is an online marketplace that matches private and commercial<br/>cushrefmers with experienced cleaners in Austria, Belgium, France, Germany, Italy, Luxembourg, Poland, Portugal,<br/> Spain, and Sweden. SPIC AND SPAN. Home & Office Cleaning is a registered trademark of A&K Ventures OÜ,<br/> a company founded in July 2016 by Karol Kaczmarek and Amadeusz Annissimo.
        </p> */}
      </div>

      
    </footer>
  );
};

export default Footer;
