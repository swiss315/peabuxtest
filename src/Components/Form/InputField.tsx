"use Client"

import React, {ChangeEvent, useEffect, useState} from 'react';
import {className} from "postcss-selector-parser";

interface InputFieldProps {
    disabled?: boolean;
    label: string;
    name: string;
    type: string;
    max?: string;
    min?: string;
    modelValue: string;
    placeholder?: string;
    mask?: string;
    loading?: boolean;
    tooltip?: string;
    onUpdateModelValue: (value: string, s: string) => void;
    className?: string;
    required?: boolean;
}

export default function InputField({ disabled = false, label ,className, type ,max, name, modelValue, placeholder, tooltip, onUpdateModelValue, min, required}: InputFieldProps): JSX.Element {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value)
        onUpdateModelValue(e.target.name, e.target.value);

        // const newValue = e.target.value;
        // console.log(newValue)
        // setInputValue(newValue);
        //
        // if (onUpdateModelValue) {
        //     props.onChange(newValue);
        // }
    };

    let [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log(modelValue);
        setInputValue(modelValue || '');
    }, [modelValue]);
    return (
        <div className={className}>
            <label
                htmlFor={name} // Use htmlFor instead of for
                className={`${
                    disabled ? 'cursor-not-allowed bg-gray-100/10' : ''
                } border border-gray-300 rounded-md py-2 px-4 block relative`}
            >
                <span className="text-xs text-gray-text flex items-center space-x-2" >
                    <span>{label}</span>
                    {tooltip && (
                        <button type="button" className="cursor-pointer">
                            {/* <InfoCircle size={24} type="bold" className="w-4 h-4" /> */}
                            {/* Replace the above line with your InfoCircle component */}
                        </button>
                    )}
                </span>
                <input
                    disabled={disabled}
                    name={name}
                    type={type}
                    max={max}
                    min={min}
                    value={inputValue}
                    placeholder={placeholder}
                    className={`${
                        disabled ? 'cursor-not-allowed' : ''
                    } block w-full py-2 text-sm text-gray-900 px-0 bg-transparent focus-visible:outline-0`}
                    onChange={handleInputChange}
                    required={required}
                />
                {/**/}
            </label>
        </div>
    );
}
