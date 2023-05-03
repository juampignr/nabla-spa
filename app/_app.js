"use client"

import { createContext,useState,useEffect } from 'react';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import Layout from 'app/layout'


export const Context = createContext();

function App({ Component,pageProps }) {
  
  const [status,setStatus] = useState("loaded")

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

    if(status.indexOf("error") != -1){

      console.log(status)
      //If dev do something, if prod do another thing

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
