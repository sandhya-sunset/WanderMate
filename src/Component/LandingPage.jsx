import BGImg from "..src/assets/solukhumbuXmt.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderImage from "../src/assets/solukhumbuXmt.jpg";
import { useState } from "react";
import {LandingFooterLinks} from "./helper/data";

const LandingPage = () => {
    const [open, setOpen] = useState(false);
    return (

        <>
     {/* encapsulates all */}
     <div className="h-screen w- full  pl-4 sm:pl-6  md:pl-8 flex justify-between items-center"
        
        style = {{ 
        backgrond: ` linear-gradient (rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
       }}

       >

        {/*header */}

    <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center">
        <RxHamburgerMenu size ={25} 
        color = "white"  
        className="cursor-pointer sm:hidden"
            onClick={() => 
            {
             setOpen(!open);

            }}
                
            />
            <img
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 0 50%)",
                }}
                     className=" h-50 w-40 0bject-cover"
                     src="{HeaderImage}" 
                     alt="Image" />
    </div>
    <div className={`${open ? "opacity-100": "opacity-0"}h-screen w-[80%] fixed top-0 right-0 transition-all dueation-300 ease bg-black`}></div>


     {/*side menu */}

          
              
        
           

    {/*hero */}
    <div className="h-[10vh] w-full text-center text-white ">
         <div className=" font-bold text-7xl md:text-xl bg-gradient-to-b from-gray-400 text-transparent bg-clip-text"></div>
            <p>The Country of  Himalayan </p>
                
            </div>

            {/*Footer */}

            <div className="h-[10vh] w-full grid-cols-3">
                <div>
                    <p className="leading-6 pl-6 md:pl-6 "> Visit Nepal you will never regret it. <br /> This is something incredible,Fantastic, <br />  mesmerizing and</p>
                    
                </div>

            </div>

            
            {/*second side */}
            <div className="h-[10vh] w-full ">
                {LandingFooterLinks.map((link) => (
                    <>
                    <li key = {link.id} className="text-white list-none"> 
                    <a href={link.link}>{link.title}</a>


                    </li>
                    
                    </>

                ))}

            </div>

            

        </div>
        
        
        </>
    );
};

export default LandingPage;