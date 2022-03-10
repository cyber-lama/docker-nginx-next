import React, {useEffect} from "react";
import {test} from "../src/test";
import axios from "axios";

export default function Home():JSX.Element {
    useEffect(() => {test()}, [])
    return (
        <button onClick={() => {
            axios('/api/test').then(res => {
                console.log(res)
            })
        }}>make api resqaasdassd</button>
  );
}
