import React, { useState, useEffect } from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'
import Results from './Results'
import useDropdown from './useDropdown'

const SerarchParams = () => {
	const [location, setLocation] = useState('Seattle, WA')
	const [breeds, setBreeds] = useState([])
	const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS)
	const [breed, BreedDropdown, setBreed] = useDropdown('bread', '', breeds)
	const [pets, setPets] = useState([])

	async function requestPets() {
		const { animals } = await pet.animals({
			location,
			breed,
			type: animal,
		})

		setPets(animals || [])
	}

	useEffect(() => {
		setBreeds([])
		setBreed('')
		pet.breeds(animal).then(({ breeds }) => {
			const breedStrings = breeds.map(({ name }) => name)
			setBreeds(breedStrings)
		}, console.error)
	}, [animal])

	return (
		<div className='search-params'>
			<form
				onSubmit={e => {
					e.preventDefault()
					requestPets()
				}}
			>
				<label htmlFor='location'>
					location <input type='text' name='' id='location' placeholder='location' />
				</label>
				<AnimalDropdown />
				<BreedDropdown />
				<button> submit </button>
			</form>
			<Results pets={pets} />
		</div>
	)
}

export default SerarchParams
