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


INSERT INTO status values (1, "Success");
INSERT INTO status values (2, "Waitlist");
INSERT INTO status values (3, "Error");


