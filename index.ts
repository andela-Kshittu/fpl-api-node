'use strict';

import fetch from 'node-fetch';

/**
 * @module fplApiNode
 */

/**
 * Returns a promise that if fulfilled returns json object mapped to the given request
 * @param path The path of the rest web api request
 * @returns {Promise}
 * @private
 * @hidden
 */
function fetchData(path: string) {

  return new Promise((resolve, reject) => {

    fetch(`https://fantasy.premierleague.com/drf/${path}`).then((res) => {
      return res.json();
    }).then((json) => {
      resolve(json);
    }).catch((err) => {
      reject(err);
    });

  });

}

/**
 * Entry (Fpl manager team): A promise that if fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/entry/${id}/history
 * @param entryId Entry id
 * @returns {Promise}
 */
export function getEntry(entryId: number): Promise<IApiEntry> {
  return fetchData(`/entry/${entryId}/history`);
}
/**
 * Entry event. Details of a particular event (or gameweek): A promise that if fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/entry/${id}/event/${eventNumber}
 * @param entryId Entry id
 * @param eventNumber The event / gameweek number
 * @returns {Promise}
 */
export function getEntryEvent(entryId: number, eventNumber: number): Promise<IApiEntryEvent> {
  return fetchData(`/entry/${entryId}/event/${eventNumber}`);
}

/**
 * Entry transfers: A promise that if fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/entry/${id}/transfers
 * @param entryId Entry id
 * @returns {Promise}
 */
export function getEntryTransfers(entryId: number): Promise<IApiEntryTransfers> {
  return fetchData(`/entry/${entryId}/transfers`);
}

/**
 * All static game data: A promise that if fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/bootstrap-static
 * @returns {Promise}
 */
export function getAllStaticData(): Promise<IApiAllStaticData> {
  return fetchData('/bootstrap-static');
}

/**
 * Teams (Premier Leaugue clubs): A promise that if fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/teams
 * @returns {Promise}
 */
export function getTeams(): Promise<IApiTeam[]> {
  return fetchData('/teams');
}

/**
 * Elements (players): A promise that if fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/elements
 * @returns {Promise}
 */
export function getElements(): Promise<IApiElement[]> {
  return fetchData('/elements');
}

/**
 * Element types: A promise that if fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/elements-types
 * @returns {Promise}
 */
export function getElementTypes(): Promise<IApiElementType[]> {
  return fetchData('/element-types');
}

/**
 * Game settings: A promise that if fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/game-settings
 * @returns {Promise}
 */
export function getGameSettings(): Promise<IApiGameSettings> {
  return fetchData('game-settings');
}

/**
 * Event /gameweek details: A promise that if fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/event/${eventNumber}/live
 * @returns {Promise}
 */
export function getEvent(eventNumber: number): Promise<IApiEvent> {
  return fetchData(`/event/${eventNumber}/live`);
}

export default {
  getEntry,
  getEntryEvent,
  getEntryTransfers,
  getAllStaticData,
  getTeams,
  getElements,
  getElementTypes,
  getGameSettings,
  getEvent
}

/**
 * Classic league standings: A promise that if fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/leagues-classic-standings/${id}
 * @param leagueId League id
 * @returns {Promise}
 */
export function getClassicLeagueStandings(leagueId: number): Promise<IApiLeague> {
  return fetchData(`/leagues-classic-standings/${leagueId}`);
}

// all static data
export interface IApiAllStaticData {
  phases: IApiGamePhase[];
  elements: IApiElement[];
  'game-settings': IApiGame;
  'total-players': number;
  teams: IApiTeam[];
  element_types: IApiElementType[];
  events: IApiGameEvent[];
}

// game interfaces

export interface IApiGameSettings {
  game: IApiGame;
  element_type: IApiGameElement;
}

export interface IApiGameEvent {
  id: number;
  name: string;
  deadline_time: Date;
  average_entry_score: number;
  finished: boolean;
  data_checked: boolean;
  highest_scoring_entry?: number;
  deadline_time_epoch: number;
  deadline_time_game_offset: number;
  deadline_time_formatted: string;
  highest_score?: number;
  is_previous: boolean;
  is_current: boolean;
  is_next: boolean;
}

