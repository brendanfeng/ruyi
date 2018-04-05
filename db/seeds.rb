Project.create!([
  {title: "The smartest AI known to mankind AKA AlphaNegativeOne", img_url: "alex-knight-199368-unsplash_zgdzzz", blurb: "AlphaNegativeOne will blow open the world of AI like negative numbers blew open mathematics", story: "<p>I don't need a story - machine learning is the answer</p>", category: "Design & Tech", goal: 900000, pledged_amount: 0, public: true, creator_id: User.second.id},
  {title: "Supreme is the bestest", img_url: "sergey-fediv-218856-unsplash_r3ng5q", blurb: "I'm going to take over Supreme and then build it to become the best sorta vintage sorta hipster mad hypebeast clothing company", story: "<p>I will dominate the world with my mad nice clothing</p>", category: "Design & Tech", goal: 100000000, pledged_amount: 0, public: true, creator_id: User.third.id},
  {title: "Hard Rock Album", img_url: "tallie-robinson-531917-unsplash_kup984", blurb: "I'm making my career-defining album that will rock your world!", story: "<p>I make music for the people, by the people, with the people</p>", category: "Music", goal: 1000, pledged_amount: 0, public: true, creator_id: User.fifth.id},
  {title: "Orchestra of Champions", img_url: "radek-grzybowski-74331-unsplash_bhbhr0", blurb: "We make music for winners only! We don't need any contributions from you if you're a loooooooser", story: "<p>We are the champions of the world, my friend.</p>", category: "Music", goal: 4100, pledged_amount: 0, public: true, creator_id: User.fifth.id},
  {title: "Black Heart of My Lonely Life", img_url: "bailey-zindel-179711-unsplash_e2rzjc", blurb: "Hey I'm Stan and I live in my parent's basement and me and my band are trying to start gigging it out", story: "<p>We need guitars and stuff so we really would appreciate any help you can give us...but it's ok if you don't we know that people have better things to do than help out a bunch of sad guys with that try to sing out their sorrows. But yeah.</p>", category: "Music", goal: 10000, pledged_amount: 0, public: true, creator_id: User.first.id},
  {title: "The Coffee Bible of Biblical Proportions", img_url: "nathan-dumlao-444323-unsplash_psjzpl", blurb: "Learn how to make pretty coffee arrangements!", story: "<p>I just need enough to make an initial print run, and everyone will be able to partake in the goodness that is americano cappuccino latte caffe bene.</p>", category: "Food & Craft", goal: 550, pledged_amount: 0, public: true, creator_id: User.first.id},
  {title: "Muffin Madness", img_url: "mink-mingle-428426-unsplash_feww0d", blurb: "Genius patisserie at work - welcome to the greatest muffin extravaganza in San Jose!", story: "<p>I want muffins - I know you want muffins? Whatever your favorite flavor is, I'm more than happy to provide it. What's my specialty you ask? Apple. Muffins. If you've never used apple, you don't know what you're missing. Contribute, and I'll ship out my next batch as soon as they're done.</p>", category: "Food & Craft", goal: 1000, pledged_amount: 0, public: true, creator_id: User.last.id},
  {title: "The Sewing Master at Work", img_url: "vignesh-moorthy-115557-unsplash_dldmwr", blurb: "I've found an old master, trained from a young age in the art of sewing clothing. We've partnered together to bring you the best!", story: "<p>Have you ever seen a shirt made in front of your eyes, customized to your exact specifications? We provide that here: in fact, even if you live too far away to see the master in person, we'll ship a video just for you! Contribute so that we can share his wizardry with the world</p>", category: "Food & Craft", goal: 23000, pledged_amount: 0, public: true, creator_id: User.last.id},
  {title: "Bioengineered (but totally safe) beans!", img_url: "freddie-collins-424635-unsplash_jjbuvd", blurb: "The healthiest food since apples!", story: "<p>We've discovered a way to bioengineer string beans using totally safe organic methods that don't harm the environment! Not only that, but they taste like bacon and apples. LET ME REPEAT THEY TASTE LIKE BACON AND APPLES. If that doesn't want you to get you into this project, then nothing will</p>", category: "Food & Craft", goal: 2110, pledged_amount: 0, public: true, creator_id: User.last.id},
  {title: "Un Equis - The most interesting suit in the world!", img_url: "ruthson-zimmerman-233522-unsplash_kxmygm", blurb: "I don't always wear a suit - oh wait, yeah I do because this suit is frickin awesome. You can get one too!", story: "<p>I am the least interesting man in the world, but when I put on my suit, I am the most interesting man in the world. That's why - when I wear a suit, it's Un Equis.</p>", category: "Design & Tech", goal: 100, pledged_amount: 0, public: true, creator_id: User.second.id},
  {title: "Droidometer - the droid that measures the atmosphere", img_url: "dose-media-368248-unsplash_s96dio", blurb: "Droidometer is the cutting edge of droid technology that will revolutionize the world of consumer electronics", story: "<p>With the Droidometer, you can measure specific atmospheric conditions so that you can be prepared for any weather conditions. Otherwise, you'd have to depend on those bad weather forecasts that are never ever right.</p>", category: "Design & Tech", goal: 50000, pledged_amount: 0, public: true, creator_id: User.fourth.id},
  {title: "Jazzy Smashy", img_url: "ryan-loughlin-328897-unsplash_dcgczz", blurb: "You want master class 1950's bluesy jazzy blazzy music?", story: "<p>We're a blast from the past, with the Louis Armstrong style of high-energy storytelling, bending notes all over the place, and some of the best scat singing you'll ever hear</p>", category: "Music", goal: 7200, pledged_amount: 0, public: true, creator_id: User.fifth.id},
  {title: "Aerofight - A completely new AR experience", img_url: "ian-baldwin-113578-unsplash_rci9cg", blurb: "Aerofight lets you fly a drone while fighting enemies on your screen! The most fun you'll ever have with a drone", story: "<p>Aerofight is a game where you can fly your drone around, completing missions and defeating enemies while performing some cool maneuvers. You just attach a tablet to our special controller, and fly the drone through the skies while our special AR technology will give you exciting tasks to perform!</p>", category: "Games", goal: 50000, pledged_amount: 0, public: true, creator_id: User.last.id},
  {title: "Glowtacular KB", img_url: "nhu-nguyen-527972-unsplash_ulvlor", blurb: "A keyboard that not only glows in the dark, it glows in the light", story: "<p>Glowtacular KB is a keyboard using special LED lights that not only show color in dark environments, but offer a sheen of light in well-lighted areas too. That means that you can see your keys with that special glow in no matter the environment you're in. Now, be ready to experience gaming or programming with the shiniest keyboard on the market.</p>", category: "Games", goal: 13000, pledged_amount: 0, public: true, creator_id: User.first.id},
  {title: "Chess-apeake Con V5", img_url: "maarten-van-den-heuvel-73124-unsplash_q3xvhb", blurb: "A 7-day chessmania that will change your view of the class board game forever", story: "<p>Do you feel like the competition in your area for chess is not good enough, or there's just not enough people to play with, or even worse, that your skills are getting stagnant? Well come down to Chess-apeake Convention, held right in the heart of Chesapeake, Virginia. We've been running this large-scale operation for five years now and we bring together chess players of all kinds!</p>", category: "Games", goal: 42000, pledged_amount: 0, public: true, creator_id: User.second.id},
  {title: "Visual Breach", img_url: "jens-kreuter-159303-unsplash_vqlzak", blurb: "Virtual reality like you've never experienced before!", story: "<p>So amazing you will forget that it's virtual</p>", category: "Games", goal: 95000, pledged_amount: 0, public: true, creator_id: 4},
  {title: "The Unexplored", img_url: "nasa-53884-unsplash_q9pd2j", blurb: "A short documentary about the space photography", story: "<p>We love space, and we love taking pictures of space. In this short film, we will attempt to show you all our techniques with all the commercially available equipment (with some cameos of awesome equipment not available to the general public). We'll also do an overview of space travel and when we will finally be able to go up into space on the regular.</p><p><br></p><p>We need your support in order to order some equipment for shooting this together. Although we already have the photography equipment, we need to get a lighting manager and pay for distribution costs. Contributions above 25 dollars will net you a full copy of the blu-ray version of our film as well as any extra rewards you may select.</p>", category: "Film", goal: 100000, pledged_amount: 0, public: true, User.fourth.id},
  {title: "Foxes in the Wild", img_url: "cloudvisual-208962-unsplash_bmsxl0", blurb: "A stirring film on my observations of a fox family in the forest",
    story: "<p>Foxes in the Wild is a narrative of a trip I had planned many years back in an attempt to disconnect myself from the often hectic world. Last April I decided to quit my job and finally go on a trip I had always wanted to - live in the forest with only my camera and a few necessary supplies. I didn't want to be contacted by anyone, and my greatest desire was to just film mother nature as it was meant to be seen. On my first day, I befriended a family of foxes by sharing some water and some of the rabbit I had hunted down earlier. I was quickly entranced by their daily rituals and filmed their every action. Eventually, footage that I had originally wanted to encompass all of mother nature became dominated by this single family.</p><p><br></p><p>I hope you'll support this project - I want to share the stunning visuals of the foxes, from their play-fighting to their moments of quiet contemplation.</p>", category: "Film", goal: 7500, pledged_amount: 0, public: true,
    creator_id: User.fourth.id},
  {title: "The Journal Oscar Campaign", img_url: "india-tupy-171305-unsplash_y97ns8", blurb: "We need voters to nominate \"The Journal\", an adaptation of the New York Times bestseller by Niklaus Flickers, for Best Picture", story: "<p>We're looking to raise enough to send out DVDs and gift baskets to all 7000+ members of the Academy. If you loved the movie, please help us in any little way you can! Writing a letter to a filmmaker you know makes all the difference, even if you can't donate to this wonderful cause.</p>", category: "Film", goal: 82100, pledged_amount: 0, public: true, creator_id: User.first.id},
  {title: "Kendo Battle Masters", img_url: "bernd-viefhues-475990-unsplash_eszsuu", blurb: "A riveting fight to the death between secret kendo masters", story: "<p>An original screenplay about two young women embarking on a journey to search for kendo masters. Their journey takes them to rival masters, who train them in their own secret arts, destined to battle. Join us in making this movie come to life.</p><p><br></p><p>The funding will go to cameras, a set, and distribution costs. We've already casted the actors, hired a director, and signed contracts with the choreographers - we need your help to do the rest! The more you donate, the more benefits you get! Contact us to ask more about the rewards.</p>", category: "Film", goal: 18000, pledged_amount: 0, public: true, creator_id: User.last.id},
  {title: "Poetry in Motion", img_url: "sandrachile-483700-unsplash_fa2dmx", blurb: "The wonders of a poem", story: "<p>The great French poet Ernie Hedgingcourse is creating a Kickstarter project for a new translation of his book! If we reach our goal, we can pay for the license and release it worldwide (except for France).</p>", category: "Publishing", goal: 1100, pledged_amount: 0, public: true, creator_id: User.fourth.id},
  {title: "Fundsy Demo", img_url: "beata-ratuszniak-5429-unsplash_zgkjth", blurb: "A workshop by famous street artist Fundsy", story: "<p>Fundsy is coming to a city near you! Our immediate goal is to fund a nationwide tour where he can teach and demonstrate his process - if we meet our stretch goals, you may even decide any cities/dates to add to his tour!</p>", category: "Arts", goal: 10000, pledged_amount: 0, public: true, creator_id: User.fifth.id},
  {title: "Halfway in Love (Second Print Run!)", img_url: "jean-philippe-delberghe-324898-unsplash_fggscn", blurb: "A love story between the last remaining human on Earth and a zombie who protects her", story: "<p>Jean Phillipe is reprinting his 2009 masterpiece, Halfway in Love. Supporters can own their very own sealed copy, with the back cover signed by Jean. The new version features an extra foreword and never-before-seen sketches from his design process.</p>", category: "Comics & Illustration", goal: 9001, pledged_amount: 0, public: true, creator_id: User.last.id}
])

