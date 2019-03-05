import "phaser";
import { Preloader } from './scenes/Preloader';
import { Main } from './scenes/Main';
import { FB } from './utils/FB';

const config: GameConfig =
{
    type: Phaser.AUTO,
    parent: "canvas",
    width: 540,
    height: 960,
    scene: [
        Preloader,
        Main
    ]
};

FB.instance.initializeAsync().then(function () 
{
    new Phaser.Game(config);
}).catch(function (error: any) 
{
    console.log(error.message);
});