ItemEvents.toolTierRegistry((event) => {
    event.add("flint", (tier) => {
      tier.uses = 130
      tier.speed = 0.75
      tier.attackDamageBonus = -2.0
      tier.level = -1
      tier.enchantmentValue = 5.0
      tier.repairIngredient = "minecraft:flint"
    })
    const FlintTier = new $ForgeTier(0, 32, 12, 0, 22, $BlockTags.create("minecraft:needs_flint_tool"), () => Ingredient.of("minecraft:flint"))
    $TierSortingRegistry.registerTier(FlintTier, "flint", [], [$Tiers.WOOD])
  })
  
  StartupEvents.registry('item', event => {
    event.create('flint_axe', 'axe').tier('flint').tag('forge:axes')
  })