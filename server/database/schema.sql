CREATE TABLE user (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    firstname VARCHAR(250) NOT NULL,
    lastname VARCHAR(250) NOT NULL,
    avatar_image VARCHAR(250) NOT NULL,
    pseudo VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    hashed_password VARCHAR(250) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user' 
);

CREATE TABLE game (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description TEXT NOT NULL,
	image_game VARCHAR(250) NOT NULL,
	image_demo VARCHAR(250) NOT NULL,
	is_playable BOOLEAN DEFAULT false,
	release_date YEAR NOT NULL
);

CREATE TABLE reward (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description TEXT NOT NULL,
	remaining_quantity INT NOT NULL,
	price INT NOT NULL,
	image VARCHAR(250) NOT NULL
);

CREATE TABLE transactionHistory (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	transaction_date TIMESTAMP NOT NULL,
	coins_spent INT NOT NULL
);

CREATE TABLE coin (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	obtention_date TIMESTAMP NOT NULL,
	user_id INT UNSIGNED NOT NULL,
	CONSTRAINT fk_coin_user      
        FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE party (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	score INT NOT NULL,
	user_id INT UNSIGNED NOT NULL,
	game_id INT UNSIGNED NOT NULL,
	CONSTRAINT fk_party_user      
        FOREIGN KEY (user_id) REFERENCES user(id),
        CONSTRAINT fk_party_game      
        FOREIGN KEY (game_id) REFERENCES game(id)
);

CREATE TABLE obtaining (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_id INT UNSIGNED NOT NULL,
	reward_id INT UNSIGNED NOT NULL,
	CONSTRAINT fk_obtaining_user      
        FOREIGN KEY (user_id) REFERENCES user(id),
        CONSTRAINT fk_obtaining_reward      
        FOREIGN KEY (reward_id) REFERENCES reward(id)
);

CREATE TABLE favorite (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	is_favorite BOOLEAN DEFAULT false,
	user_id INT UNSIGNED NOT NULL,
	game_id INT UNSIGNED NOT NULL,
	CONSTRAINT fk_favorite_user      
        FOREIGN KEY (user_id) REFERENCES user(id),
        CONSTRAINT fk_favorite_game      
        FOREIGN KEY (game_id) REFERENCES game(id)
);