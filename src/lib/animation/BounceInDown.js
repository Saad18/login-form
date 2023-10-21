import React from "react";
import { motion } from "framer-motion";

export const BounceInDownDiv = (props) => {
    return (
        <motion.div
            initial ={{opacity:0, y:100}}
            animate = {{opacity:1, x:0, y:100}}
            exit={{opacity: 0, y: 100}}
            {...props}/>
    )
}
export const BounceInDownButton = (props) => {
    return (
        <motion.div
            initial ={{opacity:0, y:100}}
            animate = {{opacity:1, x:0, y:100}}
            exit={{opacity: 0, y: 100}}
            {...props}/>
    )
}