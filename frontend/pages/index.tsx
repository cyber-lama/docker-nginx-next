import React, {useEffect} from "react";
import axios from "axios";

export default function Home():JSX.Element {
    useEffect(() => {
        axios('/api/test').then(res => {
            console.log(res)
        }).catch((error)=> {
            console.log(error)
        })
    }, []);
    return (
        <p>test</p>
    );
}
