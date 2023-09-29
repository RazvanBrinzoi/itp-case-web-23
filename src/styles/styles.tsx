import styled from "styled-components";
import { motion } from "framer-motion";

//Styled Components
export const ParkingSection = styled.div`
    padding: 5rem 15rem;
    min-height: 90vh;
`
export const BikeSection = styled.div`
    padding: 5rem 1rem;
    min-height: 90vh;
`

export const ParkingDetail = styled.div`
    background-color: #f1f1f1;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    min-height: 50vh;
    margin-top: 5rem;
    border-radius: 2rem;
    text-align: center;
    overflow: hidden;
    position: relative;
    h1{
        padding-top: 1.5rem;
    }
`

export const DetailHeader = styled.div`
    background-color: #2177e0;
    color: white;
    height: 4.5rem;
`

export const ParkingFlex = styled.div`
    display: flex;
    height: 30vh;
    margin-top: 3rem;
    justify-content: center;
    align-items: center;
    ul{
        list-style: none;
        flex: 1 1 10rem;
        li{
            font-size: 1.5rem;
            padding: 1rem;
            span{
                font-weight: bold;
            }
        }
    }
    .directions{
        flex: 1 1 10rem;
        border-radius: 1rem;
        a{
            background-color: #2177e0;
            padding: 1.5rem 2.5rem;
            border-radius: 3rem;
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
            transition: background 0.5s ease-in-out;
            &:hover{
                background-color: #f1f1f1;
                color: #2177e0;
                border: 1px solid #2177e0;
            }
        }
    }
`

export const BikeFlex = styled.div`
    display: flex;
    margin-top: 3rem;
    justify-content: center;
    align-items: center;
    ul{
        list-style: none;
        flex: 1 1 10rem;
        li{
            font-size: 1.2rem;
            padding: 1rem;
        }
    }
    .copy{
        flex: 1 1 10rem;
        text-align: center;
        button{
            padding: 0.75rem 1rem;
            border-radius: 1rem;
            border: none;
            color: white;
            background-color: #2177e0;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background 0.5s ease-in-out;
            &:hover{
                background-color: white;
                border: 1px solid #2177e0;
                color: #2177e0;
            }
        }
    }
`

export const GoBack = styled(motion.button)`
    padding: 0.75rem 1rem;
    position: absolute;
    top: 15%;
    left: 15%;
    border-radius: 1rem;
    border: none;
    background-color: lightgrey;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background 0.5s ease-in-out;
    &:hover{
        background-color: grey;
    }
    z-index: 3;
`

export const Line = styled(motion.div)`
    height: 0.2rem;
    background-color: #75808d;
    margin-top: 1rem;
    opacity: 0.5;

`
export const Card = styled.div`
    height: 15rem;
    width: 20rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin: 2rem;
    p{
        padding: 1.5rem 1.5rem;
        text-align: center;
    }
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    h4{
        font-weight: lighter;
        position: absolute;
        bottom: 8%;
        right: 5%;
    }
`

export const CardHeader = styled.div`
    background-color: #2177e0;
    color: white;
    height: 4rem;
    h2{
        padding: 1rem;
        text-align: center;
    }
`

export const StyledButton = styled.div`
    background-color: #2177e0;
    display: flex;
    height: 2.5rem;
    width: 5rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    position: absolute;
    bottom: 8%;
    left: 40%;
    transition: background 0.5s ease-in-out;
    a{
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
    }
    &:hover{
        cursor: pointer;
        a{
            color: #2177e0;
        }
        background: white;
        border: 1px solid #2177e0;
    }
`

export const FlexContainer = styled(motion.div)`
    display: flex;
    margin-top: 3rem;
    min-height: 90vh;
    justify-content: space-evenly;
    flex-wrap: wrap;
    //z-index: 2;
    h2{
        font-weight: lighter;
    }
`

export const BikeCard = styled.div`
    height: 20rem;
    width: 30rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
    margin-left: 2rem;
    p{
        padding: 1.5rem 1.5rem;
    }
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    h4{
        font-weight: lighter;
        position: absolute;
        bottom: 8%;
        right: 5%;
    }
`

export const CopyContainer = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Hide = styled.div`
    overflow: hidden;
    z-index: 2;
`