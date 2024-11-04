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
			<form onSubmit={handleSubmit}>
			  <div>
				<label>Name:</label>
				<input
				  type="text"
				  name="name"
				  value={form.name}
				  onChange={handleChange}
				  required
				/>
			  </div>
			  <div>
				<label>Full Name:</label>
				<input
				  type="text"
				  name="fullname"
				  value={form.fullname}
				  onChange={handleChange}
				  required
				/>
			  </div>
			  <div>
				<label>Creation Date:</label>
				<input
				  type="date"
				  name="creationDate"
				  value={form.creationDate}
				  onChange={handleChange}
				  required
				/>
			  </div>
			  <div>
				<label>Publisher:</label>
				<input
				  type="text"
				  name="publisher"
				  value={form.publisher}
				  onChange={handleChange}
				  required
				/>
			  </div>
			  <button className="bg-blue" type="submit">Create Superhero</button>
			  {status && <p>{status}</p>}
			</form>
		  );
	}
	return;
}

export default CreationForm;
