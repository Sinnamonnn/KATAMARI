scoreboard players add cyclestats refresh_count 1

execute if score cyclestats refresh_count matches 1 if score stats_health refresh_settings matches 0 run scoreboard players add cyclestats refresh_count 2
execute if score cyclestats refresh_count matches 3 if score stats_time refresh_settings matches 0 run scoreboard players add cyclestats refresh_count 2
execute if score cyclestats refresh_count matches 5 if score stats_mobkills refresh_settings matches 0 run scoreboard players add cyclestats refresh_count 2
execute if score cyclestats refresh_count matches 7 if score stats_kills refresh_settings matches 0 run scoreboard players add cyclestats refresh_count 2
execute if score cyclestats refresh_count matches 9 if score stats_deaths refresh_settings matches 0 run scoreboard players add cyclestats refresh_count 2
execute if score cyclestats refresh_count matches 11 if score stats_deathtime refresh_settings matches 0 run scoreboard players add cyclestats refresh_count 2
execute if score cyclestats refresh_count matches 13 if score stats_xp refresh_settings matches 0 run scoreboard players add cyclestats refresh_count 2

execute if score cyclestats refresh_count matches 1 run scoreboard objectives setdisplay belowName refresh_player_health
execute if score cyclestats refresh_count matches 3 run scoreboard objectives setdisplay belowName refresh_player_hours
execute if score cyclestats refresh_count matches 5 run scoreboard objectives setdisplay belowName refresh_player_mobkills
execute if score cyclestats refresh_count matches 7 run scoreboard objectives setdisplay belowName refresh_player_kills
execute if score cyclestats refresh_count matches 9 run scoreboard objectives setdisplay belowName refresh_player_deaths
execute if score cyclestats refresh_count matches 11 run scoreboard objectives setdisplay belowName refresh_player_d_hours
execute if score cyclestats refresh_count matches 13 run scoreboard objectives setdisplay belowName refresh_player_level
execute if score cyclestats refresh_count matches 15 run scoreboard players set cyclestats refresh_count 0

