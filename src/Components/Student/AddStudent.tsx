import SelectField from "@/Components/Form/SelectField";
import InputField from "@/Components/Form/InputField";
import CustomButton from "@/Components/Form/CustomButton";
import {useState} from "react";

export default function AddStudent() {
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 22, today.getMonth(), today.getDate());

    // Format the minimum date as YYYY-MM-DD
    const minDateString = minDate.toISOString().slice(0, 10);
    const update = (value: any) => {
        console.log(value)
    }
    return (
        <div>
            <form className='px-4 py-2 flex flex-col gap-y-3.5'>
                <h1 className='text-blue-500 font-semibold'>Add New Student</h1>
                <div className='flex gap-x-3.5'>
                    <InputField label="First Name" name="name" type="text" modelValue={name}
                                placeholder="Habeeb" onUpdateModelValue={update}/>
                    <InputField label="Last Name" name="name" type="text" modelValue={name}
                                placeholder="Sunmonu" onUpdateModelValue={update}/>
                </div>
                <div className='flex gap-x-3.5'>
                    <InputField label="National Id" name="name" type="text" modelValue={name}
                                placeholder="National id" onUpdateModelValue={update}/>
                    <InputField label="Student Number" name="name" type="text" modelValue={name}
                                placeholder="2023/08/083ST" onUpdateModelValue={update}/>
                </div>
                <div className='flex gap-x-3.5'>
                    <InputField label="Date Of Birth" name="name" type="date" modelValue={name}
                                placeholder="YYYY/MM/DD" onUpdateModelValue={update} max={minDateString}
                                className='w-full'/>
                </div>
                <CustomButton type='submit' loading={isLoading} label='Submit' disabled={true}/>
            </form>
        </div>
    )
}