export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show:{
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    exit:{
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.5,
        },
    },
};

export const titleAnimation = {
    hidden: {y: 200},
    show: {
        y:0,
        transition: {duration: 0.75, ease: "easeOut"},
    },
};

export const fade = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {ease: "easeOut", duration: 0.3},
    },
    exit: {opacity: 0},
}

export const LineAnimation = {
    hidden: {width: "0%"},
    show: {
        width: "100%",
        transition: {duration: 1},
    }
}