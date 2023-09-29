import React from "react";
import useBikeAPI from '../Hooks/useBikeAPI';
import { BikeFlex, BikeCard, CardHeader, FlexContainer, BikeSection } from "../styles/styles";
import { Bike } from "../types/BikeAPI";
import { useCopyToClipboard } from "usehooks-ts";
import ErrorPage from "./ErrorPage";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";
import BackButton from "../components/BackButton";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
//Animations
import { pageAnimation } from "../animations/animations";


const Bikes: React.FC = () =>{
    const [value, copy] = useCopyToClipboard();
    const { data: bikes, isLoading: loading, error: err, isValidating: valid} = useBikeAPI(0);
    const { data: bikes1, isLoading: loading1, error: err1, isValidating: valid1} = useBikeAPI();
    if (!bikes || !bikes1) {
        return null;
    }
    const allBikes: Bike[] = [ bikes[0], bikes1[0] ];
    return(
        <>
        <BackButton />
            <motion.div style={{overflow: "hidden"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                <BikeSection>
                    <FlexContainer>
                    {err && <ErrorPage details={err.toString()}/> }
                    {err1 && <ErrorPage details={err1.toString()}/> }
                    {!loading && !loading1 && allBikes.map((bike: Bike)=> {
                        return(
                            <BikeCard key={bike.name}>
                                <CardHeader>
                                    <h2>{bike.name}</h2>
                                </CardHeader>
                                <BikeFlex>
                                    <ul>
                                        <li>Available bikes: {bike.bikes_available}</li>
                                        <li>Total bikes: {bike.bikes_available + bike.bikes_in_use}</li>
                                    </ul>
                                    <div className="copy">
                                        <button onClick={()=>copy(bike.name)}>{bike && value === bike.name ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCopy} />}</button>
                                    </div>
                                </BikeFlex>
                             </BikeCard>
                            )
                        })
                        }
                    </FlexContainer>
                <ScrollTop />
                </BikeSection>
            </motion.div>
        </>
    )
}

export default Bikes;