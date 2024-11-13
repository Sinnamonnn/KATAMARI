BlockEvents.modification((e) => {
    let planks = BlockStatePredicate.of(/.*_planks/).blockIds;
  
    const woodTypes = planks
      .map((id) => {
        const plankMaterial = new String(id.toString()).replace('_planks', '');
        const [modId, woodType] = plankMaterial.split(':');
        return {
          tag: modId,
          wood: woodType,
        };
      });
  
    woodTypes.forEach((woodType) => {

      const blockIds = [
        `${woodType.tag}:${woodType.wood}_slab`,
        `${woodType.tag}:${woodType.wood}_fence`,
        `${woodType.tag}:${woodType.wood}_fence_gate`,
        `${woodType.tag}:${woodType.wood}_stairs`,
        `${woodType.tag}:${woodType.wood}_planks`,
        `${woodType.tag}:${woodType.wood}_log`,
        `${woodType.tag}:${woodType.wood}_wood`,
        `${woodType.tag}:stripped_${woodType.wood}_log`,
        `${woodType.tag}:stripped_${woodType.wood}_wood`,
      ];
  
      const finalModificationList = blockIds

      finalModificationList.forEach((id) => {
        console.log(id);
        e.modify(id, (block) => {
          block.setRequiresTool(true);
        });
      });
    });
  });