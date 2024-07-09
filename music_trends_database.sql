-- Create Songs table with quoted column names
CREATE TABLE songs (
    "Rank" INT NOT NULL,
    "Title" VARCHAR(255) NOT NULL,
    "Artist(s)" VARCHAR(255) NOT NULL
);

-- Create AlbumPerformance table
CREATE TABLE album_performance (
    "Artist(s)" VARCHAR(255) NOT NULL,
    "Album" VARCHAR(255) NOT NULL,
    "Units" INT
);

-- Create Top10Songs table
CREATE TABLE top10_songs (
    "Top ten entry date" DATE,
    "Single" VARCHAR(255) NOT NULL,
    "Artist(s)" VARCHAR(255) NOT NULL,
    "Peak" INT,
    "Peak date" DATE,
    "Weeks in top ten" INT
);

-- Create Top10Albums table
CREATE TABLE top10_albums (
    "Artist" VARCHAR(255) NOT NULL,
    "Album" VARCHAR(255) NOT NULL,
    "units" INT
);

CREATE TABLE albums (
    "Issue date" DATE,
    "Album" VARCHAR(255),
    "Artist(s)" VARCHAR(255),
    "Units" INT
);

-- Table for Top 10 Streamed Songs
CREATE TABLE top10_streamed (
    "Artist" VARCHAR(255) NOT NULL,
    "Song" VARCHAR(255) NOT NULL,
    "Streams" INT
);

-- Table for Top 10 Selling Singles
CREATE TABLE top10_selling_singles (
    "Artist" VARCHAR(255) NOT NULL,
    "Song" VARCHAR(255) NOT NULL,
    "Units" INT
);

SELECT * FROM songs;
SELECT * FROM album_performance;
SELECT * FROM top10_songs;
SELECT * FROM albums;
SELECT * FROM top10_streamed;
SELECT * FROM top10_selling_singles;