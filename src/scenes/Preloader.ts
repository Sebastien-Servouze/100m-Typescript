import { FB } from "../utils/FB";

export class Preloader extends Phaser.Scene 
{
    constructor() 
    {
        super('preloader')
    }

    preload() 
    {
        this.load.on('progress', (value : number) =>
        {
            FB.instance.setLoadingProgress(value * 100);
        }, this);

        this.load.on('complete', () =>
        {
                FB.instance.startGameAsync().then(this.scene.start('main'));
        }, this);

        // Loading
        this.load.image('loading', './assets/images/loading.png');
    }

}