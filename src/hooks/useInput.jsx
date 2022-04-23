import { useState } from 'react'

export const useInput = () => {
	const [inputValue, setInputValue] = useState({})
	const [name, setName] = useState('')
	const [inputTouched, setInputTouched] = useState(false)

	let valueIsValid = null
	let valueIsInValid = null
	if (name && inputValue[name].trim().length > 0) {
		valueIsValid = true
	} else {
		valueIsValid = false
	}

	if (!valueIsValid && inputTouched) {
		valueIsInValid = true
	} else {
		valueIsInValid = false
	}

	return {
		name,
		inputValue,
		valueIsInValid,
		valueIsValid,
		setInputValue,
		onChange: (e) => {
			setInputValue({ ...inputValue, [e.target.name]: e.target.value })
			setName(e.target.name)
		},
		onBlur: () => setInputTouched(true),
		onClear: () => {
			let clearedValues = {}
			for (let key in inputValue) {
				clearedValues[key] = ''
			}

			setInputValue(clearedValues)

			setInputTouched(false)
		},
	}
}
