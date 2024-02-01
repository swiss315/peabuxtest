import Link from "next/link";

interface Props {
    name?: String;
    total?: number;
}

export default function Card({name, total}: Props) {
    return (
        <div className=" bg-white rounded-lg w-full py-3 px-2 flex flex-col gap-y-3.5"
             style={{boxShadow: '0px 4px 17px 0px #0B22391A'}}>
            <div className='flex justify-between text-2xl'>
                <h1 className='capitalize'>{name}</h1>
                <span>{total}</span>
            </div>
            <Link className='text-sm text-end w-full block' href={`/${name}`}>View More</Link>
        </div>
    )
}