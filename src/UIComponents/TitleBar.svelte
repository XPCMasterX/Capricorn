<script>
    import {closeWindow, minimizeWindow, makeWindowFullScreen} from './lib/titleBar.mjs';
    export let title;
</script>

<div class="outerContainer">
    <div class="title"><p>{title}</p></div>

    <div class="closing">
        <button on:click={() => closeWindow()}><img src="icons/redIcon.png" alt="Close"></button>
        <button on:click={() => makeWindowFullScreen()}><img src="icons/greenIcon.png" alt="Fullscreen"></button>
        <button on:click={() => minimizeWindow()}><img src="icons/yellowIcon.png" alt="Minimize"></button>
    </div>
</div>


<style>
    .outerContainer {
        margin-left: 3px;
        width: 100%;
    }

    button  {
        float: right;
        border: none;
        position: relative;
        margin-top: 10px;
        background-color: #00000000;
        -webkit-app-region: no-drag !important;
        outline: none;
    }

    button:focus {
        outline: none;
    }

    .closing {
        margin-right: 10px
    }

    img:hover {
        filter: brightness(85%);
        -webkit-app-region: no-drag !important;
    }

    img {
        height: 12px;
        width: 12px;
        -webkit-app-region: no-drag !important;
    }

    .title {
        position: absolute;
        margin-top: 0;
        margin-left: -3px;
        width: 100% ;
        color: white;
        background-color: #0000003C;
        height: 37.5px;
    }
    p {
        margin-left: 10px;
        margin-top: 6px;
    }

    * {
        -webkit-user-select: none;
  		-webkit-app-region: drag;
    }
</style>
