import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function FormInput(value: string, type?: string) {

    if (!type) {type = "text"}

    return (
        <>
            <span>${value}  </span>
            <input
                placeholder="Enter Password"
                type={type}
                name={value}
                value={value}
                // onChange={e => setPassword(e.target.value)}
            />
        </>
    )
};