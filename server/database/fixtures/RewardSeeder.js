const AbstractSeeder = require("./AbstractSeeder");

class RewardSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "reward", truncate: true });
  }

  run() {
    const rewards = [
      {
        name: "1 Jeton Arcade",
        description: "Une pièce pour jouer sur nos machines d'arcade.",
        remaining_quantity: 222,
        price: 1,
        image: "1_arcade_token.jpg",
      },
      {
        name: "3 Jetons Arcade",
        description: "3 pièces pour jouer sur nos machines d'arcade.",
        remaining_quantity: 155,
        price: 2,
        image: "3_arcade_tokens.jpg",
      },
      {
        name: "5 Jetons Arcade",
        description: "5 pièces pour jouer sur nos machines d'arcade.",
        remaining_quantity: 126,
        price: 3,
        image: "5_arcade_tokens.jpg",
      },
      {
        name: "Amiibo",
        description: "Un amiibo Nintendo au choix.",
        remaining_quantity: 21,
        price: 3,
        image: "amiibo.jpg",
      },
      {
        name: "Casquette Wildy Gamy",
        description: "Une casquette stylée de Wildy Gamy.",
        remaining_quantity: 30,
        price: 2,
        image: "cap_wg.png",
      },
      {
        name: "Coque de téléphone Totoro",
        description: "Une protection adorable pour votre téléphone inspirée de Totoro.",
        remaining_quantity: 53,
        price: 2,
        image: "case.jpg",
      },
      {
        name: "Pog Looney Tunes",
        description: "Un set de 5 pogs Looney Tunes rétro.",
        remaining_quantity: 16,
        price: 1,
        image: "pog.jpg",
      },
      {
        name: "Set de dés",
        description: "Un set de dés avec différents nombres de faces pour tous vos jeux.",
        remaining_quantity: 79,
        price: 1,
        image: "dice.jpg",
      },
      {
        name: "Boisson au bar",
        description: "Une boisson rafraîchissante à notre bar.",
        remaining_quantity: 133,
        price: 2,
        image: "drink.jpg",
      },
      {
        name: "Figurine rétro",
        description: "Choisissez une figurine de jeu rétro parmi notre collection.",
        remaining_quantity: 15,
        price: 3,
        image: "figurine_retro.jpg",
      },
      {
        name: "Peluche Furby",
        description: "Une peluche Furby adorable à collectionner.",
        remaining_quantity: 59,
        price: 1,
        image: "furby.jpg",
      },
      {
        name: "Bonnet Wildy Gamy",
        description: "Un bonnet confortable aux couleurs de Wildy Gamy.",
        remaining_quantity: 25,
        price: 2,
        image: "hat.png",
      },
      {
        name: "Hoodie Wildy Gamy",
        description: "Un hoodie confortable Wildy Gamy.",
        remaining_quantity: 20,
        price: 3,
        image: "hoodie.png",
      },
      {
        name: "Boîte de Jenga",
        description: "Une boîte de Jenga pour des parties amusantes avec des amis.",
        remaining_quantity: 30,
        price: 2,
        image: "jenga.jpg",
      },
      {
        name: "Porte-clé Star Wars",
        description: "Un porte-clé Star Wars pour les fans de la saga.",
        remaining_quantity: 67,
        price: 1,
        image: "keychain.jpg",
      },
      {
        name: "Boîte de Lego",
        description: "Une boîte de Lego pour les créateurs en herbe.",
        remaining_quantity: 42,
        price: 2,
        image: "lego.jpg",
      },
      {
        name: "Tapis de souris Pokémon",
        description: "Un magnifique tapis de souris Pokémon de 60x60cm.",
        remaining_quantity: 54,
        price: 1,
        image: "mousepad.jpg",
      },
      {
        name: "Mug Wildy Gamy",
        description: "Un mug Wildy Gamy pour vos boissons.",
        remaining_quantity: 40,
        price: 1,
        image: "mug.png",
      },
      {
        name: "Cahier de notes Death Note",
        description: "Un cahier de notes inspiré de Death Note.",
        remaining_quantity: 33,
        price: 1,
        image: "notebook.jpg",
      },
      {
        name: "Pins Pacman",
        description: "6 pins rétro Pacman pour personnaliser vos vêtements.",
        remaining_quantity: 59,
        price: 1,
        image: "pins.jpg",
      },
      {
        name: "Peluche Pokémon",
        description: "Une peluche Pokémon au choix pour les collectionneurs.",
        remaining_quantity: 25,
        price: 3,
        image: "plush.jpg",
      },
      {
        name: "Paquet de cartes Pokémon",
        description: "Un paquet de cartes Pokémon pour enrichir votre collection.",
        remaining_quantity: 111,
        price: 1,
        image: "pokemon_card.jpg",
      },
      {
        name: "Paquet de cartes de poker",
        description: "Un paquet de cartes de poker pour vos parties entre amis.",
        remaining_quantity: 71,
        price: 1,
        image: "poker_card.jpg",
      },
      {
        name: "Carte postale Ghibli",
        description: "Une carte postale aux couleurs des studios Ghibli.",
        remaining_quantity: 80,
        price: 1,
        image: "postal_card.jpg",
      },
      {
        name: "Poster rétro rock",
        description: "Un poster rétro d'un groupe de rock légendaire.",
        remaining_quantity: 40,
        price: 1,
        image: "poster.jpg",
      },
      {
        name: "Puzzle Coca-Cola rétro",
        description: "Un puzzle rétro Coca-Cola de 1000 pièces.",
        remaining_quantity: 35,
        price: 1,
        image: "puzzle.jpg",
      },
      {
        name: "Rubik's Cube",
        description: "Un Rubik's Cube pour les amateurs de casse-tête.",
        remaining_quantity: 56,
        price: 1,
        image: "rubik_s_cube.jpg",
      },
      {
        name: "Écharpe Zelda",
        description: "Une écharpe inspirée de l'univers de Zelda.",
        remaining_quantity: 25,
        price: 1,
        image: "scarf.jpg",
      },
      {
        name: "Stickers rétro",
        description: "6 stickers rétro pour décorer vos objets préférés.",
        remaining_quantity: 72,
        price: 1,
        image: "stickers.jpg",
      },
      {
        name: "T-shirt Wildy Gamy",
        description: "Un t-shirt de qualité avec le logo de Wildy Gamy.",
        remaining_quantity: 36,
        price: 3,
        image: "t_shirt_wg.png",
      },
      {
        name: "Tamagochi",
        description: "Un Tamagochi de première génération pour les nostalgiques.",
        remaining_quantity: 20,
        price: 2,
        image: "tamagotchi.jpg",
      },
      {
        name: "Jeu de cartes Uno",
        description: "Un jeu de cartes Uno pour des parties endiablées.",
        remaining_quantity: 80,
        price: 1,
        image: "uno.jpg",
      },
      {
        name: "Ensemble Yathzee",
        description: "Un ensemble complet pour jouer au Yathzee.",
        remaining_quantity: 44,
        price: 2,
        image: "yathzee.jpg",
      },
    ];

    rewards.forEach((reward) => {
      this.insert(reward);
    });
  }
}

module.exports = RewardSeeder;
