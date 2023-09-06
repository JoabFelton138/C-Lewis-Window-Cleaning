import React from "react";
import {messages} from './messages';
import { isValidString } from "./validation";

export function validateSubmission(firstName){
    const isString = isValidString(firstName);
    let message = "";
    if (!isString){
        message = messages.nameError
        return(
            message
        );
    }

    else {
        return (message);
    }
}