const level1Mobs = ['quark:forgotten', 'born_in_chaos_v1:corpse_fish','born_in_chaos_v1:swarmer' ,'born_in_chaos_v1:skeleton_demoman', 'born_in_chaos_v1:decaying_zombie', 'born_in_chaos_v1:siamese_skeletons', 'born_in_chaos_v1:barrel_zombie', 'born_in_chaos_v1:zombie_fisherman', 'born_in_chaos_v1:spirit_guide', 'born_in_chaos_v1:dread_hound', 'born_in_chaos_v1:restless_spirit', 'born_in_chaos_v1:pumpkin_dunce']

EntityEvents.spawned(level1Mobs, e => {
    const {server, entity} = e
    const check = server.players.some(p => 
        !p.stages.has('level_1') &&
        p.distanceToEntity(entity) < 128
    )
    if (check) e.cancel()
})

const level2Mobs = ['born_in_chaos_v1:skeleton_thrasher', 'born_in_chaos_v1:door_knight', 'born_in_chaos_v1:phantom_creeper', 'born_in_chaos_v1:bonescaller', 'born_in_chaos_v1:nightmare_stalker', 'born_in_chaos_v1:dark_vortex', 'born_in_chaos_v1:bloody_gadfly', 'born_in_chaos_v1:zombie_lumberjack']

EntityEvents.spawned(level2Mobs, e => {
    const {server, entity} = e
    const check = server.players.some(p => 
        !p.stages.has('level_2') &&
        p.distanceToEntity(entity) < 128
    )
    if (check) e.cancel()
})

const level3Mobs = ['irons_spellbooks:necromancer', 'born_in_chaos_v1:dire_hound_leader', 'born_in_chaos_v1:zombie_bruiser', 'born_in_chaos_v1:scarlet_persecutor', 'born_in_chaos_v1:zombie_clown', 'born_in_chaos_v1:fallen_chaos_knight', 'born_in_chaos_v1:spiritof_chaos', 'born_in_chaos_v1:mrs_pumpkin']

EntityEvents.spawned(level3Mobs, e => {
    const {server, entity} = e
    const check = server.players.some(p => 
        !p.stages.has('level_3') &&
        p.distanceToEntity(entity) < 128
    )
    if (check) e.cancel()
})

const level4Mobs = ['born_in_chaos_v1:missioner', 'born_in_chaos_v1:glutton_fish', 'born_in_chaos_v1:lifestealer', 'born_in_chaos_v1:supreme_bonescaller', "born_in_chaos_v1:sir_pumpkinhead", 'born_in_chaos_v1:seared_spirit']

EntityEvents.spawned(level4Mobs, e => {
    const {server, entity} = e
    const check = server.players.some(p => 
        !p.stages.has('level_4') &&
        p.distanceToEntity(entity) < 128
    )
    if (check) e.cancel()
})

PlayerEvents.inventoryChanged(e => {
    const { level, item, player, entity: { x, y, z } } = e
    if (item.hasTag('forge:tools/iron') && !player.stages.has('level_1')) {
        player.stages.add('level_1')
        player.displayClientMessage(Text.of("The game just got harder...").red(), true)
        level.playSound(null, x, y, z, "minecraft:entity.wither.death", "ambient", 1, 1)
    }
})

PlayerEvents.inventoryChanged(e => {
    const { level, item, player, entity: { x, y, z } } = e
    if (item.hasTag('forge:tools/diamond') && !player.stages.has('level_2')) {
        player.stages.add('level_2')
        player.displayClientMessage(Text.of("The game just got harder...").red(), true)
        level.playSound(null, x, y, z, "minecraft:entity.wither.death", "ambient", 1, 1)
    }
})

CommonAddedEvents.playerChangeDimension(e => {
    const { level, newLevel, player, entity: { x, y, z } } = e
    if (newLevel.dimension == 'minecraft:the_nether' && !player.stages.has('level_3')) {
        player.stages.add('level_3')
        player.displayClientMessage(Text.of("The game just got harder...").red(), true)
        level.playSound(null, x, y, z, "minecraft:entity.wither.death", "ambient", 1, 1)
    }
})

EntityEvents.death("minecraft:wither", e => {
    const { level, source: { actual }, entity: { x, y, z } } = e
    if (actual && actual.player && !actual.stages.has('level_4')) {
        actual.stages.add('level_4')
        actual.displayClientMessage(Text.of("The game just got harder...").red(), true)
        level.playSound(null, x, y, z, "minecraft:entity.wither.death", "ambient", 1, 1)
    }
})