EntityEvents.spawned('cave_dweller:cave_dweller', e => {
    const {server, entity} = e
    const check = server.players.some(p => 
        p.stages.has('no_cave_dweller') &&
        p.distanceToEntity(entity) < 128
    )
    if (check) e.cancel()
})

PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('bobikill')) {
        event.player.stages.add('bobikill')
        event.player.persistentData.bobikills = 0
    }
})

EntityEvents.death('cave_dweller:cave_dweller', event => {
    const { entity, source, source: { actual, actual: { persistentData } } } = event
    if (actual.isPlayer()) {
        ++persistentData.bobikills
        if (persistentData.bobikills > 0) {
            event.server.runCommandSilent(`gamestage add ${actual.username} no_cave_dweller`)
        }
    }
})