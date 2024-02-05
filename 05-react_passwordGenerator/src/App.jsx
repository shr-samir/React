import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
	const [length, setLength] = useState(8);
	const [includeNums, setIncludeNums] = useState(false);
	const [includeChars, setIncludeChars] = useState(false);
	const [password, setPassword] = useState('');

	const passwordRef = useRef(null);

	const passwordGenerator = useCallback(() => {
		let pw = '';
		let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

		if (includeNums) str += '0123456789';
		if (includeChars) str += '!@#$%^&*()-=+_~?.,';

		for (let i = 0; i < length; i++) {
			let char = Math.floor(Math.random() * str.length);
			pw += str.charAt(char);
		}

		setPassword(pw);
	}, [length, includeNums, includeChars, setPassword]);

	const copyPasswordToClipboard = useCallback(() => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, 32);
		window.navigator.clipboard.writeText(password);
	}, [password]);

	useEffect(() => {
		passwordGenerator();
	}, [length, includeNums, includeChars, passwordGenerator]);

	return (
		<>
			<div
				id='wrapper'
				className='w-full h-screen bg-black text-white flex flex-col justify-center items-center'
			>
				<h1 className='text-3xl'>Password Generator</h1>
				<div
					id='container'
					className='max-w-md flex flex-col gap-3 bg-gray-500 w-2/5 m-3 px-3 py-4 rounded-lg'
				>
					<div id='inputContainer' className='flex'>
						<input
							id='password'
							className='w-full p-2 rounded-tl-md rounded-bl-md text-black outline-none'
							type='text'
							name='password'
							value={password}
							placeholder='Random Password'
							readOnly
							ref={passwordRef}
						/>
						<button
							type='button'
							className='bg-blue-500 px-4 py-2 rounded-tr-md rounded-br-md cursor-pointer'
							onClick={copyPasswordToClipboard}
						>
							copy
						</button>
					</div>
					<div
						id='passwordFactors'
						className='flex flex-wrap gap-2 justify-between items-center'
					>
						<fieldset id='lengthFactor' className='flex flex-wrap gap-2'>
							<input
								id='passwordLength'
								className='cursor-pointer'
								type='range'
								name='length'
								min={8}
								max={32}
								value={length}
								onChange={(e) => {
									setLength(e.target.value);
								}}
							/>
							<label>Length ({length})</label>
						</fieldset>
						<fieldset id='numFactor' className='flex gap-2'>
							<input
								id='includeNums'
								type='checkbox'
								name='nums'
								defaultChecked={includeNums}
								onChange={() => {
									setIncludeNums((prev) => !prev);
								}}
							/>
							<label>Numbers</label>
						</fieldset>
						<fieldset id='charFactor' className='flex gap-2'>
							<input
								id='specialChars'
								type='checkbox'
								name='specialChars'
								defaultChecked={includeChars}
								onChange={() => {
									setIncludeChars((prev) => !prev);
								}}
							/>
							<label>Special Characters</label>
						</fieldset>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;