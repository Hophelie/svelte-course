<script>
  import  {onMount} from 'svelte';
 import Home from './lib/pages/Home.svelte'
 import Settings from './lib/pages/Settings.svelte'
  import Head from './lib/Head.svelte'
 let page
 function onRouteChange(){
  // slice récupère le path sans le #
    const path =  window.location.hash.slice(1);
    if (path == '/'){
      page = "home"
    }else if (path == '/settings'){
      page = "settings"
    }else{
      // redirect to home if don't exist
      window.location.hash ="/"
    }
 }

 onMount(onRouteChange)
</script>
<svelte:window on:hashchange={onRouteChange} />
<svelte:head>
 <Head/>
</svelte:head>
<nav>
  <a href="#/">Home</a>
  <a href="#/settings">Settings</a>
</nav>
  {#if page == 'home'}
  <Home/>
  {:else if page == 'settings'}
  <Settings/>
  {/if}
<style>
</style>
