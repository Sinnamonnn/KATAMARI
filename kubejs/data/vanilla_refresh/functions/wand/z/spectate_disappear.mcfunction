
gamemode spectator @s

tag @s add refresh_spectator


execute unless score spectate_animation refresh_settings matches 0 run particle poof ~ ~1 ~ .3 .5 .3 .05 20 force @a[distance=..64]
execute unless score spectate_animation refresh_settings matches 0 run playsound entity.shulker_bullet.hit player @a[distance=..20] ~ ~ ~ 1 .7



tellraw @s [{"translate": ""}]

tellraw @s [{"translate":"You've entered","color":"gray"},{"translate":" Spectator Mode","color":"yellow"}]

#night vision
tellraw @s [{"translate": ""}]
tellraw @s[tag=refresh_nightvision] [{"translate": "-> ","color": "gray"},{"translate": "Random Player","underlined": true,"color": "#408CFF","clickEvent":{"action": "run_command","value": "/function vanilla_refresh:wand/z/spectate_player"},"hoverEvent": {"action": "show_text","value":{"translate": "Click to run this command"}}},{"translate": "   -> ","color": "gray"},{"translate": "Night Vision: Enabled","underlined": true,"color": "green","clickEvent":{"action": "run_command","value": "/function vanilla_refresh:wand/z/spectate_night_vision0"},"hoverEvent": {"action": "show_text","value":{"translate": "Click to run this command"}}}]
tellraw @s[tag=!refresh_nightvision] [{"translate": "-> ","color": "gray"},{"translate": "Random Player","underlined": true,"color": "#408CFF","clickEvent":{"action": "run_command","value": "/function vanilla_refresh:wand/z/spectate_player"},"hoverEvent": {"action": "show_text","value":{"translate": "Click to run this command"}}},{"translate": "   -> ","color": "gray"},{"translate": "Night Vision: Disabled","underlined": true,"color": "red","clickEvent":{"action": "run_command","value": "/function vanilla_refresh:wand/z/spectate_night_vision1"},"hoverEvent": {"action": "show_text","value":{"translate": "Click to run this command"}}}]





tellraw @s [{"translate": ""}]
execute at @s run tellraw @s [{"translate": "-> ","color": "gray"},{"translate": "World Spawn","underlined": true,"color": "#408CFF","clickEvent":{"action": "run_command","value": "/function vanilla_refresh:wand/z/spectate_worldspawn"},"hoverEvent": {"action": "show_text","value":{"translate": "Click to run this command"}}}]

tellraw @s [{"translate": ""}]
execute at @s run tellraw @s [{"translate": "-> ","color": "gray"},{"translate": "Appear","underlined": true,"color": "#408CFF","clickEvent":{"action": "run_command","value": "/function vanilla_refresh:wand/z/spectate_appear"},"hoverEvent": {"action": "show_text","value":{"translate": "Click to run this command"}}}]

tellraw @s [{"translate": ""}]



advancement revoke @s only vanilla_refresh:wand/spectate_disappear