"use Client"
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { IoChevronDown } from 'react-icons/io5';
import {className} from "postcss-selector-parser";

interface Option {
    value: string | number;
    label: string;
    iso?: string;
}

interface Props {
    modelValue: string | number | null;
    label: string;
    placeholder: string;
    id: string;
    loading?: boolean;
    options?: Option[];
    isCountry?: boolean;
    disabled?: boolean;
    onUpdateModelValue: (value: string | number) => void;
    className?: string;
}

export default function SelectField({
                                      modelValue,
                                      label,
                                      placeholder,
                                      id,
                                      loading = false,
                                      options = [],
                                      disabled = false,
                                      onUpdateModelValue,
                                        className
                                  }: Props): JSX.Element {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const getSelectedOption = (): Option | null => {
        return options.find((option) => option.value === modelValue) || null;
    };

    const onOptionSelected = (value: Option): void => {
        onUpdateModelValue(value.value);
        setSelectedOption(value);
    };

    return (
        <Menu as="div" className={`relative text-left mb-3 ${className}`}>
            <Menu.Button
                disabled={disabled}
                className={`${
                    disabled
                        ? 'cursor-not-allowed bg-gray-50'
                        : 'border border-gray-300 rounded-md py-2 px-4 relative text-left min-h-[78px] w-full flex justify-between items-end'
                }`}
            >
                <div>
                    <span className="text-xs text-gray-text">{label}</span>
                    <div className="w-full py-2 text-sm text-gray-900 px-0 bg-transparent flex items-center">

                        {(selectedOption && selectedOption.label) || placeholder}
                    </div>
                </div>
                <IoChevronDown size={20} color="#7D8494" />
            </Menu.Button>

            <Menu.Items
                className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-scroll max-h-52"
            >
                <div className="py-1">
                    {options.map((option, index) => (
                        <Menu.Item key={index}>
                            {({ active }) => (
                                <button
                                    type="button"
                                    onClick={() => onOptionSelected(option)}
                                    className={`${
                                        active ? 'bg-gray-100/10 text-gray-900' : 'text-gray-700'
                                    } px-4 py-2 flex items-center space-x-3 text-xs w-full`}
                                >
                                    {option.label}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </div>
            </Menu.Items>
        </Menu>
    );
}
