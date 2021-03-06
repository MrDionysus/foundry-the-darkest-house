/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/thedarkesthouse/templates/actor/parts/actor-features.html",
    "systems/thedarkesthouse/templates/actor/parts/actor-items.html",
    "systems/thedarkesthouse/templates/actor/parts/actor-modifiedratings.html",
    "systems/thedarkesthouse/templates/actor/parts/actor-specialabilities.html",
    "systems/thedarkesthouse/templates/actor/parts/actor-generaltraits.html",
    "systems/thedarkesthouse/templates/actor/parts/actor-boonsbanesineffect.html",
    "systems/thedarkesthouse/templates/actor/parts/actor-equipment.html",
  ]);
};
