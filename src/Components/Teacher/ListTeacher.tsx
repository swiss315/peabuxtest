import {useEffect, useRef, useState} from "react";
import axios from "axios";

interface Teacher {
    nationalID: string;
    title: string;
    name: string;
    surname: string;
    dateOfBirth: string;
    teacherNumber: string;
    salary: string;
    createdAt: string;
}


export default function ListTeacher () {
    let apiurl = "https://peabuxtest-api.onrender.com/api"
    let [data, setData] = useState<Teacher[]>([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${apiurl}/teacher/list`);
                setData(res.data.data)
                console.log(res.data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()
    }, [])
    function formatDate(isoDateString: string | number | Date) {
        const date = new Date(isoDateString);
        return date.toLocaleString(); // Adjust options as needed
    }
    return (
        <div>
            <h1 className="text-blue-500 text-xl px-3 py-3">Teacher List</h1>
            <table className='w-full px-2'>
                <thead>
                <tr className='px-2'>
                    <th className="text-left text-sm px-2 border border-t-0">Name</th>
                    <th className="text-left text-sm px-2 border border-t-0">Teacher Number</th>
                    <th className="text-left text-sm px-2 border border-t-0">Date Of Birth</th>
                    <th className="text-left text-sm px-2 border border-t-0">created at</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-left px-2 text-xs border border-t-0">{data.surname + " " + data.name}</td>
                                <td className="text-left px-2 text-xs border border-t-0">{data.teacherNumber}</td>
                                <td className="text-left px-2 text-xs border border-t-0">{data.dateOfBirth}</td>
                                <td className="text-left px-2 text-xs border border-t-0">{formatDate(data.createdAt)}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    )
}