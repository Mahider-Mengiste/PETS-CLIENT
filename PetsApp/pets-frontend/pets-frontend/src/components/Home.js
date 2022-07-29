import PetsIndex from './pets/petsIndex'
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<PetsIndex />
			<h2>Home Page</h2>
		</>
	)
}

export default Home
