import React from 'react';
import { FlexContainer, ParkingSection, Line, Card, CardHeader, StyledButton } from "../styles/styles";
import { motion } from 'framer-motion';
import  useParkingAPI  from '../Hooks/useParkingAPI'
import  {Link} from 'react-router-dom'
import ErrorPage from './ErrorPage';
//Animations
import { pageAnimation, LineAnimation } from '../animations/animations';

const Parking: React.FC = () => {
    const { data: parkings, isLoading, error, isValidating} = useParkingAPI();
    if(!parkings){
        return null;
    }
    if(!isLoading){
        parkings.sort((a, b) => b.availablecapacity - a.availablecapacity)
    }
    return(
        <motion.div style={{overflow: "hidden"}} variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <ParkingSection>
            <h1>Available Locations</h1>
            <Line variants={LineAnimation}/>
            <FlexContainer>
                {error && <ErrorPage details={error.toString()}/>}
                {!isLoading && parkings && parkings.map((parking)=> {
                    if(parking.isopennow && parking.availablecapacity>(parking.totalcapacity/2)){
                        return(
                            <Card key={parking.id}>
                            <CardHeader>
                                <h2>{parking.name}</h2>
                            </CardHeader>
                            <p>{parking.description}tetur adipisicing.</p>
                            <StyledButton>
                                <Link to={`/parking/${parking.name}`}>Details</Link>
                            </StyledButton>
                            <h4>{parking.availablecapacity + "/" + parking.totalcapacity}</h4>
                            </Card>
                        )    
                    }else{
                        return null;
                    }
                })}
            </FlexContainer>
        </ParkingSection>
        </motion.div>
    )
}

export default Parking;