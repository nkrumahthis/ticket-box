import PrimaryLink from '@/app/PrimaryLink';
import SearchBox from '@/app/SearchBox';
import prisma from '@/lib/prisma'
import Link from 'next/link'

export default async function Page() {

  const projects = await prisma.project.findMany({
    include: { owner: true }
  });

  return (
    <div>
      <div className="flex justify-between container mx-auto p-8 w-3/4 align-middle">
        <h1 className="text-2xl align-middle">Projects</h1>
        <PrimaryLink className="align-middle" location="/dashboard/projects/create" label="Create Project" />
      </div>
      <div>
        <SearchBox />
      </div>
      <div className="">
        <table className="table-auto w-3/4 mt-4 mx-auto p-3 text-left">
          <thead className="table-header-group border-b border-b-slate-600">
            <tr className="table-row">
              <th className="table-cell p-5">Name</th>
              <th className="table-cell p-5">Owner</th>
            </tr>
          </thead>
          <tbody className="table-row-group">
            {
              projects.map((row, index) => (
                <tr key={index} className="table-row hover:bg-slate-800 p-3">
                  <td className="table-cell p-4"><Link className="text-blue-400 hover:underline" href={"/dashboard/projects/" + row.id}>{row.name}</Link></td>
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
