
#---------------------------------------------------------------------------------------------------------------------------------------------------

#ENTER FAR END

execute in minecraft:the_end run tp @a[advancements={outer_end_spawn:events/enter_end=true}] 3000 70 0

effect give @a[advancements={outer_end_spawn:events/enter_end=true}] minecraft:slow_falling 1 0 true
effect give @a[advancements={outer_end_spawn:events/enter_end=true}] minecraft:levitation 1 255 true

execute at @a[advancements={outer_end_spawn:events/enter_end=true}] run fill ~2 69 ~2 ~-2 69 ~-2 minecraft:obsidian replace
execute at @a[advancements={outer_end_spawn:events/enter_end=true}] run fill ~2 70 ~2 ~-2 73 ~-2 minecraft:air destroy

advancement revoke @a[advancements={outer_end_spawn:events/enter_end=true}] only outer_end_spawn:events/enter_end
