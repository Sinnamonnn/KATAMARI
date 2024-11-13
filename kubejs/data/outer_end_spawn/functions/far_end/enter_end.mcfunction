execute in minecraft:the_end run tp @s 3000 70.1 0

effect give @s minecraft:slow_falling 1 0 true
effect give @s minecraft:levitation 1 255 true

advancement revoke @s only outer_end_spawn:events/enter_end

schedule function outer_end_spawn:far_end/platform 1t
