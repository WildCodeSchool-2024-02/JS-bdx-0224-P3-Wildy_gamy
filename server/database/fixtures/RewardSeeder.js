const AbstractSeeder = require("./AbstractSeeder");

class RewardSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "reward", truncate: true });
  }

  run() {
    const rewards = [
      {
        name: "Peluche",
        description: "Une adorable peluche à emporter chez vous.",
        remaining_quantity: 50,
        price: 1,
        image: "plush_toy.png",
      },
      {
        name: "Pièce de Machine",
        description: "Une pièce pour jouer sur nos machines d'arcade.",
        remaining_quantity: 100,
        price: 1,
        image: "arcade_token.png",
      },
      {
        name: "Mug",
        description: "Un mug pour savourer vos boissons préférées.",
        remaining_quantity: 30,
        price: 1,
        image: "mug.png",
      },
      {
        name: "Boisson",
        description: "Une boisson rafraîchissante offerte.",
        remaining_quantity: 75,
        price: 1,
        image: "drink.png",
      },
      {
        name: "Carte Cadeau 5€",
        description: "Carte cadeau de 5€ à utiliser chez Wildy Gamy.",
        remaining_quantity: 20,
        price: 1,
        image: "gift_card_5_eur.png",
      },
      {
        name: "Autocollants Retro",
        description: "Une feuille d'autocollants sur le thème des jeux rétro.",
        remaining_quantity: 40,
        price: 1,
        image: "retro_stickers.png",
      },
      {
        name: "Clé USB Retro",
        description: "Clé USB avec un design inspiré des jeux rétro.",
        remaining_quantity: 25,
        price: 2,
        image: "retro_usb.png",
      },
      {
        name: "Porte-clé Retro",
        description: "Un porte-clé au design rétro pour vos clés.",
        remaining_quantity: 50,
        price: 2,
        image: "retro_keychain.png",
      },
      {
        name: "Coque Téléphone Retro",
        description: "Une coque de téléphone au style rétro.",
        remaining_quantity: 25,
        price: 2,
        image: "retro_phone_case.png",
      },
      {
        name: "3 Pièces de Machine",
        description: "Trois pièces pour jouer plus longtemps sur nos machines.",
        remaining_quantity: 60,
        price: 2,
        image: "3_arcade_tokens.png",
      },
      {
        name: "Gourde Wildy Gamy",
        description: "Gourde en inox réutilisable de Wildy Gamy.",
        remaining_quantity: 15,
        price: 3,
        image: "wildy_gamy_bottle.png",
      },
      {
        name: "5 Pièces de Machine",
        description: "Cinq pièces pour prolonger le plaisir sur nos machines.",
        remaining_quantity: 50,
        price: 3,
        image: "5_arcade_tokens.png",
      },
      {
        name: "Casquette",
        description: "Une casquette stylée de Wildy Gamy.",
        remaining_quantity: 20,
        price: 3,
        image: "wildy_gamy_cap.png",
      },
      {
        name: "Pull",
        description: "Un pull confortable avec le logo de Wildy Gamy.",
        remaining_quantity: 10,
        price: 3,
        image: "wildy_gamy_sweater.png",
      },
      {
        name: "T-shirt Wildy Gamy",
        description: "T-shirt avec le nom de Wildy Gamy.",
        remaining_quantity: 30,
        price: 3,
        image: "wildy_gamy_tshirt.png",
      },
      {
        name: "Carte Cadeau 20€",
        description: "Carte cadeau de 20€ à utiliser chez Wildy Gamy.",
        remaining_quantity: 10,
        price: 3,
        image: "gift_card_20_eur.png",
      },
    ];

    rewards.forEach((reward) => {
      this.insert(reward);
    });
  }
}

module.exports = RewardSeeder;
