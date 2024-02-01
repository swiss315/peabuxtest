import Link from "next/link";
import backgroundImageUrl from "../Assets/Images/background.png";
import Card from "@/Components/Card/Card";


export default function Home() {
    console.log(backgroundImageUrl)
  return (
        <div className='w-1/2 flex flex-col justify-center items-center gap-y-3.5'>
            <div className="">
                <h1 className="text-blue-500 text-xl">Welcome to Peabux Teacher and Student Database</h1>
            </div>
            <div className='flex flex-col justify-between w-7/12 gap-y-3.5'>
                <Card name='teacher' total={54} />
                <Card name='student' total={45} />
            </div>
            {/*<div className='border rounded-lg bg-white  w-7/12' style={{minHeight: '500px', boxShadow: '0px 4px 17px 0px #0B22391A'}}>*/}
            {/*    <h1 className="text-red-600 text-xl px-3 py-3">Newly Added</h1>*/}
            {/*    <table className='w-full px-2'>*/}
            {/*        <thead>*/}
            {/*        <tr className='px-2'>*/}
            {/*            <th className="text-left px-2 border border-t-0">Name</th>*/}
            {/*            <th className="text-left px-2 border border-t-0">Email</th>*/}
            {/*            <th className="text-left px-2 border border-t-0">Phone</th>*/}
            {/*            <th className="text-left px-2 border border-t-0">Category</th>*/}
            {/*        </tr>*/}
            {/*        </thead>*/}
            {/*        <tbody>*/}
            {/*        <tr>*/}
            {/*            <td className="text-left px-2 border border-t-0">Habeeb</td>*/}
            {/*            <td className="text-left px-2 border border-t-0">Swiss</td>*/}
            {/*            <td className="text-left px-2 border border-t-0">0712345678</td>*/}
            {/*            <td className="text-left px-2 border border-t-0">Teacher</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td className="text-left px-2 border border-t-0">Habeeb</td>*/}
            {/*            <td className="text-left px-2 border border-t-0">Swiss</td>*/}
            {/*            <td className="text-left px-2 border border-t-0">0712345678</td>*/}
            {/*            <td className="text-left px-2 border border-t-0">Student</td>*/}
            {/*        </tr>*/}
            {/*        </tbody>*/}
            {/*    </table>*/}
            {/*</div>*/}
        </div>
  );
}