export interface IApiGame {
  scoring_ea_index: number;
  league_prefix_public: string;
  bps_tackles: number;
  league_h2h_tiebreak: string;
  scoring_long_play: number;
  bps_recoveries_limit: number;
  facebook_app_id: string;
  bps_tackled: number;
  bps_errors_leading_to_goal: number;
  bps_yellow_cards: number;
  ui_el_hide_currency_qi: boolean;
  scoring_bonus: number;
  transfers_cost: number;
  default_formation: number[][];
  bps_long_play: number;
  bps_long_play_limit: number;
  scoring_assists: number;
  scoring_long_play_limit: number;
  fifa_league_id: number;
  league_size_classic_max: number;
  scoring_red_cards: number;
  scoring_creativity: number;
  game_timezone: string;
  static_game_url: string;
  currency_symbol: string;
  bps_target_missed: number;
  bps_penalties_saved: number;
  support_email_address: string;
  cup_start_event_id: number;
  scoring_penalties_saved: number;
  scoring_threat: number;
  scoring_saves: number;
  league_join_private_max: number;
  scoring_short_play: number;
  sys_use_event_live_api: boolean;
  scoring_concede_limit: number;
  bps_key_passes: number;
  bps_clearances_blocks_interceptions: number;
  bps_pass_percentage_90: number;
  bps_big_chances_missed: number;
  league_max_ko_rounds_h2h: number;
  bps_open_play_crosses: number;
  league_points_h2h_win: number;
  bps_saves: number;
  bps_cbi_limit: number;
  league_size_h2h_max: number;
  sys_vice_captain_enabled: boolean;
  squad_squadplay: number;
  bps_fouls: number;
  squad_squadsize: number;
  ui_selection_short_team_names: boolean;
  transfers_sell_on_fee: number;
  transfers_type: string;
  scoring_ict_index: number;
  bps_pass_percentage_80: number;
  bps_own_goals: number;
  scoring_yellow_cards: number;
  bps_pass_percentage_70: number;
  ui_show_home_away: boolean;
  ui_el_hide_currency_sy: boolean;
  bps_assists: number;
  squad_team_limit: number;
  league_points_h2h_draw: number;
  transfers_limit: number;
  bps_dribbles: number;
  perform_league_id: number;
  bps_offside: number;
  sys_cdn_cache_enabled: boolean;
  currency_multiplier: number;
  bps_red_cards: number;
  bps_winning_goals: number;
  league_join_public_max: number;
  formations: IApiGameFormations;
  league_points_h2h_lose: number;
  currency_decimal_places: number;
  bps_errors_leading_to_goal_attempt: number;
  ui_selection_price_gap: number;
  bps_big_chances_created: number;
  ui_selection_player_limit: number;
  bps_attempted_passes_limit: number;
  scoring_penalties_missed: number;
  photo_base_url: string;
  scoring_bps: number;
  scoring_influence: number;
  bps_penalties_conceded: number;
  scoring_own_goals: number;
  squad_total_spend: number;
  bps_short_play: number;
  ui_element_wrap: number;
  bps_recoveries: number;
  bps_penalties_missed: number;
  scoring_saves_limit: number;
}


export interface IApiGameElement {
  scoring_clean_sheets: number;
  squad_min_play: number;
  scoring_goals_conceded: number;
  scoring_goals_scored: number;
  squad_max_play: number;
  bps_goals_scored: number;
  bps_clean_sheets: number;
  squad_select: number;
}

export interface IApiGamePhase {
  id: number;
  name: string;
  start_event: number;
  stop_event: number;
}

export interface IApiGameFormations {
  '1-5-2-3': number[][];
  '1-5-3-2': number[][];
  '1-3-5-2': number[][];
  '1-2-5-3': number[][];
  '1-4-5-1': number[][];
  '1-5-4-1': number[][];
  '1-4-3-3': number[][];
  '1-3-4-3': number[][];
  '1-4-4-2': number[][];
}

// element interfaces
export interface IApiElement {
  id: number;
  photo: string;
  web_name: string;
  team_code: number;
  status: string;
  code: number;
  first_name: string;
  second_name: string;
  squad_number?: number;
  news: string;
  now_cost: number;
  chance_of_playing_this_round?: number;
  chance_of_playing_next_round?: number;
  value_form: string;
  value_season: string;
  cost_change_start: number;
  cost_change_event: number;
  cost_change_start_fall: number;
  cost_change_event_fall: number;
  in_dreamteam: boolean;
  dreamteam_count: number;
  selected_by_percent: string;
  form: string;
  transfers_out: number;
  transfers_in: number;
  transfers_out_event: number;
  transfers_in_event: number;
  loans_in: number;
  loans_out: number;
  loaned_in: number;
  loaned_out: number;
  total_points: number;
  event_points: number;
  points_per_game: string;
  ep_this: string;
  ep_next: string;
  special: boolean;
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: string;
  creativity: string;
  threat: string;
  ict_index: string;
  ea_index: number;
  element_type: number;
  team: number;
}

