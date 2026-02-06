DROP TABLE IF EXISTS kitties CASCADE;
DROP TABLE IF EXISTS rooms CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  -- Constraints
  CHECK (length(username) >= 3 AND length(username) <= 20),
  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CHECK (password_hash LIKE '$2%')  -- Ensure bcrypt hash
);


CREATE TABLE rooms (
  room_id SERIAL PRIMARY KEY,
  player1_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  player2_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
  game_code VARCHAR(10) UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  -- Constraints
  CHECK (player1_id != player2_id),
  CHECK (game_code ~ '^[A-Z]{4}-[A-Z0-9]{4}$')  -- Format: COZY-A3F9
);


CREATE TABLE kitties (
  pet_id SERIAL PRIMARY KEY,
  game_id INTEGER UNIQUE NOT NULL REFERENCES rooms(room_id) ON DELETE CASCADE,
  name TEXT DEFAULT 'Kitty' NOT NULL,
  hunger INTEGER DEFAULT 50 NOT NULL CHECK (hunger >= 0 AND hunger <= 100),
  thirst INTEGER DEFAULT 50 NOT NULL CHECK (thirst >= 0 AND thirst <= 100),
  happiness INTEGER DEFAULT 50 NOT NULL CHECK (happiness >= 0 AND happiness <= 100),
  cleanliness INTEGER DEFAULT 50 NOT NULL CHECK (cleanliness >= 0 AND cleanliness <= 100),
  energy INTEGER DEFAULT 50 NOT NULL CHECK (energy >= 0 AND energy <= 100),
  last_updated TIMESTAMP DEFAULT NOW() NOT NULL,
  is_alive BOOLEAN DEFAULT TRUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE INDEX idx_rooms_player1 ON rooms(player1_id);
CREATE INDEX idx_rooms_player2 ON rooms(player2_id);
CREATE INDEX idx_rooms_game_code ON rooms(game_code);
CREATE INDEX idx_kitties_game ON kitties(game_id);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);