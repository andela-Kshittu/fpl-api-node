
export interface TeamSummary {
    name: string;
    managerFirstName: string;
    managerLastName: string;
    regionName: string;
    regionIso: string;
    overallPoints: number;
    overallRank: number;
    gameweekPoints: number;
    gameweekRank: number;
    totalTransfers: number;
    moneyInBank: number;
    teamValue: number;
    gameweekTransfers: number;
    gameweekTransfersCost: number;
}

export interface TeamPick extends Player {
    timesBenched: number;
    timesCaptained: number;
    captainPoints: number;
    timesPlayed: number;
    points: number;
}

export interface TeamStatistics {
    averageScore: number;
    highestGameWeekRank: number;
    highestGameweekScore: number;
    lowestGameweekRank: number;
    lowestGameweekScore: number;
    overallPoints: number;
    overallRank: number;
    rankPercentile: string;
    totalAssists: number;
    totalBonus: number;
    totalCleanSheets: number;
    totalGoals: number;
    totalRedCards: number;
    totalTransfers: number;
    totalValue: number;
    totalYellowCards: number;
    transferCost: number;
}

// player interfaces
export interface Player {
    id: number;
    webName: string;
    firstName: string;
    secondName: string;
    squadNumber: number;
    dreamteamCount: number;
    selectedByPercent: string;
    totalPoints: number;
    minutes: number;
    goalsScored: number;
    assists: number;
    cleanSheets: number;
    goalsConceded: number;
    ownGoals: number;
    penaltiesSaved: number;
    penaltiesMissed: number;
    yellowCards: number;
    redCards: number;
    saves: number;
    bonus: number;
    bps: number;
    influence: string;
    creativity: string;
    threat: string;
    ictIndex: string;
    eaIndex: number;
    elementType: number;
    club: number;
}

export interface PlayerStats {
  assists: number;
  bonus: number;
  bps: number;
  cleanSheets: number;
  creativity: number;
  goals_conceded: number;
  goalsScored: number;
  ictIndex: number;
  inDreamteam: boolean;
  influence: number;
  minutes: number;
  ownGoals: number;
  penaltiesMissed: number;
  penaltiesSaved: number;
  redCards: number;
  saves: number;
  threat: number;
  totalPoints: number;
  yellowCards: number;
}
