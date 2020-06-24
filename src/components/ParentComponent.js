import React, {useState, useCallback} from 'react'
import Count from './Count'
import Title from './Title'
import Button from './Button'

function ParentComponent() {
	const [age, setAge] = useState(0)
	const [salary, setSalary] = useState(50000)

	const incrementAge = useCallback(() => {
		setAge(previous => previous + 1)
	}, [])

	const incrementSalary = useCallback(() => {
		setSalary(previous => previous + 1000)
	}, [])

	return <div className='App'>
		<Title/>
		<Count text="Age" count = {age}/>
		<Button handleClick={incrementAge}>Increment Age</Button>
		<Count text="Salary" count = {salary}/>
		<Button handleClick={incrementSalary}>Increment Salary</Button>
	</div>
}

export default ParentComponent