<script>
    import {closeWindow, minimizeWindow, makeWindowFullScreen} from './lib/titleBar.mjs';
    export let title;

    const remote = require('electron').remote;

    let bounds = remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds();
    console.log(bounds.height - 300 + 'px');
</script>

<div class="outerContainer">
    <div class="innerContainer">
        <div class="title">
            <p>{title}</p>
            <div class="closing">
                <button on:click={() => closeWindow()}><img src="icons/redIcon.png" alt="Close" /></button>
                <button on:click={() => makeWindowFullScreen()}><img src="icons/greenIcon.png" alt="Fullscreen" /></button>
                <button on:click={() => makeWindowFullScreen()}><img src="icons/yellowIcon.png" alt="Minimize" /></button>
            </div>
        </div>
    </div>
</div>

<style>
    .innerContainer {
        white-space: nowrap
    }

    .closing {
        margin-left: 78%;
        display: inline-block;
    }

    @media (max-width: 1024px) {
        .closing {
            margin-left: 78%;
            display: inline-block;
        }
    }

    @media (min-width: 1024px) {
        .closing {
            margin-left: 89%;
            display: inline-block;
        }
    }

    .outerContainer {
        width: 100%;
    }

    button  {
        border: none;
        background-color: #00000000;
        -webkit-app-region: no-drag !important;
        outline: none;
        display: inline-block;
    }

    button:focus {
        outline: none;
    }

    img:hover {
        filter: brightness(85%);
        -webkit-app-region: no-drag !important;
        display: inline-block
    }

    img {
        height: 12px;
        width: 12px;
        -webkit-app-region: no-drag !important;
    }

    .title {
        color: white;
        background-color: #0000003C;
        height: 37.5px;
    }
    p {
            margin-top: 6px;
        margin-left: 10px;
        display: inline-block
    }

    * {
        -webkit-user-select: none;
  		-webkit-app-region: drag;
    }
</style>
