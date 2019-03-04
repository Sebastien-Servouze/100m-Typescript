import { FB } from "../utils/FB";

export class Preloader extends Phaser.Scene 
{
    constructor() 
    {
        super('preloader')
    }

    preload() 
    {
        FB.instance.startGameAsync().then(() =>
        {
            this.scene.start('main');
        });
    }

}