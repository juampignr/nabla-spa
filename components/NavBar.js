"use client"

import css from 'styles/spa.module.css'
import { styled } from '@nextui-org/react'
import { useEffect,useState,useRef } from 'react';

export default function NavBar({children,hideShowPercentage = 5, position = "bottom", type = "fixed"}){
    
    const navPosition = position == "bottom" ? {bottom:"7vh"} : {top:"2vh"}
    const navType = type == "fixed" || type == "sticky" || type == "static" ? "fixed" : "absolute" 

    const Nav = styled("div", {
        dflex: "center",
        position: navType,
        width: "100%",
        zIndex: "999",
        ...navPosition
    });

    const [className, setClassName] = useState("visible") 

    let navRef = useRef()
    let lastScrollY = useRef(0)

    useEffect(() => {

        let threshold = window.innerHeight*(hideShowPercentage/100)

        if(navType == "fixed"){

            const onScroll = () => {
        
                if((window.scrollY-lastScrollY.current) > threshold){
        
                    setClassName("invisible")
        
                    lastScrollY.current = window.scrollY;
                    
                }else if((lastScrollY.current-window.scrollY) > threshold){
        
                    setClassName("showUp")
        
                    lastScrollY.current = window.scrollY;
                }
                             
            }
    
            window.addEventListener('scroll', onScroll);
            return () => {
                window.removeEventListener('scroll', onScroll);
            };
        }
        
        return () => ctx.setStatus({status:"warn",error:new Error("NavBar unmounted for some strange reason")});

    },[]);


    /*
    const onScroll = useCallback(event => {
                
        console.log(`Last scroll ${scrollY}`)
        console.log(`Current scroll ${window.scrollY}`)

        setScrollY(window.scrollY);

    }, [scrollY]);
    
    useEffect(() => {

        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
    
        return () => {
           window.removeEventListener("scroll", onScroll, { passive: true });
        }
    }, [onScroll]);
    */
    return(
        <Nav className={className} ref={navRef} onAnimationEnd={()=>{

            if(navRef.current.classList.contains("visible")){

                setClassName("invisible")

            }
        }}>
            {children}
        </Nav>
    )
}