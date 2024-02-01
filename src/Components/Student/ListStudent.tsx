import {useEffect, useState} from "react";
import axios from "axios";

interface Student {
    nationalID: string;
    name: string;
    surname: string;
    dateOfBirth: string;
    studentNumber: string;
    createdAt: string;
}

export default function ListStudent () {
    let apiurl = "https://peabuxtest-api.onrender.com/api"
    let [data, setData] = useState<Student[]>([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${apiurl}/student/list`);
                setData(res.data)
                console.log(res.data)
            } catch (error) {
                console.error('Error fetching data:', error)
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
            <h1 className="text-blue-500 text-xl px-3 py-3">Student List</h1>
            <table className='w-full px-2'>
                <thead>
                <tr className='px-2'>
                    <th className="text-left text-sm px-2 border border-t-0">Name</th>
                    <th className="text-left text-sm px-2 border border-t-0">Student Number</th>
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
                                <td className="text-left px-2 text-xs border border-t-0">{data.studentNumber}</td>
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