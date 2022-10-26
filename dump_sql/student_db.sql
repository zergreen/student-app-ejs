CREATE TABLE Student (
    student_id int auto_increment primary key,
    name varchar(255),
    last_name varchar(255)
);

CREATE TABLE Subject (
    subject_id int auto_increment primary key,
    subject_name varchar(255),
    teacher_name varchar(255)
);

CREATE TABLE Score (
    id int auto_increment primary key,
    student_id int,
    subject_id int,
    score double,
    CONSTRAINT FK_score FOREIGN KEY (student_id)
    REFERENCES Student(student_id),
    CONSTRAINT FK_subject FOREIGN KEY (subject_id)
    REFERENCES Subject(subject_id)
);