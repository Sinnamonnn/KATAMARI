ServerEvents.tags("block", (event) => {
    event.remove("minecraft:needs_stone_tool", "minecraft:iron_ore");
    event.add("minecraft:needs_bronze_tool", "minecraft:iron_ore");
    event.remove("minecraft:needs_stone_tool", "minecraft:iron_block");
    event.add("minecraft:needs_bronze_tool", "minecraft:iron_block");
    event.remove("minecraft:needs_stone_tool", "minecraft:raw_iron_block");
    event.add("minecraft:needs_bronze_tool", "minecraft:raw_iron_block");
  })