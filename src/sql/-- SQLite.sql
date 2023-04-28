-- SQLite

drop table internship_instructor_relation;

CREATE TABLE internship_instructor_relation (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    instructorId INTEGER NOT NULL,
    internshipId INTEGER NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (instructorId, internshipId),
    FOREIGN KEY (instructorId) REFERENCES instructors(id),
    FOREIGN KEY (internshipId) REFERENCES internships(id)
);


select * from internship_instructor_relation;

.tables

