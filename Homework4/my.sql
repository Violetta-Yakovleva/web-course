-- create
CREATE TABLE study_group (
id INTEGER PRIMARY KEY AUTO_INCREMENT, 
name TEXT NOT NULL,
age TEXT NOT NULL,
address TEXT NOT NULL
);

-- insert
INSERT INTO study_group(name, age, address) VALUES ('Violetta', '30', 'Chelyabinsk');
INSERT INTO study_group(name, age, address) VALUES ('Irina', '31', 'Moscow');
INSERT INTO study_group(name, age, address) VALUES ('Anna', '29', 'Moscow');
INSERT INTO study_group(name, age, address) VALUES ('Grigoriy', '25', 'Yalta');
INSERT INTO study_group(name, age, address) VALUES ('Andrey', '26', 'Moscow');


-- fetch 
SELECT name AS имя 
FROM study_group 
WHERE address = 'Moscow' AND age >= 18 AND age < 30;