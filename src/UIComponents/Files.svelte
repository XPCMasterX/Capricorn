<script>
    import { getFiles } from '../lib/fileSystem/getFiles.mjs';

    let files;

    function createFileItems(item, parentClass) {
        let canvas = document.createElement('canvas');
        canvas.height = 100;
        canvas.width = 100;


        let ctx = canvas.getContext('2d');
        // Temporary
        ctx.fillStyle = '#0000003c';
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        parentClass.append(canvas);

        // I need this last bit or else there will be lots of undefineds
        return '';
    }
</script>

<div class="container" bind:this={files}>
    {#await getFiles('.')}
        <p>Loading</p>
    {:then data}
    <div class="canvas">
        {#each data as item}

                {createFileItems(item, files)}

        {/each}
    </div>
    {/await}
</div>

<style>

    .canvas {
        margin: 10px
    }
</style>
