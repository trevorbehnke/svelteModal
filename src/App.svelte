<script>
	import Modal from "./Modal.svelte"
	import AddPersonForm from "./AddPersonForm.svelte"
	let people = [
		{name: "TBone", beltColor: "red", age: 25, id:1},
		{name: "Jimi", beltColor: "purple", age: 87, id:2},
		{name: "Hank", beltColor: "green", age: 31, id:3},
	]

	const handleClick = (id) => {
		people = people.filter(person => person.id != id)
	}

	let showModal = false

	const toggleModal = ()=> {
		showModal = !showModal
	}

	const addPerson = (e) => {
		console.log(e.detail);
		const person = e.detail;
		people = [person, ...people]
		showModal = false;
	}
</script>

<Modal isPromo={true} {showModal} on:click={toggleModal}>
	<AddPersonForm on:addPerson={addPerson}/>
</Modal>

<main>
	<button on:click={toggleModal}>Open Modal</button>
	{#each people as {name, beltColor, id}}
		<h4 style="color: {beltColor}">{name}</h4>
		{#if beltColor === "red"}
			<p style="color: {beltColor}"><strong>MASTER NINJA</strong></p>
		{/if}
		<p style="color: {beltColor}">{beltColor} belt</p>
		<button style="color: {beltColor}" on:click={()=>handleClick(id)}>Delete</button>
	{/each}
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>