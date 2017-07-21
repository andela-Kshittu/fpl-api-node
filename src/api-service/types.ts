
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

export interface TeamPick  {
  id: number;
  webName: string;
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
