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
    })

    return(

        <>
            <Section showUpTo="all" backgroundColor="#000000">
            
            <JosefinText size={32} transform="full-width" css={{ color: "#ffffff" }} span>

              Even a beautiful app is useless if you don't know how to sell things creatively.
              
            </JosefinText>
            </Section>

        </>
    )

}