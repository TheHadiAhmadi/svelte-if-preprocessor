# Svelte preprocessor
This preprocessor changes if props to svelte's if tag

changes below code
```svelte
<button if={2 + 2 === 4}>
  Show
</button>
```

to:
```svelte
{#if 2 + 2 === 4}
<button>
  Show
</button>
{/if}
```