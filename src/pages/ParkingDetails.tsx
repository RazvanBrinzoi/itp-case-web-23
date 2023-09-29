import React from "react";
import { useParams } from "react-router-dom";
import useParkingAPI from "../Hooks/useParkingAPI";
import { ParkingSection, ParkingDetail, DetailHeader, ParkingFlex } from "../styles/styles";
import ErrorPage from "./ErrorPage";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";
import BackButton from "../components/BackButton";
//Animations
import { pageAnimation } from "../animations/animations";


const ParkingDetails: React.FC = () =>{
    const { id } = useParams();
    const { data, isLoading, error, isValidating} = useParkingAPI(id);
    const parking = data && data[0];
    if(!parking){
        return null;
    }
    return(
        <>
        <BackButton />
        <motion.div style={{overflow: "hidden"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <ParkingSection>
            {error && <ErrorPage details={error.toString()}/>}
            {!isLoading && (
            <ParkingDetail>
                <div>
                    <DetailHeader>
                        <h1>{parking.name}</h1>
                    </DetailHeader>
                    <h1>{parking.description}</h1>
                    <ParkingFlex>
                        <ul>
                            <li><span>Type:</span> {parking.categorie}</li>
                            <li><span>Status:</span> {parking.availablecapacity + '/'+ parking.totalcapacity}</li>
                            <li><span>Capacity:</span> {(parking.availablecapacity/parking.totalcapacity * 100).toFixed(1)+'%'}</li>
                        </ul>
                        <div className="directions">
                            <a 
                            href={`https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${parking.location.lat},${parking.location.lon}`}
                            target="_blank"
                            rel="noreferrer"
                            >Get Directions !</a>
                        </div>
                    </ParkingFlex>
                </div>
            </ParkingDetail>
            )}
        <ScrollTop />
        </ParkingSection>
        </motion.div>
        </>
    )
}

export default ParkingDetails