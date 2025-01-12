execute store result score @s refresh_player_x run data get entity @s Pos[0]
execute store result score @s refresh_player_y run data get entity @s Pos[1]
execute store result score @s refresh_player_z run data get entity @s Pos[2]


execute store result score @s refresh_player_rotation run data get entity @s Rotation[0]
execute store result score @s refresh_player_rotation2 run data get entity @s Rotation[1]

#west
execute if score @s refresh_player_rotation matches 45..134 run title @s[tag=!1_splatus_actionbar_disabled,tag=!1_splatus_actionbar_disabled2] actionbar [{"translate": "X/Z: "},{"score":{"name":"@s","objective":"refresh_player_x"}},{"translate": ", "},{"score":{"name":"@s","objective":"refresh_player_z"}},{"translate": " - ","color": "white"},{"translate": "Facing: "},{"score":{"name":"@s","objective":"refresh_player_rotation"}},{"translate": ", "},{"score":{"name":"@s","objective":"refresh_player_rotation2"}},{"translate": ", West"}]

#south
execute if score @s refresh_player_rotation matches -45..44 run title @s[tag=!1_splatus_actionbar_disabled,tag=!1_splatus_actionbar_disabled2] actionbar [{"translate": "X/Z: "},{"score":{"name":"@s","objective":"refresh_player_x"}},{"translate": ", "},{"score":{"name":"@s","objective":"refresh_player_z"}},{"translate": " - ","color": "white"},{"translate": "Facing: "},{"score":{"name":"@s","objective":"refresh_player_rotation"}},{"translate": ", "},{"score":{"name":"@s","objective":"refresh_player_rotation2"}},{"translate": ", South"}]

#east
execute if score @s refresh_player_rotation matches -135..-46 run title @s[tag=!1_splatus_actionbar_disabled,tag=!1_splatus_actionbar_disabled2] actionbar [{"translate": "X/Z: "},{"score":{"name":"@s","objective":"refresh_player_x"}},{"translate": ", "},{"score":{"name":"@s","objective":"refresh_player_z"}},{"translate": " - ","color": "white"},{"translate": "Facing: "},{"score":{"name":"@s","objective":"refresh_player_rotation"}},{"translate": ", "},{"score":{"name":"@s","objective":"refresh_player_rotation2"}},{"translate": ", East"}]

#north
execute if score @s refresh_player_rotation matches -180..-136 run title @s[tag=!1_splatus_actionbar_disabled,tag=!1_splatus_actionbar_disabled2] actionbar [{"translate": "X/Z: "},{"score":{"name":"@s","objective":"refresh_player_x"}},{"translate": ", "},{"score":{"name":"@s","objective":"refresh_player_z"}},{"translate": " - ","color": "white"},{"translate": "Facing: "},{"score":{"name":"@s","objective":"refresh_player_rotation"}},{"translate": ", "},{"score":{"name":"@s","objective":"refresh_player_rotation2"}},{"translate": ", North"}]
execute if score @s refresh_player_rotation matches 135..179 run title @s[tag=!1_splatus_actionbar_disabled,tag=!1_splatus_actionbar_disabled2] actionbar [{"translate": "X/Z: "},{"score":{"name":"@s","objective":"refresh_player_x"}},{"translate": ", "},{"score":{"name":"@s","objective":"refresh_player_z"}},{"translate": " - ","color": "white"},{"translate": "Facing: "},{"score":{"name":"@s","objective":"refresh_player_rotation"}},{"translate": ", "},{"score":{"name":"@s","objective":"refresh_player_rotation2"}},{"translate": ", North"}]
