import { Superhero } from '../api';

interface SuperHeroesTableProps {
  superheroes: Superhero[];
}

function SuperHeroesTable({ superheroes }: SuperHeroesTableProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creation Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Publisher</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {superheroes.map((hero) => (
              <tr key={hero.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{hero.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hero.fullname}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {(hero.creationDate)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hero.publisher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SuperHeroesTable;
