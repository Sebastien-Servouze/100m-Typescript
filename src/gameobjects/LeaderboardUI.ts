import { LeaderboardEntry } from "./LeaderboardEntry";
import { Leaderboard } from "../utils/Leaderboard";

export class LeaderboardUI extends Phaser.GameObjects.Container
{
    private leaderboard: Leaderboard;
    private entries: LeaderboardEntry[];
    private progressSprite: Phaser.GameObjects.Sprite;

    constructor(scene: Phaser.Scene, leaderboardName: string)
    {
        super(scene);

        this.setSize(scene.cameras.main.width, 520);
        this.leaderboard = new Leaderboard(leaderboardName);

        this.entries = new Array<LeaderboardEntry>();
        this.progressSprite = new Phaser.GameObjects.Sprite(scene, this.x + this.width / 2, this.y + this.height / 2, 'loading');
        this.add(this.progressSprite);

        this.refresh(leaderboardName);
    }

    public refresh(leaderboardName: string = this.leaderboard.name)
    {
        this.progressSprite.setVisible(true);

        this.leaderboard.refresh(leaderboardName, (entries: any) =>
        {
            this.updateUI(this.leaderboard.scores);
        });
    }

    private updateUI(entries: any)
    {
        // Création de toutes les entrées
        for (var i = 0; i < entries.length; i++)
        {
            this.remove(this.entries[i]);
            this.entries[i] = new LeaderboardEntry(this.scene, entries[i]);

            // Repositionnement potentiel 
            if (entries.Length > 4)
            {
                if (i > 3)
                {
                    this.entries[i].setX(this.width / 2);
                    this.entries[i].setY((i - 4) * this.entries[i].height);
                }
                else
                {
                    this.entries[i].setX(this.width / 2);
                    this.entries[i].setY(i * this.entries[i].height);
                }
            }
            else
            {
                this.entries[i].setX(this.width / 2 - this.entries[i].width / 2);
                this.entries[i].setY(i * this.entries[i].height);
            }
        }    
        // On cache l'image de progression
        this.progressSprite.setVisible(false);

        // Et on ajoute les entrées
        this.add(this.entries);
    }

    public update()
    {
        super.update();

        if (this.progressSprite.visible)
            this.progressSprite.angle += 4;
    }
}