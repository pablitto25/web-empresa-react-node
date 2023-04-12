CREATE DATABASE latamlygroup;
USE latamlygroup;

create table if not exists lg_users(
    id int AUTO_INCREMENT not null,
    user_fullname varchar(20) not null,
    user_login varchar(20) not null,
    user_pass varchar(20) not null,
    user_nickname varchar(20) not null,
    user_mail varchar(40) not null,
    user_lastIP varchar(32) not null,
    user_status varchar(2) not null,
    user_level varchar(20),
    createdAt datetime not null,
    updatedAt datetime not null,
    primary key(id)
);

create table if not exists lg_content(
    id int AUTO_INCREMENT not null,
    cont_author tinyint(2) not null,
    cont_name varchar(30) not null,
    cont_languaje varchar(2),
    cont_date datetime not null,
    cont_text LONGTEXT not null,
    cont_json LONGTEXT not null,
    cont_status varchar(20),
    cont_type varchar(20),
    createdAt datetime not null,
    updatedAt datetime not null,
    primary key (id)
);

create table if not exists lg_media(
    id int AUTO_INCREMENT not null,
    media_img_url varchar(200) null,
    media_vid_url varchar(200) null,
    media_name varchar(50) not null,
    media_alt varchar(50) null,
    media_type varchar(20) not null,
    createdAt datetime not null,
    updatedAt datetime not null,
    primary key (id)
);


 create table if not exists lg_options(
    id int AUTO_INCREMENT not null,
    option_name varchar(50),
    option_value LONGTEXT,
    createdAt datetime not null,
    updatedAt datetime not null,
    primary key (id)
 );

 create table if not exists lg_ourteam(
    id int AUTO_INCREMENT not null,
    ourteam_img_url VARCHAR(200) not null,
    ourteam_type VARCHAR(20)not null,
    ourteam_fullname VARCHAR(40) not null,
    ourteam_postEn VARCHAR(50) null,
    ourteam_postEs VARCHAR(50) null,
    ourteam_mail VARCHAR(50) not null,
    ourteam_linkedinUrl VARCHAR(200) null,
    ourteam_status VARCHAR(10) not null,
    createdAt datetime not null,
    updatedAt datetime not null,
    primary key (id)
 );
