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