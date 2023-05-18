"use client"

import  Image  from 'next/image'
import jobsImg from 'images/jobs.svg'
import shirtImg from 'images/shirt.png'
import shoesImg from 'images/shoes.png'
import logo from 'images/nablaLogoWhite.png'
import css from 'styles/spa.module.css'
import Section from 'components/Section'
import NavBar from 'components/NavBar'
import { Context } from 'app/_app'
import { useContext,useEffect,useState } from 'react'
import { Josefin_Sans,Josefin_Slab,Open_Sans,Inter } from '@next/font/google'
import { Card, Loading, Button, Text, Col, Row, Grid, Badge, styled, useTheme, Navbar, Link } from '@nextui-org/react'
import { useRouter } from 'next/navigation'


const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const josefinSlab = Josefin_Slab({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'], width:100, weight:"variable" })

const inter = Inter({ subsets: ['latin'], axes: ['slnt']})


export default function Home() {

    /* 
    Please check whats happening with context!
    */

    const ctx = useContext(Context)
    const router = useRouter()

    const OpenLight = styled(Text, {
      fontFamily: "Open Sans, sans-serif",
                  fontWeight: 300,
    })

    const OpenMedium = styled(Text, {
      fontFamily: "Open Sans, sans-serif",
                  fontWeight: 500,
    })

    const OpenBold = styled(Text, {
      fontFamily: "Open Sans, sans-serif",
                  fontWeight: 600,
    })
    
    const OpenXBold = styled(Text, {
      fontFamily: "Open Sans, sans-serif",
                  fontWeight: 700,
    })

    const JosefinLight = styled(Text, {
      fontFamily: "Josefin Sans, sans-serif",
                  fontWeight: 400,
    })

    const JosefinMedium = styled(Text, {
      fontFamily: "Josefin Sans, sans-serif",
                  fontWeight: 500,
    })

    const JosefinBold = styled(Text, {
      fontFamily: "Josefin Sans, sans-serif",
                  fontWeight: 600,
    })

    const JosefinXBold = styled(Text, {
      fontFamily: "Josefin Sans, sans-serif",
                  fontWeight: 700,
    })

    const [special,setSpecial] = useState("normal")
    const [intention,setIntention] = useState("")

    const [filter,setFilter] = useState("")
    const [redirectClient,setRedirectClient] = useState("")

    const [navAnimationClass,setNavAnimationClass] = useState("")

    const [conversionNode,setCoversionNode] = useState(
    <OpenXBold size={20} transform="full-width" css={{color:"white"}}>I'm interested, tell me more!</OpenXBold>
    )
    const [missConversionNode,setMissCoversionNode] = useState(
      <OpenBold size={20} transform="full-width" css={{color:"white"}}>I'm a bore, get me out of here</OpenBold>
    )

    const [stock,setStock] = useState(20)
    const [cost,setCost] = useState(50)

    const [shirtStock,setShirtStock] = useState({

      small:{
        orange:stock-5,
        green:stock-2
      },
      medium:{
        orange:stock-10,
        green:stock-8
      },
      large:{
        orange:stock-10,
        green:stock-8
      },
    })

    const [sizeSelection,setSizeSelection] = useState("medium")
    const setSize = (value) => { setSizeSelection(""); setSizeSelection(value)}

    const [colorSelection,setColorSelection] = useState("orange")
    const setColor = (value) => { setColorSelection(""); setColorSelection(value)}

    const theme = {

      sectionOne:{

        "normal":{

          backgroundColor:"linear-gradient(180deg,rgba(255,253,255,.50),rgba(255,255,255,0))",
          backgroundImage: jobsImg,
          navBackgroundColor: "rgb(123 123 123 / 90%)"

        },
        "special":{

            backgroundColor:"linear-gradient(315deg, rgba(0, 176, 255,.50) 0%, rgba(234, 128, 252,.30) 30%, rgba(237, 204, 155,.20) 100%)", 
            backgroundImage: jobsImg,
            navBackgroundColor: "linear-gradient(315deg, rgba(237, 204, 155,.9) 0%, rgba(234, 128, 252,.9) 30%, rgba(0, 176, 255,.9) 100%)"

        }
      },
      sectionTwo:{

        "normal":{
          backgroundColor:"linear-gradient(190deg, rgba(0,0,0,1) 0%, rgba(66,66,66,1) 59%, rgba(201,201,201,1) 100%)",
          titleTextGradient:"315deg, rgba(171,169,169,1) 0%, rgba(241,251,255,1) 60%",
          titleFocusTextGradient:"315deg, rgb(234, 128, 252) 30%, rgb(237, 204, 155) 100%",
          buttonGradientBackground:"linear-gradient(rgb(0, 176, 255) 0%, rgb(0, 176, 255) 100%)",
          cardBorderRadius: 5

        },
        "special":{
          backgroundColor:"linear-gradient(315deg, rgba(0, 176, 255,.8) 0%, rgb(234, 128, 252) 30%, rgb(237, 204, 155) 100%)",
          titleTextGradient:"135deg, #647381 50%, #647381 100%",
          titleFocusTextGradient:"135deg, rgba(154,115,226,1) 50%, rgba(154,115,226,.70) 100%",
          buttonGradientBackground:"linear-gradient(rgb(0, 176, 255) 0%, rgb(234, 128, 252) 90%)",
          cardBorderRadius: 30
        }
      },
      sectionThree:{

        "normal":{
          backgroundColor:"linear-gradient(350deg, rgba(0,0,0,1) 0%, rgba(66,66,66,1) 59%, rgba(201,201,201,1) 100%)",
          cardBorderRadius: 5
        },
        "special":{
          backgroundColor:"linear-gradient(225deg, rgba(0, 176, 255,.8) 0%, rgb(234, 128, 252) 30%, rgb(237, 204, 155) 100%)",
          cardBorderRadius: 30
        },
      
        },
      sectionFour:{

        "normal":{
          backgroundColor:"linear-gradient(190deg, rgba(0,0,0,1) 0%, rgba(66,66,66,1) 59%, rgba(201,201,201,1) 100%)",
        },
        "special":{
          backgroundColor:"linear-gradient(315deg, rgba(0, 176, 255,.8) 0%, rgb(234, 128, 252) 30%, rgb(237, 204, 155) 100%)",
        }
      }}
    
    useEffect(() => {

      const intervalID = setInterval(()=>{

        try{

          setIntention("")

          if(stock){

            setStock(prevStock => prevStock -1)
  
            let logCost = cost * 1+(1/(Math.log(stock)/Math.log(20)))
            
            if(!isFinite(logCost) || logCost <= 0)
              ctx.setStatus({status:"warn", error:new Error(`Logarithmic cost is either Infinite or negative, stock is ${stock} and cost is ${cost}`)})

            setCost(logCost.toFixed(2))
          
          }

        }catch(error){

          ctx.setStatus({status:"warn",error:error})
        }
        
      },4000)
  
      return () => clearInterval(intervalID);

    });
  
    
    useEffect(() => {

      setShirtStock({

        small:{
          orange:stock - 6 > 0 ? stock - 6 : 0,
          green:stock - 4 > 0 ? stock - 4 : 0
        },
        medium:{
          orange:stock - 10 > 0 ? stock - 10 : 0,
          green:stock - 8 > 0 ? stock - 8 : 0
        },
        large:{
          orange:stock - 8 > 0 ? stock - 8 : 0,
          green:stock - 6 > 0 ? stock - 6 : 0
        },
      })

      
    },[stock])
    
 
    useEffect(() => {

      if(redirectClient === true){

        setTimeout(()=>{

          try{

            window.location = "https://api.whatsapp.com/send?phone=542615005051&text=Hello%20%F0%9F%99%8C%20I%27d%20like%20to%20know%20more%20about%20the%20app%20development%20service!"

          }catch(error){

            ctx.setStatus({status:"error",error:error})
          }

        },3000)

      }else if(redirectClient === false){

        try{

          setTimeout(()=>{ window.history.back() },3000)
          
        }catch(error){

          ctx.setStatus({status:"error",error:error})
        }
      }
        

    },[redirectClient])


    return(
        <>
        <NavBar className={navAnimationClass} type="absolute" position="top">
          <Button css={{
            background: theme["sectionOne"][special].navBackgroundColor,
            color: "white",
            whiteSpace:"normal",
            padding: "2rem",
            margin: "auto",
            width: "95vw",
            borderColor: "rgba(255,255,255,.5)",
            }}
            rounded bordered>

            <Image 
              src={logo.src}
              width={50}
              height={50}
            />
            <OpenXBold size={22} color="white" transform="full-width" css={{lineHeight:"2rem"}}>Nabla technologies</OpenXBold>

          </Button>
        </NavBar>

        <NavBar>
        <Button.Group size="xl" css={{marginTop:"80vh",maxWidth:"90vw",overflow: "auto"}} vertical>
            
            <Button css={{

              background: "rgb(123 123 123 / 90%)",
              color: "white",
              borderColor: "transparent",
              whiteSpace:"normal",
              padding: "1.5rem",
              margin: "auto",
              width: "100%",
              '&:hover': {
                background: "linear-gradient(315deg, rgb(0, 176, 255) 0%, rgb(234, 128, 252) 30%, rgb(237, 204, 155) 100%)",
                color: "white",
                borderColor: "white"
              }
            }}
            onClick={()=> {
              setSpecial("special")
              setIntention("special")
            }}
            >
                <OpenXBold size={20} color="white" transform="full-width" css={{lineHeight:"2rem"}}>{intention == "special" && "Scroll down ▼" || "I want to sell more"}</OpenXBold>
            </Button>

            <Button css={{

              background: "rgb(123 123 123 / 90%)",
              color: "white",
              borderColor: "transparent",
              whiteSpace:"normal",
              padding: ".5rem",
              margin: "auto",
              width: "100%",
              '&:hover': {
                background: "linear-gradient(315deg, rgb(237, 204, 155) 0%, rgb(234, 128, 252) 30%, rgb(0, 176, 255) 100%)",
                color: "white",
                borderColor: "white"
              },
              
            }}
            onClick={()=> {
              setSpecial("normal")
              setIntention("normal")
            }}
            autoFocus>

              <OpenBold size={20} color="white" transform="full-width" css={{lineHeight:"2rem"}}>{intention == "normal" && "Scroll down ▼" || "I'm afraid, sorry"}</OpenBold>

            </Button>
        </Button.Group>
        </NavBar>

        <Section columns={3} showUpTo="all" backgroundImage={theme["sectionOne"][special].backgroundImage} backgroundColor={theme["sectionOne"][special].backgroundColor}>        
        </Section>

        <Section columns={3} showUpTo="all" backgroundColor={theme["sectionTwo"][special].backgroundColor}>
          
        <div style={{position:"relative",top:"10vw", left: "-5vw", width:"70vw", marginBottom: "10vh"}}>
          
          {special == "special" && 
            <><JosefinBold size={36} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleTextGradient }} span>

              Even a beautiful app is useless if you don't know how to sell things creatively.
              
            </JosefinBold>
            <JosefinXBold size={38} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleFocusTextGradient }} span> 
              
              We are entrepreneurs who code, in that order. 

            </JosefinXBold>
            </>
            ||

            <><OpenBold size={32} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleTextGradient }} span>

              Even a beautiful app is useless if you don't know how to sell things creatively.
              
            </OpenBold>
            <OpenXBold size={34} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleFocusTextGradient }} span> 
              
              We are entrepreneurs who code, in that order. 

            </OpenXBold>
            </>
          }
          
        </div>
        
        <div style={{position:"relative",right: "-5vw"}}>

          <Card css={special == "special" && 
          { backgroundColor:"rgb(156 156 156)",width:"90vw", borderRadius:30}
          ||
          { backgroundColor:"rgb(156 156 156)",width:"90vw",borderRadius:5}
          }>

          <Grid.Container>
            
            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>

            <Card.Body>
              <Card.Image
                src={shirtImg.src}
                width="100%"
                height="100%"
                alt="UA Shirt"
                css={{filter:filter}}
              />
            </Card.Body>

            </Grid>

            <Grid xs={12} sm={12} md={12} lg={12} xl={12} css={{marginTop: "-10rem", padding:"unset", backgroundColor: "rgb(255 255 255 / 8%)", zIndex:"999"}}>

            <Card.Footer>
    
              <Grid.Container css={{width:"inherit"}}>

                  <Grid xs={6} sm={6} md={6} lg={6} xl={6} css={{marginTop:"-1rem"}}>
                    <Col>
                      <OpenMedium size={20} color="rgb(249 226 192)" css={{ margin:"unset" }}>
                        {special == "normal" ? "$50" : `$${cost}`}
                      </OpenMedium>
                      <OpenLight size={20} color="rgb(240 240 240)" css={{ margin:"unset" }}>
                        UA Heat Gear
                      </OpenLight>
                      <OpenMedium size={20} color="rgb(249 226 192)" css={{ margin:"unset" }}>
                        {special == "special" ? sizeSelection && colorSelection && special != "normal" && shirtStock[sizeSelection][colorSelection] && `Only ${shirtStock[sizeSelection][colorSelection]} left` || "No stock!" : ""} 

                      </OpenMedium>
                    </Col>
                  </Grid>

                  <Grid xs={6} sm={6} md={6} lg={6} xl={6} css={{marginTop:"-1rem"}}>
                    <Col>
                    <Button.Group size="sm" rounded>
                      <Button css={{backgroundColor:"rgb(251 167 141 / 90%)",

                        '&:active': {
                          color: "black"
                        },
                        '&:focus': {
                          color: "black"
                        }
                      }} 
                      onClick={()=>{
                        setFilter("")
                        setColor("orange")
                      }}
                      autoFocus>Orange</Button>
                      <Button css={{backgroundColor:"rgb(156 204 101 / 90%)",
                        '&:active': {
                          color: "black"
                        },
                        '&:focus': {
                          color: "black"
                        }
                        }}
                        onClick={()=>{
                          setFilter("hue-rotate(90deg)")
                          setColor("green")
                        }}
                        >Green</Button>

                    </Button.Group>
                    <Button.Group size="md" rounded>
                      <Button css={{background:theme["sectionTwo"][special].buttonGradientBackground,
                        '&:active': {
                          color: "black"
                        },
                        '&:focus': {
                          color: "black"
                        }
                      }} 
                      onClick={()=>{
                        setSize("small")
                        setColor("")
                      }}
                      autoFocus>S</Button>
                      <Button css={{background:theme["sectionTwo"][special].buttonGradientBackground,
                        '&:active': {
                          color: "black"
                        },
                        '&:focus': {
                          color: "black"
                        }
                      }}
                      onClick={()=>{
                        setSize("medium")
                        setColor("")
                      }}
                      >M</Button>
                      <Button css={{background:theme["sectionTwo"][special].buttonGradientBackground,
                        '&:active': {
                          color: "black"
                        },
                        '&:focus': {
                          color: "black"
                        }
                      }}
                      onClick={()=>{
                        setSize("large")
                        setColor("")
                      }}
                      >L</Button>
                    </Button.Group>
                    </Col>
                  </Grid>

              </Grid.Container>
              
            </Card.Footer>
            </Grid>

          </Grid.Container>
          </Card>
          </div>
        
        </Section>

        <Section backgroundColor={theme["sectionThree"][special].backgroundColor}>

        <div style={{position:"relative",top:"10vw", right: "-5vw", width:"70vw", marginBottom: "10vh", textAlign:"right"}}>
          
          {special == "special" && 
              <><JosefinBold size={36} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleTextGradient }} span>

                Also, it's of no good use without knowing how to direct your customers to it.
                
              </JosefinBold>
              <JosefinXBold size={38} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleFocusTextGradient }} span> 
                
                We are programmers who know how to run ads. 

              </JosefinXBold>
              </>
              ||
              <><OpenBold size={32} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleTextGradient }} span>

                Also, it's of no good use without knowing how to direct your customers to it.
                
              </OpenBold>
              <OpenXBold size={34} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleFocusTextGradient }} span> 
                
                We are programmers who know how to run ads. 

              </OpenXBold>
              </>
          }
        
        </div>

        <div style={{position:"relative",left: "-5vw"}}>

          <Card css={{ backgroundColor:"rgb(156 156 156)",width:"90vw", height:"fit-content", borderRadius:theme["sectionThree"][special].cardBorderRadius}}>

            <Grid.Container>

            <Grid xs={12} sm={12} md={12} lg={12} xl={12} css={{justifyContent:"center"}}>

            <Card.Header css={{width:"90%", textAlign:"center", justifyContent:"center"}}>
            {special == "special" && 
              <JosefinXBold size={30} transform="full-width" css={{ color: "white", fontStyle: "italic", margin:"unset"}}>

               Even faster than inflation* 
 
              </JosefinXBold>
            ||
              <OpenXBold size={30} transform="full-width" css={{ color: "white", fontStyle: "italic", margin:"unset"}}>

               New Nike Max Air! 
 
              </OpenXBold>
            }
           
            </Card.Header>

            </Grid>

            <Grid xs={12} sm={12} md={12} lg={12} xl={12} css={{marginTop:"-5vh"}}>
            <Card.Body>
              <Card.Image
                className="animate__animated animate__lightSpeedInRight animate__repeat-2"
                src={shoesImg.src}
                width="100%"
                height="100%"
                alt="Nike Shoes"
                css={{filter:filter}}
              />
            </Card.Body>
            </Grid>

            <Grid xs={12} sm={12} md={12} lg={12} xl={12} css={{justifyContent:"center", marginTop:"-2vh"}}>

            {special == "special" && 
            <Card.Footer css={{justifyContent:"center"}}>
            <JosefinBold size={12} transform="full-width" css={{ color: "black", margin:"unset" }}>

              * Well, not that fast really
              
            </JosefinBold>
            </Card.Footer>
            }
            
            </Grid>

            </Grid.Container>
          </Card>
        </div>
        </Section>

        <Section backgroundColor={theme["sectionFour"][special].backgroundColor}>

        <div style={{position:"relative",top:"5vh", width:"70vw"}}>
          
          {special == "special" && 
              <><JosefinBold size={40} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleTextGradient }} span>

                By having a well designed app, sells could increase up to 200%.
                
              </JosefinBold>
              <JosefinXBold size={42} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleFocusTextGradient }} span> 
                
                As you see, we really know how to design. 

              </JosefinXBold>
              </>
              ||
              <><OpenBold size={34} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleTextGradient }} span>

                By having a well designed app, sells could increase up to 200%.
                
              </OpenBold>
              <OpenXBold size={36} transform="full-width" css={{ textGradient: theme["sectionTwo"][special].titleFocusTextGradient }} span> 
                
                As you see, we really know how to design. 

              </OpenXBold>
              </>
          }

        </div>

          <Button.Group size="xl" vertical bordered>
            <Button css={{

              background: "#00b0fff2",
              color: "white",
              borderColor: "transparent",
              '&:hover': {
                background: "linear-gradient(315deg, rgb(0, 176, 255) 0%, rgb(234, 128, 252) 30%, rgb(237, 204, 155) 100%)",
                color: "white",
                borderColor: "white"
              }
            }}
            
            onClick={()=>{

              setCoversionNode(
              <>
                <Loading type="spinner" color="currentColor" size="lg" css={{margin:"1rem !important"}} />
                <OpenXBold size={20} transform="full-width" css={{color:"white"}}> Opening WhatsApp</OpenXBold>
              </>
              )
              
              setRedirectClient(true)

            }}>

                {conversionNode}
                
            </Button>

            <Button css={{

              background: "#00b0fff2",
              color: "white",
              borderColor: "transparent",
              '&:hover': {
                background: "linear-gradient(315deg, rgb(0, 176, 255) 0%, rgb(234, 128, 252) 30%, rgb(237, 204, 155) 100%)",
                color: "white",
                borderColor: "white"
              },
              '&:focus': {
                background: "linear-gradient(315deg, rgb(0, 176, 255) 0%, rgb(234, 128, 252) 30%, rgb(237, 204, 155) 100%)",
                color: "white",
                borderColor: "white"
              }
            }}
            
            onClick={()=>{

              setMissCoversionNode(<>
                <OpenXBold size={20} transform="full-width" css={{color:"white"}}> Good luck, you'll need it</OpenXBold>          
                <Loading type="points-opacity" color="currentColor" size="sm" css={{marginTop:"0.5rem !important",marginLeft:"0.25rem !important"}} />
                </>
              )
              setRedirectClient(false)
            }}>

                {missConversionNode}
                
            </Button>
          </Button.Group>
        
        </Section>
        </>
    )
}