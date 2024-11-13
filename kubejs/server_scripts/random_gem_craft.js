const inputList1 = ['quark:red_corundum_cluster', 'quark:orange_corundum_cluster', 'quark:yellow_corundum_cluster', 'quark:green_corundum_cluster', 'quark:blue_corundum_cluster', 'quark:indigo_corundum_cluster', 'quark:voilet_corundum_cluster', 'quark:white_corundum_cluster', 'quark:black_corundum_cluster', 'create_new_age:overcharged_gold', 'create_new_age:overcharged_iron', 'create_new_age:overcharged_diamond', 'ae2:charged_certus_quartz_crystal', 'born_in_chaos_v1:diamond_termite_shard', 'spelunkery:rough_lazurite', 'spelunkery:rough_emerald', 'spelunkery:rough_cinnabar', 'spelunkery:raw_magnetite', 'minecraft:amethyst_shard', 'born_in_chaos_v1:pieceofdarkmetal']
const inputList2 = ['biomeswevegone:skyris_sapling', 'biomeswevegone:jacaranda_sapling', 'biomeswevegone:indigo_jacaranda_sapling', 'biomeswevegone:witch_hazel_sapling', 'forbidden_arcanus:aurum_sapling', 'minecraft:cherry_sapling', 'biomeswevegone:green_enchanted_sapling', 'biomeswevegone:blue_enchanted_sapling', 'quark:ancient_sapling', 'quark:blue_blossom_sapling', 'quark:lavender_blossom_sapling', 'quark:orange_blossom_sapling', 'quark:yellow_blossom_sapling', 'quark:red_blossom_sapling', 'regions_unexplored:magnolia_sapling', 'regions_unexplored:blue_magnolia_sapling', 'regions_unexplored:pink_magnolia_sapling', 'regions_unexplored:white_magnolia_sapling', 'regions_unexplored:brimwood_sapling', 'regions_unexplored:cobalt_sapling']
const inputList3 = ['minecraft:fire_charge', 'born_in_chaos_v1:dark_charge', 'thermal:earth_charge', 'thermal:ice_charge', 'thermal:lightning_charge', 'born_in_chaos_v1:fire_dust', 'born_in_chaos_v1:spiritual_dust', 'born_in_chaos_v1:spiny_shell', 'born_in_chaos_v1:fused_bone', 'born_in_chaos_v1:shattered_skull', 'alexsmobs:blood_sac', 'alexsmobs:fish_bones', 'alexsmobs:tarantula_hawk_wing', 'alexsmobs:soul_heart', 'alexsmobs:guster_eye', 'minecraft:ender_pearl', 'minecraft:blaze_rod', 'minecraft:pufferfish', 'upgrade_aquatic:thrasher_tooth', 'born_in_chaos_v1:nightmare_claw']

const outputList = ['{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/warlord"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/ballast"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/brawlers"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/breach"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/combatant"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/guardian"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/lightning"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/lunar"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/samurai"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/slipstream"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/solar"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/splendor"}', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/tyrannical"}', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:overworld/earth"}', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:overworld/royalty"}', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_end/endersurge"}', '{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_end/mageslayer"}', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:the_nether/inferno"}', '{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:the_nether/blood_lord"}']

ServerEvents.recipes((e) => {
  let x = global.WORLD_SEED * Math.pow(2, -32) ^ global.WORLD_SEED
  let random = () => (x = (x >> 1) ^ (-(x & 1) & 0x80200003)) & 1
  inputList1.sort(random)
  inputList2.sort(random)
  inputList3.sort(random)
  outputList.forEach((output, i) => e.custom({
    "type": "create:mixing",
    "heatRequirement": "superheated",
    "ingredients": [
      {
        "item": inputList1[i]
      },
      {
        "item": inputList2[i]
      },
      {
        "item": inputList3[i]
      },
      {
        "amount": 144,
        "fluid": "spelunkery:portal_fluid"
      }
    ],
    "results": [{
      "item": 'apotheosis:gem',
      "nbt": output
    }]
}))
})
