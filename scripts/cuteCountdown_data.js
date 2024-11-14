const CC_data = [
    {
        "question": "If you could have any animal as a pet, what would you choose?",
        "from": "least practical",
        "to": "most practical"
    },
    {
        "question": "You can eat only one food for the rest of your life. What do you choose?",
        "from": "least nutritious",
        "to": "most nutritious"
    },
    {
        "question": "Your house is on fire! You have time to save a single item, what do you choose?",
        "from": "least irreplacable",
        "to": "most irreplaceable"
    },
    {
        "question": "You have to survive in a zombie apocalypse. Which household item would you pick as your weapon?",
        "from": "least effective",
        "to": "most effective"
    },
    {
        "question": "If you could live anywhere in the world, where would it be?",
        "from": "least livable",
        "to": "most livable"
    },
    {
        "question": "You’re lost in a forest. Which tool would you want with you?",
        "from": "least helpful",
        "to": "most helpful"
    }, 
    {
        "question": "You’re applying for an accountant job. What leisure activities do you list on your resume?",
        "from": "the one that will turn them off from hiring you",
        "to": "the one that will convince them to hire you"
    }, 
    {
        "question": "One of the players at this table is a vampire... reveal their identity by pointing and saying how you figured it out.",
        "from": "a small clue",
        "to": "irrefutable evidence"
    },
    {
        "question": "What superpower would you want to have?",
        "from": "least useful in daily life",
        "to": "most useful in daily life"
    },
    {
        "question": "If you were a superhero, who would your sidekick be?",
        "from": "least reliable",
        "to": "most reliable"
    },
    {
        "question": "You can bring one board game to a deserted island. Which one do you choose?",
        "from": "least entertaining long-term",
        "to": "most entertaining long-term"
    },
    {
        "question": "You have the chance to become an expert in any skill. Which one would you choose?",
        "from": "least useful skill",
        "to": "most useful skill"
    },
    {
        "question": "If you had to eat one fruit forever, which would it be?",
        "from": "least nutritious",
        "to": "most nutritious"
    },
    {
        "question": "You can live in any type of house. What do you choose?",
        "from": "least functional",
        "to": "most functional"
    },
    {
        "question": "What fictional world would you want to live in?",
        "from": "least pleasant",
        "to": "most pleasant"
    },
    {
        "question": "You can wear only one color for the rest of your life. Which do you choose?",
        "from": "least versatile",
        "to": "most versatile"
    },
    {
        "question": "You’re picking a mascot for your team. Which animal do you pick?",
        "from": "least intimidating",
        "to": "most intimidating"
    },
    {
        "question": "You can take any hobby to a professional level. Which do you pick?",
        "from": "least useful professionally",
        "to": "most useful professionally"
    },
    {
        "question": "If you could own any historical artifact, what would it be?",
        "from": "least valuable",
        "to": "most valuable"
    },
    {
        "question": "You can teleport anywhere for one day. Where do you go?",
        "from": "least exciting",
        "to": "most exciting"
    },
    {
        "question": "You must pick one musical instrument to play for the rest of your life. Which one?",
        "from": "least versatile",
        "to": "most versatile"
    },
    {
        "question": "You’re given a personal robot. What would its main function be?",
        "from": "least helpful",
        "to": "most helpful"
    },
    {
        "question": "You can invent any new holiday. What would it be?",
        "from": "least exciting",
        "to": "most exciting"
    },
    {
        "question": "You find a mysterious potion labeled 'Drink Me.' What effect do you hope it has?",
        "from": "least desirable effect",
        "to": "most desirable effect"
    },
    {
        "question": "You’re building a robot to do any task for you. What task would it handle?",
        "from": "least useful",
        "to": "most useful"
    },
    {
        "question": "A wizard offers you one enchanted item. What do you choose?",
        "from": "least magical",
        "to": "most magical"
    },
    {
        "question": "You can bring one extinct animal back to life. Which one do you choose?",
        "from": "least impactful",
        "to": "most impactful"
    },
    {
        "question": "If every animal could speak, which one would you most want to have a conversation with?",
        "from": "least interesting",
        "to": "most interesting"
    },
    {
        "question": "You discover a map leading to a hidden location. What would you most hope to find there?",
        "from": "least exciting find",
        "to": "most exciting find"
    },
    {
        "question": "You get to turn any movie into a musical. Which one do you choose?",
        "from": "least suited to be a musical",
        "to": "most suited to be a musical"
    },
    {
        "question": "You’re gifted a magical plant that does something unique. What ability would it have?",
        "from": "least useful ability",
        "to": "most useful ability"
    },
    {
        "question": "You can give one mythical creature a real-life counterpart. Which creature would you choose?",
        "from": "least impactful",
        "to": "most impactful"
    },
    {
        "question": "You find a door that opens into another dimension. What’s on the other side?",
        "from": "least surprising",
        "to": "most surprising"
    },
    {
        "question": "You’re offered any artifact from history to keep. Which one do you take?",
        "from": "least valuable",
        "to": "most valuable"
    },
    {
        "question": "You receive a letter from your future self. What’s the best thing it could say?",
        "from": "least reassuring",
        "to": "most reassuring"
    },
    {
        "question": "You have the ability to perfectly mimic any sound. What’s the first sound you’d use it for?",
        "from": "least entertaining",
        "to": "most entertaining"
    },
    {
        "question": "A mad scientist invents a machine that brings fictional objects into reality. What do you choose?",
        "from": "least useful",
        "to": "most useful"
    },
    {
        "question": "You can ask one historical figure a single question. Who would it be, and why?",
        "from": "least insightful",
        "to": "most insightful"
    },
    {
        "question": "You receive a suitcase with an infinite supply of one item. What item would you choose?",
        "from": "least useful",
        "to": "most useful"
    },
    {
        "question": "You’re granted the ability to turn into any object once per day. What would be your first choice?",
        "from": "least practical",
        "to": "most practical"
    },
    {
        "question": "You find an old book with instructions for any spell you choose. Which spell would it teach?",
        "from": "least exciting",
        "to": "most exciting"
    },
    {
        "question": "If you could turn any food into a new flavor of ice cream, which would it be?",
        "from": "least likely to taste good",
        "to": "most likely to taste good"
    },
    {
        "question": "A genie allows you to rename any planet. Which planet would you rename, and what’s the new name?",
        "from": "least interesting name",
        "to": "most interesting name"
    },
    {
        "question": "If any song could be your personal theme song wherever you go, what would it be?",
        "from": "least fitting",
        "to": "most fitting"
    },
    {
        "question": "You’re allowed to add a new animal to the zodiac. Which animal do you choose?",
        "from": "least fitting",
        "to": "most fitting"
    },
    {
        "question": "You can turn any everyday object into a luxury item. What do you choose?",
        "from": "least luxurious",
        "to": "most luxurious"
    },
    {
        "question": "If you could grant one plant the ability to walk, which would you choose?",
        "from": "least interesting",
        "to": "most interesting"
    },
    {
        "question": "Imagine you could bring any fictional building or landmark into reality. What would you choose?",
        "from": "least interesting",
        "to": "most interesting"
    },
    {
        "question": "You’re given a camera that can only photograph one type of subject. What does it capture?",
        "from": "least interesting subject",
        "to": "most interesting subject"
    },
    {
        "question": "You can make any fictional character your roommate. Who would it be?",
        "from": "least compatible",
        "to": "most compatible"
    },
    {
        "question": "You’ve been chosen to rename any ocean. Which one, and what’s the new name?",
        "from": "least fitting name",
        "to": "most fitting name"
    },
    {
        "question": "If you could make any season last forever, which one would it be?",
        "from": "least ideal for everyone",
        "to": "most ideal for everyone"
    },
    {
        "question": "You’re given the power to bring back any extinct language. Which one do you choose?",
        "from": "least useful",
        "to": "most useful"
    },
    {
        "question": "Imagine you could add any animal sound to the national anthem. What would it be?",
        "from": "least fitting",
        "to": "most fitting"
    },
    {
        "question": "You’re able to make any mythical creature real but just one. Which would you choose?",
        "from": "least exciting",
        "to": "most exciting"
    },
    {
        "question": "If you could make any natural phenomenon happen on command, what would it be?",
        "from": "least interesting",
        "to": "most interesting"
    },
    {
        "question": "A wizard gives you a spell that can make any object grow or shrink. What object do you use it on?",
        "from": "least practical",
        "to": "most practical"
    },
    {
        "question": "You’ve won the ability to erase any one invention from history. Which do you choose?",
        "from": "least impactful",
        "to": "most impactful"
    },
    {
        "question": "If you could make any existing movie have a surprise twist, which movie would it be and what twist would it have?",
        "from": "least interesting twist",
        "to": "most interesting twist"
    },
    {
        "question": "You’re granted the power to understand the language of any one species. Which species do you choose?",
        "from": "least useful to know",
        "to": "most useful to know"
    },
    {
        "question": "You have to jump into a pool full of one item. What item do you choose?",
        "from": "least comfortable",
        "to": "most comfortable"
    },
    {
        "question": "You can replace one of your senses with a new, unique sense. What do you choose?",
        "from": "least useful",
        "to": "most useful"
    },
    {
        "question": "You find a magic pen that makes anything you draw come to life. What’s the first thing you’d draw?",
        "from": "least helpful",
        "to": "most helpful"
    },
    {
        "question": "You can bring any object to life and make it your loyal companion. What do you choose?",
        "from": "least useful companion",
        "to": "most useful companion"
    },
    {
        "question": "You’re given a magical key that opens any one door in the world. Which door do you choose?",
        "from": "least interesting place",
        "to": "most interesting place"
    },
    {
        "question": "You discover a hidden talent for cooking any type of food perfectly. What do you specialize in?",
        "from": "least impressive dish",
        "to": "most impressive dish"
    },
    {
        "question": "You’re given the power to talk to one type of object. What type do you choose?",
        "from": "least helpful",
        "to": "most helpful"
    },
    {
        "question": "You gain the ability to change the weather at will. What’s the first weather you create?",
        "from": "least enjoyable",
        "to": "most enjoyable"
    },
    {
        "question": "A famous artist offers to paint your portrait, but you choose the setting. Where do you want it painted?",
        "from": "least interesting setting",
        "to": "most interesting setting"
    },
    {
        "question": "You’re given the choice to instantly master one type of art. What do you choose?",
        "from": "least exciting",
        "to": "most exciting"
    },
    {
        "question": "A magic scroll lets you understand any one mystery of the universe. What would you want to learn?",
        "from": "least meaningful",
        "to": "most meaningful"
    },
    {
        "question": "You can add any one animal trait to your body. Which one would you pick?",
        "from": "least practical",
        "to": "most practical"
    },
    {
        "question": "A scientist offers you a serum that will let you breathe in any one new environment. Which do you pick?",
        "from": "least exciting environment",
        "to": "most exciting environment"
    },
    {
        "question": "You can give any object in your home the ability to teleport. Which one do you choose?",
        "from": "least useful",
        "to": "most useful"
    },
    {
        "question": "You’re granted the ability to alter the size of any object. What’s the first thing you’d change the size of?",
        "from": "least practical",
        "to": "most practical"
    },
    {
        "question": "You discover a seed that will grow into anything you wish. What do you decide it will become?",
        "from": "least helpful",
        "to": "most helpful"
    },
    {
        "question": "You can turn any household item into a flying vehicle. What would you choose?",
        "from": "least practical",
        "to": "most practical"
    },
    {
        "question": "A time-traveling envelope lets you send one message to any point in history. What do you write?",
        "from": "least impactful",
        "to": "most impactful"
    },
    {
        "question": "You can make any fictional character come to life and be your best friend. Who do you pick?",
        "from": "least helpful friend",
        "to": "most helpful friend"
    },
    {
        "question": "You’re given a magical amulet that lets you add one hour to any part of your day. What would you use it for?",
        "from": "least productive",
        "to": "most productive"
    },
    {
        "question": "You can transform one inanimate object into a fully functioning vehicle. What would it be?",
        "from": "least practical",
        "to": "most practical"
    },
    {
        "question": "You’re allowed to rename any planet in the solar system. Which one do you rename, and what’s the new name?",
        "from": "least exciting",
        "to": "most exciting"
    },
    {
        "question": "You have a mirror that shows you any place in the world. Where do you look first?",
        "from": "least interesting",
        "to": "most interesting"
    },
    {
        "question": "You’re given the ability to transform into any one animal at will. What’s the animal you’d choose?",
        "from": "least useful",
        "to": "most useful"
    },
    {
        "question": "A magical notebook lets you write down any skill and instantly master it. What skill do you write down?",
        "from": "least impressive",
        "to": "most impressive"
    },
    {
        "question": "You find a wand that can bring any one food item to life and give it a personality. What food do you choose?",
        "from": "least entertaining personality",
        "to": "most entertaining personality"
    },
    {
        "question": "You can make any animal species as big as a car. Which one do you choose?",
        "from": "least impressive giant",
        "to": "most impressive giant"
    },
    {
        "question": "You’re allowed to make one part of your daily routine automated by magic. Which part do you choose?",
        "from": "least useful",
        "to": "most useful"
    },
    {
        "question": "You have a machine that lets you perfectly understand any language, including animal languages. Which do you try first?",
        "from": "least helpful",
        "to": "most helpful"
    },
    {
        "question": "You’re given a flower that blooms once a year and gives you one wish when it does. What’s your first wish?",
        "from": "least impactful",
        "to": "most impactful"
    },
    {
        "question": "Other players find your secret underground room in your home. What’s inside?",
        "from": "least surprising",
        "to": "most surprising"
    },
    {
        "question": "You’re granted the power to become an expert in one topic just by touching a book about it. Which topic do you choose?",
        "from": "least practical",
        "to": "most practical"
    },
    {
        "question": "You’re given a chest of gold coins, but it has a curse on it. What curse would be worth keeping the coins?",
        "from": "least tolerable curse",
        "to": "most tolerable curse"
    },
    {
        "question": "A genie grants you the power to taste and describe any flavor perfectly. What’s the first food you try it on?",
        "from": "least intriguing",
        "to": "most intriguing"
    },
    {
        "question": "You can make one day of the week special by giving it a unique effect. What effect do you choose?",
        "from": "least enjoyable",
        "to": "most enjoyable"
    },
    {
        "question": "You’re given a rare plant that grows one magical fruit every year. What does this fruit do?",
        "from": "least exciting effect",
        "to": "most exciting effect"
    },
    {
        "question": "You can make any one sound become your personal theme music when you enter a room. Which sound do you choose?",
        "from": "least fitting",
        "to": "most fitting"
    },
    {
        "question": "What is the third ingredient for a vacation? Sun, getting away from it all and _______",
        "from": "nightmare vacation",
        "to": "ideal vacation"
    },
    {
        "question": "When you come to a friend's house, what do you take?",
        "from": "common",
        "to": "unusual"
    },
    {
        "question": "What did your horoscope say this morning?",
        "from": "really bad day",
        "to": "great news"
    },
    {
        "question": "MIME 🎭: You're going to see a show. After the final, applaud the artist.",
        "from": "very bad show",
        "to": "amazing show"
    },
    {
        "question": "MIME 🎭: DING! First Round! You are the boxer in the ring. Mime your fight.",
        "from": "being really scared",
        "to": "Rocky Balboa"
    },
    {
        "question": "MIME 🎭: You are holding a scratching ticket. Scratch it and then mime your reaction when you discover your winnings:",
        "from": "1 euro",
        "to": "100 million euros"
    },
    {
        "question": "You are creating a startup for a revolutionary new smartphone app! What does this app do?",
        "from": "less useful",
        "to": "more useful"
    },
    {
        "question": "Oh shit, toilet is clogged! What do you find to unclog it?",
        "from": "least effective",
        "to": "most effective"
    },
    {
        "question": "Take an imaginary magic wand and cast a spell of your own invention on another player.",
        "from": "very mean",
        "to": "very nice"
    },
    {
        "question": "What activity can we do on the weekend?",
        "from": "the quiet activity",
        "to": "the activity from which we do not come out alive"
    },
    {
        "question": "What pet do you offer to the captain?",
        "from": "the one he will leave on the side of the highway",
        "to": "the one he dreamed of"
    },
    {
        "question": "Football now has an extra rule. Which one?",
        "from": "audience collapses",
        "to": "audience explodes"
    },
    {
        "question": "A foreigner asks you how do you say 'Good morning' in your language. You want to prank him, so you teach him incorrect phrase. What do you teach him?",
        "from": "innoccent phrase",
        "to": "he might get in trouble saying that"
    },
    {
        "question": "There's a 10% chance that when it rains, a food item of your choice falls from the sky instead of water. Which food do you choose?",
        "from": "convenient",
        "to": "deadly"
    },
    {
        "question": "You can be a fly on the wall during one moment in history. Which moment do you choose?",
        "from": "least fascinating",
        "to": "most fascinating"
    },
    {
        "question": "You can do one crime, but you will be caught and get exactly 1 year prison sentence, no matter what you did. What crime do you do?",
        "from": "least worth the jail time",
        "to": "most worth the jail time"
    }
]
