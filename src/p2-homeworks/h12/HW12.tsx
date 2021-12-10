import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemesType} from "./bll/themeReducer";


function HW12() {
    const themes = ['default', 'dark', 'red', 'some'];
    const theme = useSelector<AppStoreType, ThemesType>((state) => state.theme.theme); // useSelector
    const dispatch =useDispatch()
    const onChangeOptionCallback = (value: ThemesType) => {
        // console.log(value)
        dispatch(changeThemeC(value))
    }
    // console.log(theme)
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <SuperRadio onChangeOption={onChangeOptionCallback} options={themes} value={theme}/>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
