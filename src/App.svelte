<svelte:options immutable={true} />

<script>
	// COURS 1 ----------------------------------
	import Button from './lib/Button.svelte';
	// import Counter from "./lib/Counter.svelte";
	// import FaBeer from 'svelte-icons/fa/FaBeer.svelte'
	// import FaAccessibleIcon from 'svelte-icons/fa/FaAccessibleIcon.svelte'
	// COURS 1 ----------------------------------
  
	// COURS 2 ----------------------------------
	// import TodoList from './lib/TodoList.svelte';
	// import { v4 as uuid } from 'uuid';
	// import { tick, onMount } from 'svelte';

	// let todos = null;
	// let isAdding = false;
	// let disabledItems = [];
	// onMount(() => {
	// 	loadTodos();
	// });

	// function loadTodos() {
	// 	fetch('https://jsonplaceholder.typicode.com/todos?_limit=3').then(async (response) => {
	// 		if (response.ok) {
	// 			todos = await response.json();
	// 		} else {
	// 			throw new Error('Something went wrong');
	// 		}
	// 	});
	// }
	// async function handleAddTodo(event) {
	// 	//  e.preventDefault();

	// 	isAdding = true;
	// 	await fetch('https://jsonplaceholder.typicode.com/todos', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			title: event.detail.title,
	// 			completed: false
	// 		}),
	// 		headers: {
	// 			'Content-type': 'application/json; charset=UTF-8'
	// 		}
	// 	}).then(async (response) => {
	// 		if (response.ok) {
	// 			const todo = await response.json();
	// 			console.log(todo);
	// 			todos = [...todos, { ...todo, id: uuid() }];
	// 		}
	// 	});
	// 	isAdding = false;
	// }
	// async function handleRemoveTodo(event) {
	// 	let id = event.detail.id;
	// 	if (disabledItems.includes(id)) return;
	// 	disabledItems = [...disabledItems, id];
	// 	await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
	// 		method: 'DELETE'
	// 	}).then((response) => {
	// 		if (response.ok) {
	// 			todos = todos.filter((e) => e.id !== id);
	// 		} else {
	// 			alert('erreur');
	// 		}
	// 	});
	// 	disabledItems = disabledItems.filter((itemId) => itemId !== id);
	// }
	// async function handleToggleTodo(event) {

  //   let id = event.detail.id;
  //   if (disabledItems.includes(id)) return;
	// 	disabledItems = [...disabledItems, id];

	// 	await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
	// 		method: 'PATCH',
  //     body: JSON.stringify({
  //       completed: event.detail.completed
  //     }),
  //     headers:{
  //       'content-type': 'application/json; charset=UTF-8'
  //     }
	// 	}).then((response) => {
	// 		if (response.ok) {
	// 			todos = todos.map((todo) => {
	// 				if (todo.id === id) {
  //           console.log(response);
	// 					return { ...todo, completed: event.detail.completed };
	// 				}
	// 				return { ...todo };
	// 			});
	// 		} else {
	// 			alert('erreur');
	// 		}
	// 	});
  //   disabledItems = disabledItems.filter((itemId) => itemId !== id);
	// }
	// COURS 2 ----------------------------------
</script>

<!-- COURS 1 ---------------------------------- -->
<!-- <Button on:click|once={(event)=>alert(true)}  let:isLeftHovered size="large" shadow disabled bgColor="#069d93" textColor="#8cd9c6" >
  <div style:width="30px" slot="leftContent">
    {#if isLeftHovered}
    <FaBeer/>
    {:else}
    <FaAccessibleIcon/>
    {/if}
  
  </div>
  TEST 
</Button> -->
<!-- <Counter/> -->
<!-- COURS 1 ---------------------------------- -->
<!-- COURS 2 ---------------------------------- -->

<!-- <TodoList
	{todos}
	disabledAdding={isAdding}
	on:addtodo={handleAddTodo}
	on:removetodo={handleRemoveTodo}
	on:toggletodo={handleToggleTodo}
  let:todo
>

</TodoList> -->
<!-- COURS 2 ---------------------------------- -->
<style>
</style>
