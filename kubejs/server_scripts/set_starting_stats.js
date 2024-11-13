PlayerEvents.loggedIn(event => {
  if (!event.player.stages.has('starting_items')) {
    event.player.stages.add('starting_items')
    event.player.give('estus_flask:estus_flask')
    event.player.give(Item.of('gbook:guidebook', '{Book:"gbook:demobook.xml"}'))
  }})