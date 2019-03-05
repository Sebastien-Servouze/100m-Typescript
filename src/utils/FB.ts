import { Leaderboard } from "./Leaderboard";

// Permet de récupérer FBInstant
declare var FBInstant: any;

export class FB
{
    public static instance = FBInstant;

    public static readonly GLOBAL_LEADERBOARD_NAME = 'global_leaderboard';
    public static readonly CONTEXTUAL_LEADERBOARD_NAME = 'contextual_leaderboard';
}