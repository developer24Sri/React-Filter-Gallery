import { useState } from "react";
import {data} from "../data/data";
import Card from "./Card";
import React from "react";

export default function Gallery(props){
    const [itemList, setitemList] = useState(data);
    return(
        <div>
        {
            itemList.map((val)=>{
                return(
                    <>
                        {
                            val.category.includes(props.productN) && <Card val = {val} />
                        }
                    </>
                )
            })
        }
        </div>
    )
}