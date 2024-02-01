import SelectField from "@/Components/Form/SelectField";
import InputField from "@/Components/Form/InputField";
import CustomButton from "@/Components/Form/CustomButton";
import {useState} from "react";
import axios from "axios";

export default function AddTeacher({ onHide }: { onHide: () => void }) {
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

    const minDateString = minDate.toISOString().slice(0, 10);
    const [data, setData] = useState({
        nationalID: '',
        title: '',
        name: '',
        surname: '',
        dateOfBirth: '',
        teacherNumber: '',
        salary: '',
    })

    const update = (targetName: string, value: any) => {
        console.log(value)
        setData({...data, [targetName]: value})
        console.log(data)
    }
    const updatetitle = (value: any) => {
        console.log(value)
        setData({...data, title: value})
        console.log(data)
    }
    const [error, setError] = useState(null)
    let apiurl = "https://peabuxtest-api.onrender.com/api"
    const fetchData = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const res = await axios.post(`${apiurl}/teacher/add`, data); // Pass data as the second argument
            console.log(res.data.data);
            setIsLoading(false);
            onHide()
        } catch (error) {
            setIsLoading(false);
            console.error('Error fetching data:', error);
            // @ts-ignore
            setError(error?.response?.data.error)
        }
    };


    return (
        <div>
            <form className='px-4 py-2 flex flex-col gap-y-3.5' onSubmit={fetchData}>
                <h1 className='text-blue-500 font-semibold'>Add New Teacher</h1>
                <div className='flex'>
                    <SelectField label="Title" className='w-full' id='gender' modelValue={data.title}
                                 onUpdateModelValue={updatetitle} placeholder="Select Title" options={options}/>
                </div>
                <div className='flex gap-x-3.5'>
                    <InputField label="First Name" name="name" type="text" modelValue={data.name}
                                placeholder="Habeeb" onUpdateModelValue={update} required={true}/>
                    <InputField label="Last Name" name="surname" type="text" modelValue={data.surname}
                                placeholder="Sunmonu" onUpdateModelValue={update} required={true}/>
                </div>
                <div className='flex gap-x-3.5'>
                    <InputField label="National Id" name="nationalID" type="text" modelValue={data.nationalID}
                                placeholder="National id" onUpdateModelValue={update} required={true}/>
                    <InputField label="Teacher Number" name="teacherNumber" type="text" modelValue={data.teacherNumber}
                                placeholder="2023/08/083PB" onUpdateModelValue={update} required={true}/>
                </div>
                <div className='flex gap-x-3.5'>
                    <InputField label="Date Of Birth" name="dateOfBirth" type="date" modelValue={data.dateOfBirth}
                                placeholder="YYYY/MM/DD" onUpdateModelValue={update} max={minDateString} required={true}
                                className='w-1/2'/>
                    <InputField label="Salary" name="salary" type="text" modelValue={data.salary}
                                placeholder="$100,000.00" onUpdateModelValue={update} className='w-1/2'/>
                </div>
                <div>
                    <span className='text-xs text-red-600 italic'>{error}</span>
                </div>
                <CustomButton type='submit' loading={isLoading} label='Submit' disabled={isLoading} />
            </form>
        </div>
    )
}