<script lang='ts'>
import { onMount } from 'svelte';

function handleComPortSelection() {

    const comPortInput = (document.getElementById('comPortsDropdown') as HTMLInputElement)

    window.api.setSelectedComPort(comPortInput.value);
}

onMount(() => {
    const comPortDropdown = document.getElementById('comPortsDropdown')

    window.api.onComportList((comPorts) => {
        comPorts.forEach((comPort) => {

            let comPortOption = document.createElement('option');
            comPortOption.id = comPort;
            comPortOption.value = comPort;
            comPortOption.textContent = comPort;

            comPortDropdown.appendChild(comPortOption);
        })
    })
})

</script>

<div>
    <select class='action' name="Com Ports" id="comPortsDropdown"></select>
    <button on:click={handleComPortSelection}>Select</button>
</div>