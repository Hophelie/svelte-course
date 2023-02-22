<script>
	
    import settings from '../stores/settings'
    
</script>

<h1>Settings</h1>
<button
  on:click={() => {
    settings.toggleColorScheme();
  }}>Toggle Color Scheme</button
>
<button
  on:click={() => {
    settings.updateSetting('language', Math.random());
  }}>Update language</button
><br />
{$settings.language}
<button
  on:click={() => {
    settings.reset();
  }}>Reset Settings</button
>
<label for="">
    <input type="radio" name="colorScheme" id="" value="dark" bind:group={$settings.colorScheme}>Dark
</label>
<label for="">
    <input type="radio" name="colorScheme" id="" value="light" bind:group={$settings.colorScheme}>Light
</label>