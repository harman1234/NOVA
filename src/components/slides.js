import React, { useState, useEffect, useRef, useContext } from "react";
import { debounce } from "lodash";
import data from "../dbase.json";
import './styles/slides.css';
import Footer from "./footer";
import { MainContext } from "../App";

export default function Slides() {
  const slideCont = useRef();
  const CurrentSlide = useRef();
  const [isDone, setIsDone] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  let tmout; 
  const mycontext = useContext(MainContext);


  useEffect(()=>{

    return ()=>{mycontext.setColor('black')}
  },[]);

  useEffect(() => {
    const slidecont = slideCont.current;

    const handleClick = debounce((e) => {
      clearTimeout(tmout); 
      tmout = setTimeout(() => {
        if (e.deltaY > 0) {
          if (CurrentSlide.current.nextElementSibling) {
            CurrentSlide.current.nextElementSibling.style.top = '0%';
            CurrentSlide.current = CurrentSlide.current.nextElementSibling;
          }
        } else {
          if (CurrentSlide.current.previousElementSibling) {
            CurrentSlide.current.style.top = '100%';
            CurrentSlide.current = CurrentSlide.current.previousElementSibling;
          }
        }
        mycontext.setColor(CurrentSlide.current.getAttribute('color'));
    }, 300);
      setScrollCount(prev => prev + 1); // Update scroll count on each scroll
    }, 300);

    slidecont.addEventListener("wheel", handleClick);
    return () => {
      slidecont.removeEventListener("wheel", handleClick);
    };
  }, []);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////



  useEffect(() => {
    const inter = setTimeout(() => {
      if (CurrentSlide.current.nextElementSibling) {
        CurrentSlide.current.nextElementSibling.style.top = '0%';
        CurrentSlide.current = CurrentSlide.current.nextElementSibling;
        setIsDone(!isDone);
      }else{
        const ochildElements = document.getElementsByClassName("ochild");
        const elementsToSelect = Array.from(ochildElements).slice(1); // Convert to array and slice from the second element onwards

      elementsToSelect.forEach(element => {
        // Apply your action to each element
        element.style.top = "100%"; // Example action: changing background color
      });
      CurrentSlide.current = ochildElements[0]
      setIsDone(!isDone)
      }
    }, 3000);
    mycontext.setColor(CurrentSlide.current.getAttribute('color'));


    return () => clearTimeout(inter);
  }, [isDone, scrollCount]); // Depend on both isDone and scrollCount



  return (
    <>
      <section className="slidecont" ref={slideCont}>
        
        {Object.keys(data).map((item, i) => (
            
            <div className="d-flex  justify-content-between ochild"  color={data[item].color}  ref={i === 0? CurrentSlide:null}>
                <img src={data[item].source} alt='img'/>
            </div>
        ))}
      <Footer />
      </section>
    </>
  );
}
