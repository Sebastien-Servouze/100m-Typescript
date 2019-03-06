import { LeaderboardUI } from "../gameobjects/LeaderboardUI";

export class Main extends Phaser.Scene 
{
    // Elements
    private leaderboardUI = {} as LeaderboardUI
    private gameName = {} as Phaser.GameObjects.Text;
    
    constructor() 
    {
        super("main");
    }

    create() 
    {
        // Changement de couleur de la scene
        this.cameras.main.setBackgroundColor('#36c56f');

        // Création des éléments graphiques
        this.leaderboardUI = new LeaderboardUI(this.scene.scene, 'general_leaderboard_test').setY(200);
        this.gameName = new Phaser.GameObjects.Text(this, this.cameras.main.width / 2, 80, '100m', { color: '#FFF', font: '65px sleeve'}).setOrigin(.5,.5);

        // Ajout des éléments graphiques
        this.add.existing(this.leaderboardUI);
        this.add.existing(this.gameName);
    }

    update(time: number, delta: number)
    {
        this.leaderboardUI.update();
    }
}