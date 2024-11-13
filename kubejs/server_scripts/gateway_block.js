BlockEvents.rightClicked('oreganized:gargoyle', event => {
    let myEntity = event.block.createEntity("gateways:normal_gateway")
    myEntity.x+=0.5
    myEntity.y+=1.0
    myEntity.z+=0.5
    myEntity.mergeNbt(`{
      gate: "gateways:overworldian_nights"
    }`)
    myEntity.spawn()
    event.level.destroyBlock(event.block, false)
})