User.create!([
  {username: "user", password_digest: "$2a$10$061HWAnCEm00ZU7748KqZO3WRdS5LFY.nxh0PiwPkRI8JLh9cv9x.", session_token: "Mvw8TIH6A29q5gZ2J9JdKw"},
  {username: "DarrenBuffet", password_digest: "$2a$10$gzF1H9dN7LxhGpBbcNKIfOlIH3A11M2AdDE7knFQGTsdBSs9FH4GW", session_token: "P6b68EHjYvZAqerv-N71Wg"},
  {username: "brendan", password_digest: "$2a$10$YA3/vP882DlEBp9n/H1ycOJlIGpEIbRl8N33XegMwiCWwuAUU9Nsq", session_token: "IaZCf2pC5vvGCuXMe9xK2w"}
  {username: "BobGates", password_digest: "$2a$10$2qE5.1UTKZm6oG5535qmD.R94.wd/KJIZkZ7J.3/7KiGEYEQWMJd6", session_token: "8vUBS-_zCvHszrAnarGWWw"},
  {username: "TommyFiddle", password_digest: "$2a$10$MP2DiSFSsgiDjWEDVPowhOn.z3oMu111TWgzgVF3dsICkpuyT4yt.", session_token: "f0K6yRvxqgnYZ4oAGdlZkw"},
  {username: "StanJobs", password_digest: "$2a$10$8nreGFXDaSRN32ElTKsQyu1vrIGTqyNt.0FnZJe.oa53R6gizBAW.", session_token: "euhLG6vkpYn-suuYJPlB1w"},
  {username: "DaWoz", password_digest: "$2a$10$X9Na8UpHDAo9TRVa2G6jUet8EXp0I715HolYVjJrDxFWusi0nQVCa", session_token: "ndG3VUGpPdoh-SknCrQuOQ"},
])
