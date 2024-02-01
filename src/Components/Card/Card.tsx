import Link from "next/link";

interface Props {
    name?: String;
    total?: number;
}

export default function Card({name, total}: Props) {
    return (
        <Link className=" bg-white rounded-lg w-full py-3 px-2 flex flex-col gap-y-3.5"
             style={{boxShadow: '0px 4px 17px 0px #0B22391A'}} href={`/${name}`}>
            <div className='flex justify-between text-2xl'>
                <h1 className='capitalize'>{name}</h1>
                <span>{total}</span>
            </div>
            <Link className='text-xs text-blue-500 text-end w-full block' href={`/${name}`}>View More</Link>
        </Link>
    )
}