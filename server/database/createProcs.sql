-- Proc to create steam user if they do not exist and return the steam user
create or alter proc dbo.createReturnUser 
  @steamId varchar(60),
  @displayName varchar(300),
  @photoUrl varchar(300)
as
if not exists (select 0 from dbo.SteamUsers where steamId=@steamId) 
  insert into dbo.SteamUsers
  values (@steamId,@displayName,@photoUrl);
select steamId, displayName, photoUrl 
from dbo.SteamUsers
where steamId=@steamId;
go

-- Proc to find and return steam user
create or alter proc dbo.returnUser
  @steamId varchar(60)
as
select steamId, displayName, photoUrl 
from dbo.SteamUsers 
where steamId=@steamId
go

-- Proc to update the steam games list
create or alter proc dbo.UpdateSteamGames
as
merge dbo.SteamGames as target
using dbo.SteamGamesStaging as source
on target.appid=source.appid
when matched and target.name<>source.name then
update set target.name=source.name
when not matched by target then insert values (source.appid,source.name);

select @@rowcount;
go

create or alter proc dbo.DeleteFromSteamUserGamesStaging
  @steamId varchar(60)
as
delete from dbo.SteamUserGamesStaging where steamId=@steamId;
go

create or alter proc dbo.UpdateSteamUserOwnedGames
  @steamId varchar(60)
as
declare @steamUserId int = (select id from SteamUsers where steamId=@steamId);

-- add any missing games to the main game list
insert into SteamGames
select appid, name
from SteamUserGamesStaging
where appid in (
  select appid from SteamUserGamesStaging
  except
  select appid from SteamGames
) and steamId=@steamId;

merge dbo.SteamUserGames as target
using dbo.SteamUserGamesStaging as source
on target.appid=source.appid and target.steamUserId=@steamUserId
when matched and target.playtime_forever<>source.playtime_forever or target.playtime_2weeks<>source.playtime_2weeks then
update set target.playtime_forever=source.playtime_forever, target.playtime_2weeks=source.playtime_2weeks
when not matched by target then insert (steamUserId, appid, playtime_forever, playtime_2weeks) 
  values (@steamUserId,appid,playtime_forever, playtime_2weeks)
when not matched by source then delete;
go

create or alter proc dbo.UpdateSteamUserRecentlyPlayed
  @steamId varchar(60),
  @appid int,
  @playtime_2weeks int
as
declare @steamUserId int = (select id from SteamUsers where steamId=@steamId);

-- reset the recently played time back to zero
update SteamUserGames
set playtime_2weeks=0
where playtime_2weeks<>0;

-- and then set to the current time
update SteamUserGames 
set playtime_2weeks=@playtime_2weeks
where steamUserId=@steamUserId
  and appid=@appid;
go

select * from steamusergames where appid='680420'
select * from steamusergamesstaging
select appid from SteamUserGamesStaging
except
select appid from SteamGames
delete from dbo.SteamUserGamesStaging where steamId='76561198044893617'
select * from dbo.SteamUserGamesStaging
exec UpdateSteamUserRecentlyPlayed 123,123,''