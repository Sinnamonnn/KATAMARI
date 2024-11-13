const $TierSortingRegistry = Java.loadClass("net.minecraftforge.common.TierSortingRegistry")
const $Tiers = Java.loadClass("net.minecraft.world.item.Tiers")
const $ForgeTier = Java.loadClass("net.minecraftforge.common.ForgeTier")
const $BlockTags = Java.loadClass("net.minecraft.tags.BlockTags")

ItemEvents.toolTierRegistry((event) => {
  event.add("bronze", (tier) => {
    tier.uses = 100
    tier.speed = 2.0
    tier.attackDamageBonus = 1.0
    tier.level = -1
    tier.enchantmentValue = 5.0
    tier.repairIngredient = "#forge:ingots/bronze"
  })
  const BronzeTier = new $ForgeTier(0, 32, 12, 0, 22, $BlockTags.create("minecraft:needs_bronze_tool"), () => Ingredient.of("#forge:ingots/bronze"))
  $TierSortingRegistry.registerTier(BronzeTier, "bronze", [$Tiers.STONE], [$Tiers.IRON])
})

StartupEvents.registry('item', event => {
  event.create('bronze_pickaxe', 'pickaxe').tier('bronze')
})