CREATE TABLE todos(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_email VARCHAR(255),
    texto TEXT NOT NULL,
    categoria TEXT,
    completado BOOLEAN DEFAULT false,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

CREATE TABLE nuevaCategorias(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    titulo TEXT NOT NULL,
    emoji VARCHAR(20),
    creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
{/*

INSERT INTO todos (user_email, texto, categoria)
VALUES ('anto@gmail.com', 'Terminar proyecto', 'Trabajo');
*/}