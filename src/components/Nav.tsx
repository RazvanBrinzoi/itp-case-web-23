import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav: React.FC = () => {
    const {pathname} = useLocation();
    return(
        <StyledNav>
            <Link to='/'>
                <Logo>SmartPark</Logo>
            </Link>
            <ul>
                <li>
                    <Link to='/'><h1>Cars</h1></Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === "/" ? "50%" : "0%"}} />
                </li>
                <li>
                    <Link to='/bike'><h1>Bikes</h1></Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === "/bike" ? "50%" : "0%"}} />
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.div`
    background-color: white;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    z-index: 10;
    position: sticky;
    top: 0;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    a{
        color: black;
        text-decoration: none;
    }

    ul{
        display: flex;
        list-style: none;
    }

    li{
        padding-left: 15rem;
        position: relative;
    }

`

const Logo = styled.h1`
    font-family: 'Oswald', sans-serif;
`

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #2177e0;
    width: 0%;
    left: 60%;
`

export default Nav;