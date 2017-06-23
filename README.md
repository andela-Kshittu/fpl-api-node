
# fpl-api-node

[![npm](https://img.shields.io/npm/v/fpl-api-node.svg)](https://www.npmjs.com/package/fpl-api-node)
[![npm](https://img.shields.io/apm/l/vim-mode.svg)]()

A simple node wrapper for the Fantasy Premier League (fantasy.premierleague.com) restful web api.

## Installation
```js
npm install fpl-api-node --save
```

## Usage
The package is written in typescript and can be consumed either strongly-typed or in plain Javascript.

### Javascript

```js
const fplapi = require('fpl-api-node');
```

### Typescript / ES2105

```js
import * as fplapi from 'fpl-api-node';
```

### Example

```js
fplapi.getEntry(123456).then((data) => {

  // do something with our data
  console.log(data);

}).catch((err) => {
  // something went wrong
});
```

<span id="typedoc-plugin-markdown"></span>

#  API


# Functions
<a id="fetchbootstrapstatic"></a>

###  fetchBootstrapStatic

► **fetchBootstrapStatic**(): Promise<[BootstrapStatic](#interface-bootstrapstatic)>



*Defined in [index.ts:60](https://github.com/tgreyuk/fpl-api-node/blob/6def444/src/index.ts#L60)*

All static game data:
A promise that if fulfilled returns an object
mapped to https://fantasy.premierleague.com/drf/bootstrap-static




**Returns:** Promise<[BootstrapStatic](#interface-bootstrapstatic)>







___

<a id="fetchclassicleaguestandings"></a>

###  fetchClassicLeagueStandings

► **fetchClassicLeagueStandings**(leagueId: *number*): Promise<[League](#interface-league)>



*Defined in [index.ts:120](https://github.com/tgreyuk/fpl-api-node/blob/6def444/src/index.ts#L120)*

Classic league standings:
A promise that if fulfilled returns an object
mapped to https://fantasy.premierleague.com/drf/leagues-classic-standings/${id}


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| leagueId  | number | - | League id |





**Returns:** Promise<[League](#interface-league)>







___


<a id="fetchelementtypes"></a>

###  fetchElementTypes

► **fetchElementTypes**(): Promise<[ElementType](#interface-elementtype)[]>



*Defined in [index.ts:89](https://github.com/tgreyuk/fpl-api-node/blob/6def444/src/index.ts#L89)*

Element types: A promise that if fulfilled returns an object
mapped to https://fantasy.premierleague.com/drf/elements-types




**Returns:** Promise<[ElementType](#interface-elementtype)[]>







___

<a id="fetchelements"></a>

###  fetchElements

► **fetchElements**(): Promise<[Element](#interface-element)[]>



*Defined in [index.ts:80](https://github.com/tgreyuk/fpl-api-node/blob/6def444/src/index.ts#L80)*

Elements (players):
A promise that if fulfilled returns an object
mapped to https://fantasy.premierleague.com/drf/elements




**Returns:** Promise<[Element](#interface-element)[]>







___

<a id="fetchentry"></a>

###  fetchEntry

► **fetchEntry**(entryId: *number*): Promise<[Entry](#interface-entry)>



*Defined in [index.ts:26](https://github.com/tgreyuk/fpl-api-node/blob/6def444/src/index.ts#L26)*

Entry (Fpl manager team):
A promise that if fulfilled returns an object
mapped to https://fantasy.premierleague.com/drf/entry/${id}/history


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| entryId  | number | - | Entry id |





**Returns:** Promise<[Entry](#interface-entry)>







___

<a id="fetchentryevent"></a>

###  fetchEntryEvent

► **fetchEntryEvent**(entryId: *number*, eventNumber: *number*): Promise<[EntryEvent](#interface-entryevent)>



*Defined in [index.ts:39](https://github.com/tgreyuk/fpl-api-node/blob/6def444/src/index.ts#L39)*

Entry event:
Details of a particular event (or gameweek):
A promise that if fulfilled returns an object
mapped to https://fantasy.premierleague.com/drf/entry/${id}/event/${eventNumber}


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| entryId  | number | - | Entry id |
| eventNumber  | number | - | The event / gameweek number |





**Returns:** Promise<[EntryEvent](#interface-entryevent)>







___

<a id="fetchentrytransfers"></a>

###  fetchEntryTransfers

► **fetchEntryTransfers**(entryId: *number*): Promise<[EntryTransfers](#interface-entrytransfers)>



*Defined in [index.ts:50](https://github.com/tgreyuk/fpl-api-node/blob/6def444/src/index.ts#L50)*

Entry transfers:
A promise that if fulfilled returns an object
mapped to https://fantasy.premierleague.com/drf/entry/${id}/transfers


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| entryId  | number | - | Entry id |





**Returns:** Promise<[EntryTransfers](#interface-entrytransfers)>







___

<a id="fetchevent"></a>

###  fetchEvent

► **fetchEvent**(eventNumber: *number*): Promise<[Event](#interface-event)>



*Defined in [index.ts:109](https://github.com/tgreyuk/fpl-api-node/blob/6def444/src/index.ts#L109)*

Event /gameweek details:
A promise that if fulfilled returns an object
mapped to https://fantasy.premierleague.com/drf/event/${eventNumber}/live


**Parameters:**

| Name  | Type                | Default | Description  |
| ------ | ------------------- | ------------ | ------------ |
| eventNumber  | number | - | - |





**Returns:** Promise<[Event](#interface-event)>







___

<a id="fetchgamesettings"></a>

###  fetchGameSettings

► **fetchGameSettings**(): Promise<[GameSettings](#interface-gamesettings)>



*Defined in [index.ts:99](https://github.com/tgreyuk/fpl-api-node/blob/6def444/src/index.ts#L99)*

Game settings:
A promise that if fulfilled returns an object
mapped to https://fantasy.premierleague.com/drf/game-settings




**Returns:** Promise<[GameSettings](#interface-gamesettings)>







___

<a id="fetchteams"></a>

###  fetchTeams

► **fetchTeams**(): Promise<[Team](#interface-team)[]>



*Defined in [index.ts:70](https://github.com/tgreyuk/fpl-api-node/blob/6def444/src/index.ts#L70)*

Teams (Premier Leaugue clubs):
A promise that if fulfilled returns an object
mapped to https://fantasy.premierleague.com/drf/teams




**Returns:** Promise<[Team](#interface-team)[]>







___

↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)

---




# Interface: BootstrapStatic


## Properties

| Name  | Type                
| ------ | ------------------- 
| element_types | [ElementType](#interface-elementtype)[]
| elements | [Element](#interface-element)[]
| events | [GameEvent](#interface-gameevent)[]
| game-settings | [Game](#interface-game)
| phases | [GamePhase](#interface-gamephase)[]
| teams | [Team](#interface-team)[]
| total-players | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: Element


## Properties

| Name  | Type                
| ------ | ------------------- 
| assists | number
| bonus | number
| bps | number
| chance_of_playing_next_round | undefined⎮number
| chance_of_playing_this_round | undefined⎮number
| clean_sheets | number
| code | number
| cost_change_event | number
| cost_change_event_fall | number
| cost_change_start | number
| cost_change_start_fall | number
| creativity | string
| dreamteam_count | number
| ea_index | number
| element_type | number
| ep_next | string
| ep_this | string
| event_points | number
| first_name | string
| form | string
| goals_conceded | number
| goals_scored | number
| ict_index | string
| id | number
| in_dreamteam | boolean
| influence | string
| loaned_in | number
| loaned_out | number
| loans_in | number
| loans_out | number
| minutes | number
| news | string
| now_cost | number
| own_goals | number
| penalties_missed | number
| penalties_saved | number
| photo | string
| points_per_game | string
| red_cards | number
| saves | number
| second_name | string
| selected_by_percent | string
| special | boolean
| squad_number | undefined⎮number
| status | string
| team | number
| team_code | number
| threat | string
| total_points | number
| transfers_in | number
| transfers_in_event | number
| transfers_out | number
| transfers_out_event | number
| value_form | string
| value_season | string
| web_name | string
| yellow_cards | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: ElementType


## Properties

| Name  | Type                
| ------ | ------------------- 
| id | number
| plural_name | string
| plural_name_short | string
| singular_name | string
| singular_name_short | string
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: Entry


## Properties

| Name  | Type                
| ------ | ------------------- 
| chips | [EntryChip](#interface-entrychip)[]
| entry | [EntryDetails](#interface-entrydetails)
| history | [EntryHistory](#interface-entryhistory)[]
| leagues | [EntryLeagues](#interface-entryleagues)
| season | [EntrySeason](#interface-entryseason)[]
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryAutomaticSub


## Properties

| Name  | Type                
| ------ | ------------------- 
| element_in | number
| element_out | number
| entry | number
| event | number
| id | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryChip


## Properties

| Name  | Type                
| ------ | ------------------- 
| chip | number
| entry | number
| event | number
| name | string
| played_time_formatted | string
| status | string
| time | Date
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryDetails


## Properties

| Name  | Type                
| ------ | ------------------- 
| bank | number
| current_event | number
| deleted | boolean
| email | boolean
| event_transfers | number
| event_transfers_cost | number
| extra_free_transfers | number
| favourite_team | any
| id | number
| joined_seconds | number
| joined_time | Date
| kit | string
| name | string
| player | number
| player_first_name | string
| player_last_name | string
| player_region_id | number
| player_region_name | string
| player_region_short_iso | string
| started_event | number
| strategy | any
| summary_event_points | number
| summary_event_rank | any
| summary_overall_points | number
| summary_overall_rank | number
| total_loans | number
| total_loans_active | number
| total_transfers | number
| transfers_or_loans | string
| value | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryEvent


## Properties

| Name  | Type                
| ------ | ------------------- 
| active_chip | string
| automatic_subs | [EntryAutomaticSub](#interface-entryautomaticsub)[]
| can_change_captain | boolean
| ce | number
| entry | [EntryDetails](#interface-entrydetails)
| entry_history | [EntryHistory](#interface-entryhistory)
| fixtures | [Fixture](#interface-fixture)[]
| leagues | [EntryLeagues](#interface-entryleagues)
| manager_subs | any[]
| own_entry | boolean
| picks | [EntryPick](#interface-entrypick)[]
| points | number
| state | [EntryState](#interface-entrystate)
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryHistory


## Properties

| Name  | Type                
| ------ | ------------------- 
| bank | number
| entry | number
| event | number
| event_transfers | number
| event_transfers_cost | number
| id | number
| movement | string
| overall_rank | number
| points | number
| points_on_bench | number
| rank | undefined⎮number
| rank_sort | undefined⎮number
| targets | any
| total_points | number
| value | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryLeague


## Properties

| Name  | Type                
| ------ | ------------------- 
| _scoring | string
| admin_entry | undefined⎮number
| closed | boolean
| created | Date
| entry_can_admin | boolean
| entry_can_forum | boolean
| entry_can_invite | boolean
| entry_can_leave | boolean
| entry_change | any
| entry_code | string
| entry_last_rank | number
| entry_movement | string
| entry_rank | number
| forum_disabled | boolean
| id | number
| league_type | string
| make_code_public | boolean
| name | string
| rank | any
| reprocess_standings | boolean
| short_name | string
| size | any
| start_event | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryLeagues


## Properties

| Name  | Type                
| ------ | ------------------- 
| classic | [EntryLeague](#interface-entryleague)[]
| cup | [EntryLeague](#interface-entryleague)[]
| h2h | [EntryLeague](#interface-entryleague)[]
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryPick


## Properties

| Name  | Type                
| ------ | ------------------- 
| can_captain | any
| can_sub | any
| element | number
| element_type | number
| explain | any[][]
| has_played | boolean
| is_captain | boolean
| is_sub | boolean
| is_vice_captain | boolean
| multiplier | number
| points | number
| position | number
| stats | [Stats](#interface-stats)
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntrySeason


## Properties

| Name  | Type                
| ------ | ------------------- 
| id | number
| player | number
| rank | number
| season | number
| season_name | string
| total_points | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryState


## Properties

| Name  | Type                
| ------ | ------------------- 
| deadline_time | Date
| deadline_time_formatted | string
| event | number
| event_day | number
| sub_state | string
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryTransferHistory


## Properties

| Name  | Type                
| ------ | ------------------- 
| element_in | number
| element_in_cost | number
| element_out | number
| element_out_cost | number
| entry | number
| event | number
| id | number
| time | Date
| time_formatted | string
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryTransfers


## Properties

| Name  | Type                
| ------ | ------------------- 
| entry | [Entry](#interface-entry)
| history | [EntryTransferHistory](#interface-entrytransferhistory)[]
| leagues | [EntryLeagues](#interface-entryleagues)
| wildcards | [EntryWildcard](#interface-entrywildcard)[]
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EntryWildcard


## Properties

| Name  | Type                
| ------ | ------------------- 
| chip | number
| entry | number
| event | number
| name | string
| played_time_formatted | string
| status | string
| time | Date
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: Event


## Properties

| Name  | Type                
| ------ | ------------------- 
| elements | [EventElements](#interface-eventelements)
| fixtures | [Fixture](#interface-fixture)[]
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EventElements

## Indexable

\[key: number\]:&nbsp;object


explain: [EventElementsExplain](#interface-eventelementsexplain)[]



stats: [Stats](#interface-stats)




↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: EventElementsExplain

## Indexable

\[key: string\]:&nbsp;object


name: string



points: number



value: number




↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: Fixture


## Properties

| Name  | Type                
| ------ | ------------------- 
| code | number
| deadline_time | Date
| deadline_time_formatted | string
| event | number
| event_day | number
| finished | boolean
| finished_provisional | boolean
| id | number
| kickoff_time | Date
| kickoff_time_formatted | string
| minutes | number
| provisional_start_time | boolean
| started | boolean
| stats | [FixtureStats](#interface-fixturestats)
| team_a | number
| team_a_score | number
| team_h | number
| team_h_score | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: FixtureStatHomeAndAway


## Properties

| Name  | Type                
| ------ | ------------------- 
| a | [FixtureStatValue](#interface-fixturestatvalue)[]
| h | [FixtureStatValue](#interface-fixturestatvalue)[]
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: FixtureStatValue


## Properties

| Name  | Type                
| ------ | ------------------- 
| element | number
| value | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: FixtureStats


## Properties

| Name  | Type                
| ------ | ------------------- 
| assists | [FixtureStatHomeAndAway](#interface-fixturestathomeandaway)
| bonus | [FixtureStatHomeAndAway](#interface-fixturestathomeandaway)
| bps | [FixtureStatHomeAndAway](#interface-fixturestathomeandaway)
| goals_scored | [FixtureStatHomeAndAway](#interface-fixturestathomeandaway)
| own_goals | [FixtureStatHomeAndAway](#interface-fixturestathomeandaway)
| penalties_missed | [FixtureStatHomeAndAway](#interface-fixturestathomeandaway)
| penalties_saved | [FixtureStatHomeAndAway](#interface-fixturestathomeandaway)
| red_cards | [FixtureStatHomeAndAway](#interface-fixturestathomeandaway)
| saves | [FixtureStatHomeAndAway](#interface-fixturestathomeandaway)
| yellow_cards | [FixtureStatHomeAndAway](#interface-fixturestathomeandaway)
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: Game


## Properties

| Name  | Type                
| ------ | ------------------- 
| bps_assists | number
| bps_attempted_passes_limit | number
| bps_big_chances_created | number
| bps_big_chances_missed | number
| bps_cbi_limit | number
| bps_clearances_blocks_interceptions | number
| bps_dribbles | number
| bps_errors_leading_to_goal | number
| bps_errors_leading_to_goal_attempt | number
| bps_fouls | number
| bps_key_passes | number
| bps_long_play | number
| bps_long_play_limit | number
| bps_offside | number
| bps_open_play_crosses | number
| bps_own_goals | number
| bps_pass_percentage_70 | number
| bps_pass_percentage_80 | number
| bps_pass_percentage_90 | number
| bps_penalties_conceded | number
| bps_penalties_missed | number
| bps_penalties_saved | number
| bps_recoveries | number
| bps_recoveries_limit | number
| bps_red_cards | number
| bps_saves | number
| bps_short_play | number
| bps_tackled | number
| bps_tackles | number
| bps_target_missed | number
| bps_winning_goals | number
| bps_yellow_cards | number
| cup_start_event_id | number
| currency_decimal_places | number
| currency_multiplier | number
| currency_symbol | string
| default_formation | number[][]
| facebook_app_id | string
| fifa_league_id | number
| formations | [GameFormations](#interface-gameformations)
| game_timezone | string
| league_h2h_tiebreak | string
| league_join_private_max | number
| league_join_public_max | number
| league_max_ko_rounds_h2h | number
| league_points_h2h_draw | number
| league_points_h2h_lose | number
| league_points_h2h_win | number
| league_prefix_public | string
| league_size_classic_max | number
| league_size_h2h_max | number
| perform_league_id | number
| photo_base_url | string
| scoring_assists | number
| scoring_bonus | number
| scoring_bps | number
| scoring_concede_limit | number
| scoring_creativity | number
| scoring_ea_index | number
| scoring_ict_index | number
| scoring_influence | number
| scoring_long_play | number
| scoring_long_play_limit | number
| scoring_own_goals | number
| scoring_penalties_missed | number
| scoring_penalties_saved | number
| scoring_red_cards | number
| scoring_saves | number
| scoring_saves_limit | number
| scoring_short_play | number
| scoring_threat | number
| scoring_yellow_cards | number
| squad_squadplay | number
| squad_squadsize | number
| squad_team_limit | number
| squad_total_spend | number
| static_game_url | string
| support_email_address | string
| sys_cdn_cache_enabled | boolean
| sys_use_event_live_api | boolean
| sys_vice_captain_enabled | boolean
| transfers_cost | number
| transfers_limit | number
| transfers_sell_on_fee | number
| transfers_type | string
| ui_el_hide_currency_qi | boolean
| ui_el_hide_currency_sy | boolean
| ui_element_wrap | number
| ui_selection_player_limit | number
| ui_selection_price_gap | number
| ui_selection_short_team_names | boolean
| ui_show_home_away | boolean
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: GameElement


## Properties

| Name  | Type                
| ------ | ------------------- 
| bps_clean_sheets | number
| bps_goals_scored | number
| scoring_clean_sheets | number
| scoring_goals_conceded | number
| scoring_goals_scored | number
| squad_max_play | number
| squad_min_play | number
| squad_select | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: GameEvent


## Properties

| Name  | Type                
| ------ | ------------------- 
| average_entry_score | number
| data_checked | boolean
| deadline_time | Date
| deadline_time_epoch | number
| deadline_time_formatted | string
| deadline_time_game_offset | number
| finished | boolean
| highest_score | undefined⎮number
| highest_scoring_entry | undefined⎮number
| id | number
| is_current | boolean
| is_next | boolean
| is_previous | boolean
| name | string
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: GameFormations


## Properties

| Name  | Type                
| ------ | ------------------- 
| 1-2-5-3 | number[][]
| 1-3-4-3 | number[][]
| 1-3-5-2 | number[][]
| 1-4-3-3 | number[][]
| 1-4-4-2 | number[][]
| 1-4-5-1 | number[][]
| 1-5-2-3 | number[][]
| 1-5-3-2 | number[][]
| 1-5-4-1 | number[][]
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: GamePhase


## Properties

| Name  | Type                
| ------ | ------------------- 
| id | number
| name | string
| start_event | number
| stop_event | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: GameSettings


## Properties

| Name  | Type                
| ------ | ------------------- 
| element_type | [GameElement](#interface-gameelement)
| game | [Game](#interface-game)
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: IApiLeaguePositions


## Properties

| Name  | Type                
| ------ | ------------------- 
| entry | number
| entry_name | string
| event_total | number
| id | number
| last_rank | number
| league | number
| movement | string
| own_entry | boolean
| player_name | string
| rank | number
| rank_sort | number
| start_event | number
| stop_event | number
| total | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: League


## Properties

| Name  | Type                
| ------ | ------------------- 
| league | [LeagueDetails](#interface-leaguedetails)
| new_entries | [LeagueStandings](#interface-leaguestandings)
| standings | [LeagueStandings](#interface-leaguestandings)
| update_status | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: LeagueDetails


## Properties

| Name  | Type                
| ------ | ------------------- 
| _scoring | string
| admin_entry | any
| closed | boolean
| created | Date
| forum_disabled | boolean
| id | number
| league_type | string
| leagueban_set | any[]
| make_code_public | boolean
| name | string
| rank | any
| reprocess_standings | boolean
| short_name | string
| size | any
| start_event | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: LeagueStandings


## Properties

| Name  | Type                
| ------ | ------------------- 
| has_next | boolean
| number | number
| results | [IApiLeaguePositions](#interface-iapileaguepositions)[]
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: Stats


## Properties

| Name  | Type                
| ------ | ------------------- 
| assists | number
| bonus | number
| bps | number
| clean_sheets | number
| creativity | number
| goals_conceded | number
| goals_scored | number
| ict_index | number
| in_dreamteam | boolean
| influence | number
| minutes | number
| own_goals | number
| penalties_missed | number
| penalties_saved | number
| red_cards | number
| saves | number
| threat | number
| total_points | number
| yellow_cards | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: Team


## Properties

| Name  | Type                
| ------ | ------------------- 
| code | number
| current_event_fixture | [TeamFixture](#interface-teamfixture)[]
| draw | number
| form | any
| id | number
| link_url | string
| loss | number
| name | string
| next_event_fixture | [TeamFixture](#interface-teamfixture)[]
| played | number
| points | number
| position | number
| short_name | string
| strength | number
| strength_attack_away | number
| strength_attack_home | number
| strength_defence_away | number
| strength_defence_home | number
| strength_overall_away | number
| strength_overall_home | number
| team_division | number
| unavailable | boolean
| win | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)





# Interface: TeamFixture


## Properties

| Name  | Type                
| ------ | ------------------- 
| day | number
| event_day | number
| id | number
| is_home | boolean
| month | number
| opponent | number
↩&nbsp;&nbsp;[Back to top](#typedoc-plugin-markdown)



