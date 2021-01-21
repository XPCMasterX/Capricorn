<script>
    import { getFiles } from '../lib/fileSystem/getFiles.mjs';

    const data = getFiles('.');

    function breakWords(sentence, maxChars) {
        let letterArray = sentence.split('');
    }
</script>

<div class="container">
    {#await data}
    {:then data}
        {#each data as item}
            <div style="text-align: center">
                <button>{item.size.full}</button>
                <p>{item.fileName}</p>
            </div>

        {/each}
    {/await}
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
    }
    button {
        height: 75px;
        width: 75px;
        margin: -3px 5px;
        display: inline-block;
    }

    p {
        color: white;
        word-wrap: break-word;
    }
</style>
