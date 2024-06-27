const AbstractSeeder = require("./AbstractSeeder");

class GameSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "game", truncate: true });
  }

  run() {
    const games = [
      {
        name: "Space Invaders",
        description:
          "Space Invaders est un jeu d'arcade emblématique où vous contrôlez un vaisseau spatial et combattez une armée d'extraterrestres envahisseurs. Avec des graphismes simples mais efficaces et un gameplay addictif, Space Invaders est un pilier de l'ère des salles d'arcade.",
        image_demo: "/demo/space_invaders_demo.png",
        image_game: "/catalog/space_invaders.png",
        is_playable: 0,
        release_date: 1978,
      },
      {
        name: "Pac-man",
        description:
          "Pac-Man est un jeu de labyrinthe classique où vous contrôlez le personnage Pac-Man, mangeant des pac-gommes tout en évitant les fantômes. Avec son concept simple mais captivant, Pac-Man est l'un des jeux d'arcade les plus réussis et reconnaissables de tous les temps.",
        image_demo: "/demo/pac_man_demo.gif",
        image_game: "/catalog/pac_man.png",
        is_playable: 1,
        release_date: 1980,
      },
      {
        name: "Galaga",
        description:
          "Galaga est un jeu d'arcade de tir spatial où vous pilotez un vaisseau spatial contre des vagues d'ennemis extraterrestres. Avec ses améliorations par rapport à son prédécesseur Galaxian, Galaga est devenu un favori des salles d'arcade du monde entier.",
        image_demo: "/demo/Galaga.gif",
        image_game: "/catalog/galaga.png",
        is_playable: 0,
        release_date: 1981,
      },
      {
        name: "Donkey Kong",
        description:
          "Donkey Kong est un jeu de plateforme où vous incarnez Jumpman, plus tard connu sous le nom de Mario, alors qu'il tente de sauver la princesse Pauline des griffes de Donkey Kong. Avec ses mécanismes de jeu simples mais difficiles, Donkey Kong a marqué le début de la carrière de Mario.",
        image_demo: "/demo/donkeyKong_demo.png",
        image_game: "/catalog/donkey_kong.png",
        is_playable: 0,
        release_date: 1981,
      },
      {
        name: "Tetris",
        description:
          "Tetris est un jeu de puzzle addictif où vous devez empiler des formes géométriques tombant du haut de l'écran pour former des lignes complètes. Avec sa simplicité et sa jouabilité intemporelle, Tetris est devenu l'un des jeux d'arcade les plus populaires de tous les temps.",
        image_demo: "/demo/tetris-demo-2.png",
        image_game: "/catalog/tetris.png",
        is_playable: 0,
        release_date: 1984,
      },
      {
        name: "Street Fighter II",
        description:
          "Street Fighter II est un jeu de combat emblématique qui a établi les normes du genre des jeux de combat. Choisissez parmi une variété de combattants et affrontez des adversaires du monde entier dans des duels en un contre un. Avec son gameplay fluide et ses mouvements spéciaux, Street Fighter II a dominé les salles d'arcade des années 90.",
        image_demo: "/demo/street_fighter_demo.png",
        image_game: "/catalog/street-fighter.png",
        is_playable: 0,
        release_date: 1991,
      },
      {
        name: "Mortal Kombat",
        description:
          "Mortal Kombat est un jeu de combat brutal qui a attiré l'attention pour ses graphismes sanglants et ses mouvements de finition choquants. Choisissez parmi une liste de combattants et affrontez vos adversaires dans des batailles féroces. Mortal Kombat a déclenché des débats sur la violence dans les jeux vidéo et est devenu un incontournable des salles d'arcade.",
        image_demo: "/demo/mortal_kombat_demo.png",
        image_game: "/catalog/MortalKombat.jpg",
        is_playable: 0,
        release_date: 1992,
      },
      {
        name: "Kung Fu Master",
        description:
          "Kung Fu Master est un jeu d'arcade où vous incarnez Thomas, un maître en arts martiaux, tentant de sauver sa bien-aimée Sylvia des griffes d'une organisation criminelle. Affrontez des ennemis à travers une série de niveaux tout en maîtrisant diverses techniques de combat.",
        image_demo: "/demo/kungfu_master _demo.png",
        image_game: "/catalog/kung_fu_master.png",
        is_playable: 0,
        release_date: 1984,
      },
      {
        name: "Centipede",
        description:
          "Centipede est un jeu d'arcade classique où vous contrôlez un petit pistolet pour tirer sur un centipède se déplaçant de haut en bas de l'écran. Le but est de détruire le centipède avant qu'il n'atteigne le bas de l'écran, tout en évitant les autres créatures dangereuses comme les araignées et les scorpions. Avec ses graphismes colorés et son gameplay rapide, Centipede est devenu un favori des salles d'arcade et a marqué son époque comme l'un des jeux les plus populaires de sa génération.",
        image_demo: "/demo/centipede_demo.png",
        image_game: "/catalog/centipede.png",
        is_playable: 0,
        release_date: 1980,
      },
      {
        name: "Fantasy Zone",
        description:
          "Fantasy Zone est un jeu d'arcade coloré et dynamique où vous contrôlez un vaisseau spatial dans un monde fantastique. Votre mission consiste à éliminer des vagues d'ennemis et de boss redoutables tout en collectant des pièces pour améliorer votre vaisseau. Avec ses graphismes vibrants, son ambiance entraînante et son gameplay addictif, Fantasy Zone est devenu un incontournable des salles d'arcade, captivant les joueurs du monde entier.",
        image_demo: "/demo/fantasy_zone_demo.png",
        image_game: "/catalog/fantasy_zone.png",
        is_playable: 0,
        release_date: 1986,
      },
      {
        name: "King of Dragons",
        description:
          "King of Dragons est un jeu d'arcade de type beat'em up médiéval-fantastique. Incarnez l'un des cinq héros disponibles et combattez à travers des niveaux remplis de monstres, de pièges et de boss redoutables. Utilisez une variété d'attaques et de compétences pour terrasser vos ennemis et collectez des trésors pour améliorer votre personnage. Avec des graphismes impressionnants, une bande-son épique et un gameplay passionnant, King of Dragons est un classique du genre qui a enchanté des générations de joueurs.",
        image_demo: "/demo/the_king_of_dragons_demo.png",
        image_game: "/catalog/the_king_of_dragons.png",
        is_playable: 0,
        release_date: 1991,
      },
      {
        name: "Alien Vs Predator",
        description:
          "Alien Vs Predator est un jeu d'arcade de type beat'em up où vous pouvez choisir de jouer comme un Alien, un Predator ou un humain pour combattre des hordes d'ennemis dans un environnement intense et dynamique.",
        image_demo: "/demo/alien_vs_predator_demo.png",
        image_game: "/catalog/alien_vs_predator.png",
        is_playable: 0,
        release_date: 1994,
      },
      {
        name: "Breakers Revenge",
        description:
          "Breakers Revenge est un jeu de combat 2D où vous choisissez parmi une sélection de combattants dotés de compétences uniques. Affrontez vos adversaires dans des duels intenses en utilisant des combos et des mouvements spéciaux.",
        image_demo: "/demo/breakers_revenge_demo.png",
        image_game: "/catalog/breakers_revenge.png",
        is_playable: 0,
        release_date: 1998,
      },
      {
        name: "Captain Commando",
        description:
          "Captain Commando est un jeu d'arcade de type beat'em up où vous incarnez l'un des quatre héros, chacun avec des capacités spéciales, pour affronter des ennemis à travers des niveaux variés et dynamiques.",
        image_demo: "/demo/captain_commando_demo.png",
        image_game: "/catalog/captain_commando.png",
        is_playable: 0,
        release_date: 1991,
      },
      {
        name: "Darius Gaiden",
        description:
          "Darius Gaiden est un jeu d'arcade de tir à défilement horizontal où vous pilotez un vaisseau spatial pour combattre des vagues d'ennemis extraterrestres dans un univers graphique riche et coloré.",
        image_demo: "/demo/darius_gaiden_demo.png",
        image_game: "/catalog/darius_gaiden.png",
        is_playable: 0,
        release_date: 1994,
      },
      {
        name: "DoDonPachi",
        description:
          "DoDonPachi est un jeu d'arcade de tir à défilement vertical connu pour son gameplay intense et ses vagues d'ennemis massives. Testez vos compétences et réflexes dans ce classique du genre bullet hell",
        image_demo: "/demo/dodonpachi_demo.png",
        image_game: "/catalog/dodonpachi.png",
        is_playable: 0,
        release_date: 1997,
      },
      {
        name: "Fatal Fury 2",
        description:
          "Fatal Fury 2 est un jeu de combat emblématique où vous choisissez parmi une variété de personnages et affrontez des adversaires dans des combats en un contre un. Maîtrisez les techniques et les combos pour devenir le champion.",
        image_demo: "/demo/fatal_fury_2_demo.png",
        image_game: "/catalog/fatal_fury_2.png",
        is_playable: 0,
        release_date: 1992,
      },
      {
        name: "Ghosts 'n Goblins",
        description:
          "Ghosts 'n Goblins est un jeu de plateforme difficile où vous incarnez Sir Arthur, un chevalier devant sauver une princesse en combattant des hordes de créatures surnaturelles. Ce jeu est connu pour sa difficulté impitoyable.",
        image_demo: "/demo/ghosts_n_goblins_demo.webp",
        image_game: "/catalog/ghosts_n_goblins.png",
        is_playable: 0,
        release_date: 1988,
      },
      {
        name: "Golden Axe",
        description:
          "Golden Axe est un jeu d'arcade de type beat'em up où vous choisissez parmi trois héros, chacun avec des compétences uniques, pour combattre des ennemis à travers des niveaux variés et dynamiques.",
        image_demo: "/demo/golden_axe_demo.png",
        image_game: "/catalog/golden_axe.png",
        is_playable: 0,
        release_date: 1989,
      },
      {
        name: "Gradius",
        description:
          "Gradius est un jeu de tir à défilement horizontal où vous pilotez un vaisseau spatial armé de diverses armes pour combattre des ennemis extraterrestres. Le jeu est connu pour son gameplay stratégique et ses améliorations d'armes.",
        image_demo: "/demo/gradius_demo.png",
        image_game: "/catalog/gradius.png",
        is_playable: 0,
        release_date: 1985,
      },
      {
        name: "Knights of the Round",
        description:
          "Knights of the Round est un jeu de type beat'em up basé sur la légende du roi Arthur. Incarnez l'un des chevaliers de la Table Ronde et combattez pour restaurer la paix dans le royaume.",
        image_demo: "/demo/knights_of_the_round_demo.png",
        image_game: "/catalog/knights_of_the_round.png",
        is_playable: 0,
        release_date: 1991,
      },
      {
        name: "Out Run",
        description:
          "Out Run est un jeu de course où vous pilotez une voiture de sport à travers des paysages variés tout en évitant les obstacles et en essayant de battre le temps. Avec ses graphismes vibrants et sa musique entraînante, Out Run est un classique des jeux d'arcade.",
        image_demo: "/demo/outrun_demo.png",
        image_game: "/catalog/outrun.png",
        is_playable: 0,
        release_date: 1986,
      },
      {
        name: "Pong",
        description:
          "Pong est l'un des premiers jeux d'arcade, un simple jeu de tennis en 2D où vous contrôlez une raquette pour renvoyer une balle contre un adversaire. Avec son gameplay simple mais addictif, Pong a posé les bases des jeux vidéo modernes.",
        image_demo: "/demo/pong_demo.gif",
        image_game: "/catalog/pong.png",
        is_playable: 0,
        release_date: 1972,
      },
      {
        name: "Rainbow Islands",
        description:
          "Rainbow Islands est un jeu de plateforme coloré où vous incarnez Bubby, un garçon capable de créer des arcs-en-ciel pour attaquer des ennemis et atteindre de nouvelles plateformes. Explorez des îles remplies de trésors et de créatures mystérieuses.",
        image_demo: "/demo/rainbow_island_demo.png",
        image_game: "/catalog/rainbow_island.png",
        is_playable: 0,
        release_date: 1987,
      },
      {
        name: "Shock Troopers",
        description:
          "Shock Troopers est un jeu d'arcade de tir run-and-gun où vous choisissez parmi plusieurs personnages et combattez des ennemis dans divers environnements. Utilisez une variété d'armes et de compétences pour survivre aux vagues d'ennemis.",
        image_demo: "/demo/shock_troopers_demo.png",
        image_game: "/catalog/shock_troopers.png",
        is_playable: 0,
        release_date: 1997,
      },
      {
        name: "The Last Blade 2",
        description:
          "The Last Blade 2 est un jeu de combat 2D avec une atmosphère de samouraï. Choisissez parmi une variété de personnages dotés de styles de combat uniques et affrontez des adversaires dans des duels épiques.",
        image_demo: "/demo/the_last_blade_2_demo.png",
        image_game: "/catalog/the_last_blade_2.png",
        is_playable: 0,
        release_date: 1998,
      },
      {
        name: "Samurai Shodown",
        description:
          "Samurai Shodown est un jeu de combat 2D où vous incarnez des guerriers samouraïs et ninjas. Utilisez des attaques précises et des mouvements spéciaux pour vaincre vos adversaires dans des combats stratégiques.",
        image_demo: "/demo/samurai_shodown_demo.png",
        image_game: "/catalog/samuraiShodown.jpg",
        is_playable: 0,
        release_date: 1993,
      },
      {
        name: "Tekken 3",
        description:
          "Tekken 3 est un jeu de combat 3D qui a révolutionné le genre avec ses graphismes impressionnants et son gameplay fluide. Choisissez parmi une large sélection de combattants et maîtrisez leurs techniques pour devenir le champion du tournoi.",
        image_demo: "/demo/tekken_demo.png",
        image_game: "/catalog/tekken.jpg",
        is_playable: 0,
        release_date: 1997,
      },
    ];

    games.forEach((game) => {
      this.insert(game);
    });
  }
}

module.exports = GameSeeder;
