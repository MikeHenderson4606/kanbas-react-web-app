import React from 'react';
import {useLocation} from 'react-router-dom';

function Add() {
    const { pathname } = useLocation();
    console.log(pathname);
    let a = "";
    let b = "";
    if (pathname?.search("1")){
        a = "1";
    }
    return (
        <div> <h2>Add Path Parameters</h2>
        {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
        </div>
    );
}

export default Add;