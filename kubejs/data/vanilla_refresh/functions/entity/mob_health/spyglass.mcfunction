
scoreboard players add @s refresh_count 1

tag @s remove 1_splatus_actionbar_disabled

execute if entity @p[tag=refresh_debug] run particle end_rod ~ ~ ~ 0 0 0 0 1 force @a[distance=..128,tag=refresh_debug]

execute positioned ~ ~-1 ~ if entity @e[distance=..3,tag=!refresh_entity_misc] run function vanilla_refresh:entity/mob_health/spyglass_actionbar


execute unless score @s refresh_count matches 92.. unless entity @e[distance=..2,type=!#vanilla_refresh:misc_spyglass,tag=!refresh_entity_misc,predicate=!vanilla_refresh:condition/spectator] positioned ^ ^ ^1 if block ~ ~ ~ #vanilla_refresh:permeable run function vanilla_refresh:entity/mob_health/spyglass
scoreboard players reset @s refresh_count