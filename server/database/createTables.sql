use SteamSite;
go

drop table if exists SteamSpyTopGamesTwoWeeks;
create table SteamSpyTopGamesTwoWeeks(
  appid int not null,
  average_2weeks int not null,
  average_forever int not null,
  ccu int not null,
  developer varchar(100) not null,
  discount int not null,
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