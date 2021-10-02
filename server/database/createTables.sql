if not exists (select 0 from sys.databases where name = 'SteamSite')
  create database SteamSite
go
use SteamSite;
go

drop table if exists dbo.SteamSpyTopGamesTwoWeeks;
create table dbo.SteamSpyTopGamesTwoWeeks(
  appid int not null,
  average_2weeks int not null,
  average_forever int not null,
  ccu int not null,
  developer varchar(100) not null,
  discount varchar(10) not null,
  initialprice varchar(10) not null,
  median_2weeks int not null,
  median_forever int not null,
  name varchar(500) not null,
  negative int not null,
  owners varchar(100) not null,
  positive int not null,
  price varchar(10) not null,
  publisher varchar(100) not null,
  score_rank varchar(10) not null,
  userscore tinyint not null,
);

drop table if exists dbo.SteamUsers;
create table dbo.SteamUsers(
  id int primary key identity(0,1),
  steamId varchar(60) not null unique,
  displayName varchar(300) not null,
  photoUrl varchar(300) null
);

drop table if exists dbo.SteamGamesStaging;
create table dbo.SteamGamesStaging(
  appid int primary key not null,
  name varchar(max) not null
);

drop table if exists dbo.SteamGames;
create table dbo.SteamGames(
  appid int primary key not null,
  name varchar(max) not null
);

drop table if exists dbo.SteamUserGamesStaging;
create table dbo.SteamUserGamesStaging (
  steamId varchar(60) not null,
  appid int not null,
  name varchar(max) not null,
  playtime_forever int null,
  playtime_2weeks int null,
);

drop table if exists dbo.SteamUserGames;
create table dbo.SteamUserGames(
  id int primary key identity(0,1),
  steamUserID int not null,
  appid int not null,
  playtime_2weeks int null,
  playtime_forever int null,
  foreign key (appid) references dbo.SteamGames(appid),
  foreign key (steamUserID) references dbo.SteamUsers(id)
);
