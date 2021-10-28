import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, useState, useEffect, KeyboardEvent} from 'react'
import s from "./SuperSelect.module.css"
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: Array<string>
    onChangeOption: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const selectedItem = options.find(i => i === restProps.value)
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(restProps.value)
    const hoveredItem = options.find(i => i === hoveredElementValue)
    const showItems = () => {
        setActive(!active)
    }
    useEffect(() => {
        setHoveredElementValue(restProps.value);
    }, [restProps.value])
    const onItemClicked = (value: string) => {
        onChangeOption(value)
        showItems();
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || "ArrowUp") {


            for (let i = 0; i < options.length; i++) {
                if (options[i] === hoveredItem) {
                    const pretendentElement = e.key === "ArrowDown" ? options[i + 1] : options[i - 1]


                    if (pretendentElement) {
                        onChangeOption(pretendentElement)
                        return;
                    }
                }

                // setHoveredElementValue(props.items[i + 1].value)

            }
            if (!selectedItem){
                onChangeOption(options[0])
            }

        }
        if (e.key === "Enter" || e.key === "Escape"){
            setActive(false)
        }

    }
    const mappedOptions = options.map(i => <div

        onMouseEnter={() => {
            setHoveredElementValue(i)
        }}
        className={s.item + " " + (hoveredItem === i ? s.selected : "")}
        onClick={() => {
            onItemClicked(i)
        }}
        key={i + options.indexOf(i)}>{i}</div>); // map options with key
    //
    // const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    //     // onChange, onChangeOption
    // }

    return (
        <>
            <div className={s.select}
                 tabIndex={0}
                 onKeyUp={onKeyUp} onBlur={()=>{setActive(false)}}>
                <span className={s.main} onClick={showItems}>{selectedItem}<span className={s.triangle}></span></span>
                {active &&
                <div className={s.items}>
                    {mappedOptions}
                </div>
                }
            </div>
        </>
    )
}

export default SuperSelect
