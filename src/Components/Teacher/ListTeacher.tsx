import {useEffect} from "react";
import axios from "axios";

export default function ListTeacher () {
    let apiurl = "http://localhost:3000/api/"
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiurl}/teacher/list`);
                // setData(response.data);
                console.log(response)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <h1 className="text-red-600 text-xl px-3 py-3">Teacher List</h1>
            <table className='w-full px-2'>
                <thead>
                <tr className='px-2'>
                    <th className="text-left px-2 border border-t-0">Name</th>
                    <th className="text-left px-2 border border-t-0">Email</th>
                    <th className="text-left px-2 border border-t-0">Phone</th>
                    <th className="text-left px-2 border border-t-0">Category</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="text-left px-2 border border-t-0">Habeeb</td>
                    <td className="text-left px-2 border border-t-0">Swiss</td>
                    <td className="text-left px-2 border border-t-0">0712345678</td>
                    <td className="text-left px-2 border border-t-0">Teacher</td>
                </tr>
                <tr>
                    <td className="text-left px-2 border border-t-0">Habeeb</td>
                    <td className="text-left px-2 border border-t-0">Swiss</td>
                    <td className="text-left px-2 border border-t-0">0712345678</td>
                    <td className="text-left px-2 border border-t-0">Student</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}