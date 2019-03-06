export class LeaderboardEntry extends Phaser.GameObjects.Container
{
    private background: Phaser.GameObjects.Image;
    private picture: Phaser.GameObjects.Image;
    private mname: Phaser.GameObjects.Text;
    private best: Phaser.GameObjects.Text;
    private union: Phaser.GameObjects.Text;
    private bestContextual: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, entry: any)
    {
        super(scene);

        this.setSize(200, 100);

        this.scene.load.once('filecomplete-image-' + entry['$6']['$2'], (key: string) =>
        {
            this.picture.setTexture(key).setDisplaySize(90, 90);
        }, this);

        // On commence par charger l'image du joueur
        this.scene.load.image(entry['$6']['$2'], entry['$6']['$3']);
        this.scene.load.start();

        // Création des éléments
        this.background = new Phaser.GameObjects.Image(scene, 0, 0, 'entrybackground').setOrigin(0,0);
        this.picture = new Phaser.GameObjects.Image(scene, 5, 5, '').setOrigin(0,0).setSize(90, 90);
        this.mname = new Phaser.GameObjects.Text(scene, this.picture.x + this.picture.width + 10, 0, entry['$6']['$1'], { color: '#FFF', font: '50px sleeve'}).setOrigin(0,0);
        this.best = new Phaser.GameObjects.Text(scene, this.picture.x + this.picture.width + 10, this.mname.y + this.mname.height + 5, entry['$1'], { color: '#FFF', font: '40px sleeve'}).setOrigin(0,0);
        this.union = new Phaser.GameObjects.Text(scene, this.best.x + this.best.width + 5, this.best.y, '-', { color: '#FFF', font: '40px sleeve'});
        this.bestContextual = new Phaser.GameObjects.Text(scene, this.union.x + this.union.width + 5, this.best.y, /*entry['data']['best']*/'9541', { color: '#FFF', font: '40px sleeve'}).setOrigin(0,0);

        this.add([this.background, this.picture, this.mname, this.best, this.union, this.bestContextual]);
    }
}