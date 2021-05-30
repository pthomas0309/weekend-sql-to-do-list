CREATE TABLE tasks (
"id" serial PRIMARY KEY,
"list_item" varchar(255) NOT NULL,
"priority" boolean,
"completed" boolean);

INSERT INTO tasks ("list_item", "priority", "completed")
VALUES ('water the garden', 'true', 'false'),
('mow the lawn', 'true', 'true');

SELECT * FROM tasks;