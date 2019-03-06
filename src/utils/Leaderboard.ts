import { FB } from "./FB";

export class Leaderboard
{
    public name: string;
    public scores: any;
    public playerScore: any;
    public connectedScores: any;
    public updateDate: number = 0;

    private leaderboard: any;

    public constructor(leaderboardName: string)
    {
        this.name = leaderboardName;
    }

    /**
     * METHODES
     */

    public refresh(leaderboardName: string = this.name, onceRefreshDone?: Function)
    {
        // Garde fou pour le leaderboard contextuel
        if (this.name.includes('null'))
            return null;

        FB.instance.getLeaderboardAsync(leaderboardName).then((leaderboard: any) => 
        {
            var completion = 0;

            this.leaderboard = leaderboard;

            leaderboard.getEntriesAsync().then((scores: any) =>
            {
                this.scores = scores;
                completion++;

                if (completion == 3 && onceRefreshDone != null)
                    onceRefreshDone();
            });

            leaderboard.getConnectedPlayerEntriesAsync().then((connectedScores: any) =>
            {
                this.connectedScores = connectedScores;
                completion++;

                if (completion == 3 && onceRefreshDone != null)
                    onceRefreshDone();
            });

            leaderboard.getPlayerEntryAsync().then((playerScore: any) =>
            {
                this.playerScore = playerScore;
                completion++;

                if (completion == 3 && onceRefreshDone != null)
                    onceRefreshDone();
            });
        })
        .catch((error: any) =>
        {
            console.error(error);
        })
    }

    public setScore(score: number, data: any)
    {
        if (this.leaderboard == null)
            return;

        this.leaderboard.setScoreAsync(score, data).then((entry: any) =>
        {

        })
        .catch((error: any) =>
        {
            console.error(error);
        });
    }
}