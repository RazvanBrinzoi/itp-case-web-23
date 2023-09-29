import React, { useEffect, useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { GoBack } from "../styles/styles";
//Animations
import { fade } from "../animations/animations";

const BackButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <>
            <GoBack key="btn" variants={fade} initial="hidden" animate="show" exit="exit" onClick={handleClick}><FontAwesomeIcon icon={faArrowLeft} /></GoBack>
        </>
    )
}

export default BackButton;