
<script>
import Counter from "./lib/Counter.svelte";

  let showCounter = false
  let show = false
</script>

<button on:click={() => showCounter = !showCounter}>show/hide Counter</button>
<button on:click={() => show = !show}>Toggle show</button>

<br/>
<br/>
<br/>
if= show
<button if={show}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quos ullam repellat aperiam excepturi, quis nulla ipsam maiores provident consequuntur ad enim, similique, vitae repudiandae! Accusamus provident in labore eum.
</button>
<br/>
<br/>
<br/>

if= 2 + 2 === 4
<div if={2 + 2 === 4}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni debitis distinctio explicabo necessitatibus eaque ex esse architecto suscipit consectetur possimus non, perspiciatis quis voluptatibus sed placeat enim provident dolorum tempora?
</div>
<br/>
<br/>
<br/>

if= 2 + 2 === 5: 
<div if={2 + 2 === 5}>if= 2 + 2 === false</div>
<br/>
<br/>
<br/>

if= "abcdef".length === 6
<h1 if={"abcdef".length === 6}>if = "abcdef".length === 6</h1>
<br/>
<br/>
<br/>

if showCounter === true
<Counter if={showCounter === true}/>