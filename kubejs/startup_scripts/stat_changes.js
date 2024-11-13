const helmet = ["born_in_chaos_v1:dark_metal_armor_helmet", "cataclysm:ignitium_helmet", "cataclysm:cursium_helmet", "cataclysm:bone_reptile_helmet"]

const chestplate = ["born_in_chaos_v1:dark_metal_armor_chestplate", "cataclysm:ignitium_chestplate", "cataclysm:ignitium_elytra_chestplate", "cataclysm:cursium_chestplate", "cataclysm:bone_reptile_chestplate"]

const leggings = ["born_in_chaos_v1:dark_metal_armor_leggings", "cataclysm:ignitium_leggings", "cataclysm:cursium_leggings"]

const boots = ["born_in_chaos_v1:dark_metal_armor_boots", "cataclysm:ignitium_boots", "cataclysm:cursium_boots"]

ItemEvents.modification((e) => {
    e.modify(helmet, (item) => {
      item.armorProtection = 3;
    });
    e.modify(helmet, (item) => {
      item.armorToughness = 3;
    });
    e.modify(helmet, (item) => {
      item.armorKnockbackResistance = 0.0;
    });

    e.modify(chestplate, (item) => {
      item.armorProtection = 8;
    });
    e.modify(chestplate, (item) => {
      item.armorToughness = 3;
    });
    e.modify(chestplate, (item) => {
      item.armorKnockbackResistance = 0.0;
    });

    e.modify(leggings, (item) => {
      item.armorProtection = 6;
    });
    e.modify(leggings, (item) => {
      item.armorToughness = 3;
    });
    e.modify(leggings, (item) => {
      item.armorKnockbackResistance = 0.0;
    });

    e.modify(boots, (item) => {
      item.armorProtection = 3;
    });
    e.modify(boots, (item) => {
      item.armorToughness = 3;
    });
    e.modify(boots, (item) => {
      item.armorKnockbackResistance = 0.0;
    });
  });