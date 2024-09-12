import logo from './logo.svg';
import './App.css';
import image from './assets/image.png'

import { RxQuestionMarkCircled } from "react-icons/rx";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { useState , useRef } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function App() {

  // Default button state
  const [clicked, setClicked] = useState("1");

  const clickHandler = (number) => {
    if (number === "1") {
      setClicked(number);
      
    } else if (number === "2") {
      setClicked(number);
     
    } else {
      setClicked(number);
      
    }
  };



  const [images, setImages] = useState([
    image,image,image,image
  ]);
  const scrollContainerRef = useRef(null);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]); // Add new images to the existing ones
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click(); // Trigger file input on button click
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 628, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -628, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };





  return (
    <div className='  w-[1728px] h-[895px] bg-black  ' >

      <div className='bg-gradient-to-b overflow-hidden shadow-[10px_10px_40px_10px_rgba(0,0,0,0.5)]  relative w-[100%] h-[100%] rounded-[28px]  from-[#373e44] to-[#191b1f]'>

          <div className=' border-2 border-[#96BEE7] box-border h-[689px] absolute top-[96px] left-[29px] w-[836px] rounded-[27px] bg-[#616161] ' >
          </div>

          <div className="absolute w-[720px] h-[316px] left-[922px] top-[96px] bg-[#363C43] shadow-[5.67px_5.67px_3.78px_rgba(0,0,0,0.4)] rounded-[18.8904px]">
              
          </div>

          <div className='absolute   flex flex-col   items-center p-0 gap-[105px] w-[24px] h-[159.69px] left-[934px] top-[116px]' >
          
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z" fill="url(#paint0_linear_2267_3329)"/>
<defs>
<linearGradient id="paint0_linear_2267_3329" x1="19.5" y1="27.5" x2="3.5" y2="2" gradientUnits="userSpaceOnUse">
<stop stop-color="#4A4E54"/>
<stop offset="1" stop-color="#A3ADBA"/>
</linearGradient>
</defs>
</svg>

         
              <div className=' flex flex-row  flex-wrap items-start content-start p-0 gap-[1.38px] w-[24px] h-[30.69px] rounded-[2.32804px] flex-none order-1 self-stretch flex-grow-0 '>

                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0' />
                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0'  />
                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0' />
                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0' />
                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0' />
                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0' />
                  
              </div>
             </div>

             {
                //scroll bar
              }
              <div className="absolute w-[8px] h-[64px] left-[1621px] top-[207px] bg-custom-gradient shadow-custom-shadow rounded-[8px]"></div>

              {
            //BOX 1 CONTENT
          }
          <div className= "absolute bg-[#171717] rounded-[23px]  w-[614px] h-[62px] left-[975px] top-[113px] flex flex-row items-center gap-[6px] isolate" ></div>

          <div className="absolute flex flex-row items-center p-0 gap-1.5 w-[597px] h-[49px] left-[981px] top-[119px]"  >

                      <div
                    className={`absolute z-0  left-0
                    top-0 bg-[#28292F]  rounded-[16px] h-[49px] w-[195px] transition-transform duration-300 ease-in-out ${
                      clicked === "1"
                        ? "translate-x-0"
                        : clicked === "2"
                        ? "-translate-x-[-195px]"
                        : "-translate-x-[-390px]"
                    }`}
                   
                  />
          

            
                <div onClick={()=>{clickHandler("1")}} className={`flex z-10 cursor-pointer flex-row justify-center items-center p-[10px_24px] gap-[10px] w-[195px] h-[49px] rounded-[16px] flex-none order-2 flex-grow-0 z-2 ${clicked === "1" ? "text-[#FFFFFF]  " : "text-[#A3ADB2]   "}`}>
                
                  <div >
                      About Me
                  </div>
                </div>

                <div onClick={()=>{clickHandler("2")}}  className={`flex z-10 cursor-pointer flex-row justify-center items-center p-[10px_24px] gap-[10px] w-[195px] h-[49px] rounded-[16px] flex-none order-2 flex-grow-0 z-2 ${clicked === "2" ? "text-[#FFFFFF]  " : "text-[#A3ADB2] bg-transparent  "}`}  >
                  <div >
                    Experiences
                  </div>
                  
                </div>

                <div onClick={()=>{clickHandler("3")}}  className={`flex z-10 cursor-pointer  flex-row justify-center items-center p-[10px_24px] gap-[10px] w-[195px] h-[49px] rounded-[16px] flex-none order-2 flex-grow-0 z-2 ${clicked === "3" ? "text-[#FFFFFF]  " : "text-[#A3ADB2] bg-transparent  "}`} >

                  <div  >
                  Recommended
                  </div>
                  

                </div>

                <span className="absolute top-0 h-full bg-[#1c1c1c] rounded-3xl z-0 transition-all duration-500 ease-in-out"
  style={{ width: '0px', opacity: '0', left: '0px' }}></span>


          </div>

          

          <div className="absolute w-[611px] text-[20px] h-[175px] left-[975px] top-[210px] font-plus-jakarta-sans text-base leading-[25px] text-[#969696]">
          
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br/><br/>

            I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany
             and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender
              is usually blocked between 9-10 AM. This is a...</div>



          {
            //THE HORIZONTAL LINE
          }

          <div className="absolute left-[56.48%] right-[8.1%] top-[48.38%] bottom-[51.17%] bg-[linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)),linear-gradient(180deg,rgba(40,40,40,0.1)_0%,rgba(248,248,248,0.1)_100%)] shadow-[0_4px_4px_rgba(0,0,0,0.33)] backdrop-blur-[4.91866px] rounded-[2.45933px]"></div>

          {
            //second box
          }

          <div className="absolute w-[720px] h-[330px] left-[922px] top-[453px] bg-[#363C43] shadow-[5.67px_5.67px_3.78px_rgba(0,0,0,0.4)] rounded-[18.8904px]">

          </div>

          <div className='absolute   flex flex-col   items-center p-0 gap-[105px] w-[24px] h-[159.69px] left-[934px] top-[473px]' >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z" fill="url(#paint0_linear_2267_3329)"/>
<defs>
<linearGradient id="paint0_linear_2267_3329" x1="19.5" y1="27.5" x2="3.5" y2="2" gradientUnits="userSpaceOnUse">
<stop stop-color="#4A4E54"/>
<stop offset="1" stop-color="#A3ADBA"/>
</linearGradient>
</defs>
</svg>

         
              <div className=' flex flex-row  flex-wrap items-start content-start p-0 gap-[1.38px] w-[24px] h-[30.69px] rounded-[2.32804px] flex-none order-1 self-stretch flex-grow-0 '>

                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0' />
                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0'  />
                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0' />
                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0' />
                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0' />
                  <RiCheckboxBlankFill className='w-[9.31px] h-[9.31px] bg-[#4A4E54] text-[#4A4E54] rounded-[1.16402px] flex-none order-0 flex-grow-0' />
                  
              </div>
             </div>

             <div className=' absolute w-[652px] h-[475px] left-[953px] top-[436px] ' >

             
              
             <div onClick={scrollLeft} className= "w-[45px] cursor-pointer text-[#6F787C] rounded-[35px] flex justify-center items-center h-[45px] left-[518px] top-[49px] absolute inset-0 bg-gradient-to-br from-[#303439] via-[#161718] to-[#161718] shadow-custom "  >

              <FaArrowLeft/>

             </div>
                
            
            
              
            <div onClick={scrollRight} className=" w-[45px] cursor-pointer text-[#6F787C] rounded-[35px] flex justify-center items-center h-[45px] left-[581px] top-[49px] absolute inset-0 bg-gradient-to-br from-[#303439] via-[#161718] to-[#161718] shadow-custom " >

              <FaArrowRight />

            </div>

            <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                multiple // Allows selecting multiple images
                className="hidden"
              />

          

            <div className="absolute   flex gap-3 w-[638px] h-[400px]  top-[100px]" >

            
            
                <div
                    ref={scrollContainerRef}
                    className="flex absolute space-x-4  overflow-hidden w-full  h-full p-6"
                  >
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Selected ${index}`}
                        className=" w-[193px] hover:shadow-2xl  hover:shadow-black  grayscale hover:grayscale-0 duration-500 hover:scale-x-105 hover:scale-110 hover:rotate-[-5deg]  h-[179px] object-cover rounded"
                      />
                    ))}
                  </div>

            </div>

              
            

            <div className="absolute w-[149px] h-[62px] left-[20px] top-[37px] bg-[#171717] shadow-[inset_0px_4px_10px_2px_rgba(0,_0,_0,_0.25)] rounded-[20px]" >
              
            </div>
           
            <button className="absolute w-[72px] h-[30px] left-[59px] top-[53px] font-poppins font-medium text-[20px] leading-[30px] text-white">Gallery</button>
             </div>

             <button onClick={handleButtonClick} className="absolute text-white w-[131.32px] h-[46px] left-[1300px] top-[482px] bg-white/5 shadow-[0px_0px_7px_rgba(255,255,255,0.25),9px_10px_7px_rgba(0,0,0,0.4),inset_0px_0px_49px_rgba(255,255,255,0.05),inset_0px_3px_3px_rgba(255,255,255,0.15)] backdrop-blur-[52px] rounded-[104px] " >
                + ADD IMAGE
             </button>



          {
            //THE HORIZONTAL LINE
          }

          <div className="absolute  left-[56.48%] right-[8.1%] top-[89.94%] bottom-[9.61%] bg-[linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)),linear-gradient(180deg,rgba(40,40,40,0.1)_0%,rgba(248,248,248,0.1)_100%)] shadow-[0_4px_4px_rgba(0,0,0,0.33)] backdrop-blur-[4.91866px] rounded-[2.45933px]" >

          </div>

          


      </div>
      
    </div>
  );
}

export default App;
























