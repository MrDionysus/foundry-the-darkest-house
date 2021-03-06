// Import document classes.
import { TheDarkestHouseActor } from "./documents/actor.mjs";
import { TheDarkestHouseItem } from "./documents/item.mjs";
// Import sheet classes.
import { TheDarkestHouseActorSheet } from "./sheets/actor-sheet.mjs";
import { TheDarkestHouseItemSheet } from "./sheets/item-sheet.mjs";
// Import helper/utility classes and constants.
import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
import { THEDARKESTHOUSE } from "./helpers/config.mjs";

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', async function() {

  // Add utility classes to the global game object so that they're more easily
  // accessible in global contexts.
  game.thedarkesthouse = {
    TheDarkestHouseActor,
    TheDarkestHouseItem
  };

  // Add custom constants for configuration.
  CONFIG.THEDARKESTHOUSE = THEDARKESTHOUSE;

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  // Removing Initiative for TDH system
  //CONFIG.Combat.initiative = {
  //  formula: "1d20",
  //  decimals: 2
  //};

  // Define custom Document classes
  CONFIG.Actor.documentClass = TheDarkestHouseActor;
  CONFIG.Item.documentClass = TheDarkestHouseItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("thedarkesthouse", TheDarkestHouseActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("thedarkesthouse", TheDarkestHouseItemSheet, { makeDefault: true });

  // Preload Handlebars templates.
  return preloadHandlebarsTemplates();
});

/* -------------------------------------------- */
/*  Handlebars Helpers                          */
/* -------------------------------------------- */

// If you need to add Handlebars helpers, here are a few useful examples:
Handlebars.registerHelper('concat', function() {
  var outStr = '';
  for (var arg in arguments) {
    if (typeof arguments[arg] != 'object') {
      outStr += arguments[arg];
    }
  }
  return outStr;
});

Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase();
});

/* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

Hooks.once("ready", async function() {
});