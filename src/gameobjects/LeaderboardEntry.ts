export class LeaderboardEntry extends Phaser.GameObjects.Container
{
    private background: Phaser.GameObjects.Image;
    private picture: Phaser.GameObjects.Image;
    private mname: Phaser.GameObjects.Text;
    private best: Phaser.GameObjects.Text;
    private bestContextual: Phaser.GameObjects.Text;
    private rank: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, entry: any)
    {
        super(scene);

        this.setSize(200, 100);

        this.background = new Phaser.GameObjects.Image(scene, 0, 0, 'entrybackground').setOrigin(0,0);
        this.picture = new Phaser.GameObjects.Image(scene, 5, 5, entry['playerId']).setOrigin(0,0);
        this.mname = new Phaser.GameObjects.Text(scene, 75, 0, entry['playerName'], {}).setOrigin(0,0);
        this.best = new Phaser.GameObjects.Text(scene, 75, 35, entry['score'], {}).setOrigin(0,0);
        this.bestContextual = new Phaser.GameObjects.Text(scene, 120, 35, entry['data']['best'], {}).setOrigin(0,0);
        this.rank = new Phaser.GameObjects.Text(scene, 35, 50, entry['rank'], {});
    }


}