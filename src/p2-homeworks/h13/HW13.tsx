import React, {useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {request} from "./Request";
export const HW13 = () => {
    const [response, setResponse] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const isCheckedCallback = () => {
        setIsChecked(!isChecked)
    }
    const onClickCallback = () => {
        setDisabled(true)
        request(isChecked)
            .then(response => {
                console.log(response)
                setResponse(response.data.info)
            })
            .catch(err => {
                console.log(err)
                setResponse("something went wrong")
            })
            .finally(()=>{
                setDisabled(false)
            })
    }
    return (
        <div>
            <SuperButton disabled={disabled} onClick={onClickCallback}>Request!</SuperButton>
            <SuperCheckbox checked={isChecked} onChangeChecked={isCheckedCallback}/>
            {response}
        </div>
    )
}