<script>
	
    import settings from '../stores/settings'
    import location from '../stores/location'
    
</script>

<h1>Home</h1>
{#if $location && !$location.error }
    {$location.latitude} ,{$location.longitude}
{/if}
{#if $location && $location.error }
    {$location.error.message}
{/if}
{$settings.colorScheme}