
execute if entity @e[type=marker,tag=refresh_entity_crop] run execute store result score temp refresh_count if entity @e[type=marker,tag=refresh_entity_crop]
execute if entity @e[type=marker,tag=refresh_entity_crop] run playsound entity.experience_orb.pickup player @s ~ ~ ~ 1 1

execute if entity @e[type=marker,tag=refresh_entity_crop] run tellraw @s [{"translate":""}]
execute if entity @e[type=marker,tag=refresh_entity_crop] run tellraw @s [{"translate":"","color": "green"},{"translate":"Removed "},{"score":{"name":"temp","objective":"refresh_count"}},{"translate":" crop XP markers"}]
execute if entity @e[type=marker,tag=refresh_entity_crop] run tellraw @s [{"translate":""}]


#failed to find entity?
execute unless entity @e[type=marker,tag=refresh_entity_crop] run tellraw @s {"translate":"\nNo entity was found\n","color":"red"}

execute if entity @e[type=marker,tag=refresh_entity_crop] run tellraw @a[distance=0.001..] [{"translate":"[","color": "gray","italic": true},{"selector":"@s"},{"translate":": Removed "},{"score":{"name":"temp","objective":"refresh_count"}},{"translate":" crop XP markers]"}]

execute if entity @e[type=marker,tag=refresh_entity_crop] run kill @e[type=marker,tag=refresh_entity_crop]

execute if entity @e[type=marker,tag=refresh_entity_crop] run scoreboard players reset temp refresh_count

