import SelectField from "@/Components/Form/SelectField";
import InputField from "@/Components/Form/InputField";
import CustomButton from "@/Components/Form/CustomButton";
import {useState} from "react";
import axios from "axios";

export default function AddStudent({ onHide }: { onHide: () => void }) {
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 22, today.getMonth(), today.getDate());
    const [data, setData] = useState({
        nationalID: '',
        name: '',
        surname: '',
        dateOfBirth: '',
        studentNumber: '',
    })
    // Format the minimum date as YYYY-MM-DD
    const minDateString = minDate.toISOString().slice(0, 10);
    const [error, setError] = useState(null)
    let apiurl = "https://peabuxtest-api.onrender.com/api"
    const fetchData = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const res = await axios.post(`${apiurl}/student/add`, data); // Pass data as the second argument
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
    const update = (targetName: string, value: any) => {
        console.log(value)
        setData({...data, [targetName]: value})
        console.log(data)
    }
    return (
        <div>
            <form className='px-4 py-2 flex flex-col gap-y-3.5' onSubmit={fetchData}>
                <h1 className='text-blue-500 font-semibold'>Add New Student</h1>
                <div className='flex gap-x-3.5'>
                    <InputField label="First Name" name="name" type="text" modelValue={data.name}
                                placeholder="Habeeb" onUpdateModelValue={update} required={true}/>
                    <InputField label="Last Name" name="surname" type="text" modelValue={data.surname}
                                placeholder="Sunmonu" onUpdateModelValue={update} required={true}/>
                </div>
                <div className='flex gap-x-3.5'>
                    <InputField label="National Id" name="nationalID" type="text" modelValue={data.nationalID}
                                placeholder="National id" onUpdateModelValue={update} required={true}/>
                    <InputField label="Student Number" name="studentNumber" type="text" modelValue={data.studentNumber}
                                placeholder="2023/08/083ST" onUpdateModelValue={update} required={true}/>
                </div>
                <div className='flex gap-x-3.5'>
                    <InputField label="Date Of Birth" name="dateOfBirth" type="date" modelValue={data.dateOfBirth}
                                placeholder="YYYY/MM/DD" onUpdateModelValue={update} max={minDateString}
                                className='w-full' required={true}/>
                </div>
                <CustomButton type='submit' loading={isLoading} label='Submit' disabled={isLoading}/>
            </form>
        </div>
    )
}