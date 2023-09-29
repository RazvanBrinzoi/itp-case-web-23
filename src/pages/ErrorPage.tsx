import React from "react";

type Props = {
    title?: React.ReactNode;
    message?: React.ReactNode;
    details?: React.ReactNode;
};

const ErrorPage: React.FC<Props> = ({title,message,details}) => {
    return(
        <>
            <h1>{title}</h1>
            <h1>Oops there is an issue !</h1>
            <h1>{message}</h1>
            <h1>{details}</h1>
        </>
    )
}

export default ErrorPage;