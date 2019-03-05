import { Leaderboard } from "../utils/Leaderboard";
import { FB } from "../utils/FB";
import { LeaderboardUI } from "../gameobjects/LeaderboardUI";
import { basename } from "path";

export class Main extends Phaser.Scene 
{
    constructor() 
    {
        super("main");
    }

    create() 
    {
        this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'Hello world').setOrigin(.5,.5);
    }

    update(time: number, delta: number)
    {
        super.update(time, delta)
    }
}