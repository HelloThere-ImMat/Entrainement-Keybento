import { useState, ChangeEvent, FormEvent } from 'react';
import { FormState, createSuperHero } from '../api'; // Make sure the path is correct


interface CreationFormProps {
	creating: boolean;
}

function CreationForm({creating}: CreationFormProps) {
	console.log("creating value is : " + creating);
	if (creating) {
		const [form, setForm] = useState<FormState>({
			name: '',
			fullname: '',
			creationDate: '',
			publisher: '',
		  });

		  const [status, setStatus] = useState('');

		  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setForm({
			  ...form,
			  [name]: value,
			});
		  };

		  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			setStatus('Creating superhero...');
			try {
			  await createSuperHero(form);
			  setStatus(`Superhero created successfully!`);
			  setForm({
				name: '',
				fullname: '',
				creationDate: '',
				publisher: '',
			  });
			} catch (error) {
			  setStatus('Failed to create superhero. Please try again.');
			}
		  };

		  return (
			<form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
					<input
					type="text"
					name="name"
					value={form.name}
					onChange={handleChange}
					required
					className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
					<input
					type="text"
					name="fullname"
					value={form.fullname}
					onChange={handleChange}
					required
					className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Creation Date:</label>
					<input
					type="date"
					name="creationDate"
					value={form.creationDate}
					onChange={handleChange}
					required
					className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Publisher:</label>
					<input
					type="text"
					name="publisher"
					value={form.publisher}
					onChange={handleChange}
					required
					className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="w-full py-2 px-4 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
				>Create Superhero
				</button>

				{status && <p className="mt-4 text-green-600 font-medium">{status}</p>}
			</form>
		  );
	}
	return;
}

export default CreationForm;
