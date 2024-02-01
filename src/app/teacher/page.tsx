"use client"
import Link from "next/link";
import {useState} from "react";
import ListTeacher from "@/Components/Teacher/ListTeacher";
import AddTeacher from "@/Components/Teacher/AddTeacher";


export default function Page() {
    const [page, setPage] = useState(false)
    return (
        <div className='w-1/2 flex flex-col justify-center items-center gap-y-3.5'>
            <div className="">
                <h1 className="text-blue-500 text-xl">Welcome to Peabux Teacher and Student Database</h1>
            </div>
            <div className='flex justify-between px-2 w-7/12 gap-x-3.5'>
                {!page ? (
                    <Link href="/"
                         className='bg-white border rounded-md hover:bg-black hover:text-white text-sm px-4 py-2'>
                            Back
                    </Link>
                ) : (
                    <button onClick={() => {setPage(false)}} type="button" className='bg-white border rounded-md hover:bg-black hover:text-white text-sm px-4 py-2'>
                        Back
                    </button>
                )}


                <button onClick={() =>  setPage(true)} className='flex justify-center items-center bg-white border px-4 rounded-lg border-blue-500'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                    <span className="ml-2">Add</span>
                </button>
            </div>
            <div className='border rounded-lg bg-white  w-7/12'
                 style={{minHeight: '500px', boxShadow: '0px 4px 17px 0px #0B22391A'}}>
                {!page ?
                <ListTeacher /> :
                <AddTeacher onHide={() => setPage(false)}/>
                }
            </div>
        </div>
    )
}