
import css from 'styles/spa.module.css'
import PropTypes from "prop-types";
import { Grid } from '@nextui-org/react';
import { Center } from 'components/Grid'
import { Context } from 'app/layout';
import { useEffect,useState,useContext,useRef } from 'react';

var _lastSectionID = 0

function _handleIntersection(entries) {

    entries.map((entry) => {

      if (entry.isIntersecting && entry.target.getAttribute("id") !== _lastSectionID) {

        let index = 0
        entry.target.childNodes.forEach((node)=>{
            
            node.classList.remove('invisible')

            if(index%2){

                node.classList.add('appearRight')
            }else{
                node.classList.add('appearLeft')
            }
                
            node.focus()
            index++
        })

        _lastSectionID = entry.target.getAttribute("id")
        
    }
    
    });
}

export default function Section({children,backgroundImage,backgroundColor,showUpTo,columns}){

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

    }, []);

    const isImage = typeof backgroundImage == "object"

    const column = columns ?? 1

    const mobileSize = 12/column
    const tabletSize = column <= 2 ? 12/(column+1) : column
    const desktopSize = column <= 2 ? 12/(column+2) : 12/(column+1)

    const filling = backgroundImage ? {backgroundImage:`${backgroundColor},url('${backgroundImage.src}')`} : {background:backgroundColor}
    
    const deviceGrid = {mobile:{xs:mobileSize,sm:0,md:0,lg:0,xl:0},
        tablet:{xs:mobileSize,sm:tabletSize,md:0,lg:0,xl:0},
        desktop:{xs:mobileSize,sm:tabletSize,md:desktopSize,lg:desktopSize,xl:0},
        all:{xs:mobileSize,sm:tabletSize,md:desktopSize,lg:desktopSize,xl:desktopSize}
    } 

    const grid = column > 1 ? <Grid.Container id={sectionID} className="observed" gap={1} css={{padding:"5vw",...filling}} justify="space-evenly"> {children.map(child=> <Grid {...deviceGrid[showUpTo]}>{child}</Grid>)} </Grid.Container> : <div id={sectionID} className={`${css.section} observed`} style={filling}>{children}</div>   

    return(<>{grid}</>);
}

Section.propTypes = {
    children: PropTypes.array.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.oneOf([PropTypes.string,PropTypes.object]),
    columns: PropTypes.number,
    showUpTo: PropTypes.string
};
  