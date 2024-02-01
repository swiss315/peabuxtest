import SelectField from "@/Components/Form/SelectField";
import InputField from "@/Components/Form/InputField";
import CustomButton from "@/Components/Form/CustomButton";
import {useState} from "react";

export default function AddTeacher() {
    const [name, setName] = useState('');
    const [page, setPage] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    let options = [
        {
            label: 'Male',
            value:'male',
        },
        {
            label: 'Female',
            value: 'female',
        }
    ]
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate());

    // Format the minimum date as YYYY-MM-DD
    const minDateString = minDate.toISOString().slice(0, 10);
    const update = (value: any) => {
        console.log(value)
    }
    return (
        <div>
            <form className='px-4 py-2 flex flex-col gap-y-3.5'>
                <h1 className='text-blue-500 font-semibold'>Add New Teacher</h1>
                <div className='flex'>
                    <SelectField label="Title" className='w-full' id='gender' modelValue={name}
                                 onUpdateModelValue={update} placeholder="Select Title" options={options}/>
                </div>
                <div className='flex gap-x-3.5'>
                    <InputField label="First Name" name="name" type="text" modelValue={name}
                                placeholder="Habeeb" onUpdateModelValue={update}/>
                    <InputField label="Last Name" name="name" type="text" modelValue={name}
                                placeholder="Sunmonu" onUpdateModelValue={update}/>
                </div>
                <div className='flex gap-x-3.5'>
                    <InputField label="National Id" name="name" type="text" modelValue={name}
                                placeholder="National id" onUpdateModelValue={update}/>
                    <InputField label="Teacher Number" name="name" type="text" modelValue={name}
                                placeholder="2023/08/083PB" onUpdateModelValue={update}/>
                </div>
                <div className='flex gap-x-3.5'>
                    <InputField label="Date Of Birth" name="name" type="date" modelValue={name}
                                placeholder="YYYY/MM/DD" onUpdateModelValue={update} max={minDateString}
                                className='w-1/2'/>
                    <InputField label="Salary" name="name" type="text" modelValue={name}
                                placeholder="$100,000.00" onUpdateModelValue={update} className='w-1/2'/>
                </div>
                <CustomButton type='submit' loading={isLoading} label='Submit' disabled={true}/>
            </form>
        </div>
    )
}