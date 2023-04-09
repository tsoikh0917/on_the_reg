USE onTheRegDB;

create table class (
	classID int NOT null, 
    location varchar(255), 
    capasity int, 
    maxCapasity int, 
    courseID int, 
    lectrueName varchar(255),
    primary key (classID),
    foreign key(courseID) references course(courseID)
);