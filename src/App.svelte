<script>
  // OLD WAY TIPPY
	// import { onMount } from "svelte";
  // import tippy from "tippy.js"
  // import 'tippy.js/dist/tippy.css'

  // let button; 
  // onMount(()=>{
  //   tippy('.tooltip', {
  //     content:'tootlip content'
  //   })
  //   tippy(button, {
  //     content:'text'
  //   })
  // })
  import tippy from './lib/actions/tippy'
  let content = 'hello'
</script>
<!-- OLD WAY TIPPY
<button class="tooltip">Button</button>
<button class="tooltip" data-tippy-content="sfesf">Button</button>

<button bind:this={button}>button</button> -->
<input type="text" name="" id="" bind:value={content}>
<button use:tippy={{content, placement:'right', theme:'light'}}>cc</button>
<style>
</style>