export interface IApiElementType {
  id: number;
  singular_name: string;
  singular_name_short: string;
  plural_name: string;
  plural_name_short: string;
}

// team interfaces
export interface IApiTeam {
  id: number;
  current_event_fixture: IApiTeamFixture[];
  next_event_fixture: IApiTeamFixture[];
  name: string;
  code: number;
  short_name: string;
  unavailable: boolean;
  strength: number;
  position: number;
  played: number;
  win: number;
  loss: number;
  draw: number;
  points: number;
  form?: any;
  link_url: string;
  strength_overall_home: number;
  strength_overall_away: number;
  strength_attack_home: number;
  strength_attack_away: number;
  strength_defence_home: number;
  strength_defence_away: number;
  team_division: number;
}

export interface IApiTeamFixture {
  is_home: boolean;
  month: number;
  event_day: number;
  id: number;
  day: number;
  opponent: number;
}

// league interfaces
export interface IApiLeague {
  new_entries: IApiLeagueStandings;
  league: IApiLeagueDetails;
  standings: IApiLeagueStandings;
  update_status: number;
}

export interface IApiLeagueDetails {
  id: number;
  leagueban_set: any[];
  name: string;
  short_name: string;
  created: Date;
  closed: boolean;
  forum_disabled: boolean;
  make_code_public: boolean;
  rank?: any;
  size?: any;
  league_type: string;
  _scoring: string;
  reprocess_standings: boolean;
  admin_entry?: any;
  start_event: number;
}

export interface IApiLeagueStandings {
  has_next: boolean;
  number: number;
  results: IApiLeaguePositions[];
}

export interface IApiLeaguePositions {
  id: number;
  entry_name: string;
  event_total: number;
  player_name: string;
  movement: string;
  own_entry: boolean;
  rank: number;
  last_rank: number;
  rank_sort: number;
  total: number;
  entry: number;
  league: number;
  start_event: number;
  stop_event: number;
}

// entry interfaces

export interface IApiEntry {
  chips: IApiEntryChip[];
  entry: IApiEntryDetails;
  leagues: IApiEntryLeagues;
  season: IApiEntrySeason[];
  history: IApiEntryHistory[];
}

export interface IApiEntryEvent {
  leagues: IApiEntryLeagues;
  entry_history: IApiEntryHistory;
  ce: number;
  automatic_subs: IApiEntryAutomaticSub[];
  fixtures: IApiFixture[];
  can_change_captain: boolean;
  manager_subs: any[];
  picks: IApiEntryPick[];
  own_entry: boolean;
  state: IApiEntryState;
  points: number;
  entry: IApiEntry;
  active_chip: string;
}

export interface IApiEntryState {
  event: number;
  sub_state: string;
  event_day: number;
  deadline_time: Date;
  deadline_time_formatted: string;
}

export interface IApiEntryPick {
  element: number;
  position: number;
  is_captain: boolean;
  is_vice_captain: boolean;
  can_sub?: any;
  points: number;
  has_played: boolean;
  can_captain?: any;
  explain: any[][];
  is_sub: boolean;
  element_type: number;
  stats: IApiStats;
  multiplier: number;
}

export interface IApiEntryAutomaticSub {
  id: number;
  element_in: number;
  element_out: number;
  entry: number;
  event: number;
}

export interface IApiEntryDetails {
  id: number;
  player_first_name: string;
  player_last_name: string;
  player_region_id: number;
  player_region_name: string;
  player_region_short_iso: string;
  summary_overall_points: number;
  summary_overall_rank: number;
  summary_event_points: number;
  summary_event_rank?: any;
  joined_seconds: number;
  current_event: number;
  total_transfers: number;
  total_loans: number;
  total_loans_active: number;
  transfers_or_loans: string;
  deleted: boolean;
  email: boolean;
  joined_time: Date;
  name: string;
  bank: number;
  value: number;
  kit: string;
  event_transfers: number;
  event_transfers_cost: number;
  extra_free_transfers: number;
  strategy?: any;
  favourite_team?: any;
  started_event: number;
  player: number;
}

