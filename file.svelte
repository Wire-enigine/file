<script lang="ts">
import { onMount } from 'svelte';
let temp:string;
onMount(() => {
 document.querySelector('#file-input').addEventListener('change', 
 (e1:any) => {
  //@ts-ignore
  let file = e1.target.files[0];
  if (!file) {
   return;
  }
  var reader = new FileReader();
  reader.onload = (e2:Event) => {
   //@ts-ignore
   data = e2.target.result;
   window.alert(data);
  };
  reader.readAsText(file);
 }
 , false);
});
export let data = temp || null;
</script>
<div id="file">
 <input type="file" id="file-input" />
</div>
