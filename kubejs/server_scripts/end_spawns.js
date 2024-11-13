const enderFuckers = ["minecraft:enderman", "alexsmobs:cosmic_cod", "alexsmobs:spectre", "alexsmobs:endergrade", "alexsmobs:cosmaw"]

EntityEvents.spawned(enderFuckers, e => {
    const { entity, level } = e
    if ((level.dimension == "minecraft:the_end" && entity.y < 35))
        e.cancel()
})