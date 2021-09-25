import { stripHtmlFromString } from "../../helpers/text";
import "./newsArticle.css";

const NewsArticle = () => {
  const testArray: SteamNewsItem[] = [
    {
      gid: "3936699406875255966",
      title: "Team Fortress 2 Update Released",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406875255966",
      is_external_url: true,
      author: "erics",
      contents:
        "An update to Team Fortress 2 has been released. The update will be applied automatically when you restart Team Fortress 2. The major changes include:\n\n[list]\n[*]Fixed a bug where some methods of connecting to Steam would not honor the -ip command line parameter\n[/list]",
      feedlabel: "Community Announcements",
      date: 1632530355,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 440,
      tags: ["patchnotes"],
    },
    {
      gid: "3936699406875216473",
      title: "Community Crunch 285: EVO Event, Community Corner, and More!",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406875216473",
      is_external_url: true,
      author: "complexminded",
      contents:
        'Welcome to another edition of the Community Crunch!\n\nThis week we rolled out the optimized Dedicated Storage change to PlayStation.  We\'re working on rolling those changes out to XBOX next week.  \n\nTake a look at some community content from this week as we prep for an action-packed end of the year! \n\n[img]{STEAM_CLAN_IMAGE}/8729288/8e51f795e1bf41c4c6b251f64490b92d626be1b8.png[/img]\n[img]{STEAM_CLAN_IMAGE}/8729288/be8af67db3c63d05cfa58a77e3ef37a1966f2671.jpg[/img]\nAn ARK Evolution Event is active until Monday the 27th with the following EVO perks on all Official Servers! [list]\n[*] 3X Taming\n[*] 3X Harvesting\n[*] 3X XP\n[/list]\n \n[img]{STEAM_CLAN_IMAGE}/8729288/fda81d10ad207588683a3fb23db8194e258daa65.png[/img]\n[img]{STEAM_CLAN_IMAGE}/8729288/29ceeb00d79ba1e9c6d9e820f14f1e0dc388aec1.png[/img]\n[b]Creator: UpFromTheDepths[/b]\nCheck out a teaser for the upcoming episode to the Paleo ARK series!\nhttps://www.youtube.com/watch?v=Q5JyvyJO8Po\n\n[b]Creator: Syntac[/b]\nWould you try and fight The Overseer with a Deinonychus?  Well, Syntac did!  Find out if he succeeds!\nhttps://www.youtube.com/watch?v=YO7XMyBAHGI\n\n[img]{STEAM_CLAN_IMAGE}/8729288/a4a694d355897308d82ca4b9a2ad21dc36180aa7.png[/img]\n\nPrimal Fear by GustavoGarcez\n[img]{STEAM_CLAN_IMAGE}/8729288/bc4318d8744230bc13c86208c1edb591a67deaab.jpg[/img]\n\n"Kiara" The Shadowmane by Irinaal9\n[img]{STEAM_CLAN_IMAGE}/8729288/00d95a25abda7104496b5226174e31c652076ec2.jpg[/img]\n\nGiganotosaurus by @N_Life93\n[img]{STEAM_CLAN_IMAGE}/8729288/66397c3d4cd1c82c06c4678f49c2d7b527fd8369.jpg[/img]\n\nBattle For The Highlands by Kitty#7656\n[img]{STEAM_CLAN_IMAGE}/8729288/0da47e8e6cc7fd2a3c5c41d63650ed102b824c76.jpg[/img]\n\nJerboa by LunarSiren#8178\n[img]{STEAM_CLAN_IMAGE}/8729288/cb8cade8807898de46be982ebd4697ca1af13108.jpg[/img]\n\n@sis_6193\n[img]{STEAM_CLAN_IMAGE}/8729288/8ed0b8dac025c6860ef0493ac899fa0af01d4d03.jpg[/img]\n\nRasvim1313#2269\n[img]{STEAM_CLAN_IMAGE}/8729288/2803c62652813c1c219e35a5406daa0954ceca59.jpg[/img]\n\n[img]{STEAM_CLAN_IMAGE}/8729288/3f3b4963002ba3a9216004b4d469c80d8013e0fb.png[/img]\ntilou\n[img]{STEAM_CLAN_IMAGE}/8729288/a6ec6db17e3c1c8fffafce8de1117c1dbc392179.jpg[/img]\n\nWho the hell#1082\n[img]{STEAM_CLAN_IMAGE}/8729288/911c899c1d64c5dcf0d1f45af40801c3a4189268.jpg[/img]\n\n@sam_stimo\n[img]{STEAM_CLAN_IMAGE}/8729288/ef54b99d4453fc7c0856088e0c3afa66a5fcf153.jpg[/img]\n \nHave a great weekend!\nStudio Wildcard\n\nTwitter: twitter.com/survivetheark\nDiscord: discord.com/invite/playark\nReddit: reddit.com/r/playark\nInstagram: instagram.com/survivetheark\nTwitch: twitch.tv/survivetheark\nSteam: steamcommunity.com/app/346110\nYoutube: youtube.com/survivetheark\nFacebook: facebook.com/survivetheark',
      feedlabel: "Community Announcements",
      date: 1632529411,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 346110,
    },
    {
      gid: "3936699406875031454",
      title: "Counter-Strike: Global Offensive update for 24 September 2021",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/SteamDB/3936699406875031454",
      is_external_url: true,
      author: "SteamDB",
      contents:
        '<a href="https://steamdb.info/patchnotes/7421361/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS"><img src="https://steamdb.info/patchnotes/7421361.png"><br>Read patchnotes on SteamDB...</a>',
      feedlabel: "SteamDB",
      date: 1632524626,
      feedname: "SteamDB",
      feed_type: 0,
      appid: 730,
    },
    {
      gid: "3936699406874717196",
      title: "Double EXP for All Access Members [ SEPT. 24 - 26 ]",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406874717196",
      is_external_url: true,
      author: "dsosa",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/4248891/9dbcba50c832277e1f8399cfabe10ff9f5ee0f10.png[/img]\n\nAll Access Members can enjoy a double EXP weekend starting today through September 26!\n\nInterested in being a member? Learn more about Daybreak All Access Membership [url=https://bit.ly/DGC-All-Access]here[/url].\n\nSee you in game, soldier!",
      feedlabel: "Community Announcements",
      date: 1632517562,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 218230,
    },
    {
      gid: "3936699406874702478",
      title: "Dota 2 update for 24 September 2021",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/SteamDB/3936699406874702478",
      is_external_url: true,
      author: "SteamDB",
      contents:
        '<a href="https://steamdb.info/patchnotes/7421067/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS"><img src="https://steamdb.info/patchnotes/7421067.png"><br>Read patchnotes on SteamDB...</a>',
      feedlabel: "SteamDB",
      date: 1632516942,
      feedname: "SteamDB",
      feed_type: 0,
      appid: 570,
    },
    {
      gid: "3936699406874304784",
      title:
        "Rust is getting supply drop changes that'll make them a lot easier to spot",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/3936699406874304784",
      is_external_url: true,
      author: "editor@pcgamesn.com",
      contents:
        '<img width="900" height="507" src="https://www.pcgamesn.com/wp-content/uploads/2021/09/rust-supply-drop-changes-900x500.jpg"/><p>With the team at Facepunch Studios busy working away on new content and gameplay changes for its flagship <a href="https://www.pcgamesn.com/best-survival-games">survival game</a>, there\'s always - well, often - news to share on what\'s headed Rust\'s way. Rust YouTuber Shadowfrax has just shared the latest details on what the devs have been cooking up, and it includes a key change for supply drops.</p>\n<p>In the game\'s staging - that is, live testing - branch, there are some updates to how visible supply drops are, as Shadowfrax explains in the clip below. "Many supply drops delivered between the in-game hours of 8pm and 7am will now have a big, rotating light on top and white lights on the bottom," he notes - and there\'s some footage giving you a good idea of what this\'ll look like in practice to see.</p>\n<p>These lights will stay switched on for "a while" after a supply drop hits the ground to help players locate it in areas with dense foliage - though it\'s worth noting the siren light will only be visible once you\'re within a certain distance of the box o\' goodies.</p>\n<p><a href="https://www.pcgamesn.com/rust/supply-drop-changes">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.pcgamesn.com/rust/september-update-quality-of-life-changes">Rust has a whole bunch of quality-of-life changes coming up</a><br />\n<a href="https://www.pcgamesn.com/rust/underwater-labs-september-update">The Rust devs are making underwater labs more worthwhile</a><br />\n<a href="https://www.pcgamesn.com/rust/submarine-changes-missions">Rust\'s submarines are getting nerfed and missions are in the works again</a></p>',
      feedlabel: "PCGamesN",
      date: 1632507326,
      feedname: "PCGamesN",
      feed_type: 0,
      appid: 252490,
    },
    {
      gid: "3936699406874096466",
      title: "Community Giveaway",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406874096466",
      is_external_url: true,
      author: "Lisa 莉莎",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/31013613/2f2f123c86a04e1871d637aa59b8972987e540aa.jpg[/img]\n\nGreetings, Commanders!\nOur collaboration with Transformers is still going strong! To celebrate this epic event, we're holding a special giveaway. \n[h1]How to enter:[/h1]\n[olist][*][url=https://steamcommunity.com/sharedfiles/filedetails/?id=2610115648]Click here[/url]\n[*]Click the \"Like\" button\n[*]Leave a comment, and that's it![/olist]\nhttps://steamcommunity.com/sharedfiles/filedetails/?id=2610115648\n\n[h1]Prizes:[/h1]\n[list][*]Four random winners will get one Transformers Commander of their choice:\n  1. Grimlock trained for Republique\n    2. Hot-Rod trained for Minotaur\n    3. Soundwave trained for Venezia\n    4. Starscream trained for Manfred von Richthofen\n\n[*]Another four random winners will get one Transformers permanent camouflage of their choice:\n1. King of Primitives for Republique,\n2. Hot Racer for Minotaur\n3. Lord of the Seekers for Manfred von Richthofen\n4. Superior for Venezia [/list]\n[h1]Rules:[/h1]\n[list][*]Any comments that break the discussion rules may be deleted or excluded.\n[*]The results will be announced in this thread on October 1. Prizes will be awarded within a week.\n[*] A private Steam message will be sent to our winners on October 1. Please answer it within 1 week so we can award you with the prize you choose.[/list]",
      feedlabel: "Community Announcements",
      date: 1632502830,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 552990,
    },
    {
      gid: "3936699406874075924",
      title: "Terraria State of the Game - September 2021",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406874075924",
      is_external_url: true,
      author: "Loki ISP",
      contents:
        "[img]https://i.imgur.com/nd585Sf.png[/img]\n\nGreetings Terrarians!\n\nFall is nearly upon us, as 2021 turns towards its latter stages. We have always figured that the final few months of this year would be an intense and fantastic time for Terraria and Terrarians, and the reality is lining up with that quite well. From Xbox/PlayStation getting Journey's End in a week to ongoing work on Switch to a wide array of new merchandise items and much more - 2021 may be winding down, but Terraria is just getting started! We have a ton to go over this month, so let's jump right in!\n\n[img]https://i.imgur.com/Y3CIX2z.png[/img]\n\n[h1][b]PC - RE-LOGIC[/b][/h1]\n\n[h2][b]PLAYING AROUND WITH STEAM DECK[/b][/h2]\n\n[img]https://i.imgur.com/BS7fm0u.jpg[/img]\n\nRecently, we were fortunate enough to receive one of the early waves of development hardware for Steam Deck. Terraria runs so well already on this amazing new platform, it is so customizable and opens the door for all new control schemes and more - in fact, the team is already looking for ways to further optimize the experience. This will take the form of a small upcoming PC update in order to optimize the controls, etc. in time for Steam Deck launch. We cannot wait for everyone to experience Terraria on Steam Deck - it really is a fantastic device for playing our game.\n\n[img]https://i.imgur.com/CicmbR2.png[/img]\n\n[b][h2]STEAM WORKSHOP NEWS[/h2][/b]\n\n[url=https://steamcommunity.com/app/105600/workshop/][img]https://i.imgur.com/4Wu7N7y.png[/img][/url]\nClick the banner above to check out the Terraria Workshop!\n\nThe level of quality and quantity on the Terraria Steam Workshop just continues to climb - nearly 30,000 packs and worlds so far, which is just insane! If you have not checked out the Workshop yet, what are you waiting for?\n\n[img]https://i.imgur.com/CicmbR2.png[/img]\n\n[h2][b]TERRARIA WORKSHOP DEVELOPER'S CHOICE SELECTIONS[/b][/h2]\nAs in the past, we are gathering up our possible selections that we will reveal in a future State of the Game!\n\n[img]https://i.imgur.com/CicmbR2.png[/img]\n\n[h2][b]WHAT ELSE IS GOING ON?[/b][/h2]\n\nThe team is taking a bit of a break from the Game Jams to work on the small Terraria PC update mentioned above in the Steam Deck news. We are looking forward to diving back into our latest Jam with both feet once we have that all squared away. It is a pretty cool second concept, and we are really enjoying how it is turning out.\n\n\nSo, for now, we will have to just continue to ask for your patience and trust in our process as we continue our own journey towards whatever lies ahead.\n\n[img]https://i.imgur.com/Y3CIX2z.png[/img]\n\n[h1][b]TMODLOADER NEWS - TML TEAM[/b][/h1]\n\n[url=https://store.steampowered.com/app/1281930/tModLoader/][img]https://i.imgur.com/oLHogOc.png[/img][/url]\n\nHello everyone!\n\nAs we shared previously, the tModLoader 1.4 Alpha is out now - you can click the link below to find out more.  Do keep in mind that this Alpha is primarily intended for developers as an audience - so play around with it at your own risk!  :)\n\nhttps://steamcommunity.com/app/1281930/discussions/0/3051733836205288319/\n\n\nAs always, you can keep track the current progress and such more in real time at tModLoader/tModLoader (But note that the completion percentage doesn't mean anything, because issues and PRs don't have weights.)\n\nDevelopers who are willing to contribute may do so by doing PRs to the tModLoader/tModLoader branch. (See tModLoader/tModLoader)\n\n[img]https://i.imgur.com/Y3CIX2z.png[/img]\n\n[h1][b]PlayStation 4, XBOX ONE, Nintendo Switch - DR STUDIOS[/b][/h1]\n\n\n[h2][b]XBOX & PLAYSTATION[/b][/h2]\n\n\nGreetings, Terrarians!  One week ago, we revealed the launch date for Journey's End on PlayStation and Xbox - leaving us one week out from this amazing update being in your hands!\n\n\n[h1][b]In case you missed it, Terraria: Journey's End is coming to PlayStation and Xbox on September 30th![/b][/h1]\n\n\nThe team is eagerly anticipating the launch, and we hope that each and every one of you enjoy the fruits of our labors over the past several months.  We have really enjoyed working on this update and thank you as always for entrusting us with the opportunity.  It is not a responsibility that we take lightly!\n\n\nOf course, the team will be on full alert and standby for any bugs or issues that arise at launch - so be sure to use the Bug Report process that we will share in the launch day post if you encounter any issues!\n\n[img]https://i.imgur.com/CicmbR2.png[/img]\n\n[b][h2]NINTENDO SWITCH[/h2][/b]\n\n\nThe team is continuing to chip away at the extra work needed to bring Journey's End to Nintendo Switch!  What all does that entail?  Mostly it has to deal with the specific features and scenarios that the Switch presents.  Things such as\n\n\nUI differences - Docked vs Undocked, etc.\nFurther Performance Optimization\nTouch Controls Optimization, including the hybrid control styles dictated by Switch\nAll of the specific platform-required stuff\netc.\n\n[img]https://i.imgur.com/a9MX5iS.jpg[/img]\n\nWe do not have a precise update on timing to give you just yet.  Give us a bit longer to be sure that things continue to stay on track and on schedule - we certainly do not want to give you any timing estimates that we are not confident to hit!  That said, as of today, everything is very much going well and remains on time.\n\n[img]https://i.imgur.com/Y3CIX2z.png[/img]\n\n[h1][b]MOBILE - DR STUDIOS[/b][/h1]​\n\nHello everyone!\n\nHang in there, our Mobile friends - your time in the spotlight will come again soon enough. As you will see above, we are getting ever-closer to that console release, after which we will be entering the era of \"Parity\" where we are going to be pushing for a world where all Terrarians are on the same version.\n\nWe have also been made aware of some issues impacting some players in regards to Android 11. The team will be looking into this shortly, and we will get any needed fixes out just as soon as possible!\n\n\n[url=https://forums.terraria.org/index.php?forums/mobile-bug-reports.149/][h2][b]TERRARIA: JOURNEY'S END MOBILE BUG REPORTS[/b][/h2][/url]\n​\n\nThanks as always for the honor and trust you give us each month to work on Terraria - it is not a responsibility that we take lightly, and we look forward to bringing more amazing things to you all as we move forward.\n\n[img]https://i.imgur.com/Y3CIX2z.png[/img]\n\n[h1][b]COMMUNITY[/b][/h1]\n​\nGreetings Terrarians!\n\nHere's the latest and greatest happenings on the Community side of things. Thanks as always for being the most engaged and awesome gaming Community ever!\n\n[h2][b]TERRARIA MERCHANDISE STORE HUB [/b][/h2]​\n\nThe merchandise hub has a few new items added over the past month... and there are a lot more coming very soon! Big plans here for the 2021 Holiday season - so this is a place you will want to watch for all of your gift-giving (or rewarding yourself ːterrariaː ) needs!\n\n[url=http://terraria.org/store][img]https://i.imgur.com/VaZ73gn.png[/img][/url]\n\nClick the banner above to head to [url=http://terraria.org/store]Terraria.org/store[/url] now!​\n\nWe will be keeping this up to date and continuously adding to the offerings available here - so this is a page you will want to bookmark and check often!\n\n[img]https://i.imgur.com/CicmbR2.png[/img]\n\n[h2][b]TERRARIA MERCHANDISE UPDATES[/b][/h2]\n\nWe still have a handful of partnerships and products that remain under wraps, but that we will be revealing just as soon as the time is right - our plan is to have a LOT more out for the holidays. That said, what better time than the State of the Game to check in on news from our existing partners as well as to shine a light on some other things that are in the works?\n\n[h2][b]ANIMEGAMI FOREST BIOME HIGH-END COLLECTIBLE RESIN STATUE PREORDERS UNDERWAY[/b][/h2]\n\n[previewyoutube=WZM3Vl9yqyc;full][/previewyoutube]\n\nA few weeks ago, preorders began for this amazing one-of-a-kind super high-end collectible resin statue from Animegami Studios!  To be clear, this is a very high-end piece that is intended for the hardcore Terraria fan - and may not be for everyone.  That said, our good friends at AGS have done what they can to enhance the affordability via an array of interest-free payment plans that spread out the cost over time.\n\n[url=https://animegami-studios.com/collections/premium-line/products/terraria-forest-biome-resin-statue-exclusive-edition][img]https://i.imgur.com/rkd9wGC.png[/img][/url]\n[i]Click the image above to check out the details and to preorder the Forest Biome Resin Statue![/i]\n\n[img]https://i.imgur.com/CicmbR2.png[/img]\n\n[h2][b]SKYLAND ARTS LIMITED EDITION TERRARIA FIGURES - SERIES 1A PREORDERS NEARLY DONE![/b][/h2]\n\n[img]https://i.imgur.com/OBYYVXg.jpg[/img]\n\nThe response to this Kickstarter-as-preorder campaign could not have been stronger! Terrarians everywhere have spoken loudly with their support here - blowing away the $10,000 campaign goal to the tune of over $250k in preorders! Our partners at Skyland are now hard at work with lining everything up to get these out to everyone in the near future. Once we have an update on a specific timeline for delivery, we will get that to you! For now, we would refer everyone here:\n\n[url=https://www.kickstarter.com/projects/skyland/terraria-limited-edition-figures-wave-1a/posts/3302714][b]SKYLAND ARTS TERRARIA FIGURES SERIES 1A PRODUCTION UPDATE[/b][/url]\n\nMissed your chance? Not to worry, Skyland has left things open for a bit longer via a \"Late Order\" system that you can check out below!\n\n\n[url=https://www.hiveinteractive.net/game/terraria-limited-edition-figures-wave-1a-39/landing/940][b]LATE PREORDER SKYLAND ARTS LIMITED EDITION TERRARIA FIGURES - SERIES 1A HERE![/b][/url]\n\n[img]https://i.imgur.com/CicmbR2.png[/img]\n\n[h2][b]HALLOWEEN-THEMED TERRARIA MERCHANDISE COMING VERY SOON![/b][/h2]\n\n[url=https://terraria.shop/][img]https://i.imgur.com/69abDUC.png[/img][/url]\n\nOur fantastic partners over at Vidglo ([url=https://terraria.shop/]Terraria.shop[/url]) have been hard at work on some new offerings for the Fall/Winter season. The first of those to roll out (available very soon!) will be the Terraria Halloween Collection - which you can see in the sneak peek above!\n\nWe will update the [url=https://terraria.org/store]Merch Hub[/url] the instant these are available, and you can keep an eye on [url=https://terraria.shop/]Terraria.Shop[/url] as well so that you know the instant these are released!\n\n[img]https://i.imgur.com/CicmbR2.png[/img]\n\n[h2][b]JOIN THE TERRARIA DISCORD SERVER[/b][/h2]\n\n[url=https://discord.gg/terraria][img]https://i.imgur.com/Xc0vkY1.png[/img][/url]\n\nWe are thrilled that 1.4 update is finally coming to PlayStation and Xbox! If you are not already involved in the Terraria community then join the official Terraria Discord server to recruit allies to join your world, discuss all things Terraria, participate in events with prizes, and so much more.\n\n\nWe host daily events in the [url=https://discord.gg/terraria]Terraria Discord[/url] server where you can win exclusive Terraria merchandise in our custom Terraria Prize Shop. Our official activities range from Terraria trivia to art events where the community votes for the winner!\n\n\nThe [url=https://discord.gg/terraria]Terraria Discord[/url] server is the central hub to chat live with your fellow Terrarians so please stop by and introduce yourself if you have not done so already.\n\n[img]https://i.imgur.com/Y3CIX2z.png[/img]\n\nUntil next time, Terrarians - we hope you have an amazing month, and we look forward to bringing you the latest and greatest next time!\n\n",
      feedlabel: "Community Announcements",
      date: 1632502348,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 105600,
    },
    {
      gid: "3936699406874036094",
      title: "Hotfix (e1.6.2 - 24/09/21)",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406874036094",
      is_external_url: true,
      author: "Callum",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/26623866/0d580c6fa983488324f9717473b2907fb936e86c.png[/img]\n[h3]e1.6.2[/h3]\n\n[h2]Multiplayer [/h2]\n\n[b]Crashes[/b]\n[list]\n[*] Fixed a number of crashes that were caused by certain customisable item combinations.\n[/list]\n\n[b]Fixes[/b]\n[list]\n[*] Fixed an issue that caused the wrong item to be granted and displayed when unlocked. \n[*] Fixed an issue with free sigils that prevented them from being used. \n[/list]\n\n[url=https://forums.taleworlds.com/index.php?threads/known-issues.401168/ style=button]Known Issues[/url]",
      feedlabel: "Community Announcements",
      date: 1632501405,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 261550,
      tags: ["patchnotes"],
    },
    {
      gid: "3936699406873883323",
      title: "Burning Games",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406873883323",
      is_external_url: true,
      author: "april-fx",
      contents:
        "Burning Games has no mercy for the idle and unhurried. In this mode, a vehicle's HP just keeps on burnin'! So, to stay in the game, you have to act fast! Heal by taking enemy's health! Provide cover for allies and restore their hit points, too. And if your vehicle gets destroyed, return to battle and bring it to a victorious end!\n[previewyoutube=EUgvUNH8NdI;full][/previewyoutube]\n[h1]Schedule[/h1]\nFight in Burning Games from September 24 to September 30.\n• CIS: September 24, 8:00 (MSK) to September 30, 2:00 (MSK)\n• Europe: September 24, 8:00 (CEST) to September 30, 2:00 (CEST)\n• North America: September 24, 8:00 (PDT) / 11:00 (EDT) to September 29, 23:00 (PDT) / September 30, 2:00 (EDT)\n• APAC: September 24, 8:00 (UTC+8) to September 30, 2:00 (UTC+8)\n\nEvery night, Burning Games becomes temporarily unavailable:\n• CIS: 2:00 (MSK) to 8:00 (MSK)\n• Europe: 2:00 (CEST) to 8:00 (CEST)\n• North America: 23:00 (PDT) / 2:00 (EDT) to 8:00 (PDT) / 11:00 (EDT)\n• APAC: 2:00 (UTC+8) to 8:00 (UTC+8)\n\n[h1]How to Enter Burning Games [/h1]\nTo join a Burning Games battle, select it in the menu next to the \"Battle!\" button.\n[img]{STEAM_CLAN_IMAGE}/26494313/0b2231fcedf0a88a8396eabccb3a02f3ef75333c.jpg[/img]\n[i]Only Tier V–X vehicles are allowed in this mode.[/i]",
      feedlabel: "Community Announcements",
      date: 1632497783,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 444200,
    },
    {
      gid: "3936699406873798553",
      title: "New Iberian Roads",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406873798553",
      is_external_url: true,
      author: "London",
      contents:
        "From the scorching temperatures of the Tabernas Desert to the bustling city of Madrid, [url=https://store.steampowered.com/app/1209460/Euro_Truck_Simulator_2__Iberia/?utm_source=steam_news&utm_campaign=new_roads]Iberia[/url] has been a popular destination for truckers since its release in April. Based on feedback from our community since its launch, our map team thought it'd be good to revisit the map expansion and bring some new additional content. \n\n[img]{STEAM_CLAN_IMAGE}/4419325/2da695ef90d0210a40aba4a72527b2cabaf39c93.jpg[/img]\n\nTheir main focus is to bring new country roads alongside the many highways of Iberia for you to use and explore. For those who prefer to take the more scenic routes while trucking, we know how much you'll appreciate it! \n\n[img]{STEAM_CLAN_IMAGE}/4419325/8831c23d60f7ea8f76411e60b4e73e6a51ec5028.jpg[/img]\n[img]{STEAM_CLAN_IMAGE}/4419325/fec58a011c17f3cdd72623cc4ed6ac78321a5d38.jpg[/img]\n\nSo where will be these new roads located? The first new addition can be found north of Madrid, linking together the A-1 and A-2 highways. This new road (N-234) passes alongside the city, which also happens to be located by the River Douro, the mouth of which can be found in Portugal! \n\n[img]{STEAM_CLAN_IMAGE}/4419325/42c59b3fe41f9fb9dd6ede401bbf06e590624c9e.jpg[/img]\n[img]{STEAM_CLAN_IMAGE}/4419325/329a3ac26f9fa234ea34ab13d2bcf38989c87c1a.jpg[/img]\n[img]{STEAM_CLAN_IMAGE}/4419325/aed5fe5cdfea41a51b02c020243f86c38d8ddd53.jpg[/img]\n[img]{STEAM_CLAN_IMAGE}/4419325/9f8785d8f8a70421bc93f12c53f474093062463c.jpg[/img]\n\nThe second new road can be found in the south of Portugal, starting near the city of Sines, passing by the city of Beja and ending in Spain, just above Seville! These new roads will not only provide truckers with alternative routes whilst out on delivery, but also more beautiful scenery and areas to explore in Iberia!\n\n[img]{STEAM_CLAN_IMAGE}/4419325/da76e7899d1c22195659664cc425a74d1ff561e7.jpg[/img]\n[img]{STEAM_CLAN_IMAGE}/4419325/aa4262b702b6bfd462dbd83433783f5f8442d9fa.jpg[/img]\n[img]{STEAM_CLAN_IMAGE}/4419325/b27d0cede6f9c21909b90b0f7656d58b291614a6.jpg[/img]\n\nThis content is being created by our new map designers as a part of their training program. However, we have been impressed by their work so much that we decided to use it and bring it to the Iberia expansion in the future, most probably still this year. We always try our best to have some extra capacity to occasionally revisit/reskin some parts of the older in-game worlds, that's something you already know about us. Maybe you'll start seeing more of these extra additions across our released DLCs from time to time as well. \n\n[img]{STEAM_CLAN_IMAGE}/4419325/4ad2a23659bd28cfcae7ce3eea126dc22db1d0f5.jpg[/img]\n[img]{STEAM_CLAN_IMAGE}/4419325/9e880d35229b2aa49a0109086b6906331e3445e2.jpg[/img]\n[img]{STEAM_CLAN_IMAGE}/4419325/d2ccb121720dafcc4ff761a8bdbb445d0a6cc6d1.jpg[/img]\n\nWe hope you'll enjoy this new and free additional content that is coming to the Iberia expansion! \n\nhttps://store.steampowered.com/app/1209460/Euro_Truck_Simulator_2__Iberia/",
      feedlabel: "Community Announcements",
      date: 1632495767,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 227300,
    },
    {
      gid: "3936699406873170137",
      title: "TOP GUN: Season 10",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406873170137",
      is_external_url: true,
      author: "Runabel",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/6139533/d83db868efd0de407d2be05585748161cc3cab5f.png[/img]\n\nSoldiers!\n\nWe are launching a new season of our TOP GUN event - the one where you can get one or even two potent permanent guns for free! Get yourself permanent competitive guns: FN FAL DSA-58, Winchester 1887, Desert Tech MDR-C or Bushmaster BA50 by completing a PVP or PVE task daily! The event ends on October 23.\n\n[url=https://pc.warface.com/en/tokenguns/ style=button]Take Part[/url]\n\n[h3]How it works[/h3]\n\n[img]{STEAM_CLAN_IMAGE}/6139533/1c65be1d092d0eb3c4ac45528caa632e711b5e5f.jpg[/img]\n\n[list][*]Please note, once you chose the daily mission (PvE or PvP), you cannot change it.[/list]\n\n[url=https://pc.warface.com/en/tokenguns/ style=button]Take Part[/url]\n\nPersistence pays off!\n\nJoin our Social Media and don’t forget to leave your feedback:\n\n[url=discord.gg/dqh4xEB]Discuss on Discord[/url]\n[url=facebook.com/warface]Discuss on Facebook[/url]",
      feedlabel: "Community Announcements",
      date: 1632480864,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 291480,
    },
    {
      gid: "3936699406872527451",
      title: "Update 2.9.0.52",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406872527451",
      is_external_url: true,
      author: "TheShaolinMonk",
      contents:
        "[img]https://static.warthunder.com/upload/image/!%20new/940%20-%20Changelog/Aircraft/Aircraft%201%20UK%20Red_8fde3492650669f01222ebfffee4cc39.jpg[/img]\n\n[b]Aircraft model, damage model, characteristic and weaponry changes[/b][list]\n[*] MiG-27M - Additional countermeasure blocks (chaff, flares) have been added. A preset with 2хR-13M1 no longer requires research of the R-13M modification and is available as default. Combined presets with R-13M1 missiles still need to have the researched R-13M modification.\n[*] A-5C - 750 pounds M117 bombs, blocks with Type-130 rockets, additional wing pylons and combined presets with new weapons have been added to suspended weaponry. Presets have been adjusted to reflect the addition of the new pylons.\n[*] F-5A (China) - Countermeasure blocks (chaff, flares), a radar warning reciver (RWR) and related modifications have been added. \n[*] F-5C - Radar warning reciver (RWR) has been added.[/list]\n[b]The current provided changelog reflects the major changes within the game as part of this Update. Some updates, additions and fixes may not be listed in the provided notes. War Thunder is constantly improving and specific fixes may be implemented without the client being updated.[/b]",
      feedlabel: "Community Announcements",
      date: 1632465609,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 236390,
      tags: ["patchnotes"],
    },
    {
      gid: "3936699406872125312",
      title: "Weekend Skill Effects Sale and Supporter Pack Inspiration",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406872125312",
      is_external_url: true,
      author: "CommunityTeam_GGG",
      contents:
        "This weekend, we're having a sale on Skill Effects! What better way to complement them than with pieces from our [url=https://www.pathofexile.com/purchase]Supporter Packs[/url]? To give you some inspiration, we've brought together a few costume ideas that take advantage of pieces from the Expedition Supporter Packs! Check them out below, or take a look at the Skill Effects sale [url=https://www.pathofexile.com/shop/category/daily-deals]here[/url]!\n\n[img]{STEAM_CLAN_IMAGE}/5193306/e82a28007534d4cd22c488d81570dd548c94a748.jpg[/img]\n\nThe above consists of the Soulkeeper Demigod Weapon Skin, Soulkeeper Weapon Effect, [url=https://www.pathofexile.com/shop/category/armour-effects#microtransaction-DragonHunterArmourPack]Dragon Hunter Armour Set[/url] and [url=https://www.pathofexile.com/shop/category/footprint-effects#microtransaction-DragonHunterFootprintsEffect]Footprints[/url], [url=https://www.pathofexile.com/shop/category/armour-effects#microtransaction-ApocalypseHelmetAttachment]Apocalypse Helmet Attachment[/url] and [url=https://www.pathofexile.com/shop/category/back-attachments#microtransaction-PandemoniumWings]Pandemonium Wings[/url].\n\n[img]{STEAM_CLAN_IMAGE}/5193306/0e744572f35c91f40979ffa22f9827aba4fa492c.jpg[/img]\n\nThe above screenshot contains the Soulkeeper Vizier Armour Set, [url=https://www.pathofexile.com/shop/category/back-attachments#microtransaction-SunriseWings]Sunrise Wings[/url], [url=https://www.pathofexile.com/shop/category/alternate-skill-effects#microtransaction-SunriseAuraEffect]Sunrise Aura Effect[/url], [url=https://www.pathofexile.com/shop/category/weapon-effects#microtransaction-RaptureWeapon]Rapture Weapon Skin[/url] and [url=https://www.pathofexile.com/shop/category/weapon-effects#microtransaction-BrimstoneWeaponEffect]Brimstone Weapon Effect[/url]. \n\n[img]{STEAM_CLAN_IMAGE}/5193306/529002d17a8e7c1a1540feb44ff7f8de11a36302.png[/img]\n\nPictured above are the Aesir Warrior Wings and Aesir Weapon Effect, Overseer Armour Set, Hood and Weapon Skin as well as the [url=https://www.pathofexile.com/shop/category/armour-effects#microtransaction-SunprismShield]Sunprism Shield[/url] and [url=https://www.pathofexile.com/shop/category/footprint-effects#microtransaction-WhiteFootprintsEffect]White Footprints[/url]. \n\n[img]{STEAM_CLAN_IMAGE}/5193306/336a09f1c10d7f7898fc1e13252982182543078e.jpg[/img]\n\nFinally, the above includes the Aesir Warrir Armour Set, Aesir Demigod Weapon Skin, Aesir Weapon Effect, [url=https://www.pathofexile.com/shop/category/armour-effects#microtransaction-LightningEyes]Lightning Eyes[/url], [url=https://www.pathofexile.com/shop/category/footprint-effects#microtransaction-LightningFootprints]Footprints[/url] and [url=https://www.pathofexile.com/shop/category/character-effects#microtransaction-LightningCharacterEffect]Character Effect[/url], [url=https://www.pathofexile.com/shop/category/back-attachments#microtransaction-FrostVikingCloak]Frost Viking Cloak[/url] and [url=https://www.pathofexile.com/shop/category/pets#microtransaction-WhiteWolfPet]White Wolf Pet[/url].\n\nWe hope these screenshots have inspired you! Don't forget, if you're short on points for the sale our [url=https://www.pathofexile.com/purchase]Supporter Packs[/url] are a great option!",
      feedlabel: "Community Announcements",
      date: 1632456065,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 238960,
    },
    {
      gid: "3936699406871177396",
      title: "This Week At Bungie – 9/23/2021",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406871177396",
      is_external_url: true,
      author: "Cozmo_BNG",
      contents:
        "This week at Bungie, we are heading to the lab. \n\nTomorrow, we are kicking off our first Trials Labs. These experimental weekends will allow us to test out targeted changes to the game mode and collect data and feedback on what works and what should remain an abomination of science. In keeping with our Trials revamp this Season, we are sticking to our “test and learn” mindset not only with Labs, but also with matchmaking, rewards, and other quality of life improvements. \nThis week, the normal Trials of Osiris playlist is replaced with Trials Labs: Capture Zone. This new mode is still Elimination, with the following changes: [list][*]30 seconds after the round starts, a capture zone is enabled. Players can capture this zone to win the round – or just eliminate the other team like normal. [/*][list][list][*]The capture zone has a waypoint from round start, including a countdown timer, so everyone will know exactly when and where it will be. [/*][/list][/list][*]The capture zone starts in the middle of the map in the first round and changes location each round. [/*][list][list][*]The team who just lost gets the advantaged spawn location. [/*][/list][/list][/list]\nAlso for this week, double Trials rank points for every match! If you are feeling the blues of Fabled and Mythic, this is a great week to reset!\n\n[url=https://www.bungie.net/en/Explore/Detail/News/50729]Check out Bungie.net for the full TWAB[/url] for more import Trials info, our latest fashion show and more!",
      feedlabel: "Community Announcements",
      date: 1632433571,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 1085660,
    },
    {
      gid: "3936699406870325245",
      title:
        "GTA Online's weekly update boosts rewards on Deadline, Biker Sell missions",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/3936699406870325245",
      is_external_url: true,
      author: "editor@pcgamesn.com",
      contents:
        '<img width="900" height="507" src="https://www.pcgamesn.com/wp-content/uploads/2021/09/gta-online-weekly-update-deadline-biker-sell-900x506.jpg"/><p><a href="https://www.pcgamesn.com/grand-theft-auto-v" target="_blank" rel="noopener noreferrer">GTA Online</a>\'s weekly update got off to a rockier start than we\'re used to, but here we are. Players tried to jump in to see what\'s new in Los Santos this week and were met with server issues that stopped them from logging in. That\'s all fine and sorted now, though, so we can dig into what\'s in the GTA Online weekly update this time around.</p>\n<p>If you\'re looking to raise some money this time around, you can get triple the usual rewards on the Deadline adversary mode. You all hop on Tron-style bikes and try to trip each other up with the light trails that shoot out the back of your vehicle - it\'s great. If you fancy something else, though, you can get double the rewards on Biker Sell missions relating to cocaine and methamphetamine - well, it\'s good to have options.</p>\n<p>It\'s a good week to get to the Karin Previon if you fancy it. All you have to do is place in the top five in a Los Santos Car Meet series race for four days in a row to claim the <a href="https://www.pcgamesn.com/grand-theft-auto-v/gta-prize-ride-car-challenges" target="_blank" rel="noopener noreferrer">prize ride</a>.</p>\n<p><a href="https://www.pcgamesn.com/grand-theft-auto-v/weekly-update-deadline-biker-sell">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.pcgamesn.com/grand-theft-auto-v/gta-5-podium-car-online">GTA podium car: here\'s what vehicle you can win in GTA Online</a><br />\n<a href="https://www.pcgamesn.com/grand-theft-auto-v/gta-prize-ride-car-challenges">GTA Prize Ride challenge - what is the Prize Ride this week?</a><br />\n<a href="https://www.pcgamesn.com/best-open-world-games">The best open-world games on PC</a></p>',
      feedlabel: "PCGamesN",
      date: 1632412894,
      feedname: "PCGamesN",
      feed_type: 0,
      appid: 271590,
    },
    {
      gid: "3936699406870293801",
      title: "PAYDAY 2: Update 211.1",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406870293801",
      is_external_url: true,
      author: "OVERKILL_Tobias",
      contents:
        "[h1]Update 211.1 Changelog[/h1]\n[b]Update size: 15.7 MB[/b]\n\n[h1]Hello Heisters[/h1]\nYesterday we release the third weapon pack DLC from Jiu Feng. We've seen a lot of great responses both the weapons and the charms. It is great to see that you are enjoying the content we make. We have a hotfix to release today addressing the issues that have been reported since the release.\n\n[b]Changes[/b]\n[list]\n[*]Fixed an issue with the fire rate of the under-barrel for the Kang Arms Model 54 Pistol being too high.\n[*]Fixed an issue with the KS12-A Burst Muzzle where shots were silenced like when using a suppressor.\n[*]Fixed an issue where you could attach the KS12-A Burst Muzzle or KS12-S Long Silencer while having a barrel that should prevent barrel extensions.\n[*]Added missing achievement icon to the achievement menu.\n[*]Fixed an issue where the weapon charm would detach from the Vulcan Minigun during the reload animation.\n[/list]\n\nThere was also an issue reported related to using a 45-degree sight gadget in combination with the KS12-S Carry Handle. This issue is still being worked on and will be included in the next release.\n\n\nKeep on being charming.\n[b]OVERKILL_Tobias[/b]\n[url=https://twitter.com/overkill_tm]OVERKILL - a Starbreeze Studio.[/url]",
      feedlabel: "Community Announcements",
      date: 1632412603,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 218620,
      tags: ["patchnotes"],
    },
    {
      gid: "3936699406870274532",
      title:
        "A Skyrim modder has added Final Fantasy Tactics-inspired classes to the RPG",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/3936699406870274532",
      is_external_url: true,
      author: "editor@pcgamesn.com",
      contents:
        '<img width="900" height="507" src="https://www.pcgamesn.com/wp-content/uploads/2021/09/skyrim-mod-rpg-classes-mage-900x506.jpg"/><p>As an RPG, <a href="https://www.pcgamesn.com/the-elder-scrolls-v-skyrim">Skyrim</a> already offers a ton of options in how you want to build your Dragonborn and approach the game\'s deep and dangerous world. But, there\'s always fun to be had in even more variety, and a new, "non-intrusive", Final Fantasy Tactics-inspired <a href="https://www.pcgamesn.com/the-elder-scrolls-v-skyrim">Skyrim mod</a> looks set to offer just that, with the addition of a batch of new classic RPG-style classes and a mastering system for them.</p>\n<p>"Sets of Skills is a non-intrusive class mod that tries to combine the classic RPG classes with the \'You can do whatever you want\' design philosophy of Skyrim," modder Robin959 explains in a <a href="https://www.reddit.com/r/skyrimmods/comments/ptdms1/mod_release_sets_of_skill_a_skyrim_class_mod/">Reddit post</a> announcing their new creation. Inspired by the class and job system of classic tactical RPG Final Fantasy Tactics, the mod integrates into the base game\'s existing system, sitting comfortably alongside its skill trees without tinkering with them, and is tied to your Dragonborn\'s normal character level.</p>\n<p>Where the mod adds some exciting new options is in its 17 new classes, which provide bonuses to XP gained for the skills related to them. So, as per the modder\'s example, the Scout class will offer bonuses to the archery and light armour skills, while the Mystic class will do the same but for illusion and alteration spells.</p>\n<p><a href="https://www.pcgamesn.com/the-elder-scrolls-v-skyrim/mod-rpg-classes">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.pcgamesn.com/the-elder-scrolls-v-skyrim/mod-customisable-followers-companions">This extensive Skyrim mod lets you build a band of deeply customisable followers</a><br />\n<a href="https://www.pcgamesn.com/the-elder-scrolls-v-skyrim/asus-rog-weapons-mod">Skyrim mod arms the Dragonborn with an ROG gaming keyboard and mouse</a><br />\n<a href="https://www.pcgamesn.com/the-elder-scrolls-v-skyrim/namira-armor-concept">Skyrim fan creates a gorgeously spooky \'Champion of Namira\' armour concept</a></p>',
      feedlabel: "PCGamesN",
      date: 1632411662,
      feedname: "PCGamesN",
      feed_type: 0,
      appid: 72850,
    },
    {
      gid: "3936699406870035487",
      title: "23/09/2021 Human: Fall Flat Hotfix",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406870035487",
      is_external_url: true,
      author: "Kentish",
      contents:
        "- Resolved an issue with the MathAdd component not being hooked up correctly",
      feedlabel: "Community Announcements",
      date: 1632406476,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 477160,
      tags: ["patchnotes", "enable_steam_china"],
    },
    {
      gid: "3936699406870018619",
      title:
        "Wallpaper Engine 1.7 - FREE Android App Coming Soon - New Features & Bug Fixes",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406870018619",
      is_external_url: true,
      author: "Tim",
      contents:
        'Hello everyone, today we are happy to announce that we will soon be releasing a free Android version of Wallpaper Engine. On top of that, we are also releasing Wallpaper Engine 1.7 today which brings a new set of features including video-based textures and support for web wallpapers with video livestreams.\n\n[h2]Wallpaper Engine Android Companion App[/h2]\n\nIn the past few months, we have developed an Android app of Wallpaper Engine that offers support for dynamic scene and video wallpapers. The Wallpaper Engine companion app will be available for free to everyone, users of Wallpaper Engine on Windows will be able to share their wallpaper collection wirelessly with their Android phones and tablets. We developed an easy way to securely transfer your Workshop wallpapers to your mobile devices. Since accessing the Workshop is not possible on Android, the Windows version of Wallpaper Engine will serve as a hub to take your wallpapers on the go.\n\nJust like the Windows app, the Android app will also not contain any sort of hidden costs or advertisements and it will also not collect any personal data - we consider the app a free add-on for existing Wallpaper Engine users.\n\nDeveloping the new Android app was quite an intensive undertaking. However, when it came to porting Wallpaper Engine to any new additional platforms, it was the most rational platform to add next due the huge user base of Android around the globe. The work we have done to support Android will also benefit any future potential ports to other platforms, though Android was still comparatively simple compared to other operating systems. If you are hoping to see Wallpaper Engine on other platforms in the future, please be patient, it is simply not possible for us to port Wallpaper Engine to every single platform at once since it is a tremendous amount of work to do so.\n\n[h3]Sneak Peek of Wallpaper Engine for Android[/h3]\n\nWe have prepared a small preview of what Wallpaper Engine looks like on Android. The feature set is very extensive and just like Wallpaper Engine for Windows, the wallpapers are fully dynamic and allow for a great level of user customization. You can also configure a wallpaper playlist, set an FPS limit and configure other battery-saving features and import local videos and GIFs straight into the app.\n\nWallpapers created in the Wallpaper Engine editor will first be converted into a mobile-compatible format before being sent to your phone. The process is pretty straight-forward for end-users but a more extensive description of this will follow at the time of the release.\n\nCheck out the following previews of the Android app:\n\n[table equalcells=1 noborder=1]\n    [tr]\n        [td][b]Real-time dynamic wallpapers on Android[/b]\n\n[img]{STEAM_CLAN_IMAGE}/26312799/afe4369b1e2461323011b29b8e14fbcfce94a49a.gif[/img][/td]\n        [td][b]Customize your wallpapers to your liking[/b]\n\n[img]{STEAM_CLAN_IMAGE}/26312799/779d938b4f04f2e7e9a07a46ca09517749f105ec.gif[/img][/td]\n    [/tr]\n[/table] \n\n\n[table equalcells=1 noborder=1]\n    [tr]\n        [td][b]Visualize your music with audio responsive wallpapers. Credit: [url=https://steamcommunity.com/sharedfiles/filedetails/?id=2406911626]Cube Visualizer[/url][/b]\n\n[img]{STEAM_CLAN_IMAGE}/26312799/d590754450672c1b121668604832ef5b61568972.gif[/img]\n[/td]\n        [td][b]Wirelessly transfer your Workshop wallpapers from your computer[/b]\n\n[img]{STEAM_CLAN_IMAGE}/26312799/f8f24e382022472d8972af5f3dbd73f2556cdfdc.gif[/img][/td]\n    [/tr]\n[/table]\n\n[h2]Steam Workshop Agreement[/h2]\n\nAccessing the Steam Workshop from mobile devices is not possible since this is not supported by Steam. However, we developed a convenient way to allow you to transfer compatible wallpapers from your desktop computer to your mobile device with ease, as long as both devices are using the same local network connection.\n\nSince this has never been done before on Steam, we require all content creators to agree to our addendum to the Steam Workshop agreement before their content can be transferred to mobile devices, otherwise Wallpaper Engine will not allow users to transfer their wallpapers.\n\nIf you have uploaded any wallpapers to Wallpaper Engine, please review and accept the addendum to the Steam Workshop Agreement for Wallpaper Engine here so that your users can use your wallpapers on Android once the app has been released:\n\n[list]\n[*] [url=https://store.steampowered.com/workshopeula/431960/]View in web browser: Workshop Agreement[/url]\n[*] [url=steam://url/WorkshopEula/431960/]View in Steam: Workshop Agreement[/url]\n[/list]\n[h2]Android App Release[/h2]\n\nThe Android version of Wallpaper Engine will likely be available on various app stores in October or early November, though an accurate estimate is difficult to make - make sure to keep an eye on our Steam update news for more information in the future. The Android app is already in a stable state, but we still have to do some final testing and prepare the release on various app stores. The app will support devices running Android 8.1 or newer.\n\nIt is also important to us that a large number of content creators review and accept our addendum to the Steam Workshop Agreement before the app is available so that users can choose from a large selection of Android-compatible wallpapers. If you are a content creator, be sure to review the Workshop Agreement, see the section above for more information. If you are a user and want to make sure your favorite content creator is aware of the upcoming Android release, share the link to this news with them or send them a link to our help website which also explains this in more detail:\n\n[list]\n[*] [url=https://help.wallpaperengine.io/mobile/workshop]help.wallpaperengine.io/mobile/workshop[/url]\n[/list]\n[h1]Wallpaper Engine 1.7 Changes[/h1]\n\nAside from Android, we have also been working on another update for Wallpaper Engine on Windows. With Wallpaper Engine 1.7, we are adding video texture support for Scene wallpapers and a new Livestream Mode, among other new features and bug fixes.\n\n[h2]Video Textures[/h2]\n\nUp until now, the Wallpaper Engine editor only supported static image as a basis for all imported materials. We have now created a way that users can import .mp4 video files as image layers in the editor and they can used just like any other image layer, meaning effects can be applied to them and other assets may be placed over them, allowing for video-based wallpapers to become just as interactive and dynamic as static wallpapers previously. We recommend using H.264 compression for the best compatibility across systems.\n\nYou can also use video files as base textures of your wallpaper, to do this, click on "Use a Template" in the editor welcome window, select "2D Scene" and configure the resolution of your video file. Then simply drag and drop your video file into the new project and it will be added as a new image layer in your project.\n\n[h2]Web Livestream Support[/h2]\n\nA relatively specific feature request in the past was to support setting web livestreams as wallpapers. Due to license issues, this is not easily possible and required us to implement a whole new web framework solely to enable livestream video formats for websites. To access the new Livestream Mode, click on "Open Wallpaper" in the lower left corner of Wallpaper Engine, then select "Open from URL". \n\nYou can now enable the new "Use Livestream Mode" option for URLs with livestreams in them. The first time you access this feature, Wallpaper Engine will install the new Microsoft\'s Edge WebView browser which is automatically maintained by Microsoft and includes support for the required video formats. It\'s also somewhat limited in its Wallpaper Engine functions, so we only recommend using it if you specifically want to set a livestream as a wallpaper. Specifically, there is no keyboard input and using the mouse for input requires hiding the icons first with the built-in hotkey.\n\nThe full changelog for Wallpaper Engine 1.7 can be found here:\n\n[h1]Additions / Changes[/h1]\n[list]\n[*]Added Workshop EULA to prepare the Wallpaper Engine Android release. \n[*]Added video texture support for scenes.\n[*]Added LiveStream Mode to "Open URL" dialog which uses Edge WebView to support video streams.\n[*]Added option to sync static lock-screen image & static Windows wallpaper with live wallpaper.\n[*]Added audio recording icon to application rule program list.\n[*]Added new option to only show editor performance stats when needed.\n[*]Added support for custom titles to local wallpapers.\n[*]Added JPEG rotation EXIF support so JPEG files get rotated pre-import.\n[*]Editor update project.json of web wallpapers every time apply is used to ensure audio responsiveness works more reliably while developing.\n[*]Added safety measure to avoid crashes with video files when the playback rate cannot be properly read from video files.\n[/list]\n\n[h1]Bug Fixes[/h1]\n[list]\n[*]Fixed wallpapers not muting when screensaver is active.\n[*]Fixed screensaver playlists not being editable properly.\n[*]Fixed screensavers also changing Windows theme colors.\n[*]Fixed local preview images not being cropped.\n[*]Fixed lighting settings not being editable after previewing.\n[*]Fixed unsubscribed items not disappearing.\n[*]Fixed user interface crash if Steam was extremely out-of-date.\n[*]Fixed undo functionality in editor in combination with the light height slider.\n[*]Fixed undo/redo getting stuck when going too fast.\n[*]Fixed UI without hardware acceleration not disabling effects.\n[*]Fixed asset updating.\n[*]Fixed preset update system to account for new Steam behavior.\n[*]Fixed effect copy/paste using selected item instead of right clicked item.\n[*]Fixed scene audio playback not playing again if wallpaper is paused at the same time a song finishes.\n[*]Fixed wrong user properties being applied to cloned wallpapers in screensaver mode without DWM live image copy.\n[/list]',
      feedlabel: "Community Announcements",
      date: 1632406082,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 431960,
    },
    {
      gid: "3936699406869818164",
      title:
        "This Civilization 6 mod boosts your coastal cities with new districts and buildings",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/3936699406869818164",
      is_external_url: true,
      author: "editor@pcgamesn.com",
      contents:
        '<img width="900" height="507" src="https://www.pcgamesn.com/wp-content/uploads/2021/09/civ-6-mod-seaside-sectors-900x506.jpg"/><p>Your options for <a href="https://www.pcgamesn.com/civilization-vi">Civilization 6</a> coastal cities have just expanded, thanks to a new fan-made creation. A new <a href="https://www.pcgamesn.com/civilization-vi/civilization-6-mods">Civ 6 mod</a> posted on the <a href="https://www.pcgamesn.com/best-4X-games">4X game\'s</a> Steam Workshop aims to "split and expand upon the gameplay functions of the harbour district" by giving you two new districts and five new buildings to try out - and it\'s proving popular among the community so far.</p>\n<p>Civ 6 fan Albro\'s new More Maritime: Seaside Sectors mod folds in these brand-new buildings across two new water-based districts. The first of these is an Arsenal option which is a base for naval military facilities focused on military and production and "likes unimproved sea", as the modder explains in a <a href="https://docs.google.com/document/d/1m-vIO0UCnpejN_-SNOUTV_8DZojQQJV-0nbg0SoRNQU/edit">design document</a> for the mod.</p>\n<p>The Arsenal district unlocks ship building, and brings gold and production yields, and brings some neat attack and defence effects. The Arsenal lets you construct a warehouse, dry dock, and naval academy - tier one, two, and three buildings, respectively - which each bring their own neat gameplay mechanics, too, such as extra Admiral points per turn, more combat XP, and increases to strategic resource stockpiles, among others.</p>\n<p><a href="https://www.pcgamesn.com/civilization-vi/mod-new-districts-buildings-coastal-city">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.pcgamesn.com/civilization-vi/underrated-civs">These Civilization 6 civs are some of the most \'underrated\' according to its fans</a><br />\n<a href="https://www.pcgamesn.com/civilization-vi/deity-strats">Want to beat Civilization 6 on Deity? Try these (pretty broken) community strats</a><br />\n<a href="https://www.pcgamesn.com/civilization-vi/sale-best-price">Civilization 6 is really super cheap right now - but you\'ll need to be quick</a></p>',
      feedlabel: "PCGamesN",
      date: 1632400980,
      feedname: "PCGamesN",
      feed_type: 0,
      appid: 289070,
    },
    {
      gid: "3936699406869500812",
      title:
        "Apex Legends still has stability issues after patch that should've fixed them",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/Rock, Paper, Shotgun/3936699406869500812",
      is_external_url: true,
      author: "",
      contents:
        '<img src="https://assets2.rockpapershotgun.com/apex-legends-arenas-wattson.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/apex-legends-arenas-wattson.jpg" /> <p>\nIf you\'ve tried to play <a href="https://www.rockpapershotgun.com/games/apex-legends">Apex Legends</a> over the last week or so and noticed that things have been pretty slow, you\'re not alone. Since the game\'s Evolution Collection event launched last week, the battle royale and its servers have been struggling, and Respawn Entertainment have been tinkering away to try and sort it all out. Yesterday, they issued a patch to resolve a number of bugs and improve stability, but having played a few matches myself last night, it seems we\'re not out of the woods just yet.\n</p>\n <p><a href="https://www.rockpapershotgun.com/apex-legends-still-has-stability-issues-after-patch-that-shouldve-fixed-them">Read more</a></p>',
      feedlabel: "Rock, Paper, Shotgun",
      date: 1632393249,
      feedname: "Rock, Paper, Shotgun",
      feed_type: 0,
      appid: 1172470,
    },
    {
      gid: "3936699406868829408",
      title: "Patch Notes – S15 Heroic Challenges (Sep.23.2021)",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406868829408",
      is_external_url: true,
      author: "ROE Community Team",
      contents:
        "Dear Adventurers,\n \nWelcome to the latest official patch notes for Ring of Elysium. Here are the full details:\n\n[h3][b]S15 Heroic Challenges[/b][/h3]\n[list]\n[*] Heroic Challenges are back! Complete the challenges for exclusive rewards including portraits and Adventurer Character Styles!\n[img]{STEAM_CLAN_IMAGE}/31255098/1b9d8ca670a6c07e67cc46b3c9d504f5f76aefc2.jpg[/img]\n[*] Chunhui - Challenge Exclusive Style\n[img]{STEAM_CLAN_IMAGE}/31255098/2c4753be5207556f2799e514a272bbda11d65190.jpg[/img]\n[*] Chunling - Challenge Exclusive Style\n[img]{STEAM_CLAN_IMAGE}/31255098/81ba5320cb09e2cb1f7eeb2b85373bd56bcd5867.jpg[/img]\n[*] Pete - Challenge Exclusive Style\n[img]{STEAM_CLAN_IMAGE}/31255098/a3c46fa68b592a94f6d8a0b8233f12c10a9af77e.jpg[/img]\n[/list]\n\n\n\nThanks for playing,\nROE DEV Team",
      feedlabel: "Community Announcements",
      date: 1632377861,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 755790,
      tags: ["patchnotes"],
    },
    {
      gid: "3936699406868661874",
      title: "[Update] Patch Notes: September 23rd",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406868661874",
      is_external_url: true,
      author: "The CSN:S Team",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/6770740/fdf073711ad9b85f9cfcd934ad18304c9c4dd2b2.jpg[/img]\n\nNew Events have been added!\n\n\n[h2]New Events[/h2]\n\n[h3]New Transcendence Weapon SG552 Cerberus Release Celebration - Sonya's Secret Box Giveaway (9/23 - 10/13)[/h3]You can earn Sonya's Secret Boxes when you meet the following event conditions during the event!\n\n[b]How to Get Sonya's Secret Boxes [/b][list][*] Get Sonya's Secret Boxes x2 for 30 minutes of playtime, Get Sonya's Secret Boxes x3 for 60 minutes of playtime (up to 5 boxes a day)\n[*] Each time you score 2 kills or 6 assists in Zombie Hero/Zombie Evolution/Zombie Z modes, you'll receive Sonya's Secret Box x1 (up to 15 boxes a day) \n[*] Each time you clear 1 session of Zombie Scenario on Hard difficulty or higher, you'll receive Sonya's Secret Boxes x2 (up to 15 boxes a day) \n[*] Each time you score 1 kill with a rifle weapon in Zombie Hero/Zombie Evolution/Zombie Z modes, you'll receive Sonya's Secret Box x1 (up to 2 boxes a day)[/list]\n[b]Sonya's Secret Boxes Content (You will get one of the below items, with a different chance to receive each reward.)[/b][list][*] SG552 Cerberus (Permanent)\n[img]{STEAM_CLAN_IMAGE}/6770740/c0131ea52c8c3927b433ad5f2b208740ceb195a1.png[/img]\n- A special assault rifle that holds 50 rounds of .50-caliber special ammunition, perfect for use against zombies. When you fire beyond a certain number of rounds, the rifle's secondary mode becomes available. Firing in secondary mode triggers an additional attack: a big swipe at the first target hit, inflicting damage to the target and all enemies to its left and right.\n[*]SG552 Lycanthrope +0-+6 (Permanent)\n[*]Sonya Lycanthrope (Permanent)\n[*]Lycanthrope Wolf Tail (Permanent)\n[*]50 - 1,000 mileage[/list]\n[b]Notice[/b][list][*] You can only receive up to 20 Sonya's Secret Boxes a day, regardless of the number of boxes you might have earned from missions.\n[*] Rifle weapons for the special mission are limited to the weapons below.\n- M4A1 Dark Knight, AK-47 Paladin, AUG Guardian, SG552 Lycanthrope, SG552 Cerberus, Plasma Gun, Tornado, OICW, Hunter-Killer X-15, or Compound Bow\n[*] Participation will only count in rooms with four or more players (excludes Studio Mode).\n[*] Minimum playtime of 5 or more minutes for Zombie Scenario mode.\n[*] All unused Sonya's Secret Boxes will be removed on the day the event ends.[/list]\n\n[h3]SG552 Cerberus Release Celebration Guaranteed Giveaway (9/23 - 10/13)[/h3]You will receive event points when you use the Sonya's Secret Boxes you earned during the event. Accumulate points to fill the event gauge, and receive the SG552 Cerberus (Permanent)!\n\n[b]Event Gauge Rewards[/b][list][*] Event Decoder x3 for reaching 50 points\n[*] SG552 Cerberus (7 Days) x1 + Sonya's Secret Box x10 for reaching 100 points\n[*] 5000 mileage for reaching 150 points\n[*] Event Decoder x3 + Transcendence Decoder x3 for reaching 250 points\n[*] SG552 Cerberus (Permanent) x1 for reaching 300 points\n[*] Grade 5 Parts Reward Box x5 + Weapon Enhancement EXP Coupon (200) x1 for reaching 330 points\n[*] Grade 5 Parts Reward Box x5 + Weapon Enhancement EXP Coupon (200) x1 for reaching 350 points\n[*] Grade 5 Parts Reward Box x5 + Weapon Enhancement EXP Coupon (200) x1 for reaching 370 points\n[*] Grade 5 Parts Reward Box x5 + Weapon Enhancement EXP Coupon (200) x1 for reaching 390 points\n[*] Grade 5 Parts Reward Box x5 + Weapon Enhancement EXP Coupon (200) x1 for reaching 410 points\n[*] Transcendence Decoder x5 for reaching 430 points[/list]\n[b]Notice[/b][list][*] Earn 1 point each time you use 1 of Sonya's Secret Boxes.\n[*] Rewards for each stage can be earned only once per account.\n[*] Rewards are distributed immediately upon reaching each milestone.\n[*] All accumulated points will be removed when the event ends.[/list]\n\n\n[h2]Bug Fix[/h2]\n[list][*]All-star mode, exploration-related bug fixed.[/list]",
      feedlabel: "Community Announcements",
      date: 1632373881,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 273110,
      tags: [
        "patchnotes",
        "mod_reviewed",
        "ModAct_487266167_1632376427_0",
        "mod_require_rereview",
      ],
    },
    {
      gid: "3936699406867690073",
      title:
        "PUBG player launches car like a medieval catapult, scores double kill",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PC Gamer/3936699406867690073",
      is_external_url: true,
      author: "Morgan Park",
      contents:
        '<img src="https://cdn.mos.cms.futurecdn.net/xoaBmURURo95Vse5YaBigP.jpg"/><br><br>\n                s a fan of sick vehicle stunts in videogames, I&apos;ve seen a lot of impressive stuff. I&apos;ve watched GTA 5 players bounce cars up to skyscrapers, Warzone pilots chop up the competition with helicopter blades, and Battlefield daredevils leap out of a jet, bazooka another jet, and get back in...\n                <a href="https://www.pcgamer.com/pubg-player-launches-car-like-a-medieval-catapult-scores-double-kill?utm_source=steam&utm_medium=referral" target="_blank">Read more.</a>',
      feedlabel: "PC Gamer",
      date: 1632349258,
      feedname: "PC Gamer",
      feed_type: 0,
      appid: 578080,
    },
    {
      gid: "3936699406867533312",
      title: "A20 Dev Stream Series Part 3",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406867533312",
      is_external_url: true,
      author: "The Fun Pimp",
      contents:
        "Reminder!\nTFP continues the Developer Stream series Tonight Sept. 22nd at 9 PM CST. Join the Character, Animation and Special FX Team with Host & Senior Developer Lathan (@fubar_prime) for an in-depth look at the new HD Characters, Animations & Special FX Tech. \n\nTune in tonight for a chance to win Free Game Keys!\n\nhttps://www.twitch.tv/fubar_prime\n\n",
      feedlabel: "Community Announcements",
      date: 1632347094,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 251570,
    },
    {
      gid: "3936699406866826711",
      title: "[Game Hotfix] - 479502",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406866826711",
      is_external_url: true,
      author: "Klei-JoeW",
      contents:
        "[list]\n[*] The following creatures can now be stun locked for a number of hits: MacTusk, Wee MacTusk, No-Eye-Deer, Pigmen (all types), Merms, Bunneymen, Bee Queen, and Celestial Champion (phase 3).\n[*] Fixed the Tail o' Three Cats not showing while equipped.\n[*] Fixed Woodie's movement speed when transforming into a were-form while in a storm.\n[*] Fixed a rare crash when using the Slingshot.\n[*] Woby, while in big form, should no longer occasionally run away when Walter approaches.\n[*] Updated various skins to match the skin tones of the character wearing it.\n[/list]",
      feedlabel: "Community Announcements",
      date: 1632330326,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 322330,
      tags: ["patchnotes"],
    },
    {
      gid: "3936699406866680970",
      title: "Fall into exclusive rewards at the Fall Festival!",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406866680970",
      is_external_url: true,
      author: "armed_joy",
      contents:
        "Greetings, bean fans. To help celebrate the Mid-Autumn Festival, we’re getting into the spirit of togetherness (and tasty, tasty mooncakes!) with our very own [b]Fall Festival[/b]—featuring loads of Fall-flavoured fun! Players will need to Squad up for success, with exclusive in-game goodies for those who cooperatively conquer the Blunderdome…\n\n[previewyoutube=_WeEvclMLp8;full][/previewyoutube]\n\nThe festivities begin [b]September 21[/b] with the [b]Squad Celebration Show![/b] Face off as a four in Squads mode for non-stop tactical team action—win together, or it’s a collaborative trip to the slime. This Show is the perfect place to rack up Challenge Points for the [b]Fall Festival Limited Time Event,[/b] featuring an [b]exclusive Lion Dance costume[/b] and plenty more besides...\n\n[img]{STEAM_CLAN_IMAGE}/35211414/f01ec54d7b7a0570a9c111f5ca5b6e621b003295.png[/img]\n\n[h2]Fall Festival Limited Time Event - 21-27  September[/h2]\nDive in to complete limited-time challenges and rack up points for extra-special Fall Festival cosmetics:\n\n[list]\n[*] ‘Mooncakes’ Pattern - 100 points\n[*] 300  Kudos - 200 points\n[*] ‘Lion Dance’ Costume (lower) - 300 points\n[*] ‘Lion Dance’ Costume (upper) - 400 points\n[*] 600  Kudos - 500 points\n[*] ‘Fall Festival Fanatic’ Nickname - 600 points\n[/list]\n\nTime to assemble your Squad! We’ll see you in the Blunderdome.",
      feedlabel: "Community Announcements",
      date: 1632326870,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 1097150,
    },
    {
      gid: "3936699406866359671",
      title: "Negan & Maggie from AMC’s The Walking Dead charge into Valhalla!",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406866359671",
      is_external_url: true,
      author: "whitesheepie",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/5885034/9b22e1c649762055be8ae0b61e5aed870f7d8fd7.jpg[/img]\n\n[i]Negan and Maggie from AMC’s The Walking Dead join the fight in Part II of this Epic Crossover Event! These two brand new Epic Crossovers have custom Signature effects, Weapon Skins, unique lock-in animations, and dedicated Roster spots. The event also features Rick, Michonne, and Daryl Epic Crossovers, the Walker Attack game mode as Brawl of the Week, the Days Gone Bye Podium, and the Walker’s Grasp KO Effect.[/i]\n\n[i]We also added a new Map for the Climb game mode, Siege of Lions, themed around our Battle Pass Season 4 - Order of the Exalted Lion. Play the new Map in Custom Lobbies![/i]\n\n[i]This patch update also includes a new Test Feature - Shadows! [/i][i]Legends and items will cast a shadow directly below them, so please let us know your thoughts on this visual improvement.[/i][b][i][/i][/b][i]Additionally, we made a few game improvements, bug fixes, and much more. For those in pursuit for Glory, the next Ranked Season 22 starts on October 6th.[/i]\n\n[i]To catch the latest Brawlhalla news and content, be sure to follow us on [/i][url=https://twitter.com/brawlhalla][i]Twitter[/i][/url][i], [/i][url=https://twitch.tv/brawlhalla][i]Twitch[/i][/url][i], [/i][url=https://www.facebook.com/brawlhalla][i]Facebook,[/i][/url] [url=https://www.youtube.com/Brawlhalla][i]YouTube[/i][/url][i], [/i][url=https://www.instagram.com/brawlhalla][i]Instagram[/i][/url][i] and [/i][url=https://discord.gg/brawlhalla][i]Discord[/i][/url][i]![/i]\n\n[img]{STEAM_CLAN_IMAGE}/5885034/b14bd7ac73fe5fc3f14506aa90bac32e2730be1b.png[/img]\n\n[i]The Great Halls of Valhalla are overrun by walkers, and Negan and Maggie join the fight in Part II of this Epic Crossover Event![/i]\n\n[i]Negan and Maggie are new Epic Crossovers that feature custom Signature effects, custom lock-in animations, dedicated Roster spots, and two new Weapon Skins. [/i]\n\n[i]In Brawlhalla, Negan and Maggie mirror the abilities of Jaeyun and Jhala, respectively, and will stay in Mallhalla after the event ends. The Walking Dead © 2021 AMC Film Holdings LLC. All rights reserved.[/i]\n[h1]Featuring:[/h1]\n[list]\n \t[*]Negan Epic Crossover - “You can breathe. You can blink. You can cry. Hell, you're all going to be doing that.”\n[list]\n \t[*]With Lucille and his Crowbar in hand, Negan is ready to make a strong first impression.[/*][/list]\n \t[*]Maggie Epic Crossover - “Some people can be redeemed. But others can't.”\n[list]\n \t[*]Maggie Rhee takes charge as a resourceful, strong-willed fighter with her Machete and Axe called A Sign from Above![/*][/list][/*][/list][img]{STEAM_CLAN_IMAGE}/5885034/b8ef8779761de24d6f10a2ec7e226051ac542ee0.png[/img]\n[h1]The Epic Crossover event also stars:[/h1]\n[list]\n \t[*]Rick Epic Crossover - “It’s all about survival now.”\n[list]\n \t[*]Armed with his Hatchet and Revolvers, Rick Grimes is here to show everyone what needs to be done to survive.[/*][/list]\n \t[*]Michonne Epic Crossover - “Nice never got me anywhere. But smart did.”\n[list]\n \t[*]Michonne, the expert swordswoman, is ready to fight - and she’ll do whatever it takes to win.[/*][/list]\n \t[*]Daryl Epic Crossover - “Today’s your lucky day, fellas.”\n[list]\n \t[*]Daryl Dixon has brought his motorcycle, his crossbow, and a few other weapons to come out on top![/*][/list][/*][/list][img]{STEAM_CLAN_IMAGE}/5885034/4b57e83e0fd0c0ee5c2d5fa80238ca6d2b50170f.png[/img]\n[h1]KO Effect[/h1]\n[img]{STEAM_CLAN_IMAGE}/5885034/ece89ae7c8b4acc245ad550c9b1841431fc0e35d.png[/img]\n[list]\n \t[*]Walker’s Grasp\n[list]\n \t[*]“There’s nowhere to run!”\n \t[*]Pummel your opponents into a slew of walker hands and debris with this new KO Effect![/*][/list][/*][/list]\n[h1]Podium[/h1]\n[img]{STEAM_CLAN_IMAGE}/5885034/854ae164ca7ffed600a8cd984731588da45d3802.png[/img]\n[list]\n \t[*]Days Gone Bye\n[list]\n \t[*]“We can’t hold them!”\n \t[*]Have your Legend stand on top to fend off the walker horde. This animated Podium features grasping walker hands, a heavy machine gun, and lock-in sound effects![/*][/list][/*][/list]\n[i]The Walking Dead Epic Crossover event also includes:[/i]\n[list]\n \t[*]Walker Attack featured as the Brawl of the Week!\n \t[*]Daily login bonus of 250 Gold to celebrate this Epic Crossover event.\n \t[*]New main menu splash art featuring Negan and Maggie![/*][/list]\n[img]{STEAM_CLAN_IMAGE}/5885034/0558b32410a8199f164a89362810727babf26e02.png[/img]\n\n[i]Survive the walker onslaught! Battle through loads of walker opponents that get harder and smarter as time passes. Beware, the longer you fight the more walkers appear! Earn points by scoring KOs. Survive as long as you can to win the most points![/i]\n[list]\n \t[*]3 Stocks\n \t[*]Walkers increase in difficulty and in number as time passes.\n \t[*]Survive as long as you can!\n \t[*]Player with the most points wins![/*][/list][img]{STEAM_CLAN_IMAGE}/5885034/5554608cce019e03a790ec5666cc6f83afaeb7df.png[/img]\n[img]{STEAM_CLAN_IMAGE}/5885034/60772290a6c503d303451178b4243510b8f4da97.png[/img]\n[list]\n \t[*]Follow the sheriff badges to locate all of The Walking Dead items.\n \t[*]The Solidarity Emote benefiting Campaign Zero is still available. To find out more information about this non-profit organization, check out [url=https://www.joincampaignzero.org]www.joincampaignzero.org[/url].\n \t[*]Looking for a certain chest? We’re rapidly rotating through chests, so check out the in-game timer to know when the next chest will rotate.\n \t[*]Find the new Sales items![/*][/list][img]{STEAM_CLAN_IMAGE}/5885034/8785c100d312b322f73916e79836d11188cd9a78.png[/img]\n[img]{STEAM_CLAN_IMAGE}/5885034/9e3f99d4851ff632c0300a803b2d7193057a3f83.png[/img]\n\n[i]The Fortress is under siege, so prepare for battle! The Climb game mode receives a new Map themed after our Battle Pass Season 4 - Order of the Exalted Lion.[/i]\n[list]\n \t[*]Players can play on the new Map in Custom Lobbies when selecting the Climb game mode.\n \t[*]This new Map will also be featured in a future Brawl of the Week.\n \t[*]Beautiful new platform art themed around the Order of the Exalted Lion.\n \t[*]A new fireball cannon trap lies waiting for unsuspecting opponents![/*][/list][img]{STEAM_CLAN_IMAGE}/5885034/ea72676a68d7e69ddf01f2df79b404fed8c62152.png[/img]\n[img]{STEAM_CLAN_IMAGE}/5885034/40b89196c886f45b86b58659e018182b0b21e04a.png[/img]\n\n[i]In this update, we added a new Test Feature where Legends, items, and other entities will cast a shadow directly below them.[/i]\n[list]\n \t[*]The shadows casted will display on any platforms. The intent is to help players better accurately gauge where they will land.\n \t[*]Other entities can include other world items like weapons, projectiles, items, walkers, etc.\n \t[*]This Test Feature is part of our efforts to continue improving the quality of life of Brawlhalla.[/*][/list]\n[i]Please let us know how this visual improvement feels! Share your feedback on our [/i][url=http://twitter.com/brawlhalla][i]Twitter[/i][/url][i] and [/i][url=http://discord.gg/brawlhalla][i]Discord[/i][/url][i]. More information can be found at [/i][url=https://brawlhalla.com/test-features][i]brawlhalla.com/test-features[/i][/url][i].[/i]\n[img]{STEAM_CLAN_IMAGE}/5885034/372557db8ff25b3cb60c1ad927ef774f5cccba16.png[/img]\n\n[img]{STEAM_CLAN_IMAGE}/5885034/54cdb6df097076d0b9a9a9cbae0168333aa449ae.png[/img]\n\nUser Interface\n[list]\n \t[*]Improved messages to be clearer around game rooms.[/*][/list]\nAnimation\n[list]\n \t[*]Adjusted the Share a Slice Emote to work better with certain Skins.[/*][/list][img]{STEAM_CLAN_IMAGE}/5885034/26d413c697c539da8f1c74d765d257f77eddc72d.png[/img]\n\nUser Interface\n[list]\n \t[*]Fixed a bug where the heads in the HUD weren't properly updating on swap in the Morph game mode.[/*][/list]\nUser Experience\n[list]\n \t[*]Fixed a bug where joining a room after spectating could result in the \"Searching for players...\" screen coming up erroneously and the player not being able to join the game without leaving and coming back.[/*][/list]\nAnimation\n[list]\n \t[*]Fixed a visual bug where the forearm bones were flipping in the Scythe landing animation.\n \t[*]Fixed a visual bug where Soulbound Diana's Side Bow FX could play after getting knocked out of the attack.[/*][/list][img]{STEAM_CLAN_IMAGE}/5885034/de610799f10659963c01f2c1e5a5c306dbed3e82.png[/img]\n\n[i]The free-to-play Legend rotation for this week includes: Reno, Sir Roland, Zariel, Jaeyun, Artemis, Dusk, Onyx, Teros, and Ada.[/i]\n[list]\n \t[*]Reno - Four arms, compound eyes, fearlessness, and an added dose of genius make this Chitnoid Gunslinger the greatest bounty hunter this side of the Pecosid asteroid belt. He’ll take on any job with his trusty Blasters, and loyal Orb companion.\n \t[*]Sir Roland – No one in Valhalla feels a greater thirst for victory in the tournament than Sir Roland, as he strikes down his opponents with Rocket Lance and Sword.\n \t[*]Zariel – The Celestial, a warrior deity of Holy Justice, who abides in blessed Elysium. Zariel uses Gauntlets and Bow to take down both Demon hordes and any warrior participating in the Grand Tournament.\n \t[*]Jaeyun - The legendary mercenary who has traveled across the Old Kingdom on the back of his dragon turtle companion Imugi, Jaeyun has discovered new riches and sights in Valhalla! He brings the Greatsword and Sword to battle in the Grand Tournament.\n \t[*]Artemis – Transversing the universe in search of her rival Orion, Artemis has ripped open a wormhole into Valhalla, armed with a Rocket Lance and Scythe; she is ready to fight!\n \t[*]Dusk - Wielding his Spear and a powerful Orb, carved from stone and magic, Dusk seeks to spread chaos throughout Valhalla.\n \t[*]Onyx - The powerful Guardian and Protector of Castle Batavia, Onyx has been offered a place in Valhalla and now defends it ruthlessly with her Cannon and Gauntlets.\n \t[*]Teros – This Minotaur is indifferent to the rules or intent of the Tournament, and instead, takes savage joy in all the battles while crushing his opponents with Axe and Hammer.\n \t[*]Ada – Armed with Blasters and Spear, this nano-tech, elite combat hacker aims to win in the Grand Tournament.[/*][/list][img]{STEAM_CLAN_IMAGE}/5885034/493eb5af1858d52e395c1266e3c9fd792c316ff1.jpg[/img]",
      feedlabel: "Community Announcements",
      date: 1632319245,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 291550,
      tags: ["workshop"],
    },
    {
      gid: "3936699406865855843",
      title: "Patch Notes - v2021.8.1",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3936699406865855843",
      is_external_url: true,
      author: "Joel",
      contents:
        '[h3]Patch Notes[/h3]\n[list] [*] One Fuse Box has been removed from each area, bringing it down to 4/3/2.\n[*] Fuse & Tamper Boxes will now make a much louder noise, that can be heard from a significant distance away, if they were hit to be destroyed. If you wish to do this stealthily, interacting with these objects is much quieter.\n[*] The Fuse Boxes in the final area now reduce 30s of time, in line with the other areas. The total amount of time that can be reduced in this area is the same as before this patch.\n[*] The amount of blood required to get the later executions has been slightly increased. It still only take 3 blood to get your first execution.\n[*] You can now hover over the score multiplier at the end of the game to see where you got your bonuses from.\n[*] Queueing Ranked will once again show how many others are currently in queue.\n[*] You will no longer get a dodge penalty if you leave whilst being electrocuted (voted out).\n[*] Our in-game translations have been updated thanks to our Communtiy Translators!\n[*] [FIXED] Players are able to get double the intended time reduction from each Fuse Box.\n[*] [FIXED] Several challenges are unable to be completed (including "Day Period #5", "Night Period #4" & "Objectives #3").\n[*] [FIXED] Challenges that require you to do certain actions within one area don\'t always work (for example "Alex #3").\n[/list]\n\nSee you in-game!\nThe Deceit Team\n[url=https://twitter.com/playdeceit]Twitter[/url] | [url=https://instagram.com/playdeceit]Instagram[/url] | [url=https://discord.gg/deceit]Discord[/url]',
      feedlabel: "Community Announcements",
      date: 1632307294,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 466240,
      tags: ["patchnotes"],
    },
    {
      gid: "5418383147754772991",
      title:
        "Rainbow Six Siege's Wild West game mode returns for a limited time",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/5418383147754772991",
      is_external_url: true,
      author: "editor@pcgamesn.com",
      contents:
        '<img width="900" height="507" src="https://www.pcgamesn.com/wp-content/uploads/2021/09/rainbow-six-siege-showdown-ltm-900x506.jpg"/><p><a href="https://www.pcgamesn.com/rainbow-six-siege">Rainbow Six Siege</a> - sorry, Tom Clancy\'s Rainbow Six Siege: A Ubisoft Original, as the official logos now call it - has entered Y6S3 with Crystal Guard, and starting today, you\'re getting another reason to keep playing. The Wild West-themed Showdown event is returning for a limited time, so grab your six-guns and get ready for a shootout.</p>\n<p>Just like it was <a href="https://www.pcgamesn.com/rainbow-six-siege/showdown">previously</a>, this is a 3v3 limited time mode where a group of defenders - the \'Law\', allowing you to play as Maverick, Ash, Twitch, Capitao, and Glaz - hold the line against some criminal attackers - the \'Graveltop Gang\', made up of Alibi, Kaid, Caveira, Maestro, and Rook. You\'ll do battle on the unique Fort Truth map with a limited HUD, only equipped with the BOSG 12.2 or LFP586.</p>\n<p>The event runs from September 21 through September 28, when it\'ll ride off into the sunset once again. The Showdown Collection also returns for the duration, offering 31 cosmetics made up of both old and new items.</p>\n<p><a href="https://www.pcgamesn.com/rainbow-six-siege/showdown-ltm">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.pcgamesn.com/rainbow-six-siege/crystal-guard-free-weekend">Rainbow Six Siege gets a free weekend for Crystal Guard\'s launch</a><br />\n<a href="https://www.pcgamesn.com/rainbow-six-siege/thunderbird-sixth-guardian">Rainbow Six Siege\'s Indigenous operator gets a new skin to support an Indigenous charity</a><br />\n<a href="https://www.pcgamesn.com/rainbow-six-siege/afk">Rainbow Six Siege devs are cracking down on AFKers</a></p>',
      feedlabel: "PCGamesN",
      date: 1632255639,
      feedname: "PCGamesN",
      feed_type: 0,
      appid: 359550,
    },
    {
      gid: "5418383147754588457",
      title: "Trickshot Update is now Live!",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147754588457",
      is_external_url: true,
      author: "HiRezRomanova",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/26305398/ab748a1371a1cc39272bc4062182a469beb2691f.png[/img]\n\n[h1]New Champion: Saati, The Trickshot[/h1]\n[img]{STEAM_CLAN_IMAGE}/26305398/f2d60b9debf3bfbd4aaa1a6653f1ff1280801eb7.jpg[/img]\n\nNo expense is spared to be the best of the best. She may work for money, but she makes her money work for her -- with the latest equipment to complement her skills. You may try to take cover, but not even solid cover can save you from Saati, the Trickshot.\n\nTo you, a coinflip is a gamble. For her, it's an opportunity. If you hear that she's after your bounty, you might as well stop running and meet her face to face -- either way, it only delays her next night out. \n\nThe biggest marks yet still walk the Realm, and those big bounties will fund a LOT of carousal.\n\n[img]{STEAM_CLAN_IMAGE}/26305398/e1fa45dd39e6f4be394108cee516bf178dda3a7a.png[/img]\n\nIn addition to Saati, Paladins is welcoming our Nightfall Event Pass featuring Corvus and Skye.\n\n[img]{STEAM_CLAN_IMAGE}/26305398/5c068bf253aa3a38104200cf920083f0550f4007.png[/img]\n\n[img]{STEAM_CLAN_IMAGE}/26305398/f31a05a07b1a1c7e89f28d250cadd057effd9790.jpg[/img]\n\nTake to the shadows with our latest Event Pass - Nightfall! Instantly unlock Count Corvus for purchasing, and unlock a total of 24 levels of rewards as you play!\n\nPlayers can also purchase a Buy All option to get all content in the Nightfall Event Pass instantly!\n\nTo read the full Update Notes and see the content of the Nightfall Event Pass [url=https://paladins.com/news/trickshot-update-notes]click here[/url].",
      feedlabel: "Community Announcements",
      date: 1632251455,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 444090,
    },
    {
      gid: "5418383147754202417",
      title:
        "A year into Early Access and Phasmophobia is still ugly, janky and dull—I love it",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PC Gamer/5418383147754202417",
      is_external_url: true,
      author: "Fraser Brown",
      contents:
        '<img src="https://cdn.mos.cms.futurecdn.net/R35yqTgvzooqLjRiqLbpNS.jpg"/><br><br>\n                Phasmophobia, the <a href="https://www.pcgamer.com/best-co-op-game-2020-phasmophobia/" target="_blank">best co-op game of 2020</a>, is celebrating its <a href="https://www.pcgamer.com/phasmophobias-anniversary-update-takes-some-sting-out-of-losing/" target="_blank">first anniversary</a>. Ghost hunters can wear ugly party hats, and the garage that serves as a base is now filled with balloons and awful techno music. Both the balloons and the party hats appear to be made out of sheet metal, and entering the garage you might find yourself stuck in a crouching position. It&apos;s still very wonky, looks like shit, and I&apos;m besotted with it...\n                <a href="https://www.pcgamer.com/a-year-into-early-access-and-phasmophobia-is-still-ugly-janky-and-dulli-love-it?utm_source=steam&utm_medium=referral" target="_blank">Read more.</a>',
      feedlabel: "PC Gamer",
      date: 1632241111,
      feedname: "PC Gamer",
      feed_type: 0,
      appid: 739630,
    },
    {
      gid: "5418383147753979582",
      title: "5.2.2 | Bugfix Patch",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147753979582",
      is_external_url: true,
      author: "Peanits",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/11814497/4ffca4a199ae781512789113173f9efe113ffda6.png[/img]\n[h2]Content[/h2]\n[list]\n[*] Reverted the pallet to the old visuals. The updated pallet will return in a future update.\n[/list]\n[h2]Bug Fixes[/h2]\n[list]\n[*] Fixed an issue that caused several Cenobite scoring events to incorrectly count as Bonus BP\n[*] Fixed an issue with the Nemesis' move speed while charging Level 3 Tentacle Strike\n[*] Fixed an issue that caused the Survivor models in a lobby to not always reflect what the other Survivors selected.\n[*] Fixed an issue that caused players to not always receive disconnection penalties when leaving a match as Killer.\n[*] Fixed an issue that may cause a loss of momentum when changing directions during a lunge attack when playing as the Cenobite.\n[*] Fixed an issue that caused the Cenobite's chase music not to restart after using Summons of Pain during a chase.\n[*] Fixed an issue that caused the Cenobite's Lament Guardian score event to be counted in an incorrect category.\n[*] Fixed an issue that caused a grunt sound effect to be played when switching to the Cenobite when spectating a custom game.\n[*] Fixed an issue that a \"generator completed\" sound notification to play when switching between Victor and Charlotte or when switching spectated players.\n[*] Fixed an issue that caused the Engineer's Guild archive quest not to progress.\n[*] Fixed an issue that caused two hooks too close to one another at the east stairs in Resident Evil map.\n[*] Fixed an issue that caused one side of the pallet in Gideon Meat Plant can't be destroyed by the killer,\n[*] Fixed an issue where the Cenobite's Gateway SFX continues to play after triggering the attack.\n[*] Fixed an issue that caused the chain hunt start notification sound to trigger when switching to a survivor's perspective while spectating.\n[*] Fixed several misaligned banners in the Store.\n[*] (PC only) Fixed an issue with 4K resolution being enabled by default for some players, sometimes resulting in performance drop\n[*] Fixed a possible softlock when spamming the ESC key during the Loading screen\n[*] Fixed an issue with the Grade Reset popup not opening if the date changed while the Game is still opened\n[*] Fixed a crash in the Tally screen related to the Season End Grade Reset\n[/list]\n[h2]Known Issues[/h2]\n[list]\n[*] The Dead Dawg Saloon map is disabled and is planned to be fixed for the next update.\n[/list]",
      feedlabel: "Community Announcements",
      date: 1632237014,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 381210,
      tags: ["patchnotes"],
    },
    {
      gid: "5418383147753840786",
      title: "OPREP - S.O.G. Update 1.1 Preview",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147753840786",
      is_external_url: true,
      author: "Nillers",
      contents:
        "[b]UNIT:[/b] Savage Game Design\n[b]TO:[/b] Arma 3 Users\n[b]OPSUM:[/b] Sneak preview of the upcoming S.O.G. Prairie Fire 1.1 Update\n\n[url=https://dev.arma3.com/post/oprep-sog-update-11-preview][img]{STEAM_CLAN_IMAGE}/2799889/8d45277300ba976d2e0b3396cab0d0fc5c997da2.png[/img][/url]\n\n[b]EVALUATION[/b]\n\nHello Arma 3 players!\n\nThe team behind S.O.G. Prairie Fire is excited to be soon rolling out our first update with many fixes and quality-of-life improvements, and new content to take you deeper into the Vietnam War Special Forces experience.\n\nRight now it is only available on the [url=https://arma3.com/dlc/creator#public-testing]RC-Branch[/url] for public pre-release testing, but it will be released to the main branch of Arma 3 very soon.\n\n[b][url=https://dev.arma3.com/post/oprep-sog-update-11-preview]Full Report[/url][/b]\n\nhttps://store.steampowered.com/app/1227700/Arma_3_Creator_DLC_SOG_Prairie_Fire/",
      feedlabel: "Community Announcements",
      date: 1632233715,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 107410,
    },
    {
      gid: "5418383147753664952",
      title: "New In SMITE - The Cleanliness vs. Godliness Update",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147753664952",
      is_external_url: true,
      author: "HiRezDandy",
      contents:
        "[h2]New God Skins[/h2]\nIron Maid Bellona\n[img]{STEAM_CLAN_IMAGE}/10028503/162a21c0947d200ea630e0862d0a5e0f928ce5ff.jpg[/img]\nBattle Mother Nu Wa\n[img]{STEAM_CLAN_IMAGE}/10028503/53b01d7e331cfd488bbb10736bd0b9dc5d73cebd.jpg[/img]\nDeliverer Nemesis\n[img]{STEAM_CLAN_IMAGE}/10028503/eb59dbde5177691da2911b3b5c45d00cc426897a.jpg[/img]\nDeadly Dinner Discordia\n[img]{STEAM_CLAN_IMAGE}/10028503/1ff5c17f2d2150f7a589b07dec478f1501d27d88.jpg[/img]\nPrince of the Night Hou Yi\n[img]{STEAM_CLAN_IMAGE}/10028503/8815fec123fa2e5f21adee9808a5eb70f1ae1a6d.jpg[/img]\nSentai Mulan\n[img]{STEAM_CLAN_IMAGE}/10028503/6829b818f555e9849752f9d373afaf7c49f50ded.jpg[/img]\nToxic Tide He Bo\n[img]{STEAM_CLAN_IMAGE}/10028503/b923f3f3828ff59af07d87decd4b02384a88c2cf.jpg[/img]\nJurassic Slasher Cernunnos\n[img]{STEAM_CLAN_IMAGE}/10028503/47df512fc3dfef69253f1bfc6c04012b5dd2c0cb.jpg[/img]\nThere are also a TON of new and exciting changes coming to SMITE, including Updates to Ranked Requirements, Balance changes for both Assault & Conquest maps, and a TON of Item & God balance changes!",
      feedlabel: "Community Announcements",
      date: 1632229548,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 386360,
    },
    {
      gid: "5418383147753398302",
      title:
        'Дизайнер квестов "Ведьмак 3" перешел в Riot Games - он будет работать над амбициозной MMO во вселенной League of Legends',
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/Gamemag.ru/5418383147753398302",
      is_external_url: true,
      author: "Дмитрий Чистяков",
      contents:
        '<img src="https://gamemag.ru/images/cache/News/News160082/fe79a1f855-3_1390x600.jpg" alt=""><p>Бывший дизайнер квестов CD Projekt RED <strong>Матеуш Томашкевич</strong> присоединился к<strong> Riot Games </strong>для работы над амбициозным MMO-проектом во вселенной <strong>League of Legends</strong>.</p>',
      feedlabel: "Gamemag.ru",
      date: 1632214449,
      feedname: "Gamemag.ru",
      feed_type: 0,
      appid: 1091500,
    },
    {
      gid: "5418383147753013872",
      title: "30% OFF WEAPON MODS + VEHICLE UPGRADES",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147753013872",
      is_external_url: true,
      author: "Reto.Umbra",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/6214122/73fb60ffd4ffa615673057d122b23809070bbbb7.jpg[/img]\n[h3]Soldiers![/h3]Now is the time to specialize your play style!\nMod your weapons and upgrade your vehicles at a discount, limited time only!*\n\n[h2]30% OFF WEAPON MODS + VEHICLE UPGRADES WITH GOLD![/h2]\n\n[h3]TAKE UP ARMS AND START YOUR ENGINES NOW![/h3]\nCheers!\nRETO MOTO\n\n[i]* Sale ends Tuesday, Sept. 28th 2021 @ 10AM CEST[/i]",
      feedlabel: "Community Announcements",
      date: 1632214103,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 227940,
      tags: ["workshop"],
    },
    {
      gid: "5418383147750464474",
      title:
        "Stardew Valley player introduces gladiatorial combat to the chill farming sim",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/5418383147750464474",
      is_external_url: true,
      author: "editor@pcgamesn.com",
      contents:
        '<img width="900" height="507" src="https://www.pcgamesn.com/wp-content/uploads/2021/09/stardew-valley-arena-mod-900x506.jpg"/><p><a href="https://www.pcgamesn.com/stardew-valley" target="_blank" rel="noopener noreferrer">Stardew Valley</a> is a <a href="https://www.pcgamesn.com/relaxing-games-chill-games" target="_blank" rel="noopener noreferrer">chill game</a> about farming and learning to grow within your limits. It\'s only natural, then, that a modder adds a pinch of chaos every now and then. We once reported on a mod that adds a <a href="https://www.pcgamesn.com/stardew-valley/mod-horde-mode" target="_blank" rel="noopener noreferrer">horde mode with homicidal scarecrows</a>, but the most recent fan-made addition to catch our eye is more about arena-based combat.</p>\n<p>XxHarvzBackxX\'s Arena Challenges mod introduces a new location where you can go to defeat monsters for rewards - are you <em>not</em> entertained? The challenges range in difficulty but you\'ll be rewarded for your time and effort.</p>\n<p>The modder explains that you can find the arena by heading to a door in the mines. Once you enter, you\'ll be brought to a lobby of sorts. There you\'ll see a chap at a desk who will whisk you away to the arena after asking a slew of questions. If you complete the challenge, you\'ll get a reward that\'s proportional to the difficulty you selected. The modder doesn\'t give much away about what prizes are on offer, though they\'re "very valuable".</p>\n<p><a href="https://www.pcgamesn.com/stardew-valley/arena-mod">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.pcgamesn.com/stardew-valley/sales">Stardew Valley has sold 15 million copies, including five million in the past two years</a><br />\n<a href="https://www.pcgamesn.com/stardew-valley/next-game">Stardew Valley creator\'s next game may be announced "fairly soon"</a><br />\n<a href="https://www.pcgamesn.com/stardew-valley/lightyear-frontier">Lightyear Frontier looks like Stardew Valley with a dash of No Man\'s Sky</a></p>',
      feedlabel: "PCGamesN",
      date: 1632153266,
      feedname: "PCGamesN",
      feed_type: 0,
      appid: 413150,
    },
    {
      gid: "5418383147750313644",
      title: "Coming Soon: Devstream #157",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147750313644",
      is_external_url: true,
      author: "[DE]Zach",
      contents:
        "Tenno!\n\nOur Devs are heads down on The New War, but that doesn’t mean no Devstreams! \n\nWe want to sit down and chat all things Warframe with you. Of course - do keep in mind there is very little we can show of The New War to avoid spoilers, so this Devstream will be focusing more on some general [b]Quality of Life improvements and Q&A![/b] We also will be discussing [b]Nights of Naberus 2021 [/b]and looking at our October plans at large. Don’t miss it!\n\nSee you at [b]2:00 p.m ET on Friday, September 24[/b] at [url=twitch.tv/warframe]twitch.tv/warframe[/url]. \n\nWatch to earn yourself a Riven Cipher!\n",
      feedlabel: "Community Announcements",
      date: 1632150015,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 230410,
    },
    {
      gid: "5418383147746732075",
      title: "Steam Global Top Sellers for the Week ending 19 September 2021",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/SteamDB/5418383147746732075",
      is_external_url: true,
      author: "SteamDB",
      contents:
        '<a href="https://steamdb.info/topsellers/2021W37/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS"><img src="https://steamdb.info/topsellers/2021W37.png"></a><ol><li><a href="https://steamdb.info/app/1252330/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">DEATHLOOP</a></li><li><a href="https://steamdb.info/app/740130/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">Tales of Arise</a></li><li><a href="https://steamdb.info/sub/434697/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">DEATHLOOP</a></li><li><a href="https://steamdb.info/app/1203220/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">NARAKA: BLADEPOINT</a></li><li><a href="https://steamdb.info/app/1174180/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">Red Dead Redemption 2</a></li><li><a href="https://steamdb.info/app/1644960/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">NBA 2K22</a></li><li><a href="https://steamdb.info/app/1062090/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">Timberborn</a></li><li><a href="https://steamdb.info/sub/354231/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">Valve Index VR Kit</a></li><li><a href="https://steamdb.info/app/1063730/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">New World</a></li><li><a href="https://steamdb.info/app/892970/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">Valheim</a></li></ol><br><a href="https://steamdb.info/topsellers/2021W37/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">View more information and data on SteamDB</a>',
      feedlabel: "SteamDB",
      date: 1632009600,
      feedname: "SteamDB",
      feed_type: 0,
      appid: 740130,
    },
    {
      gid: "5418383147742436482",
      title: "Top 10 Mods and Assets of August 2021 with Biffa",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147742436482",
      is_external_url: true,
      author: "SimNationJan",
      contents:
        "[previewyoutube=BDqStxlAhiI;full][/previewyoutube]\nSee the top 10 talented creators who brought new life to the Workshop last month with their amazing contributions. \n\nFeaturing: \ntomzako, Quboid, H3llb0und, Zarrix, RAI, luminou, t1a2l, Harry, ModZilla, gatomo!\n\nParadox is rewarding each of these highlighted creators with discount codes. Be sure to check out their hard work! Link to Mods/Assets below\n\nTop 10 Collection on Steam Workshop:\nhttps://steamcommunity.com/sharedfiles/filedetails/?id=2592285577\n\nFollow Biffa and watch more tea-drinking tutorials here:\nhttps://www.youtube.com/BiffaPlaysIndie\n\n----------------------------------------------------------------------\n\nBe sure to subscribe for more Cities: Skylines content! https://pdxint.at/Subscribe\n\nOfficial Channels\nhttps://forum.paradoxplaza.com/forum/index.php?forums/cities-skylines.859/\nhttps://www.facebook.com/CitiesSkylines\nhttps://www.twitter.com/CitiesSkylines\nhttps://www.instagram.com/CitiesSkylines\n\nCommunity Channels\nhttps://www.reddit.com/r/CitiesSkylines/\nhttps://steamcommunity.com/app/255710/workshop/",
      feedlabel: "Community Announcements",
      date: 1631963038,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 255710,
      tags: ["workshop"],
    },
    {
      gid: "5418383147740158386",
      title: "3.21.28.0 Update Notes",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147740158386",
      is_external_url: true,
      author: "SDGNelson",
      contents:
        "[h1]Changelog:[/h1]\n\n[b]Changed:[/b]\n[list]\n[*]Server kick for exceeding ping threshold is better explained.\n[/list]\n[b]Fixed:[/b]\n[list]\n[*]Grass_2 and Grass_3 using wrong physics material.\n[*]Revert enabling character overlap recovery due to multiplayer exploits.\n[*]Prevent newlines and tabs in server listing short description.\n[*]Do not drop berries when attacking berry bush.\n[/list]",
      feedlabel: "Community Announcements",
      date: 1631908958,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 304930,
      tags: ["patchnotes"],
    },
    {
      gid: "5418383147738787013",
      title: "Luxion and his Treasures",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147738787013",
      is_external_url: true,
      author: "Amaliena",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/8957071/c6ee8ee19e6fdc016e31a95414aa5fc06f5199bf.jpg[/img]\n\nDiscover all the treasures that our majestic dragon - Luxion - has brought to our Hub.\n\n[b]Luxion will be waiting for you in the Light's Den from September 17, and he will magically disappear on September 20 at 11:00 am UTC.[/b]\n\n\nHere are some pictures of Luxion's special offers!\n[img]{STEAM_CLAN_IMAGE}/8957071/f7c3c3836dfc12f425fca6d7794d4fbe1382b9dc.png[/img]\n[b]Gabby Gobbler (Ally)\nBlizzard Behe-moth (Mount)\nKinshira of the Everdark Skies (Mount)\nSkeye Stalkers Wings (Wings)\nLorekeeper Dragon Egg Fragment (Egg Fragment)[/b]\n\n\nWhat are you waiting for ? Grab your dragon coins and hurry up, dear Trovians!\n\n[i]Luxion’s loot is a way for players who have missed out on time-limited items in the past to collect them directly. You will also find brand new items change out periodically for a higher amount of Dragon Coins. Items will repeat eventually, but it may take a while for a specific loot item to return, so be sure to check back every visit!\t[/i]\n",
      feedlabel: "Community Announcements",
      date: 1631876428,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 304050,
    },
    {
      gid: "5418383147737609488",
      title:
        "[SEP Mid-Month Update] Fixed bugs and optimized English translation",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147737609488",
      is_external_url: true,
      author: "IceDoubleshot",
      contents:
        "[b][0.8.3022 Version update] Updated at 10:00(CST) on 17 September 2021[/b]\n\n1. Fixed the problem where Kuafu in the main storyline might die when he was running out of energy influenced by Destinies, making the task impossible completed normally.\n\n2. Fixed the problem of love knot. ( When players lose the battle, NPC might rescue the players again )\n\n3. Fixed the problem that NPC's gift item log might be incomplete.\n\n4. Fixed the problem that NPC of Last Breath might give the props to others.\n\n5. Fixed the problem that special effects(Mount, Flying sword, Rainbow cloud, Xuangui and Sandalwood Boat) would missing.\n\n6. Fixed the problem that there was no mission guide for the Adventures mission (Runaway Girl, the girl of Xuanming).\n\n7. Fixed the problem that some events cannot get reward items which was triggered in the invitation scene.\n\n8. Fixed some texts display problems in traditional Chinese and English versions.\n\n9. Optimized part of the English translation.\n\n10. Fixed the problem that the dialogue does not match the characters.\n\n11. Fixed the problem of the abnormal display of the UI.\n\n12. Fixed the problem that some texts were too long for the display area.\n\n13. Fixed the problem of incomplete display of some texts.\n\n14. Fixed the problem of description texts of some props.\n\n15. Fixed the description texts of Ultimate Skills\n",
      feedlabel: "Community Announcements",
      date: 1631848491,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 1468810,
    },
    {
      gid: "5418383147735618241",
      title:
        "A No Man's Sky fan is recreating the Colosseum, and it looks pretty darn fantastic",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/5418383147735618241",
      is_external_url: true,
      author: "editor@pcgamesn.com",
      contents:
        '<img width="900" height="507" src="https://www.pcgamesn.com/wp-content/uploads/2021/09/no-mans-sky-colosseum-frontiers-update-build-900x506.jpg"/><p>It looks like the latest <a href="https://www.pcgamesn.com/no-mans-sky/frontiers-update">No Man\'s Sky update, Frontiers</a>, has got the <a href="https://www.pcgamesn.com/15-best-pc-space-games">space game\'s</a> fans inspired in all kinds of impressive ways. Introducing "living, breathing Mos Eisley-type settlements", hundreds of new base-building parts, an overhauled grid menu for this mechanic, and a ton more besides, the update has given fans scope to craft all kinds of structures they previously couldn\'t - and one particularly impressive example is a work-in-progress recreation of Rome\'s world-famous Colosseum.</p>\n<p>No Man\'s Sky fan Jesse Raynor has posted some shots of their WIP creation on Twitter, which you can see below - and it looks pretty darn spot on to me. Like the real thing, the No Man\'s Sky amphitheatre is an enormous circular structure with multiple levels - some of the top ones missing on one side, à la the real ancient Roman ruins - with architectural features and embellishments that make it instantly recognisable.</p>\n<p>It\'s already caught the eye of Hello Games founder Sean Murray, who\'s retweeted the post, and gained a whole lot of likes and impressed comments. "When I saw the new base parts I was like \'I can build a proper Colosseum\'", Raynor <a href="https://twitter.com/JesseRaynor16/status/1438154140115300352">says</a> in the replies, and they\'ve also <a href="https://twitter.com/JesseRaynor16/status/1438153558751285255">confirmed</a> that the build gets some great shadow effects, presumably when the sun\'s just right. Lovely.</p>\n<p><a href="https://www.pcgamesn.com/no-mans-sky/colosseum-frontiers-update-build">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.pcgamesn.com/no-mans-sky/mostly-positive-steam">Five years after launch, No Man\'s Sky has swung to \'mostly positive\' on Steam</a><br />\n<a href="https://www.pcgamesn.com/no-mans-sky/frontiers-update">No Man\'s Sky update adds "living, breathing Mos Eisley-type settlements"</a><br />\n<a href="https://www.pcgamesn.com/no-mans-sky/mod-sean-murray">No Man\'s Sky creator says please don\'t use this mod that puts his face in the game</a></p>',
      feedlabel: "PCGamesN",
      date: 1631800809,
      feedname: "PCGamesN",
      feed_type: 0,
      appid: 275850,
    },
    {
      gid: "5418383147735468739",
      title: "September 16, 2021 Update",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147735468739",
      is_external_url: true,
      author: "BS_SUN",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/28770675/7fa3b2ed47bd09bb7f3407eb20691802bc60f556.png[/img]\n\n[h3]Chuseok holiday special deals Available now![/h3]\n\nAs well, Chuseok attendance, where Gold key, Dead Leaves & Milky Way Boxes are obtainable.\nThe chance to get YUI is back. BS Coin & Medal item discount by 20% EXP & Gold Boost, more boost from Sep. 20 to Sep. 22. And more.\n\nHope you enjoy!\n",
      feedlabel: "Community Announcements",
      date: 1631797690,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 550650,
    },
    {
      gid: "5418383147734060945",
      title: "Bug Fix",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5418383147734060945",
      is_external_url: true,
      author: "bizviva22",
      contents:
        "- Fixed the bug where Awakening Tomes could not be bought from KP Shop or be used in Inventory\n- Fixed the bug where DP Coin could not be used in Inventory",
      feedlabel: "Community Announcements",
      date: 1631764279,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 844870,
      tags: ["patchnotes"],
    },
    {
      gid: "3936698772942297851",
      title: "RLCS 2021-22 format, schedule, prize pool, regions, and more",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/The Loadout/3936698772942297851",
      is_external_url: true,
      author: "editor@theloadout.com",
      contents:
        '<img width="900" height="507" src="https://www.theloadout.com/wp-content/uploads/2021/09/rlcs-2021-22-format-900x506.jpg"/><p>Psyonix\'s reveal of the 2021-22 season of the RLCS couldn\'t have been more jam-packed with juicy information. As well as the usual - dates, prize pools, and so on - we also got news of some huge expansion into four new regions, plus the confirmation that the RLCS is returning to LAN.</p>\n<p>The RLCS 2021-22 season will span from October 2021 all the way through to the end of June 2022, and along the way teams from a total of eight regions will compete for a share of an enormous total prize pool of $6 million. Of the eight regions, four of them are brand new to Rocket League esports, meaning we will have a truly global competition this time around.</p>\n<p>The season will include four live events which will take place in various destinations around the globe. There will be three Majors - one at the end of each of the three splits - and a <a href="https://www.theloadout.com/rocket-league/rlcs-2021-22-world-championship">$2 million RLCS World Championship</a> at the end of the season.</p>\n<p><a href="https://www.theloadout.com/rocket-league/rlcs-2021-22-format-schedule">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.theloadout.com/rocket-league/rlcs-region-expansion">RLCS 2021-22 season sees large regional expansion for Rocket League esports</a><br />\n<a href="https://www.theloadout.com/rocket-league/rlcs-lan-events-return">Rocket League targets Sweden for RLCS\' return to LAN events</a><br />\n<a href="https://www.theloadout.com/rocket-league/rlcs-2021-22-world-championship">RLCS 2021-22 season features revamped, $2 million World Championship</a></p>',
      feedlabel: "The Loadout",
      date: 1631736991,
      feedname: "The Loadout",
      feed_type: 0,
      appid: 252950,
    },
    {
      gid: "4020014731809940186",
      title: "Marvel's Agent Carter is Netflix's new Tomb Raider",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/4020014731809940186",
      is_external_url: true,
      author: "",
      contents:
        '<img src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-09-13-15-21/-1631542878203.jpg/EG11/resize/300x-1/quality/90/format/jpg" alt=""/><p>Hayley Atwell, best known as Marvel\'s Peggy Carter, is the voice of Lara Croft in Netflix\'s new Tomb Raider anime.</p><p>The award-winning actress will lend her voice to Lara Croft in the new Netflix show, which is set to follow the events of the rebooted Tomb Raider game trilogy. </p><p>In other words, Hayley Atwell\'s Croft will be the same, if slightly older, version of Lara played by Camilla Luddington in the Tomb Raider reboot and its sequels Rise of the Tomb Raider and Shadow of the Tomb Raider.</p><p><a href="https://www.eurogamer.net/articles/2021-09-13-marvels-agent-carter-is-netflixs-new-tomb-raider">Read more</a></p>',
      feedlabel: "Eurogamer",
      date: 1631550780,
      feedname: "eurogamer",
      feed_type: 0,
      appid: 203160,
    },
    {
      gid: "4020014731809404181",
      title:
        "Among Us Arena is a fan-made fighting game with some killer combos",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/4020014731809404181",
      is_external_url: true,
      author: "",
      contents:
        '<img src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-09-13-11-52/-1631530364214.jpg/EG11/resize/300x-1/quality/90/format/jpg" alt=""/><p>Indie hit Among Us doesn\'t look like it would make for the basis of a good fighting game, but one fan gave it a shot - and the result is great.</p><p><a href="https://starcutter.itch.io/among-us-arena" target="_blank">Among Us Arena</a>, by game creator starcutter, is a 2D fighting game with the characters from the original but many mechanics fighting game fans will find familiar. The video below, from YouTuber Cookietriangle, provides a good idea of what it\'s like:</p><p>The combo system looks like it has a decent amount to it. There are crossups, air dashes and even ground and wall bounces, as well as Among Us\' knife and gun attacks to splice into your strings. The video below, from fighting game combo afficionado HiFight, is a pretty cool day one effort:</p><p><a href="https://www.eurogamer.net/articles/2021-09-13-among-us-arena-is-a-fan-made-fighting-game-that-has-some-killer-combos">Read more</a></p>',
      feedlabel: "Eurogamer",
      date: 1631538180,
      feedname: "eurogamer",
      feed_type: 0,
      appid: 945360,
    },
    {
      gid: "4020014731794343496",
      title: "Annual Monster Hunter concert to stream online later this month",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/VG247/4020014731794343496",
      is_external_url: true,
      author: "",
      contents:
        '<img src="https://asset.vg247.com/monster_hunter_rise_v300_update-8.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/monster_hunter_rise_v300_update-8.jpg" /> <p>Details about the annual Monster Hunter orchestral concert were recently <a href="https://www.promax.co.jp/mhoc/2021/index.html?20210820">released</a>, an annual event that serves as a showcase for the music of publisher Capcom’s popular action series. Fans can watch the concert online on September 28.</p><p>Started in 2009 to celebrate the fifth anniversary of the series, the show has been yearly since 2014 as the composers of the games join with the Tokyo Philharmonic Orchestra to play some of the most memorable music in the series. In 2019, the show took to the road, playing five cities in Japan to celebrate the 15th anniversary. When the pandemic hit in 2020, though, the show was conducted online for the first time, allowing fans worldwide to enjoy the music.</p><p>Hirofumi Kurita will be handling conducting duties as he has since 2014, and series producer Ryozo Tsujimoto will give a behind-the-scenes speech. A host of other musicians will join them to play the music from the hit series.</p> <p><a href="https://www.vg247.com/monster-hunter-concert-online">Read more</a></p>',
      feedlabel: "VG247",
      date: 1631180666,
      feedname: "VG247",
      feed_type: 0,
      appid: 582010,
    },
    {
      gid: "4020014731789456846",
      title: "Garry's Mod has sold 20 million copies",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PC Gamer/4020014731789456846",
      is_external_url: true,
      author: "Shaun Prescott",
      contents:
        '<img src="https://cdn.mos.cms.futurecdn.net/jsmYPJwQaWaCDZkqJTp75R.jpg"/><br><br>\n                s the name implies, Garry&apos;s Mod was originally a Source Engine mod that let the user muck around with that engine&apos;s physics, models and props. The mod released in 2004, before spawning a standalone product on Steam in 2006. Now, in 2021, Garry&apos;s Mod has sold an astounding <a href="https://twitter.com/gmodofficial/status/1435332160894930946"><u>20 million copies</u></a>...\n                <a href="https://www.pcgamer.com/garrys-mod-has-sold-20-million-copies?utm_source=steam&utm_medium=referral" target="_blank">Read more.</a>',
      feedlabel: "PC Gamer",
      date: 1631064004,
      feedname: "PC Gamer",
      feed_type: 0,
      appid: 4000,
    },
    {
      gid: "4020014099102770594",
      title: "Have you ever gone to great lengths to save an NPC?",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/4020014099102770594",
      is_external_url: true,
      author: "",
      contents:
        '<img src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-09-06-11-40/-1630924817985.jpg/EG11/resize/300x-1/quality/90/format/jpg" alt=""/><p>\n    <strong>\n      <em>Spoiler warnings for Mass Effect 2.</em>\n    </strong>\n  </p><p>I\'m not sure why I liked Kelly Chambers so much. There\'s definitely more <em>exciting</em> characters in Mass Effect 2. She was just cool is all. They seemed so good together, her and my Shepherd, two straight-talking women on a ship full of neverending melodrama, quipping back and forth along the bridge. But I was trapped in a loveless relationship with the odiously boring Kaidan Alenko. So Kelly remained elusive: the steadfast second in command, a constant source of warmth, good sense and pragmatic kindness.</p><p>Anyway, she melted. In fact, most of my crew died in that final mission, but Kelly was the first, melting down into flesh chowder in a giant frosted glass tube. Afterwards I read that the only way to save everyone was to max out your relationship stats, upgrade your ship to the nth degree, and hightail it over to the suicide mission the <em>moment</em> you can. Reader, that\'s exactly what I did. I went back to the start and put another 30 hours into that game, telling myself I was getting value for money. But in my heart of hearts I knew it was all for Kelly.</p><p><a href="https://www.eurogamer.net/articles/2021-09-06-have-you-ever-gone-to-great-lengths-to-save-an-npc">Read more</a></p>',
      feedlabel: "Eurogamer",
      date: 1630933200,
      feedname: "eurogamer",
      feed_type: 0,
      appid: 24999,
    },
    {
      gid: "4020014099091744300",
      title: "Life is Strange: True Colors has a Twitch crowd vote plug-in",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/4020014099091744300",
      is_external_url: true,
      author: "",
      contents:
        '<img src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-09-03-11-14/-1630664048304.jpg/EG11/resize/300x-1/quality/90/format/jpg" alt=""/><p>Square Enix has released a crowd vote plug-in for Life is Strange: True Colors, which streamers can install now.</p><p>The Twitch extension can be customised so that viewers\' choices for big decisions are automatically implemented, or simply to poll the audience without them actually making the final call.</p><p>Life is Strange: True Colors launches next Friday, 10th September, but Twitch streamers can <a href="https://dashboard.twitch.tv/extensions/ppi0gsh1fr6f1negsjas7t7s5cqzgk-0.0.1">install the add-on</a> already to prepare for some of the game\'s tougher narrative choices.</p><p><a href="https://www.eurogamer.net/articles/2021-09-03-life-is-strange-true-colors-has-a-twitch-crowd-vote-plug-in">Read more</a></p>',
      feedlabel: "Eurogamer",
      date: 1630671120,
      feedname: "eurogamer",
      feed_type: 0,
      appid: 532210,
    },
    {
      gid: "4020014099087575273",
      title:
        "CD Projekt can't promise Cyberpunk 2077 or The Witcher 3 will launch on PS5, Xbox Series X/S this year",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/VG247/4020014099087575273",
      is_external_url: true,
      author: "",
      contents:
        '<img src="https://asset.vg247.com/cyberpunk_2077_081721.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/cyberpunk_2077_081721.jpg" /> <p><strong>Cyberpunk 2077</strong> and <strong>The Witcher</strong> developer <strong>CD Projekt</strong> has said it can’t guarantee the PS5 and Xbox Series X/S version of the sci-fi RPG or the 2015 fantasy epic will launch in 2021 – as previously outlined – though that is still the target date for the ports.</p><p>In the company\'s latest shareholders results call (thanks <a href="https://www.videogameschronicle.com/news/cyberpunks-developer-cant-guarantee-next-gen-versions-will-make-it-out-this-year/">VGC</a>), the company’s SVP of business development Michał Nowakowski noted that CD Projekt wants to learn from <a href="https://www.vg247.com/2020/12/10/cyberpunk-2077-ps4-xbox-one/">the disasterous launch of the game</a> back in 2020 and not over-promise and under-deliver once again.</p><p>&ldquo;The target is to release the next-gen version of Cyberpunk 2077 late this year,&rdquo; he said. &ldquo;At the same time, keeping in mind the lessons we have learned during the past year and taking into account that this project still remains in development, we can’t say with full certainty that the production schedule will not change.&rdquo;</p> <p><a href="https://www.vg247.com/cyberpunk-2077-xbox-series-x-s-ps5-release-date">Read more</a></p>',
      feedlabel: "VG247",
      date: 1630572197,
      feedname: "VG247",
      feed_type: 0,
      appid: 292030,
    },
    {
      gid: "4020014099084796621",
      title: "Out of Maintenance - Important Info On User Uploaded Avatars",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4020014099084796621",
      is_external_url: true,
      author: "Freejam_ChrisC",
      contents:
        "Hello Robocrafters!\n\nAs you may have noticed, custom avatars were removed and players have been unable to upload replacement avatars. This is definitely not intentional and was caused by an issue with our CDN provider. We have been attempting to retrieve these avatars, however we’ve been informed that they have been deleted and it is unlikely that they can be recovered.\n\nWe understand that this is frustrating for players and we have taken some steps to ensure that this does not happen again. We have addressed the issue and players are now able to upload their own custom avatars.\n\nHowever, we understand that there have been players who purchased a period of premium specifically to change their custom avatar. To those players affected we are providing a special code that can be during the next six months which will let you redeem seven days of premium so you have the time to re-upload your avatar. Please redeem the code below to activate your seven days of Premium\n\n7DAYSPREMIUM\n\n[b]Steps on redeeming the Code[/b]\n[list]\n[*] Open the pause menu with ESC\n[*] Click on the “ENTER CODE” button\n[*] Type the code “7DAYSPREMIUM” and click “CONFIRM”\n[/list]\n\nWe’d like to thank everyone for their patience during this time. Now get back onto the battlefield!\n\nBuild, Drive, Fight\n[i]Robocraft team[/i]",
      feedlabel: "Community Announcements",
      date: 1630506794,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 301520,
    },
    {
      gid: "4018887653994829961",
      title: "Update 1.11.5 Released",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4018887653994829961",
      is_external_url: true,
      author: "essbuh",
      contents:
        'Update 8/31:\nA small patch has been released addressing a few server-side issues. Server operators are recommended to update their servers.\n\nOriginal Post:\nAn update to No More Room in Hell has been released. The update will be applied automatically when you restart No More Room in Hell. The major changes include:\n\n[h1]Additions[/h1]\n[list][*] Added breathing sounds to Pugman\'s voice set\n[*] Added cvar "cl_skip_joingame_dialog", automatically joins the game after entering the welcome screen\n[*] Added localization support for survival HUD\n[*] Added map thumbnails and game type information to server browser\'s simplified view\n[*] Added option to disable screenspace shadow (vignette effect)\n[*] Added "players only" mode to death notices (sv_deathnotice 2)\n[*] Added tooltips to options in create game dialog\n[*] Extracted players are now displayed on the scoreboard (as "EXTRACTED")\n[*] Radial wheel colors can now be customized (w/ cvars starting with "cl_radial")[/list]\n\n[h2]Additions for mappers and modders[/h2]\n[list][*]Added ability to set custom supply crate contents\n[*]Added custom model support for zombies (key name "modeloverride")\n[*]Added game event "player_join_game", fired when player exits the "join game" screen\n[*]Added game event "player_welcome", fired when player enters the "join game" screen\n[*]Added "Glowable" properties to zombies\n[*]Added inputs "AddItem", "AddRandomWeapon", "AddRandomGear", and "AddRandomAmmo" to entity "item_inventorybox"\n[*]Added inputs "RandomizeContents" and "RemoveAllItems" to entity "item_inventorybox"\n[*]Added new editor icons in Hammer\n[*]Added "OnHealthChanged" output to zombies, passes health ratio as variable\n[*]Added read-only "nmrih_version" convar, stores the current version label\n[*]Added "Spawn Empty" property to entity "item_inventorybox"[/list]\n\t\n[h2]Workshop server-side system overhaul[/h2]\n[list][*] Added auto-updates\n[*] Added cvars "sv_workshop" and "sv_workshop_autoupdate" to enable/disable respective features\n[*] Enhanced map validation\n[*] Enhanced file recovery process\n[*] Map entries with mismatching filenames will now be invalidated\n[*] ConCommand "workshop_validate" now attempts to recover files immediately\n[*] SteamUGC now properly initializes after SteamAPI context is set[/list]\n\t\n[h2]Workshop Publisher changes[/h2]\n[list][*] Added "Workshop Publisher+" for advanced options, hold SHIFT and open the publisher to enable it\n[*] Added "Include maphack" to adv. options\n[*]Clear all temp files before upload\n[*] Fixed an issue where leftover files were being shipped (obsolete .nmo/.nav)[/list]\n\n[h1]Changes[/h1]\n[h2] Zombie AI changes[/h2]\n[list][*] Zombies now do additional obstruction tests, to prevent player "corner blocking"\n[*] If zombie can\'t reach a player due to a obstruction, mark them as "unreachable" and begin patrolling, don\'t target them again for some time[/list]\n\n[h2]Flare gun changes[/h2]\n[list][*] The projectile now generates a small explosion that affects props, windows, players/NPCs and so on, replacing the previous damage model that simply dealt direct damage\n[*] The projectile now breaks through glass and won\'t explode on contact[/list]\n    \n[h2] Design refresh for in-game VGUI elements[/h2]\n[list][*] Scoreboard background is now drawn using a texture\n[*] Changed font in spectator UI\n[*] Death notices now have a background texture, and a changed font\n[*] Chat dialog scrollbar is now thinner, UI font is less bulkier (chat text remains the same)[/list]\n  \n[h2]Other[/h2]\n[list][*] Callvotes: Change default quorum ratio 0.75 -> 0.60\n[*] Chainsaw and Abrasive Saw now appear in supply crates as rare items (resolves #1189)\n[*] Challenge mode: Allow unlimited challenges per map (previously max. 32)\n[*] Changed molotov burn damage time to match the particle duration\n[*] Cleaned up a lot of unnecessary console spew, most noticeable in developer modes\n[*] Cvar "cl_interp_npcs" is now saved to user config\n[*] Demo Support: NPC kills are now logged\n[*] Disabled -tickrate command line parameter, custom tick intervals introduced server timing issues\n[*] Disallow all movement while using a progress trigger\n[*] Disallow keypad input if given command is not a digit\n[*] Disallow suicide while using a progress trigger\n[*] Don\'t autokick users who have rcon (or have autokick disabled by other means)\n[*] HUD compass now has smoother movement\n[*] Increased fire extinguisher use distance\n[*] Localized advanced options\n[*] Misc. adjustments to Add-on Manager user interface\n[*] NAT warning dialog now links users to a more concise hosting guide\n[*] Only alive people are allowed to vote (resolves #907)\n[*] Reduced throw force for medical items\n[*] Removed "#Chat_Admin" prefix on console messages\n[*] Removed "Freeze Player" and "Interruptable by Player" spawnflags from entity "nmrih_extract_preview"\n[*] Removed a bunch of unused sounds from both players and zombies\n[*] Reset scores and respawn tokens after leaving practice mode (resolves #1187)\n[*] Set demo record timer resolution to hh:mm by default\n[*] SourceTV bot now has a special label in the scoreboard\n[*] Targetname is no longer cleared from weapon on pickup (resolves #959)\n[*] Updated the challenge mode scripts\n[*] Updated the localization files[/list]\n\n[h1]Fixes[/h1]\n[list][*] Fixed abrasive saw not flagged as rare (#1184)\n[*] Fixed Add-on Manager failing to list newly subscribed add-ons on runtime (#1148)\n[*] Fixed an issue where players are unable to join Workshop servers if they have subscribed to the active map, but have it disabled\n[*] Fixed breathing sounds not using voice sets\n[*] Fixed cancel button being greyed out on "disconnected" dialog\n[*] Fixed dead players being extracted (#1180)\n[*] Fixed demo playback controls not toggling\n[*] Fixed extract preview output OnEndFollow being fired twice (#1194)\n[*] Fixed extraction camera showing at wrong origin (#1175)\n[*] Fixed game event "player_spawn" being fired twice\n[*] Fixed HUD timers not being updated for late joiners in Challenge mode\n[*] Fixed invalid Workshop maps being sent to clients (#1182)\n[*] Fixed invisible models if round restarts during active extraction preview (#1176)\n[*] Fixed janky weapon deploy animation when repeatedly switching\n[*] Fixed main menu music not stopping after resolution change\n[*] Fixed maphacks not clearing their event queue on reset\n[*] Fixed melee traces being obstructed by teammates (#1186)\n[*] Fixed missing newline on death notice console message\n[*] Fixed objective and item glows overlapping (#967)\n[*] Fixed players losing their ability to pick up items and attack using melee weapons after extraction preview\n[*] Fixed players not being able to switch to flashlight while having explosives equipped (#928)\n[*] Fixed players not displayed as "extracted" after round ends (#27)\n[*] Fixed players remaining grabbed if grabber is deleted (#1201)\n[*] Fixed players t-posing during / after swimming (#888)\n[*] Fixed replicated cvar callbacks attempting to load empty challenges/maphacks on client\'s inactive server instance\n[*] Fixed rising zombies being shoved away by dead players and observers\n[*] Fixed scoreboard being movable / sizeable\n[*] Fixed server forcing a map download via Workshop even if all map files are already present (#1183)\n[*] Fixed several syntax errors in RPD map assets\n[*] Fixed skillshot overlay appearing during extract preview (#451)\n[*] Fixed VGUI viewport drawing a full screen background, as a result the view is now brighter\n[*] Fixed Workshop download progress not being displayed on loading panel[/list]\n\n[h1]Maps[/h1]\n[list][*] Added dialogue captions to all official maps\n[*] nmo_broadway2: Fixed players accidentally dying near the train\n[*] nmo_fema: Fixed helicopter pilot repeating his dialogue during the evac\n[*] nmo_lakeside: Tweaked vphysics clips\n[*] nms_arpley: Added collision to rails and table on zone A\n[*] nms_camilla: Added loading screen, contributed by Acrilyk\n[*] nms_notld: Tweaked barrel placement near barn at the edge of the map[/list]\n\n[h1]Engine:[/h1]\n[list][*] Updated Source SDK to latest version[/list]\n',
      feedlabel: "Community Announcements",
      date: 1630331729,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 224260,
      tags: [
        "mod_reviewed",
        "ModAct_848946987_1630333993_0",
        "mod_require_rereview",
      ],
    },
    {
      gid: "4018887653994703770",
      title:
        'Fallout 4 mod Sim Settlements 2 gets a "DLC-sized expansion" this fall',
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/4018887653994703770",
      is_external_url: true,
      author: "editor@pcgamesn.com",
      contents:
        '<img width="900" height="507" src="https://www.pcgamesn.com/wp-content/uploads/2021/08/fallout-4-mod-sim-settlement-2-gunner-outbreak-900x506.jpg"/><p>One of the <a href="https://www.pcgamesn.com/fallout-4/best-fallout-4-mods">best Fallout 4 mods</a> around is getting a hefty new update later this year, the team behind <a href="https://www.nexusmods.com/fallout4/mods/47976">Sim Settlements 2</a> has revealed. The aptly named Sim Settlements Team has posted a new trailer unveiling a "DLC-sized expansion" to the mod, which will feature Fallout 4\'s ruthless mercenary Gunners as a "fleshed-out faction" - and it\'s due to arrive sometime this autumn.</p>\n<p>Called \'Gunner Outbreak\', the new mod expansion\'s trailer gives a good flavour of what\'s to come, introducing us to the kinds of people and places we can expect to see (embedded below for you to check out). We see the ominous arrival of Captain Wes and his crew of Gunners at a thriving settlement, with the fearsome leader declaring that it\'s now under his faction\'s control, with some threats dished out at its poor populace to keep them in line. Eek.</p>\n<p>While we only get a feel of the mod expansion\'s storyline in broad strokes in the clip, it looks like it\'ll see a group of rebels band together in the wake of the Gunners\' arrival. There\'s brand-new - and impressive - voice acting featured, along with a bunch of other new content to dive into. The mod adds "new disease mechanics, multiple large questlines, and a brand-new game mode where you establish your own faction headquarters", the clip\'s description explains.</p>\n<p><a href="https://www.pcgamesn.com/fallout-4/sim-settlements-2-gunner-outbreak">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.pcgamesn.com/fallout-4/city-builder-spinoff">What if: Fallout 4 had a city builder spinoff?</a><br />\n<a href="https://www.pcgamesn.com/fallout-4/mod-grab-attacks-finishers">You can suplex dudes in Fallout 4 now</a><br />\n<a href="https://www.pcgamesn.com/fallout-4/fallout-london-mod-covent-garden">Fallout: London modders tease Covent Garden for the huge Fallout 4 mod</a></p>',
      feedlabel: "PCGamesN",
      date: 1630327943,
      feedname: "PCGamesN",
      feed_type: 0,
      appid: 377160,
    },
    {
      gid: "4018887653984111701",
      title:
        "Dying Light 2 Stay Human — Dying 2 Know: Episode 3 Gamescom Edition",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4018887653984111701",
      is_external_url: true,
      author: "Uncy_Techland",
      contents: "[previewyoutube=IL-daZ6RZWI;full][/previewyoutube]",
      feedlabel: "Community Announcements",
      date: 1630077311,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 239140,
    },
    {
      gid: "4018887653981504453",
      title: "Pre-Beta Staging Branch Released",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4018887653981504453",
      is_external_url: true,
      author: "Voidus",
      contents:
        "[h1]Hello everyone![/h1]\n\nWe have just opened a new branch of the game called “Pre-Beta Staging” to help us further prepare for Parabellum’s final release.\n\nThis branch exists for us to directly get feedback on base game issues, without false positives being reported because of plugins. With that being said there is a no tolerance policy for plugins on this branch.\n\nThis branch will be updated more frequently. If you would like to help us test out the newest experimental features and bug fixes, please switch to the “pre-beta-staging” branch on Steam. Any issues you find can be reported here: [url=https://support.scpslgame.com/bug-report]https://support.scpslgame.com/bug-report[/url]\n\nPlease note we’re keeping the old “Public Beta” branch, as it will be updated only with things that are confirmed to be stable. The main difference is that the “Pre-Beta Staging” branch contains all the newest features, including ones that have the potential to be unstable. If you plan to stay on the normal Parabellum beta, we ask you to take note of the servers you play on while reporting bugs. If the server you are on is using plugins please include this in any report you send.\n\nThank you for supporting Northwood Studios and SCP: Secret Laboratory!\n\n[i][b]- Northwood Studios[/b][/i]\n",
      feedlabel: "Community Announcements",
      date: 1630015438,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 700330,
    },
    {
      gid: "4022264629315366228",
      title: "Left 4 Dead 2 - Update",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4022264629315366228",
      is_external_url: true,
      author: "Kerry",
      contents:
        "An update has been released for Left 4 Dead 2\n\n- Fixed several more RCE exploits.\n- Fixed a network exploit that could crash servers\n- Fixed a networking error when using the defibrillator\n- Fixed rendering errors when underwater",
      feedlabel: "Community Announcements",
      date: 1629474949,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 550,
      tags: ["patchnotes"],
    },
    {
      gid: "4516534149067245548",
      title:
        "Half-Life 2 community rallies to break its peak player count for reasons",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/4516534149067245548",
      is_external_url: true,
      author: "editor@pcgamesn.com",
      contents:
        '<img width="900" height="507" src="https://www.pcgamesn.com/wp-content/uploads/2021/08/download-900x506.jpg"/><p>The <a href="https://www.pcgamesn.com/half-life-2">Half-Life 2</a> community has rallied together to smash the peak concurrent player count record for <a href="https://www.pcgamesn.com/15-best-pc-first-person-shooters">one of the best FPSs ever made</a>, pushing the total from a dismal 6,882 to over 16K - which is certainly a lot more respectable. Why did the community do this? To see if it could be done, it seems.</p>\n<p>The Half-Life 2 \'Breaking the Bar\' event was organised by fan community <a href="https://community.lambdageneration.com/">Lambda Generation</a>, which wanted to see if the fans could push Half-Life 2\'s concurrent player count peak up from the low 6,882 it appeared on <a href="https://steamdb.info/app/220/graphs/" target="_blank" rel="noopener noreferrer">SteamDB</a>. It seems they succeeded in even beating the all-time peak of 12,953 players from 10 years ago. The new record stands at a much more respectable 16,101.</p>\n<p>The problem with Half-Life 2\'s records is that the game pre-dates most of Steam\'s tracking features, as it was the title that Steam launched with <a href="https://www.pcgamesn.com/epic-store-time-played">in the most bare-boned state imaginable</a>. By the time Steam had begun tracking things like concurrent player counts, most people had already finished Half-Life 2.</p>\n<p><a href="https://www.pcgamesn.com/half-life-2/player-count">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.pcgamesn.com/half-life-2/remastered-collection-mod">Half-Life 2: Remastered Collection coming from modders with Valve\'s consent</a><br />\n<a href="https://www.pcgamesn.com/half-life-2/mod-backwards-speedrun">Half-Life 2 speedrunners beat the game backwards in 13 minutes</a><br />\n<a href="https://www.pcgamesn.com/half-life-2/gabe-newell-sends-gnome-chompski-to-space">Gabe Newell is sending a garden gnome into outer space</a></p>',
      feedlabel: "PCGamesN",
      date: 1629055315,
      feedname: "PCGamesN",
      feed_type: 0,
      appid: 220,
    },
    {
      gid: "4038025325476882083",
      title: "Sekiro speedrunner completes game blindfolded",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/4038025325476882083",
      is_external_url: true,
      author: "",
      contents:
        "<img src=\"https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-07-30-12-01/sekiro-speedrunner-completes-game-while-blindfolded-1627642871994.jpg/EG11/resize/300x-1/quality/90/format/jpg\" alt=\"\"/><p>In what appears to be a world first, a Twitch streamer has completed a blindfolded speedrun of Sekiro: Shadows Die Twice. Yep, you read that right. </p><p>Earlier this week streamer Mitchriz completed Sekiro's Shura ending with a time of four hours, 35 minutes and 13 seconds, all while blindfolded. Here's a clip of the moment he completed the run - spoilers for the final boss, obviously:</p><p>It's worth watching the rest of the run, too, as it's fascinating to see how Mitchriz navigates Sekiro's world using only audio cues. (Rather conveniently, he also has an input overlay so you can see what he's doing with his mouse and keyboard.) On sections near cliff edges, Mitchriz has to carefully count down the seconds to measure how far he's walking in any one direction, often darting forwards to help control his movements. On some occasions Mitchriz slashes with a sword until he hits a wall, with the change in sound indicating his position. Grapple points seem to serve as useful tools for navigation, while enemy sounds and cutscenes also help telegraph his position. </p><p><a href=\"https://www.eurogamer.net/articles/2021-07-30-sekiro-speedrunner-completes-game-while-blindfolded\">Read more</a></p>",
      feedlabel: "Eurogamer",
      date: 1627658100,
      feedname: "eurogamer",
      feed_type: 0,
      appid: 814380,
    },
    {
      gid: "4204657340179704303",
      title: "Watch the new Tom Clancy game reveal here today",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/Rock, Paper, Shotgun/4204657340179704303",
      is_external_url: true,
      author: "",
      contents:
        "<img src=\"https://assets2.rockpapershotgun.com/the-division-2-new-york-a.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/the-division-2-new-york-a.jpg\" /> <p>\nToday, Ubisoft will announce a new game in the \"Tom Clancy's\" universe, but don't get your hopes up for a new Splinter Cell just yet. While Ubisoft themselves haven't said much about what they're revealing, a few snippets of gameplay have already been released, and it sure looks like Call Of Duty: The Division. I shan't knock it until we've seen more, however, so come join us at 7pm BST (11am PT) to catch the reveal stream.\n</p>\n <p><a href=\"https://www.rockpapershotgun.com/watch-the-new-tom-clancy-game-reveal-here-today\">Read more</a></p>",
      feedlabel: "Rock, Paper, Shotgun",
      date: 1626693023,
      feedname: "Rock, Paper, Shotgun",
      feed_type: 0,
      appid: 13560,
    },
    {
      gid: "4036897704056715484",
      title:
        "A former Half-Life designer is showing off prototypes and rejected bloodbaths",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/Rock, Paper, Shotgun/4036897704056715484",
      is_external_url: true,
      author: "",
      contents:
        '<img src="https://assets2.rockpapershotgun.com/06_half-life1.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/06_half-life1.jpg" /> <p>\n  It\'s always grand to get a peek behind the gamedev curtain at things that might have been. Former <a href="https://www.rockpapershotgun.com/games/half-life">Half-Life</a> level designer Brett Johnson has been digging through his old work, and his memories, to share some early Half-Life prototypes and some ideas that never came to be. Would Half-Life have been a classic if it had gotten the name "Belly Of The Beast"? I dunno, doesn\'t roll off the tongue quite as well, does it?\n</p>\n <p><a href="https://www.rockpapershotgun.com/former-half-life-designer-shows-off-prototypes-and-rejected-bloodbaths">Read more</a></p>',
      feedlabel: "Rock, Paper, Shotgun",
      date: 1625865911,
      feedname: "Rock, Paper, Shotgun",
      feed_type: 0,
      appid: 70,
    },
    {
      gid: "4032392655094043040",
      title: "Half-Life Deathmatch: Source Update Released",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4032392655094043040",
      is_external_url: true,
      author: "erics",
      contents:
        "An update to Half-Life Deathmatch: Source has been released. The update will be applied automatically when you restart Half-Life Deathmatch: Source. The major changes include:\n\n[list]\n[*]Numerous security and stability improvements\n[/list]",
      feedlabel: "Community Announcements",
      date: 1625259535,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 360,
      tags: ["patchnotes"],
    },
    {
      gid: "4032392655063288004",
      title: "Hotfix 13.01",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4032392655063288004",
      is_external_url: true,
      author: "SVEN BENGT",
      contents:
        "Hello Rafters!\n\nWe have got some changes and bug fixes for you! One added feature is the option to replace an old building block for a new one in a different material without first chopping down the old one. This will make it easier to upgrade your raft to the new solid wood pieces without risking the destruction of blocks above. \n\n[img]{STEAM_CLAN_IMAGE}/30560232/8c418e28d9201b84cd874e1cc6505f0985792f89.png[/img]\n[img]https://i.imgur.com/Zur30KV.gif[/img]\n\n[h1]CHANGELOG[/h1]\n[list]\n[*]Building blocks can now be replaced for a different material (wood, solid wood, thatch) using the building hammer.\n[*]Half window block now has a cost instead of being free to build.\n[*]Slanted solid wood ceilings adjusted to no longer clip through above floors.\n[*]Removing a table with a storage on it now returns the items in the storage as well.\n[*]Diagonal slanted ceilings can now be rotated in 90 degree increments instead of 180. \n[/list]\n\n[h1]BUG FIXES[/h1]\n[list]\n[*] Storages dissapearing when removing something else.\n[*] Zipline cancel dragging had wrong text.\n[*] Half ladders had wrong rotation.\n[*] Picking up research table did not return item in research slot.\n[*] Being able to fly when entering chair from a ladder.\n[/list]\n\n",
      feedlabel: "Community Announcements",
      date: 1624529443,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 648800,
      tags: ["patchnotes"],
    },
    {
      gid: "4032392655059678409",
      title: "Portal Reloaded is the closest we’re likely to get to Portal 3",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PC Gamer/4032392655059678409",
      is_external_url: true,
      author: "Rick Lane",
      contents:
        '<img src="https://cdn.mos.cms.futurecdn.net/GBnhbzHicF9bu54PHHZJ9L.jpg"/><br><br>\n                It&#x2019;s been slightly over a decade since Portal 2 surprised everybody by being an impossibly brilliant sequel to a game considered close to perfect. While normally at this point I&#x2019;d lament how Valve hasn&#x2019;t made a third, frankly I was fine with it. Unlike the Half-Life series, the story of which Valve has left frustratingly incomplete, Portal felt finished after the second game. You could argue it felt finished after the first game, but Valve got away with making a second...\n                <a href="https://www.pcgamer.com/portal-reloaded-is-the-closest-were-likely-to-get-to-portal-3?utm_source=steam&utm_medium=referral" target="_blank">Read more.</a>',
      feedlabel: "PC Gamer",
      date: 1624442842,
      feedname: "PC Gamer",
      feed_type: 0,
      appid: 620,
    },
    {
      gid: "4069544181446849927",
      title:
        "J.J. Abrams confirms a Portal movie is in development after eight years",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/4069544181446849927",
      is_external_url: true,
      author: "editor@pcgamesn.com",
      contents:
        '<img width="900" height="507" src="https://www.pcgamesn.com/wp-content/uploads/2018/12/portal-2-900x507.jpg"/><p>Since 2013 there has been talk about a film adaptation of Valve\'s hit IP Portal being in the works, and now finally, after eight years, it\'s been confirmed by J.J. Abrams that a script is currently in development at Warner Brothers Studios.</p>\n<p>The big announcement came during a press day for the Blu-ray 4K release of Super 8, at which Abrams commented to <a href="https://www.ign.com/articles/portal-half-life-jj-abrams-news?utm_source=twitter">IGN</a> about his excitement regarding the film\'s progress. The enthused Star Wars director let Portal fans know that the movie (which many thought could have been scrapped) is now in full swing, stating, "We\'re really excited about the take and the pitch, so it feels like that thing\'s finally on the rails."</p>\n<p>It\'s no secret that J.J. Abrams has been interested in adapting videogames for the big screen, with he and Valve founder Gabe Newell announcing their potential collaboration back at DICE 2013. However, news regarding any potential films based on the beloved Portal or Half-Life series has been scarce over the years.</p>\n<p><a href="https://www.pcgamesn.com/portal/movie-update">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.pcgamesn.com/portal/lego-set">Design your own Portal test chambers with this amazing Lego concept set</a><br />\n<a href="https://www.pcgamesn.com/portal/f-stop-aperture-camera">Valve\'s cancelled Portal game fully revealed</a><br />\n<a href="https://www.pcgamesn.com/chet-faliszek-stray-bombay">Portal writer Chet Faliszek joins ex-Riot dev to make an AI-driven co-op game</a></p>',
      feedlabel: "PCGamesN",
      date: 1621960857,
      feedname: "PCGamesN",
      feed_type: 0,
      appid: 400,
    },
    {
      gid: "4767601588114870431",
      title: "Civilization 5 mods - the best Civ 5 mods",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/PCGamesN/4767601588114870431",
      is_external_url: true,
      author: "editor@pcgamesn.com",
      contents:
        '<img width="900" height="507" src="https://www.pcgamesn.com/wp-content/uploads/2021/05/the-best-civ-5-mods-900x506.jpg"/><p>What are the best Civ 5 mods? Even though it\'s no longer the most popular <a href="https://www.pcgamesn.com/best-civilization-games">Civilization game</a>, there\'s still a lot of love and respect for Civilization 5, and it carries a respectable playerbase even today. <a href="https://www.pcgamesn.com/best-4X-games">4X games</a> like Civ are largely sandbox in nature, so replayability isn\'t always a concern, but it also helps to have a thriving and active mod scene.</p>\n<p>Civ 5\'s mod scene is more settled now, with fewer new ideas coming through, but there\'s still plenty of decent mods to check out if you want to keep your games fresh. Like our <a href="https://www.pcgamesn.com/civilization-vi/civilization-6-mods">Civ 6 mod</a> guide, we\'ve browsed the internet to cherry pick some of the more interesting and popular user mods available.</p>\n<p>We\'ll keep looking at this list over time, perhaps add more as we find them or as they are floated to us by the community. In the meantime, check out this initial offering of Civ 5 mods to sink your teeth into - we\'ve got a mix of utility mods, visual packs and overhauls to give you a wide range of options.</p>\n<p><a href="https://www.pcgamesn.com/civ-5-mods">Read the rest of the story...</a></p>\n<p>RELATED LINKS:<br />\n<a href="https://www.pcgamesn.com/sid-meiers-civilization-v/civ-5-best-civ-leaders">Civilization 5 leaders - a guide to the best Civ 5 civs</a><br />\n<a href="https://www.pcgamesn.com/glossary">The PC gaming glossary: every word you need to know to play like a pro</a><br />\n<a href="https://www.pcgamesn.com/sid-meiers-civilization-v/civ-5-superintelligence-mod-cambridge">Cambridge University sponsor a Civ 5 mod that simulates the AI apocalypse</a></p>',
      feedlabel: "PCGamesN",
      date: 1621013198,
      feedname: "PCGamesN",
      feed_type: 0,
      appid: 8930,
    },
    {
      gid: "4072920612503163979",
      title: "What game do you wish would get the WoW: Classic treatment?",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/Rock, Paper, Shotgun/4072920612503163979",
      is_external_url: true,
      author: "",
      contents:
        "<img src=\"https://assets2.rockpapershotgun.com/old-school-runescape-header.png/BROK/resize/1920x1920%3E/format/jpg/quality/80/old-school-runescape-header.png\" /> <p>I like Counter-Strike: Global Offensive, but I <em>loved</em> the original Counter-Strike. While CSGO is the prettier, more polished version of the same set of ideas, so many of the maps, so much of the <em>feel</em> that I loved, isn't present in the latest iteration.\n</p>\n<p>The original Counter-Strike is still available to play, but its final update, 1.6, isn't the version I want either. I want beta 5.2, or thereabouts, from back before Valve bought the game and its rougher edges got sanded away.\n</p>\n<p>That's me. But I'm here to ask you: what live service game would you like to see relaunch and preserve an older version of itself, as World Of Warcraft: Classic has? And what version would you want?\n</p>\n <p><a href=\"https://www.rockpapershotgun.com/what-game-do-you-wish-would-get-the-wow-classic-treatment\">Read more</a></p>",
      feedlabel: "Rock, Paper, Shotgun",
      date: 1620341092,
      feedname: "Rock, Paper, Shotgun",
      feed_type: 0,
      appid: 10,
    },
    {
      gid: "4074045244015061358",
      title: "Steam Global Top Sellers for the Week ending 25 April 2021",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/SteamDB/4074045244015061358",
      is_external_url: true,
      author: "SteamDB",
      contents:
        '<a href="https://steamdb.info/topsellers/2021W16/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS"><img src="https://steamdb.info/topsellers/2021W16.png"></a><ol><li><a href="https://steamdb.info/app/1113560/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">NieR Replicant™ ver.1.22474487139...</a></li><li><a href="https://steamdb.info/app/1426210/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">It Takes Two</a></li><li><a href="https://steamdb.info/sub/354231/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">Valve Index VR Kit</a></li><li><a href="https://steamdb.info/app/1238810/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">Battlefield V</a></li><li><a href="https://steamdb.info/app/1237970/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">Titanfall® 2</a></li><li><a href="https://steamdb.info/app/1490530/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">Counter-Strike: Global Offensive - Operation Broken Fang</a></li><li><a href="https://steamdb.info/app/242760/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">The Forest</a></li><li><a href="https://steamdb.info/app/892970/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">Valheim</a></li><li><a href="https://steamdb.info/app/1113560/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">NieR Replicant™ ver.1.22474487139...</a></li><li><a href="https://steamdb.info/app/680420/graphs/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">OUTRIDERS</a></li></ol><br><a href="https://steamdb.info/topsellers/2021W16/?utm_source=Steam&utm_medium=Steam&utm_campaign=SteamRSS">View more information and data on SteamDB</a>',
      feedlabel: "SteamDB",
      date: 1619308800,
      feedname: "SteamDB",
      feed_type: 0,
      appid: 242760,
    },
    {
      gid: "4570566565010259740",
      title: "Risk of Rain 2 - PC Patch v1.1.1.4",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4570566565010259740",
      is_external_url: true,
      author: "Huntress",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/33906904/8230a4fd45893eca28306973d7e0d68a41fba39b.png[/img]\n\nThe goal of this minor patch is to address bugs.\n\n[img]{STEAM_CLAN_IMAGE}/33906904/b4482096b21eebc7ee418f8e6e50de7b9d1d7b67.png[/img]\n\n• Fixed Artifact of Dissonance breaking monster spawns and other systems\n• Fixed some of Commencement’s navigation/spawn nodes being placed underground, potentially causing a softlock loop\n• Fixed the landing blast for H3AD-5T v2 not activating from non-host players\n• Fixed language chosen in-game (instead of through Steam) not being correctly restored on startup\n• Fixed MUL-T’s Power Mode description not accurately reflecting in-game values\n• Fixed “Regenerative” keyword description not accurately reflecting in-game values\n",
      feedlabel: "Community Announcements",
      date: 1618930776,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 632360,
      tags: ["patchnotes"],
    },
    {
      gid: "4570566565007173976",
      title:
        "Ubisoft details Assassin's Creed Black Flag webtoon sequel, Shao Jun books, Netflix projects",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/4570566565007173976",
      is_external_url: true,
      author: "",
      contents:
        "<img src=\"https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-04-19-17-03/assassins-creed-loremasters-talk-plans-for-animated-black-flag-sequel-shao-jun-books-netflix-projects-1618848218192.jpg/EG11/resize/300x-1/quality/90/format/jpg\" alt=\"\"/><p>\nThere's no big new Assassin's Creed game this year - instead, Valhalla instead lives on through expansions set in Ireland and France - but that doesn't mean Ubisoft's biggest franchise is taking a breather. Quite the opposite, in fact. </p><p>For fans, 2021 will see the series' broadest collection yet of books, manga, webtoons and audios arrive from a wide range of creative partners across the world, expanding the franchise further via characters old and new. And beyond that? Well, there's under-wraps plans at Netflix for an animated series and live-action show, too. </p><p>This week, Ubisoft will detail eight projects to be published this year - more on all those below - and a new system of categorising future stories published under the Assassin's Creed umbrella; Classics are direct adaptations of video games, Chronicles feature new stories with returning Assassins, while Originals offer all-new protagonists and time periods. </p><p><a href=\"https://www.eurogamer.net/articles/2021-04-19-assassins-creed-loremasters-talk-plans-for-animated-black-flag-sequel-shao-jun-books-netflix-projects\">Read more</a></p>",
      feedlabel: "Eurogamer",
      date: 1618857480,
      feedname: "eurogamer",
      feed_type: 0,
      appid: 33230,
    },
    {
      gid: "4054904311339518243",
      title:
        "Smite developers Hi-Rez Studios are offering permanent remote work",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/Rock, Paper, Shotgun/4054904311339518243",
      is_external_url: true,
      author: "",
      contents:
        '<img src="https://assets2.rockpapershotgun.com/smite_t1uv4SJ.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/smite_t1uv4SJ.jpg" /> <p>\n  When game developers started packing up last spring to work from home due to the Covid-19 pandemic, I suspect we all knew it was going to be a bumpy ride. Sure enough, there have been game delays galore over the past year as many studios found the adjustment to be a challenge. On the bright side, some seem to have really taken to it. Hi-Rez Studios, the folks behind <a href="https://www.rockpapershotgun.com/games/smite">Smite</a> and <a href="https://www.rockpapershotgun.com/games/paladins">Paladins</a>, say "the pandemic has taught us new ways to work that we believe are superior to our previous way of operation." They\'ll be encouraging 80% of their 435 employees to work remotely if they choose to.\n</p>\n <p><a href="https://www.rockpapershotgun.com/smite-deveopers-hi-rez-studios-commit-to-permanent-remote-work-options-after-pandemic">Read more</a></p>',
      feedlabel: "Rock, Paper, Shotgun",
      date: 1618416312,
      feedname: "Rock, Paper, Shotgun",
      feed_type: 0,
      appid: 386360,
    },
    {
      gid: "4117954072998461461",
      title:
        "Infinity Ward pulls two of the new Call of Duty: Modern Warfare maps surprise-added to the game last week without explanation",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/4117954072998461461",
      is_external_url: true,
      author: "",
      contents:
        '<img src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-04-08-09-55/-1617872112206.jpg/EG11/resize/300x-1/quality/90/format/jpg" alt=""/><p>In another twist in the \'has Activision abandoned Call of Duty: Modern Warfare?\' saga, Infinity Ward has now pulled two of the new maps surprise-added to the game last week.</p><p>Last week, we reported how 2019\'s <a href="https://www.eurogamer.net/articles/2021-03-31-surprise-call-of-duty-modern-warfare-gets-new-maps-four-months-after-activision-left-the-game-behind">Modern Warfare unexpectedly received three new maps</a>, four months after Activision left the game behind to focus on Black Ops Cold War and Warzone.</p><p>The maps, added to the game as part of the <a href="https://www.eurogamer.net/articles/2021-03-29-this-weeks-call-of-duty-warzone-update-is-over-50gb">mammoth mid-season two update</a>, are Killhouse, Al-Raab Airbase (6v6) and Drainage (Gunfight).</p><p><a href="https://www.eurogamer.net/articles/2021-04-08-infinity-ward-pulls-two-of-the-new-call-of-duty-modern-warfare-maps-surprise-added-to-the-game-last-week-without-explanation">Read more</a></p>',
      feedlabel: "Eurogamer",
      date: 1617878940,
      feedname: "eurogamer",
      feed_type: 0,
      appid: 10180,
    },
    {
      gid: "4023377846275123622",
      title: "(April Fools!) Imminent April Announcement",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4023377846275123622",
      is_external_url: true,
      author: "Zantai",
      contents:
        "Hot on the heels of v1.1.9.1, we are pleased to announce what’s next for Crate Entertainment!\n\nFirst up, we’re sure you’re eager to see everything in store for [url=https://steamcommunity.com/app/219990/discussions/0/3068614788761326441/]v4.1.2.1[/url], which should no doubt throw some fresh ideas into the meta. You can get your first look at the preview in the Patch Notes section.\n\nBut we have even bigger news for you today as we excitedly announce the next title to be featured here at Crate Entertainment!\n\nWith much excitement, we are proud to excitedly reveal our exciting tie-in title: [url=https://forums.crateentertainment.com/t/imminent-april-announcement/108440]Trap, Sever, Delicious![/url]\n\n[img]{STEAM_CLAN_IMAGE}/4461228/108b675916c0f01291f0dfc7db37609cc6ddc999.jpg[/img]",
      feedlabel: "Community Announcements",
      date: 1617282796,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 219990,
      tags: [
        "mod_reviewed",
        "ModAct_383594390_1617283180_0",
        "mod_require_rereview",
      ],
    },
    {
      gid: "4026754911349617201",
      title: "Say hello to our new game, Nobody Saves The World!",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4026754911349617201",
      is_external_url: true,
      author: "DrinkBox_Gabby",
      contents:
        "[img]https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/6863330/0f8c42ef35783030705ad32cf799bbaac8508ab5.jpg[/img]\r\n\r\nWe’re excited to announce our brand new game Nobody Saves The World, an Action RPG where you transform into different unique character classes, including a 🐁, a 🐎, a 🧙‍♂️, a 🧜, a 🐉, an 🥚, and a 🐢!\r\n\r\nHere’s what people are saying about the game so far:\r\n[list]\r\n[*] [i]“Blending the humor of the studio’s past games with the developers’ penchant for upending classic genre ideas, the opening missions of Nobody I played hint at a fascinating, funny, and fulfilling RPG adventure.”[/i] Jonathon Dornbush, [b]IGN[/b]\r\n\r\n[*] [i]“It's pacy and fluid, slick, but light. It's great, and a good example of what this studio's all about. A layer of loveable goof, at ground level, that soon gives way to a much deeper well of combat, and systems, and a quiet mastery of genre.”[/i] Chris Tapsell, [b]Eurogamer[/b]\r\n\r\n[*] [i]“One dungeon I explored was a crashed UFO site, whose stranded occupants needed me to sweep the area of monsters and get the power back on, for example. It’s a DrinkBox production, after all, where you can almost see the developers’ whiteboard with a zillion ideas written on it.”[/i]  Owen S. Good, [b]Polygon[/b]\r\n[/list]\r\n\r\nNobody Saves the World is COMING SOON to PC! Wishlist us on Steam and be notified when the game launches:\r\n\r\nhttps://store.steampowered.com/app/1432050/\r\n\r\nJoin our Discord and be the first to hear about Nobody Saves the World news and updates: https://discord.gg/XXXtbjvx7j\r\n\r\nBy the way, to celebrate this announcement, we’ve decided to put all our other games on sale for a limited time only!\r\n\r\nhttps://store.steampowered.com/app/534550\r\n\r\nhttps://store.steampowered.com/app/275390/\r\n\r\nhttps://store.steampowered.com/app/206370/\r\n",
      feedlabel: "Community Announcements",
      date: 1616786504,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 275390,
    },
    {
      gid: "4043637702566310129",
      title:
        "Lords of the West—the first expansion for Age II: DE—is now available!",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4043637702566310129",
      is_external_url: true,
      author: "Evangelos",
      contents:
        '[previewyoutube=oLJk_nIMdkc;full][/previewyoutube]\n\n[h1]AVAILABLE NOW![/h1][hr]\n[/hr]For those who\'ve made the leap to [i]Age of Empires II: Definitive Edition[/i], the first official expansion, [b][i]Lords of the West[/i][/b], is now available! Pick up your copy today and expand your gameplay:\n\nhttps://store.steampowered.com/app/1389240/\n\n[h1]FEATURES[/h1][hr]\n[/hr]Included in the Lords of the West expansion:\n\n[h3]New Civ! The Burgundians[/h3][expand type=showmore]\n[img]https://static.ageofempires.com/aoe/wp-content/uploads/2021/01/age-of-empires-2-de-burgundians.jpg[/img]\n\nRise from a mere duchy to the marvel of Western Europe through economic might, cultural achievement, and the use of advanced military technology and tactics.\n\nThe dukes of Burgundy played a vital role in the politics of medieval Western Europe. They led the transformation from the medieval to the early modern world and ushered in a golden age for the region called the Northern Renaissance. At their height, these “Grand Dukes of the West” controlled large parts of modern-day France, Belgium, The Netherlands, and Luxembourg.  Carving a new polity out of French, English, and Holy Roman domains was a daunting task that came with a high price: decades of war and bloodshed.\n\nHowever, the Burgundians knew to use more than just warfare to get what they wanted. Their diplomatic and marriage policies proved to be even stronger than their swords.\n\n[b]▶︎ CIVILIZATION BONUSES[/b]\n[list]\n[*] Economic upgrades are available one Age earlier than other civs\n[*] Stable technologies are 50% cheaper\n[*] Gunpowder units gain a +25% bonus to their attack\n[*] Cavalier upgrade is available in the Castle Age\n[/list]\n[b]▶︎ TEAM BONUS[/b]\n[list]\n[*] Relics generate both Gold and Food\n[/list]\n[b]▶︎ UNIQUE UNITS[/b]\n[list]\n[*] [b]Coustillier:[/b] Burgundian cavalry unit that utilizes a powerful shock attack when charging into battle. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.\n[*] [b]Flemish Militia:[/b] Burgundian unique infantry unit. Strong vs. cavalry. Weak vs. archers.\n[/list]\n[b]▶︎ UNIQUE TECHNOLOGIES[/b]\n[list]\n[*] [b]Burgundian Vineyards:[/b] Convert all food into gold at a 2:1 ratio; Farmers slowly generate gold in addition to food.\n[*] [b]Flemish Revolution:[/b] Upgrades all existing Villagers into [b]Flemish Militia[/b], and allows the training of Flemish Militia at Town Centers.\n[/list]\n[b]▶︎ FULL TECHNOLOGY TREE[/b]\n\n[url=https://static.ageofempires.com/aoe/wp-content/uploads/2021/01/lotw_burgundiantechtree.png][img]https://static.ageofempires.com/aoe/wp-content/uploads/2021/01/lotw_burgundiantechtree.png[/img][/url]\n[/expand]\n[h3]New Civ! The Sicilians[/h3][expand type=showmore]\n[img]https://static.ageofempires.com/aoe/wp-content/uploads/2021/01/age-of-empires-2-de-sicilians.jpg[/img]\n\nExperience the diverse cultures and martial spirit of the Mediterranean’s crossroads as you build one of the most coveted kingdoms of medieval Europe.\n\nRobert Guiscard arrived in Italy in 1047 CE with a robber-band of 35 men. Within a century, his Hauteville family included dukes in Italy, princes in the Middle East, and even the King of Sicily. Join this intrepid family of Norman adventurers and complete their unlikely and compelling story, starting with Robert Guiscard’s arrival in Italy to his nephew Roger II’s consolidation of the Hauteville lands into the Kingdom of Sicily.\n\nThe Italo-Normans, as the conquerors and rulers in Norman Italy and Sicily are now known, were successful on the battlefield because of their fierce disposition, vigorous military tradition, keen affinity for tactics and the use of cunning, and sheer torrid speed. In these, they most closely resembled their Viking and Frankish forebears, but as they settled in Italy and Sicily they embraced local cultural customs and norms of governance.\n\n[b]▶︎ CIVILIZATION BONUSES[/b]\n[list]\n[*] Castles and Town Centers are constructed 100% faster\n[*] Land military units absorb 50% of all incoming bonus damage\n[*] Farm upgrades provide +100% additional food to Farms before they need to be reseeded\n[/list]\n[b]▶︎ TEAM BONUS[/b]\n[list]\n[*] Transport ships +5 carry capacity and +10 armor versus anti-ship bonus damage\n[/list]\n[b]▶︎ UNIQUE UNIT[/b]\n[list]\n[*] [b]Serjeant:[/b] A hardy infantry unit which can also construct [b]Donjons[/b].\n[/list]\n[b]▶︎ UNIQUE BUILDING[/b]\n[list]\n[*] [b]Donjon:[/b] Unique fortification used to train [b]Serjeants[/b]. Units can garrison in the building for protection; Archers and Villagers shoot additional projectiles when garrisoned.\n[/list]\n[b]▶︎ UNIQUE TECHNOLOGIES[/b]\n[list]\n[*] [b]First Crusade:[/b] Upon researching, each Town Center (up to 5) spawns a one-time group of 10 Serjeants.\n[*] [b]Scutage:[/b] Upon researching, each team member receives a one-time payment of 15 gold for each military unit that they own.\n[/list]\n[b]▶︎ FULL TECHNOLOGY TREE[/b]\n\n[url=https://static.ageofempires.com/aoe/wp-content/uploads/2021/01/lotw_siciliantechtree.png][img]https://static.ageofempires.com/aoe/wp-content/uploads/2021/01/lotw_siciliantechtree.png[/img][/url]\n[/expand]\n[h3]New Campaigns[/h3][expand type=showmore]\n\n[b]▶︎ EDWARD LONGSHANKS[/b]\n[img]{STEAM_CLAN_IMAGE}/35210618/779f7e321e6821398a212127ac2a573795f5b422.png[/img]\nEdward I is widely considered as one of England’s greatest rulers, mentioned in the same breath as Alfred the Great and Elizabeth I. Known as “Longshanks” for his height and intimidating stature, he was a man that commanded respect as he transformed England from a tattered state into a prominent European power.\n\n[b]▶︎ THE GRAND DUKES OF THE WEST[/b]\n[img]{STEAM_CLAN_IMAGE}/35210618/788b3f84e1a6d83ae3ceb65c308bdce995cd2937.png[/img]\nhe Burgundian dukes are driven by ambition and greed. They lead an extremely luxurious life and need to constantly expand their domains in order to pay for it. Image and publicity mean everything to them. Philip the Bold earned his nickname after the defeat at Poitiers and John the Fearless earned his after a defeat in the Crusades, so these dukes know the importance of propaganda.\n\n[b]▶︎ THE HAUTEVILLES[/b]\n[img]{STEAM_CLAN_IMAGE}/35210618/03c461b265f17bbb64c2b7917c5885f4f35d5c55.png[/img]\nRobert Guiscard arrived in Italy in 1047 CE with a robber-band of 35 men. Within a century, his Hauteville family included dukes in Italy, princes in the Middle East, and even the King of Sicily. Join this intrepid family of Norman adventurers and complete their unlikely and compelling story.\n\n[/expand]\n[h3]New Achievements[/h3][expand type=showmore]\n\nUnlock and earn brand-new achievements on Steam and the Microsoft Store!\n\n[table][tr]\n        [td][b]ACHIEVEMENT NAME[/b][/td]\n        [td][b]ACHIEVEMENT DESCRIPTION[/b][/td]\n[/tr][tr]\n[td]The English Justinian[/td]\n[td]Complete the Edward Longshanks campaign.[/td]\n[/tr][tr]\n[td]The Good, the Bold, and the Fearless[/td]\n[td]Complete the Grand Dukes of the West campaign.[/td]\n[/tr][tr]\n[td]Haute Culture[/td]\n[td]Complete the Hautevilles campaign.[/td]\n[/tr][tr]\n[td]Unchivalrous Pragmatist[/td]\n[td]Defeat Simon the Younger\'s army before the baronial forces attack in the first Edward Longshanks mission "Vain Ambition".[/td]\n[/tr][tr]\n[td]Throne Thief[/td]\n[td]Steal the Stone of Scone in the fourth Edward Longshanks mission "Toom Tabard".[/td]\n[/tr][tr]\n[td]Malleus Scotorum[/td]\n[td]Kill William Wallace before Robert the Bruce betrays you in the fifth Edward Longshanks mission "Hammer of the Scots".[/td]\n[/tr][tr]\n[td]No Wheels[/td]\n[td]Do not construct a single siege weapon in the first Grand Dukes of the West mission "A Kingdom Divided".[/td]\n[/tr][tr]\n[td]A Second Hastings[/td]\n[td]Ignore the armistice offered by the British and invade England by wiping out Humphrey\'s base in the fifth Grand Dukes of the West mission "The Hook and Cod Wars".[/td]\n[/tr][tr]\n[td]Shut Up La Hire![/td]\n[td]Defeat the French army before capturing Joan of Arc in the sixth Grand Dukes of the West mission "The Maid Falls".[/td]\n[/tr][tr]\n[td]Self-Made Man[/td]\n[td]Win without allying with either Argyrus or Guaimar in the first Hautevilles mission "Guiscard Arrives".[/td]\n[/tr][tr]\n[td]Haute, Haute, brief candle![/td]\n[td]Inspire a rebellion in the second Hautevilles mission "Roger in Sicily".[/td]\n[/tr][tr]\n[td]Italy Jones and the First Crusade[/td]\n[td]Do not lose a hero in the fourth Hautevilles mission "Bohemond in the East".[/td]\n[/tr][tr]\n[td]Burgundian Victory[/td]\n[td]Win a game playing as the Burgundians.[/td]\n[/tr][tr]\n[td]Sicilian Victory[/td]\n[td]Win a game playing as the Sicilians.[/td]\n[/tr][tr]\n[td]Golden Spurs[/td]\n[td]Transform at least 50 Villagers into Flemish Militia by researching Flemish Revolution.[/td]\n[/tr][tr]\n[td]Tour d\'Italie[/td]\n[td]Construct a Donjon and use it to train a Serjeant.[/td]\n[/tr][/table]\n[/expand]\n\n[h1]PICK UP [i]LORDS OF THE WEST[/i] TODAY[/h1][hr]\n[/hr]There’s no better time to expand your [i]Age of Empires II[/i] experience! With free updates every month, new features and content, exclusive game modes and challenges, amazing community tournaments, and other surprises coming to the strategy classic, there’s always something to look forward to as you play and master all it has to offer!\n\nPick up your copy of [url=https://store.steampowered.com/app/813780/][i]Age of Empires II: Definitive Edtion[/i][/url] and [url=https://store.steampowered.com/app/1389240/][i]Lords of the West[/i][/url] today, and then come join the discussion on our official social channels:\n[list][*] [url=https://twitter.com/AgeOfEmpires][i]Age[/i] on Twitter[/url]\n[*] [url=https://www.facebook.com/ageofempires/][i]Age[/i] on Facebook[/url]\n[*] [url=https://discord.gg/ageofempires][i]Age[/i] on Discord[/url]\n[*] [url=https://forums.ageofempires.com/][i]Age[/i] Forums[/url]\n[*] [url=https://www.instagram.com/ageofempiresgame/][i]Age[/i] on Instagram[/url]\n[/list]\n\n[h1]NEED HELP?[/h1][hr]\n[/hr]Visit our support page for some of the most common issues and troubleshooting tips to help you get started in the game:\n[list][*] [url=https://support.ageofempires.com/hc/en-us/categories/360002911132-Age-of-Empires-II-Definitive-Edition][i]Age of Empires II[/i] Support[/url]\n[/list]\nWe\'ll see you on the battlefield! ⚔',
      feedlabel: "Community Announcements",
      date: 1611682512,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 221380,
    },
    {
      gid: "3917534300069384108",
      title: "Tencent now own Digital Extremes and Splash Damage",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/rps/3917534300069384108",
      is_external_url: true,
      author: "contact@rockpapershotgun.com (Alice O'Connor)",
      contents:
        '<p><a href="https://assets.rockpapershotgun.com/images/2019/08/warframe-gauss.jpg"><img src="https://assets.rockpapershotgun.com/images/2019/08/warframe-gauss.jpg" alt="" width="1920" height="1080" class="alignleft size-full wp-image-724739" title=""></a></p>\n<p>Chinese media conglomerate Tencent have bought Leyou, a name which might not mean much to you but you’ll know some of their subsidiaries: <a href="https://www.rockpapershotgun.com/game/warframe/">Warframe</a> developers Digital Extremes, and <a href="https://www.rockpapershotgun.com/game/dirty-bomb/">Dirty Bomb</a> devs Splash Damage. Both those studios have issued statements saying hey, don’t sweat it, this will be fine.</p>\n<p> <a href="https://www.rockpapershotgun.com/2020/12/23/tencent-now-own-digital-extremes-and-splash-damage/#more-927655" class="more-link"><span aria-label="Continue reading Tencent now own Digital Extremes and Splash Damage">(more…)</span></a></p>',
      feedlabel: "Rock, Paper, Shotgun",
      date: 1608722200,
      feedname: "rps",
      feed_type: 0,
      appid: 230410,
    },
    {
      gid: "3856732771954343800",
      title: "The Update In Which Spectre Takes a Dagger",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3856732771954343800",
      is_external_url: true,
      author: "NathanKell",
      contents:
        "[h1]HERO CHANGES[/h1]\n[b]Alchemist:[/b]\n[list]\n[*][b]Acid Spray:[/b]\n[list]\n[*]Damage changed from [10, 20, 30] to [10, 20, 35]\n[*]Radius changed from [2, 2, 3] to 2\n[/list]\n[/list]\n\n\n[b]Lifestealer:[/b]\n[list]\n[*][b]Feast:[/b]\n[list]\n[*]Percent of target HP per hit changed from [4.5, 6, 7.5] to [4.5, 6, 7]\n[/list]\n[*][b]3 Star Effect:[/b]\n[list]\n[*]Bonus Attack Speed changed from 50 to 30\n[*]Bonus Movement Speed Percent changed from 50 to 30\n[/list]\n[/list]\n\n\n[b]Shadow Shaman:[/b]\n[list]\n[*][b]3 Star Effect:[/b]\n[list]\n[*]Hex duration changed from 5 to 7\n[/list]\n[/list]\n\n\n[b]Slardar:[/b]\n[list]\n[*]Attack Damage Minimum changed from [50, 100, 200] to [60, 120, 240]\n[*]Attack Damage Maximum changed from [80, 160, 320] to [85, 170, 340]\n[/list]\n\n\n[b]Spectre:[/b]\n[list]\n[*][b]Spectral Dagger:[/b]\n[list]\n[*]Damage changed from [300, 500, 700] to [300, 450, 600]\n[*]Cooldown changed from [15, 13, 11] to [15, 13, 12]\n[*]Bonus Attack Speed changed from 200 to 175\n[/list]\n[/list]\n\n\n[b]Spirit Breaker:[/b]\n[list]\n[*][b]Charge of Darkness:[/b]\n[list]\n[*]Fixed a bug where Spirit Breaker would not damage the target of the Charge.\n[*]Damage per bash changed from [100, 175, 250] to [100, 150, 200]\n[/list]\n[/list]\n\n\n[b]Tusk:[/b]\n[list]\n[*]Maximum Health changed from [1050, 2100, 4200] to [1150, 2300, 4600]\n[/list]\n\n\n[b]Viper:[/b]\n[list]\n[*]Maximum Health changed from [900, 1800, 3600] to [1100, 2200, 4400]\n[/list]\n\n\n\n[h1]ALLIANCE CHANGES[/h1]\n[b]Brute:[/b]\n[list]\n[*]Damage Reduction changed from [30, 60] to [30, 50]\n[*]Damage on apply changed from [80, 150] to [80, 120]\n[/list]\n\n\n[b]Rogue:[/b]\n[list]\n[*]Evasion Percent changed from [20, 30] to [20, 40]\n[/list]\n\n\n[b]Scaled:[/b]\n[list]\n[*]Magic Resistance Percent changed from [20, 50] to [30, 55]\n[/list]\n\n\n[b]Troll:[/b]\n[list]\n[*]Attack Speed Bonus for Trolls changed from [35, 65] to [40, 70]\n[*]Attack Speed Bonus for other allies changed from [15, 30] to [20, 40]\n[/list]",
      feedlabel: "Community Announcements",
      date: 1605812504,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 1046930,
    },
    {
      gid: "3807188575848090318",
      title: "Have You Played… Borderlands 2?",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/rps/3807188575848090318",
      is_external_url: true,
      author: "contact@rockpapershotgun.com (Nate Crowley)",
      contents:
        '<p><a href="https://assets.rockpapershotgun.com/images/2020/09/have-you-played-borderlands-2.jpg"><img src="https://assets.rockpapershotgun.com/images/2020/09/have-you-played-borderlands-2-1212x682.jpg" alt="" width="1212" height="682" class="alignnone size-large wp-image-892411" title=""></a></p>\n<aside><em><a href="https://www.rockpapershotgun.com/tag/have-you-played/">Have You Played?</a> is an endless stream of game retrospectives. One a day, every day, perhaps for all time.</em></aside>\n<p>The Borderlands series is aesthetically and tonally consistent. <a href="https://www.rockpapershotgun.com/game/borderlands-2/">Borderlands 2</a> has the same exact mood as its predecessor, and its sequel, and whatever you&rsquo;d call Borderlands: The Pre-Sequel in that scheme of reference. It&rsquo;s one of those series where even though there&rsquo;s only four main installments (admittedly with near-infinite DLC), it becomes very difficult to remember which particular bits or characters appeared in which games, without spending time thinking about it. </p>\n<p> <a href="https://www.rockpapershotgun.com/2020/10/01/have-you-played-borderlands-2/#more-892405" class="more-link"><span aria-label="Continue reading Have You Played&hellip; Borderlands 2?">(more&hellip;)</span></a></p>\n',
      feedlabel: "Rock, Paper, Shotgun",
      date: 1601533802,
      feedname: "rps",
      feed_type: 0,
      appid: 49520,
    },
    {
      gid: "3670950880873081249",
      title: "Condition Zero update released",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3670950880873081249",
      is_external_url: true,
      author: "mikela",
      contents:
        "Half-Life and Counter-Strike updates are now available that affect Condition Zero through shared resources. \n\nPlease see [url=https://steamcommunity.com/games/70/announcements/detail/4641476065456638962]the Half-Life update notes[/url] and [url=https://steamcommunity.com/games/10/announcements/detail/5384570009884390638]the Counter-Strike update notes[/url] for details.",
      feedlabel: "Community Announcements",
      date: 1597805992,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 80,
      tags: ["patchnotes"],
    },
    {
      gid: "3667572003463514724",
      title: "NBA 2K21 MyTEAM Moments Challenge",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3667572003463514724",
      is_external_url: true,
      author: "NBA 2K",
      contents:
        "[img]{STEAM_CLAN_IMAGE}/35349173/d58ee17b5c27df09d4a4c8534c3f24ef71662720.jpg[/img]\n\n🚨 NBA 2K21 MyTEAM Moments Challenge 🚨\n\nA special MyTEAM Moments Challenge is now LIVE 🔥 Defeat 2K20 & 2K21 cover athletes to earn 21 tokens in 2K20 and a special pack in 2K21 MyTEAM.\n\nChallenge ends on Friday August 28th",
      feedlabel: "Community Announcements",
      date: 1596838534,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 1089350,
    },
    {
      gid: "3112496281289182970",
      title: "Clicker Heroes 1.0e12 - Clans 2.0",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/3112496281289182970",
      is_external_url: true,
      author: "McNiiby",
      contents:
        "Hey Heroes!\n\nToday we’re releasing a new update to Clicker Heroes that completely revamps the Clans system.\n\nThanks to all of you that participated in the beta!\n\n[b]New Raid System:[/b]\n\nWe have revamped the entire clan tab with a new UI and a whole new raid system.\n\nThe new raid system rewards two currencies: Rubies and Immortal Souls\n\n[b]New Feature: Raid Progression[/b]\n\n -- Immortal Souls can be used to increase your level and thus, increase your damage per click against Immortals.\n\n-- While you'll start off gaining only small amounts of rubies, the stronger you grow, the more rubies you'll earn by defeating higher level Immortals.\n\n[b]New Feature: Raid Classes.[/b]\n\n-- Raids now have you choose one of the three classes to do battle against Immortals: Rogue, Mage, or Priest\n\n-- Immortals are weak to a different one of the classes everyday so work with your raid to have all the types covered.\n\n[b]New Feature: Bonus Fights.[/b]\n\n-- After completing an Immortal for the day, your clan has the option to buy an additional fight for rubies based on the level of the Immortal.\n\n-- The bonus fight allows you to gain even more Rubies and Immortal Souls per day.\n\n-- Only one member has to pay for the whole clan so work with your clan to spread the wealth.\n\n[b]New Feature: Immortal Locking.[/b]\n\n-- Immortals in the new system are much tougher than before and some will require farming in order to beat.\n\n-- Clan Masters will be able to stop the automatic progression of Immortal fights so that they can stay on an Immortal they can beat and therefore continue to get rewards.\n\n[b]New Feature: Check-In[/b]\n\n-- Not every Immortal will take your entire roster of ten to beat so as long as you show up for the day, even if the Immortal is dead, you can check-in for the rewards.\n\nApart from those features, here are some other key differences compared to the old system:\n\n-- Only 3 Autoclickers are allowed in the fight at a time\n\n-- The fight timer is 16 seconds\n\n-- Only the best of your scores counts against the Immortal but you can pay 10 rubies to try to improve your score.\n\n[b]Legacy Raid System:[/b]\n\n[list]\n[*]     If you liked the old system, you can still do those!\n[*]     The old raid system has been renamed to \"Legacy Raids\"\n[*]     In the new UI, it has been placed in the third tab from the top\n[/list]\n\nb]Miscellaneous:[/b]\n\n[list]\n[*]     We have revamped the entire clan tab with a new UI that should\n[*]     hopefully make clans easier to communicate with and manage.\n[*]     There is now an option to respec your clan class in the options menu.\n[/list]\n\n[b]Bugfixes:[/b]\n\n[list]\n[*]     Fixes a bug that prevented HZE from going over 1,000,000 in the clan roster.\n[*]     Fixes a bug that allowed Autoclickers to deal damage after the timer ended on Immortals.\n[*]     Various bugfixes.\n[/list]\n",
      feedlabel: "Community Announcements",
      date: 1590014888,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 363970,
    },
    {
      gid: "2578811485589562195",
      title: "PC Maintenance: February 19, 2020",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/2578811485589562195",
      is_external_url: true,
      author: "jgolenbo",
      contents:
        "The Z1BR client has been updated with the following fixes:\n\n•\tARV spawns have been replaced with Offroader spawns to correct an exploit that allowed players to go prone and shoot inside the ARV turret \n•\tTwitch Account Linking/Unlinking has been fixed.\n•\tAsia/Pacific region lock has been softened so the region’s home server will be NA.\n\nNo server downtime is required.",
      feedlabel: "Community Announcements",
      date: 1582150607,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 433850,
      tags: ["patchnotes"],
    },
    {
      gid: "2468465044713593343",
      title: "ASYLUM: New gameplay video and livestream!",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/2468465044713593343",
      is_external_url: true,
      author: "AgustinCordes",
      contents:
        "Hi all! 👋\r\n\r\nThis is a brief update to show you our new gameplay video. A collection of greatly improved, familiar locations and new ones, focusing on interactions and things to do — including speaking with the mysterious denizens of the asylum! Take a look:\r\n\r\nhttps://youtu.be/2-YgD6FhsmI\r\nThe game is working remarkably well. In fact, any stuttering you may notice in the video was our recording software behaving erratically 🙄\r\n\r\nBut, what you see here is 100% in-game stuff, no processing, no tricks. Asylum is running with a stable 60fps in fullscreen High quality on a 3-year old computer. It's even perfectly playable on Very High quality with extra sharp graphics!\r\n\r\nSo this is how the game looks and feels, and we hope you like it 😊 Just a tiny glimpse of many more locations you'll have to explore!\r\n\r\n[h1]LIVESTREAM (CONFIRMED)[/h1]\r\n\r\nI'm really sorry about this one. I should've posted more updates here. The promised livestream was postponed due to an incredibly nasty acute bronchitis I got a few weeks ago. It was sheer Hell 🤢 And all because I didn't get a flu shot 💉\r\n\r\nThankfully, I'm back in action and the livestream is totally happening [I]this[/I] Friday 22 at 8:00 PM (UTC) on Twitch: [url=https://www.twitch.tv/senscape]https://www.twitch.tv/Senscape[/url]\r\n\r\n[url=https://www.twitch.tv/senscape][img]https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/4214866/ab39b687628216efeee619c8ae6a27df6ebf0fe5.jpg[/img][/url]\r\n\r\nIf you can't make it, don't worry, I'll record everything. It would be great to see you there! I'll be happy to answer all your questions.\r\n\r\nAnd that's it for today, but hopefully see you soon!\r\n\r\n—Agustín",
      feedlabel: "Community Announcements",
      date: 1574276469,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 272060,
    },
    {
      gid: "3657414904105612622",
      title: "A new Half-Life would have to be VR",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/3657414904105612622",
      is_external_url: true,
      author: "",
      contents:
        "<img src=\"https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-11-19-09-11/-1574154714009.jpg/EG11/resize/300x-1/format/jpg/2068548.jpg\" alt=\"\"/><p>Like Doc Brown, I once hit my head and saw the future. I didn't come round in the bathroom having the idea for the Flux Capacitor, but I did bonk my noggin pretty hard in the office games room and sit back, dazed but delighted with what had just happened.</p><p>I was playing the Budget Cuts demo on Valve's room-scale VR. Budget Cuts is a game about infiltrating an office that's patrolled with deadly robots. Because of the room-scale VR, you're really there: your actual body is your in-game body. This means that the robots are the same size as you - which is terrifying - and it also means that when you have to duck your head through a missing panel in the floor to look into the room below, you really have to do it. Except that while the game floor might be missing a panel, the real floor isn't. Bonk. I did it. Chris Bratt, who had also played the demo, had done it. A day later, so moved by what I'd played I brought in a friend to try it out. They did it too. We all hit our heads and we all saw the future.</p><p>More than just the future of video games, I really felt like I had seen the future of one series in particular. I still think this. I still think that Budget Cuts is essentially the closest I've ever gotten to playing Half-Life 3. It's not set in the Half-Life universe, although its mixture of horrific technology and the banal and bureaucratic is not a million miles away. It wasn't made by a Valve team, although I gather the people who made it did end up working on the final game at Valve as incubees. Instead, it channels that magical thing that Half-Life has always done.</p><p><a href=\"https://www.eurogamer.net/articles/2019-11-19-a-new-half-life-would-have-to-be-vr\">Read more</a></p>",
      feedlabel: "Eurogamer",
      date: 1574154840,
      feedname: "eurogamer",
      feed_type: 0,
      appid: 50,
    },
    {
      gid: "3657414904105612622",
      title: "A new Half-Life would have to be VR",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/3657414904105612622",
      is_external_url: true,
      author: "",
      contents:
        "<img src=\"https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-11-19-09-11/-1574154714009.jpg/EG11/resize/300x-1/format/jpg/2068548.jpg\" alt=\"\"/><p>Like Doc Brown, I once hit my head and saw the future. I didn't come round in the bathroom having the idea for the Flux Capacitor, but I did bonk my noggin pretty hard in the office games room and sit back, dazed but delighted with what had just happened.</p><p>I was playing the Budget Cuts demo on Valve's room-scale VR. Budget Cuts is a game about infiltrating an office that's patrolled with deadly robots. Because of the room-scale VR, you're really there: your actual body is your in-game body. This means that the robots are the same size as you - which is terrifying - and it also means that when you have to duck your head through a missing panel in the floor to look into the room below, you really have to do it. Except that while the game floor might be missing a panel, the real floor isn't. Bonk. I did it. Chris Bratt, who had also played the demo, had done it. A day later, so moved by what I'd played I brought in a friend to try it out. They did it too. We all hit our heads and we all saw the future.</p><p>More than just the future of video games, I really felt like I had seen the future of one series in particular. I still think this. I still think that Budget Cuts is essentially the closest I've ever gotten to playing Half-Life 3. It's not set in the Half-Life universe, although its mixture of horrific technology and the banal and bureaucratic is not a million miles away. It wasn't made by a Valve team, although I gather the people who made it did end up working on the final game at Valve as incubees. Instead, it channels that magical thing that Half-Life has always done.</p><p><a href=\"https://www.eurogamer.net/articles/2019-11-19-a-new-half-life-would-have-to-be-vr\">Read more</a></p>",
      feedlabel: "Eurogamer",
      date: 1574154840,
      feedname: "eurogamer",
      feed_type: 0,
      appid: 50,
    },
    {
      gid: "3657414904105612622",
      title: "A new Half-Life would have to be VR",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/3657414904105612622",
      is_external_url: true,
      author: "",
      contents:
        "<img src=\"https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-11-19-09-11/-1574154714009.jpg/EG11/resize/300x-1/format/jpg/2068548.jpg\" alt=\"\"/><p>Like Doc Brown, I once hit my head and saw the future. I didn't come round in the bathroom having the idea for the Flux Capacitor, but I did bonk my noggin pretty hard in the office games room and sit back, dazed but delighted with what had just happened.</p><p>I was playing the Budget Cuts demo on Valve's room-scale VR. Budget Cuts is a game about infiltrating an office that's patrolled with deadly robots. Because of the room-scale VR, you're really there: your actual body is your in-game body. This means that the robots are the same size as you - which is terrifying - and it also means that when you have to duck your head through a missing panel in the floor to look into the room below, you really have to do it. Except that while the game floor might be missing a panel, the real floor isn't. Bonk. I did it. Chris Bratt, who had also played the demo, had done it. A day later, so moved by what I'd played I brought in a friend to try it out. They did it too. We all hit our heads and we all saw the future.</p><p>More than just the future of video games, I really felt like I had seen the future of one series in particular. I still think this. I still think that Budget Cuts is essentially the closest I've ever gotten to playing Half-Life 3. It's not set in the Half-Life universe, although its mixture of horrific technology and the banal and bureaucratic is not a million miles away. It wasn't made by a Valve team, although I gather the people who made it did end up working on the final game at Valve as incubees. Instead, it channels that magical thing that Half-Life has always done.</p><p><a href=\"https://www.eurogamer.net/articles/2019-11-19-a-new-half-life-would-have-to-be-vr\">Read more</a></p>",
      feedlabel: "Eurogamer",
      date: 1574154840,
      feedname: "eurogamer",
      feed_type: 0,
      appid: 50,
    },
    {
      gid: "2426802221737656483",
      title: "Day of Defeat update released",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/2426802221737656483",
      is_external_url: true,
      author: "mikela",
      contents:
        "A Half-Life update is now available that affects Day of Defeat through shared resources. \n\nPlease see [url=https://steamcommunity.com/gid/103582791433474307/announcements/detail/1586880891220596672]the Half-Life update notes[/url] for details.",
      feedlabel: "Community Announcements",
      date: 1570558121,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 30,
      tags: ["patchnotes"],
    },
    {
      gid: "2426802221737652647",
      title: "Deathmatch Classic update released",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/2426802221737652647",
      is_external_url: true,
      author: "mikela",
      contents:
        "A Half-Life update is now available that affects Deathmatch Classic through shared resources. \n\nPlease see [url=https://steamcommunity.com/gid/103582791433474307/announcements/detail/1586880891220596672]the Half-Life update notes[/url] for details.",
      feedlabel: "Community Announcements",
      date: 1570558029,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 40,
      tags: ["patchnotes"],
    },
    {
      gid: "2426802221737641332",
      title: "Ricochet update released",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/2426802221737641332",
      is_external_url: true,
      author: "mikela",
      contents:
        "A Half-Life update is now available that affects Ricochet through shared resources. \n\nPlease see [url=https://steamcommunity.com/gid/103582791433474307/announcements/detail/1586880891220596672]the Half-Life update notes[/url] for details.",
      feedlabel: "Community Announcements",
      date: 1570557759,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 60,
      tags: ["patchnotes"],
    },
    {
      gid: "2422298078098618275",
      title: "Check out Spaceland - Out Now",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/2422298078098618275",
      is_external_url: true,
      author: "Ragnar",
      contents:
        "Greetings everyone!\n\nToday we would like to share some exciting news with you: our new story based strategy Spaceland has been released!\n\n[img]{STEAM_CLAN_IMAGE}/5779506/3897e043e7194aa8ea8d90cb8573364fac3f360d.gif[/img]\n\nSpaceland is an incredibly dynamic turn-based strategy, reviving the traditions of XCOM, Incubation and Laser Squad. Lead a team of the most desperate fighters, destroy alien monsters and uncover the secrets of the lost planet.\n\n[previewyoutube=myAlbM8H2uc;full][/previewyoutube]\n\n[h1]Top Features:[/h1]\n[list]\n[*] The game is inspired by the best turn-based strategies of the old school - XCOM, Incubation, Laser Squad\n[*] A unique blend of dynamic turn-based battles lasting 10-15 minutes\n[*] Make a squad from 7 space rangers, each with a unique fighting style\n[*] The story of the mysterious planet in the spirit of the «golden age» of science fiction\n[/list]\n\nSupport our new game with story in Braveland style and start the space adventure!\n\nhttps://store.steampowered.com/app/1021070/Spaceland/",
      feedlabel: "Community Announcements",
      date: 1569864938,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 285800,
    },
    {
      gid: "2499943313633950215",
      title:
        "Report: Bethesda sues Warner Bros., claims Westworld game uses Fallout Shelter code",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/eurogamer/2499943313633950215",
      is_external_url: true,
      author: "",
      contents:
        '<img src="https://cdn.gamer-network.net/2018/articles/2018-06-22-15-44/bethesda-sues-warner-bros-claims-westworld-game-uses-fallout-shelter-code-1529678670406.jpg/EG11/resize/300x-1/format/jpg/1980681.jpg" alt=""/><p>Bethesda is reportedly suing Warner Bros. over the Westworld mobile game, which it claims uses Fallout Shelter code.</p><p>According to <a href="http://www.tmz.com/2018/06/21/warner-bros-sued-company-claims-westworld-game-total-rip-off/" target="_blank">TMZ</a>, Bethesda is suing Warner Bros. and Behaviour Interactive, the developer of the game. In court documents, Bethesda reveal it contracted Behaviour in 2014 to work on Fallout Shelter before Behaviour went on to make the Westworld game for Warner.</p><p>Fallout Shelter is a building and people management sim with a cute art design where you play the vault overseer. You have to keep your vault dwellers alive, playing Cupid to get them to have babies, while all sorts of things go wrong in the vault and, when you can, send your people out into the wasteland to gather resources. It looks like this:</p><p><a href="https://www.eurogamer.net/articles/2018-06-22-bethesda-sues-warner-bros-claims-westworld-game-uses-fallout-shelter-code">Read more&hellip;</a></p>',
      feedlabel: "Eurogamer",
      date: 1529679216,
      feedname: "eurogamer",
      feed_type: 0,
      appid: 588430,
    },
    {
      gid: "2423345440409107468",
      title: "Mac & Linux Support Available Now!",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/2423345440409107468",
      is_external_url: true,
      author: "[GNG] Philip",
      contents:
        'Hello everyone!\r\n\r\nA Story About My Uncle now support both Mac and Linux! :D\r\n\r\nIf you encounter any issues, please share them with us in the [url=http://steamcommunity.com/app/278360/discussions/1/1333474229070263980/]stickied discussion thread[/url], or mail us at support@gonenorthgames.com.\r\n\r\n[h1]PATCH NOTES FOR BUILD 5188[/h1]\r\n\r\n[h1]Localization[/h1][list]\r\n[*]Added Hungarian\r\n[*]Polish translation updated[/list]\r\n[h1]Misc[/h1][list]\r\n[*]Fixed an issue with Time Trials\r\n[/list]\r\n\r\n[h1]PATCH NOTES FOR BUILD 5163[/h1]\r\n\r\n[h1]Mac and Linux[/h1][list][*]Added "A Story About My Uncle" for Linux\r\n[*]Added "A Story About My Uncle" for OS X[/list]\r\n[h1]Localization[/h1]\r\n[list]\r\n[*]Added Brazilian Portuguese (Community translation)\r\n[*]Added Turkish (Community translation)\r\n[*]Added Finnish (Community translation)\r\n[*]Added Czech (Community translation)\r\n[*]Added Slovak (Community translation)\r\n[*]Added Dutch (Community translation)\r\n[*]Grammatical and spelling fixes.\r\n[*]Fixed line-breaks[/list]\r\nAll the languages have also received changes in spelling and line breaks. You can mail all translation feedback to localization@gonenorthgames.com and I will answer any queries you have!\r\n\r\n[h1]Misc[/h1]\r\n[list][*]Subtitle On/Off setting should now save on restart.\r\n[*]Updated credits[/list]\r\nUntil next time!\r\n- [GNG] Philip',
      feedlabel: "Community Announcements",
      date: 1494601781,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 278360,
    },
    {
      gid: "75837063474170664",
      title: "Monetization change",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/75837063474170664",
      is_external_url: true,
      author: "crazyrocksstudios",
      contents:
        "Dear warriors,\r\n\r\nSWO is not gonna be F2P any more. Of-course those of You, who already have the game, don't need to pay for a copy. We also want to get rid of the GOLD currency to eliminate in-game purchases completely.\r\nHowever, all DLC's stays and we plan to make few more.\r\nTwo big promotions will be launched next week so prepare for some newcomers!\r\n\r\nPredicted price for SWO copy will be about 2$\r\n\r\nCheers,\r\nStan\r\n\r\n",
      feedlabel: "Community Announcements",
      date: 1487924088,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 417910,
    },
    {
      gid: "2499943313690959355",
      title: "The Tiny Bang Story soundtrack is free for everyone!",
      url:
        "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/2499943313690959355",
      is_external_url: true,
      author: "DAS",
      contents:
        "[img]http://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/3952832/577b743a79d6c490734bab8bc30ab7426e1bf8c8.jpg[/img]\r\nHi Folks,\r\n\r\nHere is the direct link to [b]The Tiny Bang Story Original Soundtrack[/b] (zip archive, 184 Mb)\r\nwww.colibrigames.com/the_tiny_bang_story_ost.zip\r\n\r\nMP3 files inside.\r\n\r\nEnjoy,\r\nAnd  feel free to share with your friends!",
      feedlabel: "Community Announcements",
      date: 1481621016,
      feedname: "steam_community_announcements",
      feed_type: 1,
      appid: 96000,
    },
  ];

  return (
    <div className="news-article">
      <img
        className="news-article-heading"
        src={`https://steamcdn-a.akamaihd.net/steam/apps/${testArray[1].appid}/library_hero.jpg`}
      />
      <article className="single-article">
        <div
          className="article-text"
          dangerouslySetInnerHTML={{
            __html: testArray[77].contents
              .replaceAll("[*]", "<br/>")
              .replaceAll("[", "<")
              .replaceAll("]", ">"),
          }}
        >
          {/* <p className="article-text">{testArray[6].contents.replaceAll("[*]","\n")}</p> */}
        </div>
      </article>
    </div>
  );
};

export default NewsArticle;
