import {Element } from './interfaces';

class Player {

    public id: number;
    public webName: string;
    public firstName: string;
    public secondName: string;
    public squadNumber: number;
    public dreamteamCount: number;
    public selectedByPercent: string;
    public totalPoints: number;
    public minutes: number;
    public goalsScored: number;
    public assists: number;
    public cleanSheets: number;
    public goalsConceded: number;
    public ownGoals: number;
    public penaltiesSaved: number;
    public penaltiesMissed: number;
    public yellowCards: number;
    public redCards: number;
    public saves: number;
    public bonus: number;
    public bps: number;
    public influence: string;
    public creativity: string;
    public threat: string;
    public ictIndex: string;
    public eaIndex: number;
    public elementType: number;
    public club: number;

    constructor(data: Element) {
      this.id = data.id;
      this.webName = data.web_name;
      this.firstName = data.first_name;
      this.secondName = data.second_name;
      this.dreamteamCount = data.dreamteam_count;
      this.selectedByPercent = data.selected_by_percent;
      this.totalPoints = data.total_points;
      this.minutes = data.minutes;
      this.goalsScored = data.goals_scored;
      this.assists = data.assists;
      this.cleanSheets = data.clean_sheets;
      this.goalsConceded = data.goals_conceded;
      this.ownGoals = data.own_goals;
      this.penaltiesSaved = data.penalties_saved;
      this.penaltiesMissed = data.penalties_missed;
      this.yellowCards = data.yellow_cards;
      this.redCards = data.red_cards;
      this.saves = data.saves;
      this.bonus = data.bonus;
      this.bps = data.bps;
      this.influence = data.influence;
      this.creativity = data.creativity;
      this.threat = data.threat;
      this.ictIndex = data.ict_index;
      this.eaIndex = data.ea_index;
      this.elementType = data.element_type;
      this.club = data.team;
    }

}
