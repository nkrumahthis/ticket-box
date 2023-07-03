import prisma from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

export default async function Page() {

  const projects = await prisma.project.findMany({
    include: { owner: true }
  });

  return (
    <div>
      <div className="flex justify-between container mx-auto p-8 w-3/4">
        <h1 className="text-2xl">Projects</h1>
        <Link className="bg-blue-800 text-white py-2 px-3 rounded text-m" href={"dashboard/projects/create"}>Create</Link>
      </div>
      <div className="border-t-4 border-blue-500">
        <table className="table-auto w-3/4 mt-4 mx-auto p-3 text-left">
          <thead className="table-header-group border-b">
            <tr className="table-row">
              <th className="table-cell p-5">Name</th>
              <th className="table-cell p-5">Owner</th>
            </tr>
          </thead>
          <tbody className="table-row-group">
            {
              projects.map((row, index) => (
                <tr key={index} className="table-row hover:bg-slate-800 p-3">
                  <Link className="text-blue-400 hover:underline" href={"projects/" + row.id}><td className="table-cell p-4">{row.name}</td></Link>
                  <td className="table-cell p-4">{row.owner.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
