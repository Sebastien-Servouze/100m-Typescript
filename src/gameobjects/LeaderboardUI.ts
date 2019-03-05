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
        this.progressSprite = new Phaser.GameObjects.Sprite(scene, this.x + this.width / 2, this.y + this.height / 2, 'inprogress');
    }

    public refresh(leaderboardName: string = this.leaderboard.name)
    {
        this.leaderboard.refresh()
    }

    public updateUI(entries: any)
    {
        // Suppression de toutes les entrées
        this.removeAll();

        // Création de toutes les entrées
        for (var i = 0; i < entries.Length; i++)
        {
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

        this.add(this.entries);
    }
}