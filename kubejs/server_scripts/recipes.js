//Removed items via crafting
ServerEvents.recipes(event => { 
    event.remove({ input: 'vintageimprovements:spring_coiling_machine_wheel' })
    event.remove({ output: 'vintageimprovements:spring_coiling_machine_wheel' })
    event.remove({ output: 'vintageimprovements:sulfur_chunk' })
    event.remove({ id: 'create:crushing/asurine' })
    event.remove({ id: 'create:crushing/asurine_recycling' })
    event.remove({ id: 'create:crushing/crimsite' })
    event.remove({ id: 'create:crushing/crimsite_recycling' })
    event.remove({ id: 'create:crushing/tuff' })
    event.remove({ id: 'create:crushing/tuff_recycling' })
    event.remove({ output: 'vintageimprovements:vanadium_nugget' })
    event.replaceInput(
      { input: 'create_dd:rubber_block' },
      'create_dd:rubber_block',
      'thermal:cured_rubber_block'
    )
    event.replaceInput(
      { input: 'create_dd:raw_rubber_block' },
      'create_dd:raw_rubber_block',
      'thermal:rubber_block'
    )
    event.remove({ output: 'create_dd:magnet' })
    event.remove({ output: 'create_dd:gilded_rose_sword' })
    event.remove({ output: 'create_dd:gilded_rose_pickaxe' })
    event.remove({ output: 'create_dd:gilded_rose_axe' })
    event.remove({ output: 'create_dd:gilded_rose_shovel' })
    event.remove({ output: 'create_dd:gilded_rose_hoe' })
    event.remove({ output: 'create_connected:empty_fan_catalyst' })
    event.remove({ input: 'create_connected:six_way_gearbox' })
    event.remove({ output: 'create_connected:six_way_gearbox' })
    event.remove({ input: 'create_connected:parallel_gearbox' })
    event.remove({ output: 'create_connected:parallel_gearbox' })
    event.remove({ output: 'create_dd:item_stockpile' })
    event.remove({ output: 'create_dd:fluid_reservoir' })
    event.remove({ output: 'forbidden_arcanus:corrupted_pixie' })
    event.remove({ input: 'forbidden_arcanus:dragon_scale' })
    event.remove({ output: 'forbidden_arcanus:dragon_scale' })
    event.remove({ output: 'forbidden_arcanus:arcane_dragon_egg' })
    event.remove({ output: 'forbidden_arcanus:golden_feather' })
    event.remove({ output: 'forbidden_arcanus:slimec_pickaxe' })
    event.remove({ input: 'forbidden_arcanus:cloth' })
    event.remove({ output: 'ae2:certus_quartz_sword' })
    event.remove({ output: 'ae2:certus_quartz_pickaxe' })
    event.remove({ output: 'ae2:certus_quartz_axe' })
    event.remove({ output: 'ae2:certus_quartz_shovel' })
    event.remove({ output: 'ae2:certus_quartz_hoe' })
    event.remove({ output: 'ae2:nether_quartz_sword' })
    event.remove({ output: 'ae2:nether_quartz_pickaxe' })
    event.remove({ output: 'ae2:nether_quartz_axe' })
    event.remove({ output: 'ae2:nether_quartz_shovel' })
    event.remove({ output: 'ae2:nether_quartz_hoe' })
    event.remove({ output: 'ae2:fluix_sword' })
    event.remove({ output: 'ae2:fluix_pickaxe' })
    event.remove({ output: 'ae2:fluix_axe' })
    event.remove({ output: 'ae2:fluix_shovel' })
    event.remove({ output: 'ae2:fluix_hoe' })
    event.remove({ output: 'forbidden_arcanus:sanity_meter' })
    event.remove({ output: 'forbidden_arcanus:lens_of_veritatis' })
    event.remove({ mod: 'vintageimprovements', output:'#forge:rods' })
    event.remove({ id: 'vintageimprovements:craft/curving_press' })
    event.remove({ id: 'create_new_age:shapeless/energiser_t1' })
    event.remove({ id: 'vintageimprovements:mechanical_crafting/laser' })
    event.remove({ id: 'vintageimprovements:craft/laser' })
    event.remove({ id: 'forbidden_arcanus:clibano_core' })
    event.remove({ id: 'create:sequenced_assembly/precision_mechanism' })
    event.remove({ id: 'vintageimprovements:mechanical_crafting/helve_hammer'})
    event.remove({ id: 'vintageimprovements:mechanical_crafting/lathe'})
    event.remove({ id: 'minecraft:map'})
    event.remove({ id: 'born_in_chaos_v1:diamond_thermite_shard_k'})
    event.remove({ mod: 'cgm'})
    event.remove({ mod: 'locks'})
    event.remove({ output: 'born_in_chaos_v1:eternal_candy' })
})

