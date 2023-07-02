import prisma from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

export default async function Page() {

    const projects = await prisma.project.findMany({
        include: {owner: true}
    });

    console.log(projects)

    return (
        <div>
            <div className="flex justify-between container mx-auto p-8 w-3/4">
                <h1 className="text-4xl">Projects</h1>
                <Link className="bg-blue-800 text-white p-2 rounded text-lg" href={"dashboard/projects/create"}>Create</Link>
            </div>
            <div className="border-t-4 border-blue-500">
                <table className="table-fixed w-3/4 mt-4 mx-auto">
                    <thead className="table-header-group">
                        <tr className="table-row">
                            <th className="table-cell">Name</th>
                            <th className="table-cell">Owner</th>
                        </tr>
                    </thead>
                    <tbody className="table-row-group">
                        {
                            projects.map((row, index) => (
                                <tr key={index} className="table-row hover:bg-slate-800">
                                    <td className="table-cell">{row.name}</td>
                                    <td className="table-cell">{row.owner.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
