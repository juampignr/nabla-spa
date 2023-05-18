"use client"

import css from 'styles/spa.module.css'
import PropTypes from "prop-types";
import { Grid } from '@nextui-org/react';
import { Context } from 'app/layout';
import { useEffect,useState,useContext,useRef } from 'react';

var _lastSectionID = 0

function _handleIntersection(entries) {

    entries.map((entry) => {

      if (entry.isIntersecting && entry.target.getAttribute("id") !== _lastSectionID) {

        let index = 0
        entry.target.childNodes.forEach((node)=>{
            
            node.classList.remove('invisible')
            node.classList.add('fadeIn')
            node.focus()

            index++
        })

        _lastSectionID = entry.target.getAttribute("id")
        
    }
    
    });
}

export default function Section(props){

    
    const childNodes = props.children ?? []
    
    const backgroundColor = props.backgroundColor ?? "black"
    const backgroundImage = props.backgroundImage
    const showUpTo = props.showUpTo ?? "all"
    const column = props.columns ?? 1

    const ctx = useContext(Context)
    
    const idArray = new Uint32Array(2)
    const [sectionID,setSectionID] = useState(0)
    

    useEffect(() => {
        
        window.crypto.getRandomValues(idArray)
        setSectionID(idArray.join("").toString(16))

        const observer = new IntersectionObserver(_handleIntersection,{threshold:.6});

        const sections = document.querySelectorAll(".observed")

        sections.forEach((section) => {
            
            observer.observe(section)
            
            section.childNodes.forEach((node)=> node.classList.add('invisible'))
        })

        return () => ctx.setStatus({status:"warn",error:new Error("Section unmounted for some strange reason")});

    }, []);

    const isImage = typeof backgroundImage == "object"

    const mobileSize = 12/column
    const tabletSize = 12/(column+1) 
    const desktopSize = 12/(column+2) 
    const tvSize = 12/(column+3) 


    const filling = backgroundImage ? {backgroundImage:`${backgroundColor},url('${backgroundImage.src}')`} : {background:backgroundColor}
    
    const deviceGrid = {mobile:{xs:mobileSize,sm:0,md:0,lg:0,xl:0},
        tablet:{xs:mobileSize,sm:tabletSize,md:0,lg:0,xl:0},
        desktop:{xs:mobileSize,sm:tabletSize,md:desktopSize,lg:desktopSize,xl:0},
        all:{xs:mobileSize,sm:tabletSize,md:desktopSize,lg:desktopSize,xl:tvSize}
    } 
  

    return(
        <Grid.Container id={sectionID} className={`${css.section} observed`} gap={1} css={{padding:"5vw",...filling}}> 
            {childNodes.map(child=> <Grid justify="center" {...deviceGrid[showUpTo]}>{child}</Grid>)} 
        </Grid.Container> 
        );
}

Section.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.oneOf([PropTypes.string,PropTypes.object]),
    columns: PropTypes.number,
    showUpTo: PropTypes.string
};
  