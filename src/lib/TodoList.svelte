<script>
    import Button from "./Button.svelte";
    import { createEventDispatcher,onMount, afterUpdate  } from 'svelte'  ;


    afterUpdate(() => {
        if (autoscroll){
            listDiv.scrollTo(0, listDiv.scrollHeight)
        }
        autoscroll = false
       
    })
    export let disabledAdding = false
	export let todos = null;
    import { v4 as uuid } from 'uuid';
    let prevTodos = todos;
    $:{
        autoscroll = todos && prevTodos && todos.length > prevTodos.length
        prevTodos = todos
    }
    let dispach = createEventDispatcher()
    let input, listDiv, autoscroll
    function handleAddTodo(){
        // dispach retourn un boolean qui indique si l'evenement a ete annule
       const isNotCancelled = dispach(
        'addtodo',
        {id:uuid(),title: input, completed: false},
        {cancelable:true}
        )
        if (isNotCancelled){
            input = ''
        }
    }
    function handleRemoveTodo(id){
        dispach('removetodo', {id: id})
    }
    function handleToggleTodo(id, value){
        dispach('toggletodo',{id: id, completed: value})
    }

</script>


<div class="todo-list-wrapper">
{#if todos}
    <div class="todo-list" bind:this={listDiv}> 
        <ul  class="checkboxList">
            {#each todos as todo (todo.id) }
            {@const { id, completed,title} = todo}
                <li>
                    <slot {todo}>
                        <div class="completed checkboxList__item">
                        <input type="checkbox" id="checkbox{id}" class="checkboxList__checkbox" on:input={(event)=>{event.currentTarget.checked = completed
                                    handleToggleTodo(id, !completed)
                                }} checked={completed} />
                            <label  for="checkbox{id}"> </label><span>{title}</span>
                            <button on:click={()=>{handleRemoveTodo(id)}}>X</button>
                        </div>
                    </slot>
                </li>
            {/each}
            
        </ul>
    </div>
{/if}
	<form action="" class="add-todo-form" on:submit|preventDefault ={handleAddTodo} >
		<input type="text" disabled ={disabledAdding} bind:value={input}/>
        <Button type="submit" disabled={!input || disabledAdding } >Add</Button>
	</form>
</div>

<style lang="scss">
    form{
        background-color: #e5eefe;
        padding: 1rem;
        border-radius: 10px;
    }
    a {
  text-decoration: none;
}

	ul {
		list-style: none;
		padding: 0;
	}
	li >div {
        display: flex;
        justify-content: space-between;
		padding: 0.8rem;
        margin: 1rem ;
        border-radius: 10px;
       
        /* box-shadow: inset -8px -8px 19px #b4c2d9,
            inset 8px 8px 19px #ffffff; */
       background-color: #e5eefe;
         
	}

    .todo-list {
        max-height: 650px;
        margin: 0 auto;
        overflow: auto;
    }
    .todo-list-wrapper {
        width: 80%;
        margin: 0 auto;
    }
    button{
        cursor: pointer;
        padding: 0.7rem 0.9rem;
        border:none;
        background-color: #b4c2d9;
        color: #ffffff;
        border-radius: 50%;
        background: linear-gradient(145deg, white, #6d90ff);
        box-shadow:  8px 8px 9px #b4c2d9,
             -8px -8px 9px #f8fdff;
    }
    input[type=text]{
        width: 88%;
        margin-bottom: 1.3rem;
        border:none;
        background-color: #ffffff;
        color: #525252;
        border-radius: 10px;
        padding: 1rem;
       
    }
    
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i&display=swap');





.checkboxList {


 &__checkbox {
    position: absolute;
    left: -9999px;  // 隱藏框框
   
  }
  &__checkbox + label {
   
    width: 30px;
    height: 30px;
    
    
    border-radius: 10px;
    background-color: #ebf5fc;
    box-shadow: 
      -2px -2px 5px rgba(white, 1),
       2px  2px 5px rgba(black, 0.1);
  
    cursor: pointer;
   
  }
  &__checkbox:checked + label {
    box-shadow: 
      inset -2px -2px 5px rgba(rgba(235, 232, 255, 0.922), 1),
      inset  2px  2px 5px rgba(black, 0.1);
      background-color: #bacbff;
    
  }
}
    
</style>
