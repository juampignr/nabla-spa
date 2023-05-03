"use client"

import "styles/globals.css"
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import { createContext,useState } from "react";

export const Context = createContext();

export default function Layout({ children }) {

  const [status,setStatus] = useState("loaded")

  async function getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  return (
    <html lang="en">
      <head>{CssBaseline.flush()}</head>
      <Context.Provider value={{status:status,setStatus:setStatus,shared:{}}}> 
        <body>
          {children}  
        </body>
      </Context.Provider>
    </html>
  )
}