//Redone crafts

ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('2x minecraft:stick'),
  [
    '#minecraft:saplings'
  ]
)

  event.shapeless(
    Item.of('gbook:guidebook', '{Book:"gbook:demobook.xml"}'),
  [
    'minecraft:dirt'
  ]
)
  event.custom({
    "type": "create:cutting",
    "ingredients": [
      {
        "item": "minecraft:diamond"
      }
    ],
    "processingTime": 200,
    "results": [
      {
        "count": 4,
        "item": "locks:diamond_lock_pick"
      }
    ]
  })
  event.custom({
    "type": "create:cutting",
    "ingredients": [
      {
        "item": "create:golden_sheet"
      }
    ],
    "processingTime": 200,
    "results": [
      {
        "count": 8,
        "item": "locks:gold_lock_pick"
      }
    ]
  })
  event.custom({
    "type": "create:cutting",
    "ingredients": [
      {
        "item": "create:iron_sheet"
      }
    ],
    "processingTime": 200,
    "results": [
      {
        "count": 8,
        "item": "locks:iron_lock_pick"
      }
    ]
  })
  event.shaped(
    Item.of('cgm:weighted_stock'),
  [
    '   ',
    'ABB',
    ' CC'
  ],
  {
    A: 'minecraft:copper_ingot',
    B: 'create:copper_sheet',
    C: 'create:copper_nugget'
  }
)
  event.shaped(
    Item.of('cgm:light_stock'),
  [
    '  C',
    'BBA',
    '  A'
  ],
  {
    A: 'minecraft:copper_ingot',
    B: 'create:copper_sheet',
    C: 'create:copper_nugget'
  }
)
  event.shaped(
    Item.of('cgm:tactical_stock'),
  [
    'ABB',
    ' CC',
    '   '
  ],
  {
    A: 'minecraft:copper_ingot',
    B: 'thermal:cured_rubber',
    C: 'create:copper_nugget'
  }
)
  event.shaped(
    Item.of('cgm:light_grip'),
  [
    '   ',
    ' A ',
    ' B '
  ],
  {
    A: 'create:copper_sheet',
    B: 'thermal:cured_rubber'
  }
)
  event.shaped(
    Item.of('cgm:specialised_grip'),
  [
    '   ',
    ' A ',
    ' B '
  ],
  {
    A: 'minecraft:copper_ingot',
    B: 'thermal:cured_rubber'
  }
)
  event.shaped(
    Item.of('cgm:silencer'),
  [
    '   ',
    'AB ',
    '   '
  ],
  {
    A: '#minecraft:wool',
    B: 'create:fluid_pipe'
  }
)
  event.shaped(
    Item.of('cgm:long_scope'),
  [
    '   ',
    'AA ',
    ' B '
  ],
  {
    A: 'minecraft:spyglass',
    B: '#minecraft:logs'
  }
)
  event.shaped(
    Item.of('cgm:medium_scope'),
  [
    '   ',
    ' A ',
    ' B '
  ],
  {
    A: 'minecraft:spyglass',
    B: '#minecraft:logs'
  }
)
  event.shaped(
    Item.of('cgm:short_scope'),
  [
    '   ',
    ' A ',
    ' B '
  ],
  {
    A: 'create:polished_rose_quartz',
    B: 'create:copper_sheet'
  }
)
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "minecraft:glass_bottle"
    },
    "loops": 1,
    "results": [
      {
        "item": "cgm:stun_grenade",
        "count": 2
      },
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:glass_bottle"
          },
          {
            "item": "minecraft:gunpowder"
          }
        ],
        "results": [
          {
            "item": "minecraft:glass_bottle"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:glass_bottle"
          },
          {
            "item": "minecraft:glowstone_dust"
          }
        ],
        "results": [
          {
            "item": "minecraft:glass_bottle"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:glass_bottle"
          },
          {
            "item": "minecraft:iron_nugget"
          }
        ],
        "results": [
          {
            "item": "minecraft:glass_bottle"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:glass_bottle"
          },
          {
            "item": "minecraft:string"
          }
        ],
        "results": [
          {
            "item": "minecraft:glass_bottle"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "minecraft:glass_bottle"
    }
  })

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "minecraft:glass_bottle"
    },
    "loops": 1,
    "results": [
      {
        "item": "cgm:grenade",
        "count": 2
      },
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:glass_bottle"
          },
          {
            "item": "minecraft:gunpowder"
          }
        ],
        "results": [
          {
            "item": "minecraft:glass_bottle"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:glass_bottle"
          },
          {
            "item": "minecraft:iron_nugget"
          }
        ],
        "results": [
          {
            "item": "minecraft:glass_bottle"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:glass_bottle"
          },
          {
            "item": "minecraft:string"
          }
        ],
        "results": [
          {
            "item": "minecraft:glass_bottle"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "minecraft:glass_bottle"
    }
  })

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      {
        "item": "minecraft:iron_nugget"
      },
      {
        "item": "minecraft:gunpowder"
      }
    ],
    "results": [
      {
        "item": "cgm:missile",
        "count": 4
      }
    ]
})

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "minecraft:iron_ingot"
    },
    "loops": 1,
    "results": [
      {
        "item": "cgm:shell",
        "count": 32
      },
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:iron_ingot"
          },
          {
            "item": "minecraft:gunpowder"
          }
        ],
        "results": [
          {
            "item": "minecraft:iron_ingot"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:iron_ingot"
          },
          {
            "item": "minecraft:gold_nugget"
          }
        ],
        "results": [
          {
            "item": "minecraft:iron_ingot"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "minecraft:iron_ingot"
    }
  })

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      {
        "item": "create:brass_ingot"
      },
      {
        "item": "minecraft:gunpowder"
      }
    ],
    "results": [
      {
        "item": "cgm:advanced_bullet",
        "count": 32
      }
    ]
})
  event.custom({
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:gunpowder"
        }
      ],
      "results": [
        {
          "item": "cgm:basic_bullet",
          "count": 32
        }
      ]
  })

  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'FDBEGCC',
        '  F    ',
    ],

    key: {
        B: { item: "create_dd:integrated_mechanism" },
        C: { item: "create:fluid_pipe"},
        D: { item: "spelunkery:raw_magnetite_block" },
        E: { item: "create:mechanical_pump" },
        F: { item: "born_in_chaos_v1:dark_metal_ingot" },
        G: { item: "create:smart_fluid_pipe"}
    },

    result: { item: "cgm:heavy_rifle", count: 1}
})

  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'ABCC',
        ' A  ',
    ],

    key: {
        A: { item: "born_in_chaos_v1:dark_metal_ingot" },
        B: { item: "cgm:mini_gun" },
        C: { item: "create:smart_fluid_pipe" },
    },

    result: { item: "cgm:machine_pistol", count: 1}
})

  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'FDB   ',
        'FBDEGG',
        ' F  F ',
    ],

    key: {
        B: { item: "create_dd:integrated_mechanism" },
        D: { item: "spelunkery:raw_magnetite_block" },
        E: { item: "create:mechanical_pump" },
        F: { item: "born_in_chaos_v1:dark_metal_ingot" },
        G: { item: "create:smart_fluid_pipe"}
    },

    result: { item: "cgm:mini_gun", count: 1}
})

  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        ' FF  ',
        'FDBGG',
        ' DEGG',
    ],

    key: {
        B: { item: "create_dd:integrated_mechanism" },
        D: { item: "spelunkery:raw_magnetite_block" },
        E: { item: "create:mechanical_pump" },
        F: { item: "born_in_chaos_v1:dark_metal_ingot" },
        G: { item: "create:smart_fluid_pipe"}
    },

    result: { item: "cgm:mini_gun", count: 1}
})

  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'CBDEG',
        '   F ',
    ],

    key: {
        B: { item: "create_dd:integrated_mechanism" },
        C: { item: "forbidden_arcanus:mundabitur_dust" },
        D: { item: "spelunkery:raw_magnetite_block" },
        E: { item: "create:mechanical_pump" },
        F: { item: "born_in_chaos_v1:dark_metal_ingot" },
        G: { item: "create:smart_fluid_pipe"}
    },

    result: { item: "cgm:bazooka", count: 1}
})
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'DBEGC',
        'F  F ',
    ],

    key: {
        B: { item: "create_dd:integrated_mechanism" },
        C: { item: "create:fluid_pipe" },
        D: { item: "spelunkery:raw_magnetite_block" },
        E: { item: "create:mechanical_pump" },
        F: { item: "born_in_chaos_v1:dark_metal_ingot" },
        G: { item: "create:smart_fluid_pipe"}
    },

    result: { item: "cgm:grenade_launcher", count: 1}
})
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'DBECCC',
        'A AF  ',
    ],

    key: {
        A: { item: "born_in_chaos_v1:pieceofdarkmetal" },
        B: { item: "create_dd:integrated_mechanism" },
        C: { item: "create:fluid_pipe" },
        D: { item: "spelunkery:raw_magnetite" },
        E: { item: "create:mechanical_pump" },
        F: { item: "born_in_chaos_v1:dark_metal_ingot" },
    },

    result: { item: "cgm:rifle", count: 1}
})
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'DBECC',
        'AA   ',
    ],

    key: {
        A: { item: "born_in_chaos_v1:pieceofdarkmetal" },
        B: { item: "create_dd:integrated_mechanism" },
        C: { item: "create:fluid_pipe" },
        D: { item: "spelunkery:raw_magnetite" },
        E: { item: "create:mechanical_pump" },
    },

    result: { item: "cgm:shotgun", count: 1}
})

  event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        'ABCC',
        ' A  ',
    ],

    key: {
        A: { item: "born_in_chaos_v1:pieceofdarkmetal" },
        B: { item: "create_dd:integrated_mechanism" },
        C: { item: "create:fluid_pipe" },
    },

    result: { item: "cgm:pistol", count: 1}
})
  event.shapeless(
    Item.of('irons_spellbooks:arcane_essence'),
  [
    'minecraft:lapis_lazuli',
    'minecraft:amethyst_shard'
  ]
)
  event.custom(
    {
      "type": "create:mixing",
      "heatRequirement": "heated",
      "ingredients": [
        {
          "item": "spelunkery:inkcap_mushroom"
        },
        {
          "item": "spelunkery:white_inkcap_mushroom"
        },
        {
          "item": "irons_spellbooks:arcane_essence"
        },
        {
          "item": "minecraft:glass_bottle"
        },
        {
          "amount": 144,
          "fluid": "spelunkery:portal_fluid"
        }
      ],
      "results": [
        {
          "item": "irons_spellbooks:common_ink"
        }
      ]
    }
  )
  event.custom(
    {
      "type": "create:compacting",
      "heatRequirement": "superheated",
      "ingredients": [
        {
          "tag": "minecraft:logs"
        },
        {
          "tag": "minecraft:logs"
        },
        {
          "tag": "minecraft:logs"
        },
        {
          "tag": "minecraft:logs"
        },
        {
          "amount": 250,
          "fluid": "create_enchantment_industry:hyper_experience"
        }
      ],
      "results": [
        {
          "item": "spelunkery:coal_lump"
        }
      ]
    }
  )
  event.custom(
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "create_new_age:thorium"
        },
        {
          "amount": 250,
          "fluid": "create_enchantment_industry:experience"
        }
      ],
      "results": [
        {
          "item": "oreganized:raw_lead"
        }
      ]
    }
  )
  event.shapeless(
    Item.of('minecraft:diamond'),
  [
    '4x born_in_chaos_v1:diamond_termite_shard'
  ]
)
event.custom(
  {
    "type":"vintageimprovements:centrifugation",
    "ingredients": [ 
      {
        "item": "minecraft:sand"
      }
    ],
    "results": [
      {
        "item": "immersive_weathering:sand_layer_block",
        "count": 1
      },
      {
        "item": "thermal:tin_nugget",
        "count": 1
      },
      {
        "chance": 0.25,
        "item": "thermal:tin_nugget",
        "count": 1
      }
    ],
    "processingTime": 1000
  }
)
event.custom(
  {
    "type": "create:milling",
    "ingredients": [
      {
        "item": "minecraft:flint"
      }
    ],
    "processingTime": 70,
    "results": [
      {
        "count": 1,
        "item": "kubejs:crushed_flint"
      }
    ]
  }
)
event.custom(
  {
    "type": "create:haunting",
    "ingredients": [
      {
        "item": "kubejs:crushed_flint"
      }
    ],
    "results": [
      {
        "chance": 0.25,
        "item": "minecraft:lapis_lazuli"
      }
    ]
  }
)







  event.shapeless(
    Item.of('minecraft:map'),
  [
    '4x minecraft:paper'
  ]
)
  event.shapeless(
    Item.of('thermal:bronze_dust'),
  [
    '3x minecraft:raw_copper',
    '#forge:raw_materials/tin'
  ]
)
  event.shapeless(
    Item.of('minecraft:string'),
  [
    '3x farmersdelight:straw'
  ]
)
  event.shaped(
    Item.of('kubejs:flint_axe'),
  [
    'AB',
    ' C'
  ],
  {
    A: 'minecraft:flint',
    B: 'minecraft:string',
    C: 'minecraft:stick'
  }
)
  event.shaped(
    Item.of('kubejs:bronze_pickaxe'),
  [
    'AAA',
    ' B ',
    ' B '
  ],
  {
    A: '#forge:ingots/bronze',
    B: 'minecraft:stick'
  }
)
    event.shaped(
      Item.of('vintageimprovements:curving_press'),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'create:shaft',
      B: 'create_dd:calculation_mechanism',
      C: 'create:andesite_casing'
    }
  )
    event.shaped(
      Item.of('create_new_age:energiser_t1'),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'create:andesite_casing',
      B: 'create:precision_mechanism',
      C: 'minecraft:lightning_rod'
    }
  )
  event.custom({
      type: "create:mechanical_crafting",
      pattern: [
          ' A ',
          'BCB',
          'BDB',
          ' E ',
      ],

      key: {
          A: { item: "minecraft:redstone" },
          B: { item: "create:copper_sheet" },
          C: { item: "create_new_age:overcharged_diamond" },
          D: { item: "create:rose_quartz_lamp" },
          E: { item: "ae2:quartz_glass" },
      },

      result: { item: "vintageimprovements:laser_item", count: 1}
  })
  event.shaped(
    Item.of('vintageimprovements:laser'),
  [
    ' A ',
    'BCD',
    ' E '
  ],
  {
    A: 'create:cogwheel',
    B: 'create_dd:integrated_mechanism',
    C: 'create_dd:industrial_casing',
    D: 'create_new_age:redstone_magnet',
    E: 'vintageimprovements:laser_item'
  }
)
event.shaped(
  Item.of('forbidden_arcanus:clibano_core'),
[
  'AAA',
  'ABA',
  'AAA'
],
{
  A: 'forbidden_arcanus:polished_darkstone',
  B: 'create_dd:infernal_mechanism'
}
)
event.shaped(
  Item.of('cataclysm:ancient_remnant_spawn_egg'),
[
  'ABA',
  'BCB',
  'ABA'
],
{
  A: 'minecraft:cactus',
  B: 'cataclysm:ancient_metal_ingot',
  C: 'cataclysm:desert_eye'
}
)
event.shaped(
  Item.of('cataclysm:ignis_spawn_egg'),
[
  'ABA',
  'BCB',
  'ABA'
],
{
  A: 'minecraft:blaze_powder',
  B: 'minecraft:red_nether_bricks',
  C: 'cataclysm:flame_eye'
}
)
event.shaped(
  Item.of('cataclysm:ender_guardian_spawn_egg'),
[
  'ABA',
  'BCB',
  'ABA'
],
{
  A: 'minecraft:end_stone_bricks',
  B: 'minecraft:end_crystal',
  C: 'cataclysm:void_eye'
}
)
event.shaped(
  Item.of('cataclysm:maledictus_spawn_egg'),
[
  'ABA',
  'BCB',
  'ABA'
],
{
  A: 'minecraft:blue_ice',
  B: 'cataclysm:black_steel_ingot',
  C: 'cataclysm:cursed_eye'
}
)
event.shaped(
  Item.of('cataclysm:netherite_monstrosity_spawn_egg'),
[
  'ADA',
  'BCB',
  'ADA'
],
{
  A: 'minecraft:soul_soil',
  B: 'minecraft:crimson_fungus',
  C: 'cataclysm:monstrous_eye',
  D: 'minecraft:warped_fungus'
}
)
event.shaped(
  Item.of('cataclysm:the_harbinger_spawn_egg'),
[
  'ADA',
  'BCB',
  'ABA'
],
{
  A: 'minecraft:redstone_block',
  B: 'minecraft:iron_block',
  C: 'cataclysm:mech_eye',
  D: 'minecraft:nether_star'
}
)
event.shaped(
  Item.of('create_dd:giant_gear'),
[
  'AAA',
  'ABA',
  'AAA'
],
{
  A: 'create:brass_ingot',
  B: 'create:flywheel'
}
)
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "vintageimprovements:andesite_sheet"
  },
  "loops": 1,
  "results": [
    {
      "item": "create_dd:calculation_mechanism"
    }
  ],
  "sequence": [
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "create_dd:incomplete_calculation_mechanism"
        }
      ],
      "results": [
        {
          "item": "create_dd:incomplete_calculation_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_dd:incomplete_calculation_mechanism"
        },
        {
          "item": "create:cogwheel"
        }
      ],
      "results": [
        {
          "item": "create_dd:incomplete_calculation_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_dd:incomplete_calculation_mechanism"
        },
        {
          "item": "create:copper_nugget"
        }
      ],
      "results": [
        {
          "item": "create_dd:incomplete_calculation_mechanism"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "create_dd:incomplete_calculation_mechanism"
  }
})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
  "item": "create:brass_sheet"
  },
  "loops": 1,
  "results": [
    {
      "item": "create:precision_mechanism"
    }
  ],
  "sequence": [
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "create_dd:incomplete_calculation_mechanism"
        }
      ],
      "results": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": "create:large_cogwheel"
        }
      ],
      "results": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": "create:andesite_alloy"
        }
      ],
      "results": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "create:incomplete_precision_mechanism"
  }
})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
  "item": "create:precision_mechanism"
  },
  "loops": 3,
  "results": [
    {
      "item": "create_dd:integrated_mechanism"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item":  "create_dd:incomplete_integrated_mechanism"
        },
        {
          "item": "create:electron_tube"
        }
      ],
      "results": [
        {
          "item":  "create_dd:incomplete_integrated_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item":  "create_dd:incomplete_integrated_mechanism"
        },
        {
          "item": "create_dd:bury_blend"
        }
      ],
      "results": [
        {
          "item":  "create_dd:incomplete_integrated_mechanism"
        }
      ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 10000,
      "ingredients": [
        {
          "item": "create_dd:incomplete_integrated_mechanism"
        }
      ],
      "results": [
        {
          "item":  "create_dd:incomplete_integrated_mechanism"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item":  "create_dd:incomplete_integrated_mechanism"
  }
})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
  "item": "create_new_age:copper_circuit"
  },
  "loops": 1,
  "results": [
    {
      "item": "create_dd:integrated_circuit"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item":  "create_dd:incomplete_integrated_circuit"
        },
        {
          "item": "create_dd:bury_blend"
        }
      ],
      "results": [
        {
          "item":  "create_dd:incomplete_integrated_circuit"
        }
      ]
    },
    {
      "type":"vintageimprovements:laser_cutting",
      "ingredients": [
        {
          "item": "create_dd:incomplete_integrated_circuit"
        }
      ],
      "results": [
        {
          "item": "create_dd:incomplete_integrated_circuit"
        }
      ],
      "energy": 2000,
      "maxChargeRate": 50
    },
    {
      "type":"vintageimprovements:vibrating",
      "ingredients": [ 
        {
          "item": "create_dd:incomplete_integrated_circuit"
        }
      ],
      "results": [
        {
          "item": "create_dd:incomplete_integrated_circuit"
        }
      ],
      "processingTime": 300
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item":  "create_dd:incomplete_integrated_circuit"
        },
        {
          "item": "ae2:charged_certus_quartz_crystal"
        }
      ],
      "results": [
        {
          "item":  "create_dd:incomplete_integrated_circuit"
        }
      ]
    },
    {
      "type":"vintageimprovements:laser_cutting",
      "ingredients": [
        {
          "item": "create_dd:incomplete_integrated_circuit"
        }
      ],
      "results": [
        {
          "item": "create_dd:incomplete_integrated_circuit"
        }
      ],
      "energy": 2000,
      "maxChargeRate": 50
    }
  ],
  "transitionalItem": {
    "item":  "create_dd:incomplete_integrated_circuit"
  }
})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
  "item": "vintageimprovements:netherite_sheet"
  },
  "loops": 5,
  "results": [
    {
      "item": "create_dd:infernal_mechanism"
    }
  ],
  "sequence": [
        {
          "type": "create:pressing",
          "ingredients": [
            {
              "item": "create_dd:incomplete_calculation_mechanism"
            }
          ],
          "results": [
            {
              "item": "create:incomplete_precision_mechanism"
            }
          ]
        },
        {
          "type": "create:pressing",
          "ingredients": [
            {
              "item": "create_dd:incomplete_calculation_mechanism"
            }
          ],
          "results": [
            {
              "item": "create:incomplete_precision_mechanism"
            }
          ]
        },
        {
          "type": "create:pressing",
          "ingredients": [
            {
              "item": "create_dd:incomplete_calculation_mechanism"
            }
          ],
          "results": [
            {
              "item": "create:incomplete_precision_mechanism"
            }
          ]
        },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item":  "create_dd:incomplete_infernal_mechanism"
        },
        {
          "item": "minecraft:blaze_powder"
        }
      ],
      "results": [
        {
          "item":  "create_dd:incomplete_infernal_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item":  "create_dd:incomplete_infernal_mechanism"
        },
        {
          "item": "forbidden_arcanus:deorum_ingot"
        }
      ],
      "results": [
        {
          "item":  "create_dd:incomplete_infernal_mechanism"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item":  "create_dd:incomplete_infernal_mechanism"
  }
})
event.custom({
	"type":"vintageimprovements:pressurizing",
	"secondaryFluidOutput": 0,
	"heatRequirement": "superheated",
	"ingredients": [ 
    {
			"item": "thermal:enderium_dust"
		},
    {
			"item": "thermal:enderium_dust"
		},
		{
			"item": "create:powdered_obsidian"
		},
    {
			"item": "create:powdered_obsidian"
		},
    
		{
			"item": "forbidden_arcanus:dark_matter"
		},
		{
			"item": "forbidden_arcanus:dark_matter"
		},
		{
			"item": "forbidden_arcanus:dark_matter"
		},
		{
			"item": "forbidden_arcanus:dark_matter"
		},
		{
			"item": "forbidden_arcanus:dark_matter"
		}
	],
	"results": [
		{
			"item": "kubejs:black_matter"
		}
	],
	"processingTime": 400
})
event.custom({
  "type": "forbidden_arcanus:clibano_combustion",
  "cooking_time": 150,
  "experience": 1.0,
  "fire_type": "soul_fire",
  "ingredient": {
    "item": "create_dd:infernal_mechanism"
  },
  "result": "create_dd:abstruse_mechanism"
})
event.custom({
    type: "create:mechanical_crafting",
    pattern: [
        ' ABC ',
        'DEEFD',
        '  BC ',
    ],

    key: {
        A: { item: "create_dd:calculation_mechanism" },
        B: { item: "create:iron_sheet" },
        C: { item: "create:andesite_alloy" },
        D: { item: "create:shaft" },
        E: { item: "create:andesite_casing" },
        F: { item: "minecraft:iron_block" },
    },

    result: { item: "vintageimprovements:lathe", count: 1}
})
event.custom({
  type: "create:mechanical_crafting",
  pattern: [
      ' A CC',
      'ABBBD',
      'AA  E',
  ],

  key: {
      A: { item: "kubejs:black_matter" },
      B: { tag: "minecraft:logs" },
      C: { item: "create:precision_mechanism" },
      D: { item: "create:brass_casing" },
      E: { item: "create:shaft" },
  },

  result: { item: "vintageimprovements:helve_hammer", count: 1}
})
// Replaceing Materials
event.replaceInput(
  { output: 'supplementaries:bomb' },
  '#forge:ingots/iron',
  '#forge:ingots/lead'
)
event.replaceInput(
  { output: 'supplementaries:bomb_spiky' },
  '#forge:ingots/iron',
  '#forge:ingots/lead'
)
event.replaceInput(
  { output: 'chipped:mason_table' },
  '#forge:ingots/iron',
  '#forge:ingots/lead'
)
event.replaceInput(
  { output: 'chipped:glassblower' },
  '#forge:ingots/iron',
  '#forge:ingots/lead'
)
event.replaceInput(
  { output: 'chipped:carpenters_table' },
  '#forge:ingots/iron',
  '#forge:ingots/lead'
)
event.replaceInput(
  { output: 'supplementaries:cog_block' },
  '#forge:ingots/copper',
  '#forge:ingots/nickel'
)
event.replaceInput(
  { output: 'supplementaries:wrench' },
  '#forge:ingots/copper',
  '#forge:ingots/nickel'
)
event.replaceInput(
  { output: 'minecraft:brush' },
  '#forge:ingots/copper',
  '#forge:ingots/nickel'
)
event.replaceInput(
  { output: 'supplementaries:altimeter' },
  '#forge:ingots/copper',
  '#forge:ingots/nickel'
)
event.replaceInput(
  { output: 'create:steam_whistle' },
  '#forge:ingots/copper',
  '#forge:ingots/nickel'
)
event.replaceInput(
  { output: 'alexsmobs:squid_grapple' },
  '#forge:ingots/copper',
  '#forge:ingots/nickel'
)
event.replaceInput(
  { output: 'minecraft:spyglass' },
  '#forge:ingots/copper',
  '#forge:ingots/nickel'
)
event.replaceInput(
  { output: 'quark:trowel' },
  '#forge:ingots/iron',
  '#forge:ingots/nickel'
)
event.replaceInput(
  { output: 'minecraft:bucket' },
  '#forge:ingots/iron',
  '#forge:ingots/bronze'
)
event.replaceInput(
  { output: 'meadow:wooden_cauldron' },
  '#forge:ingots/iron',
  '#forge:ingots/bronze'
)
event.replaceInput(
  { output: 'meadow:fondue' },
  '#forge:ingots/iron',
  '#forge:ingots/bronze'
)
event.replaceInput(
  { output: 'meadow:cooking_cauldron' },
  '#forge:ingots/iron',
  '#forge:ingots/bronze'
)
event.replaceInput(
  { output: 'herbalbrews:tea_kettle' },
  '#forge:ingots/iron',
  '#forge:ingots/bronze'
)
event.replaceInput(
  { output: 'herbalbrews:cauldron' },
  '#forge:ingots/iron',
  '#forge:ingots/bronze'
)
event.replaceInput(
  { output: 'farmersdelight:skillet' },
  '#forge:ingots/iron',
  '#forge:ingots/bronze'
)
event.replaceInput(
  { output: 'oreganized:silver_mirror' },
  '#forge:ingots/gold',
  '#forge:ingots/electrum'
)
event.replaceInput(
  { output: 'toolbelt:pouch' },
  '#forge:ingots/gold',
  '#forge:ingots/electrum'
)
event.replaceInput(
  { output: 'supplementaries:hourglass' },
  '#forge:ingots/gold',
  '#forge:ingots/electrum'
)
event.replaceInput(
  { output: 'minecraft:clock' },
  '#forge:ingots/gold',
  '#forge:ingots/electrum'
)
event.replaceInput(
  { output: 'torchmaster:feral_flare_lantern' },
  '#forge:ingots/gold',
  '#forge:ingots/electrum'
)
event.replaceInput(
  { output: 'supplementaries:spring_launcher' },
  '#forge:ingots/iron',
  '#forge:ingots/invar'
)
event.replaceInput(
  { output: 'ae2:energy_acceptor' },
  '#forge:ingots/iron',
  '#forge:ingots/invar'
)
event.replaceInput(
  { output: 'ae2:inscriber' },
  '#forge:ingots/iron',
  '#forge:ingots/invar'
)
event.replaceInput(
  { output: 'ae2:growrh_aceelerator' },
  '#forge:ingots/iron',
  '#forge:ingots/invar'
)
event.replaceInput(
  { output: 'ae2:condenser' },
  '#forge:ingots/iron',
  '#forge:ingots/invar'
)
event.replaceInput(
  { output: 'ae2:basic_card' },
  '#forge:ingots/iron',
  '#forge:ingots/constantan'
)
event.replaceInput(
  { output: 'ae2:advanced_card' },
  '#forge:ingots/iron',
  '#forge:ingots/constantan'
)
event.replaceInput(
  { output: 'ae2:wireless_booster' },
  '#forge:ingots/iron',
  '#forge:ingots/constantan'
)
event.replaceInput(
  { output: 'ae2:blank_pattern' },
  '#forge:ingots/iron',
  '#forge:ingots/constantan'
)
event.replaceInput(
  { output: 'ae2:item_cell_housing' },
  '#forge:ingots/iron',
  '#forge:ingots/constantan'
)
event.replaceInput(
  { output: 'ae2:crystal_resonance_generator' },
  '#forge:ingots/iron',
  '#forge:ingots/constantan'
)
event.replaceInput(
  { output: 'ae2:molecular_assembler' },
  '#forge:ingots/iron',
  '#forge:ingots/constantan'
)
event.replaceInput(
  { output: 'ae2:crafting_unit' },
  '#forge:ingots/iron',
  '#forge:ingots/constantan'
)
event.replaceInput(
  { output: 'alexsmobs:echolocator' },
  '#forge:ingots/iron',
  '#forge:ingots/signalum'
)
event.replaceInput(
  { output: 'alexsmobs:tinker_bench' },
  '#forge:ingots/iron',
  '#forge:ingots/signalum'
)
event.replaceInput(
  { output: 'tide:lavaproof' },
  '#forge:ingots/copper',
  '#forge:ingots/signalum'
)
event.replaceInput(
  { output: 'ae2:crystal_resonance_generator' },
  '#forge:ingots/copper',
  '#forge:ingots/signalum'
)
event.replaceInput(
  { output: 'ae2:export_bus' },
  '#forge:ingots/iron',
  '#forge:ingots/lumium'
)
event.replaceInput(
  { output: 'ae2:import_bus' },
  '#forge:ingots/iron',
  '#forge:ingots/lumium'
)
event.replaceInput(
  { output: 'ae2:semi_dark_monitor' },
  '#forge:ingots/iron',
  '#forge:ingots/lumium'
)
event.replaceInput(
  { output: 'ae2:quantum_ring' },
  '#forge:ingots/iron',
  '#forge:ingots/lumium'
)
event.replaceInput(
  { output: 'ae2:memory_card' },
  '#forge:ingots/iron',
  '#forge:ingots/lumium'
)
event.replaceInput(
  { output: 'ae2:pattern_provider' },
  '#forge:ingots/iron',
  '#forge:ingots/lumium'
)
event.replaceInput(
  { output: 'ae2:me_p2p_tunnel' },
  '#forge:ingots/iron',
  '#forge:ingots/lumium'
)
event.replaceInput(
  { output: 'ae2:interface' },
  '#forge:ingots/iron',
  '#forge:ingots/lumium'
)
event.replaceInput(
  { output: 'spelunkery:tuning_fork' },
  '#forge:ingots/copper',
  '#forge:ingots/enderium'
)
event.replaceInput(
  { output: 'ae2:wireless_receiver' },
  '#forge:ingots/iron',
  '#forge:ingots/enderium'
)
event.replaceInput(
  { output: 'ae2:wireless_receiver' },
  '#forge:ingots/iron',
  '#forge:ingots/enderium'
)
event.replaceInput(
  { output: 'ae2:entropy_manipulator' },
  '#forge:ingots/iron',
  '#forge:ingots/enderium'
)
event.replaceInput(
  { output: 'ae2:matter_cannon' },
  '#forge:ingots/iron',
  '#forge:ingots/enderium'
)
event.replaceInput(
  { output: 'ae2:charged_staff' },
  '#forge:ingots/iron',
  '#forge:ingots/enderium'
)
event.replaceInput(
  { output: 'vintageimprovements:vacuum_chamber' },
  'vintageimprovements:iron_spring',
  'create_dd:integrated_mechanism'
)
event.replaceInput(
  { output: 'vintageimprovements:vibrating_table' },
  'vintageimprovements:iron_spring',
  'create:iron_sheet'
)
event.replaceInput(
  { output: 'vintageimprovements:centrifuge' },
  'vintageimprovements:iron_spring',
  'vintageimprovements:zinc_sheet'
)
})