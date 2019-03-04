export class Main extends Phaser.Scene 
{
    constructor() 
    {
        super("main");
    }

    create() 
    {
        this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'Hello world');
    }
}