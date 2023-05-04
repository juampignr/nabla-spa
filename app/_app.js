"use client"

import { createContext,useState,useEffect } from 'react';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import Layout from 'app/layout'


export const Context = createContext();

function App({ Component,pageProps }) {
  
  const [status,setStatus] = useState({status:"loaded"})
  
  const log = (status) => { 
    
    const lineno = status.error.stack.split(">")[1].slice(1)
    
    try{

      console[status.status](`Nabla SPA [${status.status}] @ ${lineno}: ${status.error.message}`)

    }catch(error){

      console[status.status](`Nabla SPA [${status.status}] @ ${lineno}: ${status.error.message}`)

    }

  }

  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: { myLightColor:"white" }, // optional
    }
  })
  
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: { myDarkColor:"black" }, // optional
      
    }
  })

  useEffect(() => {

    if(status.status == "error" || status.status == "warn"){

      log(status)

    }
  },[status])

  return (  
    <ThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
          <Context.Provider value={{status:status,setStatus:setStatus,shared:{}}}>
            <Layout>
              <Component {...pageProps}/>
            </Layout>
            </Context.Provider>
        </NextUIProvider>

    </ThemesProvider>
          
          )
}

export default App
