USE onTheRegDB;

create table class (
	classID int NOT null AUTO_INCREMENT, 
    location varchar(255), 
    capacity int, 
    maxCapacity int, 
    courseID varchar(8), 
    lectureName varchar(255),
    primary key (classID),
    foreign key(courseID) references course(courseID)
);

use onTheRegDB;
ALTER TABLE user_course RENAME COLUMN CourseID TO courseID;


// user_course don't have classID, don't know what class they studyXD
ALTER TABLE user_course
ADD classID int not null;

// student and admin don't have password and refreshToken, so I build a saltedPassword and refreshToken attribute
ALTER TABLE admin
ADD saltedPassword varchar(255) not null,
ADD refreshToken varchar(255);

ALTER TABLE student
ADD saltedPassword varchar(255) not null,
ADD refreshToken varchar(255);


INSERT INTO status values (1, "Success");
INSERT INTO status values (2, "Waitlist");
INSERT INTO status values (3, "Error");

ALTER TABLE student
ADD username char(10) not null;


UPDATE student SET username = '1155165673' WHERE userID = 1;
UPDATE student SET username = '1155165510' WHERE userID = 2;
UPDATE student SET username = '1155161447' WHERE userID = 3;
UPDATE student SET username = '1155164317' WHERE userID = 4;
UPDATE student SET username = '1155168885' WHERE userID = 5;
UPDATE student SET username = '1155169871' WHERE userID = 6;
UPDATE student SET username = '1155166855' WHERE userID = 7;
UPDATE student SET username = '1155162808' WHERE userID = 8;
UPDATE student SET username = '1155168527' WHERE userID = 9;
UPDATE student SET username = '1155166192' WHERE userID = 10;
UPDATE student SET username = '1155167652' WHERE userID = 11;
UPDATE student SET username = '1155163979' WHERE userID = 12;
UPDATE student SET username = '1155168383' WHERE userID = 13;
UPDATE student SET username = '1155166809' WHERE userID = 14;