export interface IApiEntryLeague {
  id: number;
  entry_rank: number;
  entry_last_rank: number;
  entry_movement: string;
  entry_change?: any;
  entry_can_leave: boolean;
  entry_can_admin: boolean;
  entry_can_invite: boolean;
  entry_can_forum: boolean;
  entry_code: string;
  name: string;
  short_name: string;
  created: Date;
  closed: boolean;
  forum_disabled: boolean;
  make_code_public: boolean;
  rank?: any;
  size?: any;
  league_type: string;
  _scoring: string;
  reprocess_standings: boolean;
  admin_entry?: number;
  start_event: number;
}

export interface IApiEntryLeagues {
  cup: IApiEntryLeague[];
  h2h: IApiEntryLeague[];
  classic: IApiEntryLeague[];
}

export interface IApiEntryChip {
  played_time_formatted: string;
  status: string;
  name: string;
  time: Date;
  chip: number;
  entry: number;
  event: number;
}


export interface IApiEntrySeason {
  id: number;
  season_name: string;
  total_points: number;
  rank: number;
  season: number;
  player: number;
}

export interface IApiEntryHistory {
  id: number;
  movement: string;
  points: number;
  total_points: number;
  rank?: number;
  rank_sort?: number;
  overall_rank: number;
  targets?: any;
  event_transfers: number;
  event_transfers_cost: number;
  value: number;
  points_on_bench: number;
  bank: number;
  entry: number;
  event: number;
}

export interface IApiEntryTransfers {
  wildcards: IApiEntryWildcard[];
  entry: IApiEntry;
  leagues: IApiEntryLeagues;
  history: IApiEntryTransferHistory[];
}

export interface IApiEntryWildcard {
  played_time_formatted: string;
  status: string;
  name: string;
  time: Date;
  chip: number;
  entry: number;
  event: number;
}

export interface IApiEntryTransferHistory {
  id: number;
  time_formatted: string;
  time: Date;
  element_in_cost: number;
  element_out_cost: number;
  element_in: number;
  element_out: number;
  entry: number;
  event: number;
}

// stats

export interface IApiStats {
  yellow_cards: number;
  own_goals: number;
  creativity: number;
  goals_conceded: number;
  bonus: number;
  red_cards: number;
  saves: number;
  influence: number;
  bps: number;
  clean_sheets: number;
  assists: number;
  ict_index: number;
  goals_scored: number;
  threat: number;
  penalties_missed: number;
  total_points: number;
  penalties_saved: number;
  in_dreamteam: boolean;
  minutes: number;
}

// fixture

export interface IApiFixture {
  id: number;
  kickoff_time_formatted: string;
  started: boolean;
  event_day: number;
  deadline_time: Date;
  deadline_time_formatted: string;
  stats: IApiFixtureStats;
  code: number;
  kickoff_time: Date;
  team_h_score: number;
  team_a_score: number;
  finished: boolean;
  minutes: number;
  provisional_start_time: boolean;
  finished_provisional: boolean;
  event: number;
  team_a: number;
  team_h: number;
}

export interface IApiFixtureStats {
  goals_scored: IApiFixtureStatHomeAndAway;
  assists: IApiFixtureStatHomeAndAway;
  own_goals: IApiFixtureStatHomeAndAway;
  penalties_saved: IApiFixtureStatHomeAndAway;
  penalties_missed: IApiFixtureStatHomeAndAway;
  yellow_cards: IApiFixtureStatHomeAndAway;
  red_cards: IApiFixtureStatHomeAndAway;
  saves: IApiFixtureStatHomeAndAway;
  bonus: IApiFixtureStatHomeAndAway;
  bps: IApiFixtureStatHomeAndAway;
}

export interface IApiFixtureStatHomeAndAway {
  a: IApiFixtureStatValue[];
  h: IApiFixtureStatValue[];
}

export interface IApiFixtureStatValue {
  value: number;
  element: number;
}

// event

export interface IApiEvent {
  fixtures: IApiFixture[];
  elements: IApiEventElements;
}

export interface IApiEventElements {
  [key: number]: {
    explain: IApiEventElementsExplain[];
    stats: IApiStats;
  }
}

export interface IApiEventElementsExplain {
  [key: string]: {
    points: number;
    name: string;
    value: number;
  }
}
