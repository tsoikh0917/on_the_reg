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