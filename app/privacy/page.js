"use client"

import  Image  from 'next/image'
import jobsImg from 'images/jobs.svg'
import shirtImg from 'images/shirt.png'
import shoesImg from 'images/shoes.png'
import logo from 'images/nablaLogoWhite.png'
import css from 'styles/spa.module.css'
import Section from 'components/Section'
import { Context } from 'app/_app'
import { Josefin_Sans } from '@next/font/google'
import { Card, Loading, Button, Text, Col, Row, Grid, Badge, styled, useTheme, Navbar, Link } from '@nextui-org/react'


const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export default function Privacy() {

    const JosefinText = styled(Text, {
        fontFamily: "Josefin Sans, sans-serif",
        fontWeight: 400,
        whiteSpace: "pre-line",
        lineHeight: 1.5
    })

    return(

        <>
            <Grid.Container gap={3} justify="flex-start" css={{padding:"3vw" }}> 
            <Grid>
            <JosefinText size={20} transform="full-width" css={{ color: "#000000", width:"30vh !important", textAlign: "left" }} span>

            Privacy Policy
            <br></br>
            <br></br>

            Effective Date: 06/12/24

            <br></br>

            1. Introduction

            <br></br>

            Welcome to Nabla technologies. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you how we handle your personal data when you use our app "Employee X".

            <br></br>

            2. Data We Collect

            <br></br>

            When you use our app, we detect certain types of data related to WhatsApp usage and other personal information. By "detect" we mean we identify the type of information by the means of regular expressions and A.I., this gives us the ability to communicate and train ChatGPT models needed for the correct functionality of "Employee X".  It is important to note that we do not process, store, or share any of the data we detect. The types of data we detect include:

            - User's WhatsApp messages
            <br></br>

            - User's WhatsApp numbers and contacts
            <br></br>

            - User email addresses
            <br></br>

            - User credit/debit card information
            <br></br>

            - User information related to their business and products/services
            <br></br>

            - User information related to products/services sales
            <br></br>

            - User's Client's WhatsApp numbers
            <br></br>

            - User's Client's WhatsApp messages
            <br></br>

            - User's Client's buying process information
            <br></br>

            - User's Client's personal information
            <br></br>

            3. Purpose of Data Detection

            <br></br>

            We detect data solely to provide functionality within the app, that is to train ChatGPT models. We do not process, store, or share any detected data. Specifically, we detect data to:

            <br></br>

            - Enable the app to function correctly with WhatsApp.
            <br></br>

            - Enable the app to function correctly with ChatGPT.
            <br></br>

            - Enable to perform payments using the PayPal API.
            <br></br>

            - Provide a seamless user experience by integrating necessary functionalities.
            <br></br>


            4. Data Security

            <br></br>

            Although we do not store or process the detected data, we have implemented security measures to ensure that the detection process is secure and that data is handled responsibly while in use by the app.

            <br></br>

            5. User Rights and Data Protection
            <br></br>

            Since we do not store or process any personal data, traditional data protection rights (such as access, rectification, erasure, and portability) are not applicable. However, we are committed to ensuring the detection process is transparent and secure.
            <br></br>

            6. Third-Party Services
            <br></br>


            Our app may contain links to third-party services or websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the privacy policy of every site you visit.

            We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.

            <br></br>

            7. Children's Privacy
            <br></br>

            Our app does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have detected personal data from children without verification of parental consent, we take steps to remove that information from our detection process.
            <br></br>

            8. Changes to This Privacy Policy
            <br></br>

            We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
            <br></br>

            9. Contact Us
            <br></br>

            If you have any questions about this privacy policy, please contact us:
            <br></br>

            - Email: juampibehler@pm.me
            <br></br>

            - Address: Viamonte 4069, Chacras de Coria, Mendoza, Argentina
            <br></br>

              
            </JosefinText>
            
            </Grid>
            </Grid.Container>

        </>
    )

}