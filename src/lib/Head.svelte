<script>
     import settings from './stores/settings'
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
{#if $settings.colorScheme == 'dark'}
<style>
  :root{
    --backgroundColor: #1c1a1c;
    --textColor: white;
  }
</style>
{:else }
<style>
    :root{
      --backgroundColor: white;
      --textColor: #1c1a1c;
    }
  </style>
{/if}