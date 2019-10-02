import { Article } from "./data-definitions";

export const ARTICLES : Article[] = [
    {
        id : 1,
        title: "Scottish quidditch makes international debut",
        image: "debut.jpg",
        content:
        `
        This weekend, a strong Scottish squad made their international
        debut in a series of friendly games against Catalonia hosted in Barcelona.
        Eighteen players, selected from the national training squad, travelled out to
        represent Scotland in the team’s first ever international fixture.

        The first game was close, finishing with a narrow win for the hosts with
        the score Catalonia 70* - 50 Scotland. Scotland fought back, winning the second game
        of the series decisively 150 – 50*.

        Captain Tev Wallace said:

        > Captaining in Catalonia was a fantastic experience, seeing everyone
        work and play together for the first time, and really giving an
        idea of how much potential we have as a national team.

        `,
        author: "Rix Dishington",
        date: new Date(2018, 10, 19),
        tags: ["team scotland", "international", "catalonia", "debut"],
        photoCredit: "Axel Casas",
        creditLink: "https://www.facebook.com/BocsFolls/"
    },
    {
        id : 2,
        title: "Glasgow Grim Reapers Qualify for European Quidditch Cup",
        image: "eqt.jpg",
        content:
        `
        After a gruelling weekend competing against the best teams from across the UK,
        the Glasgow Grim Reapers finished in fourth place and qualified to represent
        QuidditchUK at Division 1 of the European Quidditch Cup which will take place
        in Harelbeke, Belgium on 11/12th May. This will be the first time that a Scottish
        team has competed at a European Quidditch Cup and we wish Glasgow the best of luck
        for their international debut.

        Gavin Hughes, Head Coach of the Scottish national team and a Glasgow Grim Reapers player said:

        > I think it'd be fair to say that nobody in the Glasgow Grim Reapers expected we'd
        perform quite so well at EQT. We've not quite caught up mentally with the club's rapid
        rise to the top tier of the UK game, and still tend to underestimate our own capabilities,
        but in some ways this is a good mentality to have. It stops us from becoming complacent,
        and I think it will permeate the way we approach EQC, especially as the first Scottish
        club ever to attend a tournament at that level. We want to do Scottish quidditch proud,
        and the fact that less than a season ago the club was still competing at Dev Cup will
        keep us grounded even as we brush shoulders with the finest teams in Europe.

        Edinburgh’s Holyrood Hippogriffs Firsts team also competed at the tournament,
        just missing out on qualification in a match with Southampton Quidditch Club.

        `,
        author: "Rix Dishington",
        date: new Date(2019, 0, 30),
        tags: ["eqt", "eqc", "glasgow", "edinburgh", "quidditchuk"],
        photoCredit: "Sam Birkitt Photography",
        creditLink: "https://www.facebook.com/sbirkittphotography/"
    },
    {
        id : 3,
        title: "Edinburgh Holyrood Hippogriffs Firsts regain Scottish Cup title",
        image: "scottish-cup.jpg",
        content:
        `
        After missing the tournament last season to compete at Hateful Eight in Coventry,
        the Edinburgh Holyrood Hippogriffs Firsts have regained the title of Scottish Champions
        from last year’s winners the Glasgow Grim Reapers.

        In a dramatic finale, the result went down to tiebreakers after Edinburgh’s First and
        Second teams and Glasgow all came away with two wins each.

        The tournament commenced with a shock upset as Edinburgh’s Second team clinched a snitch range
        victory over the heavily favoured Glasgow Grim Reapers. Both teams then went on to defeat the
        St Andrews Snidgets, who also lost to Edinburgh Firsts. The Edinburgh derby finished with a
        predictable heavy victory for the Edinburgh Firsts side, leading to the final match of the
        day between an undefeated Edinburgh Firsts squad and a resurgent Glasgow with a lot of ground to make up.

        In the final nail-biting match, Glasgow pulled off their first ever defeat of their perennial rivals,
        levelling up the win/loss records and forcing the tournament to a three-way tiebreaker.

        Unfortunately for Glasgow, their final victory wasn’t enough to upset the QPD scales and despite
        losing the final match of the day, Edinburgh Firsts were declared the tournament winners for
        the third time.

        Edinburgh Firsts Captain Gary Cassidy said:

        > We had to take two much smaller squads than we would have liked this year, however I’m
        extremely happy with the result and I know that all our players gave 110% in each game
        which shows in the result and I’m very proud of everyone for the effort they put in to
        make it possible.

        `,
        author: "Rix Dishington",
        date: new Date(2019, 1, 19),
        tags: ["edinburgh", "glasgow", "st andrews", "stirling", "scottish cup"],
        photoCredit: "Lisa Dörner"
    },
    {
        id: 4,
        title: "Team Scotland is ready for any weather",
        image: "snow.jpg",
        content:
        `
        The weather outside may have been frightful last weekend, but the Scottish National
        Quidditch Team's open training session was delightful! We had a magical morning in
        the winter snow (in March) perfecting our technique for the upcoming European Games
        in June - and afterwards we chatted tactics over many, many hot cups of hot chocolate.

        Thanks to all who came along, and we hope to see many more at our next session in
        APRIL in EDINBURGH - details to follow. Hopefully we'll get spring weather this time!
        `,
        author: "Hannah Glover",
        date: new Date(2019, 2, 18),
        tags: ["snow", "open training", "team scotland"],
        photoCredit: "Rebecca Norman"
    },
    {
        id: 5,
        title: "First Training Of The Season Off To A Flying Start for Team Scotland",
        image: "first-training.jpg",
        content:
        `
        As freshers began their return to university and the summer heat broke to welcome in the
        autumn winds, Team Scotland welcomed some new faces and old favourites back into Edinburgh
        for the first open training weekend of the 19/20 quidditch season at the beginning of
        September. Numbers were up and spirits were high as the creaking bones and stiff joints
        of lazy summer days faded with all players bringing their ‘A’ game.<br><br>
        The standard of attendees was wonderful and incredibly promising for Team Scotland’s upcoming season.
        We are delighted that based on this training session we have been able to offer up a
        number of new positions on the training squad and cannot wait to see what these new
        players are going to bring to the team. Keep an eye out as you may spot a few unfamiliar
        faces on the pitch this season!<br><br>
        Don’t worry if you missed this chance to see Team Scotland in action however, as there
        will be more open training sessions across Scotland throughout the year in which you
        can get an opportunity to play with some of Scotland’s best players. <br><br>
        You can keep updated with the team’s progress and news over the next season through the Quidditch Scotland
        website, and their Facebook page and whether on pitch or on the side lines, we hope to see you soon!
        `,
        author: "Lizzie Fenwick",
        date: new Date(2019, 8, 4),
        tags: ["open training", "team scotland"]
    },
    {
        id: 6,
        title: "Introducing: Stirling Dumyat Dragons Quidditch Team",
        image: "stirling-intro.jpg",
        content:
        `
        Kicking off this season’s Team Introductions is Stirling! The team were established in 2013
        and after taking a little time to find their rhythm they had a stellar season in 2018,
        culminating in a 5th place position at Dev Cup 2018 as a joint team with Northumberland’s
        Northern Ridgebacks. Since then the club has been going from strength to strength.
        We had a round of rapid-fire questions with their captain, Marco Lombardi, to give you
        the low-down on the Dumyat Dragons.

        **Describe your first training session of the year in one word:**<br>
        *Hope.*

        **What are you most looking forward to this season?**<br>
        *Bringing my dragons home with a medal.*

        **Who is the biggest Harry Potter fan on your team?**<br>
        *Tough question, but I think this title goes to Donald, who is also president of the wizarding society!*

        **Which player would be most likely to be turned into a meme?**<br>
        *Becca for sure, especially after she started a meme challenge with the Grim Reapers.*

        **How would you describe quidditch to a fresher in three words?**<br>
        *Chaotic. Funny. Legendary.*

        **What is your greatest achievement in quidditch?**<br>
        *Playing a couple of friendly games during the last World Cup.*

        **What is Stirling’s go-to chant?**<br>
        *Who are we? STIRLING!*<br>
        *Where are we from? NOT STIRLING!*<br>
        *What do we want? WIN! (although this bit changes from game to game)*

        **Where is the weirdest place you have played quidditch?**<br>
        *A steep, sloped garden in Siena last month.*

        **What makes the Stirling Dumyat Dragons special?**<br>
        *Our priority is to be supportive towards our players and enjoy ourselves. As a small team, we
        are able to give everyone a lot pitch time and all of these things also brought some players to
        travel a lot of miles just to play with us. To use a quotation from my favourite show: “Together
        they are the best crew, the best team a captain could ever hope for”.*

        **Finally, who are the new players to look out for this season?**<br>
        *First we have to see if they'll stay, we are optimistic but you never know what time wants to happen.
        Overall, I think the next friendlies will be the optimal proving ground for our freshers.*

        If you want to see more of Stirling then keep an eye out at this year’s Highlander Cup or, if you
        cannot wait that long, then head along to one of their training sessions; held at Airthrey
        Castle every Wednesday at 4-5.30pm and Sunday at 1.30-3.30pm.
        `,
        author: "Lizzie Fenwick",
        date: new Date(2019, 8, 23),
        tags: ["introducing", "stirling"]
    },
    {
        id: 7,
        title: "Introducing: St Andrews Snidgets Quidditch Team",
        image: "st-andrews-intro.jpg",
        content:
        `
        Today we introduce you to the St Andrews Snidgets. The club was founded in 2012 and has been a
        staple in the Scottish quidditch scene since. As with Stirling, St Andrews performed outstandingly
        at Dev Cup 2018, earning themselves 3rd place. They also placed 10th in Northern 2018, sending them
        to BQC in Spring 2019! I caught up with their Captain, Henry Williams to learn more about the team.

        **Describe your first training session of the year in one word:**<br>
        *Chaos*

        **What are you most looking forward to this season?**<br>
        *Watching players grow. There’s nothing quite like watching someone who couldn’t run with a broom
        at the start of the season score their first tournament goal, shatter the opposing offence alone
        with one bludger, or catch their first snitch.*

        **Who is the biggest Harry Potter fan on your team?**<br>
        *I reckon it’s probably Eleanor*

        **Which player would be most likely to be turned into a meme?**<br>
        *David "2 cards in 1 minute" Burnett*

        **How would you describe quidditch to a fresher in three words?**<br>
        *Dodgeball, handball, rugby is our go-to opener.*

        **What is your greatest achievement in quidditch?**<br>
        *Coming 3rd place in Dev Cup 2018 was incredible*

        **What is St. Andrews’s go-to chant?**<br>
        *It’s Gaelic: “Aa vell sheev loo-ah? Ha sheen loo-ah! Aa vell sheev loovore? Ha sheen loovore! Aa vell sheev moh-tan-ach? Ha sheen moh-tan-ach!”*<br>
        *Or, in English:*<br>
        *“Are you fast? We are fast! Are you strong? We are strong! Are you fluffy? We are fluffy!”*<br>

        **Where is the weirdest place you have played quidditch?**<br>
        *We tried indoor quidditch once… never again.*

        **What makes the St Andrews Snidgets special?**<br>
        *It’s a family*

        **Finally, who are the new players to look out for this season?**<br>
        *We’ve got some freshers who get that deathstare in their eyes when they pick up a bludger, which is always a
        good sign. It’s still early in the season, so we’ll see who sticks around.*<br>
        *Hanna Karstensen joined us halfway through last year and has since skyrocketed from a shy newbie to the safest hands on the team.*

        If you want to see St Andrews play in the flesh, then head over to North Haugh on Saturday September 28th as they host the
        annual Edinburgh vs St Andrews Fresher Friendlies. If a one-off isn’t enough for you, however, you can catch them at
        North Haugh from 2-4pm every Wednesday, and 1.30-4.30 every Saturday!

        `,
        author: "Lizzie Fenwick",
        date: new Date(2019, 8, 25),
        tags: ["introducing", "st-andrews"],
        photoCredit: "Lisa Dörner"
    },
    {
        id: 8,
        title: "Introducing: Glasgow Grim Reapers",
        image: "glasgow-intro.jpg",
        content:
        `
        Winners of Dev Cup 2018 and Scottish Cup 2018 and earning a respectable 4th place at last year’s Northern,
        the Grim Reapers are a team on a mission (if that mission is to dominate quidditch leader-boards in Scotland and across the UK).
        This is a team who are not afraid to roll around in the mud for a win, so I had to go and find out where this spark comes from;
        their captain Ross Wiseman was ready with some quick-fire answers to my questions.

        **Describe your first training session of the year in one word:**<br>
        *Fantastic*

        **What are you most looking forward to this season?**<br>
        *Reaping souls*

        **Who is the biggest Harry Potter fan on your team?**<br>
        *Probably Ben*

        **Which player would be most likely to be turned into a meme?**<br>
        *Still probably Ben*

        **How would you describe quidditch to a fresher in three words?**<br>
        *A Real Sport*

        **What is your greatest achievement in quidditch?**<br>
        *Seeking for Scotland at the European Games*

        **What is Glasgow’s go-to chant?**<br>
        *Chanting “goon goon goon” if one of our players commits a foul*

        **Where is the weirdest place you have played quidditch?**<br>
        *A children’s hospital for a Harry Potter Day*

        **What makes the Glasgow Grim Reapers special?**<br>
        *Everyone who plays quidditch is special!*

        **Finally, who are the new players to look out for this season?**<br>
        *I don’t want to give it away but we might not be as hopeless without Chema and Markus as everyone thinks*

        This team might not take itself too seriously, but they definitely put in the hours when it comes to training.
        If you want a piece of the action you can find them in Kelvingrove Park on Wednesdays from 2-4pm or Sundays from 10-12pm
        and if you are feeling particularly adventurous you can join them for their fitness sessions on Fridays from 5-7pm!
        `,
        author: "Lizzie Fenwick",
        date: new Date(2019, 9, 02),
        tags: ["introducing", "glasgow"]
    }
];
