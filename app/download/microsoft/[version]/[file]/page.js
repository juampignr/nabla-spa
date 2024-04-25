"use client"

import { useEffect } from 'react';
import { Text, styled } from '@nextui-org/react'
import { useRouter } from 'next/router';


export default function redirectPage({params}) {


  let version = params?.version ?? "latest" 
  let url = `https://github.com/juampignr/employee_releases/releases/download/v${version}/EmployeeXInstall.exe`
    
  const versionRegex = /^\d{1}\.\d{1}\.\d{1}$/g

  const JosefinMedium = styled(Text, {
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 500,
    marginLeft:"1rem"
  })

  useEffect(() => {
    
    if(!versionRegex.test(version))
      url = `https://github.com/juampignr/employee_releases/releases/latest`     
    
    
    setTimeout(() => {

      window.location.href = url;
    }, 3000)

  }, []);

  return <JosefinMedium size={20}>⌛ You are being redirected to your download ⌛</JosefinMedium>;
}
