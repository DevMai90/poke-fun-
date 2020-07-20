import Route from '@ember/routing/route';

export default Route.extend({
  // Model hook gets called instantly.
  // Data becomes available through this.model in the template
  model() {
    const response = {
      form_name: '',
      form_names: [],
      form_order: 1,
      id: 150,
      is_battle_only: false,
      is_default: true,
      is_mega: false,
      name: 'mewtwo',
      names: [],
      order: 231,
      pokemon: {
        name: 'mewtwo',
        url: 'https://pokeapi.co/api/v2/pokemon/150/'
      },
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png',
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/150.png',
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png'
      },
      version_group: {
        name: 'red-blue',
        url: 'https://pokeapi.co/api/v2/version-group/1/'
      }
    };

    const { name, id, sprites, version_group } = response;

    return {
      name,
      id,
      sprites,
      version_group
    };
  }
});
