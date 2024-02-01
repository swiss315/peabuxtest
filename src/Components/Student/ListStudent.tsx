export default function ListStudent () {
    return (
        <div>
            <h1 className="text-red-600 text-xl px-3 py-3">Student List</h1>
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