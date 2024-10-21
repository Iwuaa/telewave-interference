const fishdata = [
        {
            "answer": "You're live-streamed on YouTube",
            "question": "In Fukuoka, Japan, there's a hotel that costs just 65p a night. Why is it so cheap?"
        },
        {
            "answer": "Brandy",
            "question": "Before they discovered mercury, thermometers were filled with what?"
        },
        {
            "answer": "Blew it up with dynamite",
            "question": "In 1970, how did Oregon Highway Division dispose of a dead sperm whale?"
        },
        {
            "answer": "Wink at the shopkeeper",
            "question": "To try and get free cornflakes, Kellogs ran an ad encouraging women to do what?"
        },
        {
            "answer": "Bad Art",
            "question": "The MOBA in Massachusetts stands for \"Museum Of what\"?"
        },
        {
            "answer": "Geysers",
            "question": "Yellowstone National Park in the US has two-thirds of the world's what?"
        },
        {
            "answer": "It was a blank canvas",
            "question": "Why was the artwork 'Take the Money and Run' by Jens Haaning controversial?"
        },
        {
            "answer": "A dog poo bin",
            "question": "A 91-year-old man discovered he had been posting his letters where, for the last two years?"
        },
        {
            "answer": "Hugging them",
            "question": "The Chipko movement involves doing what to trees, in order to protect them?"
        },
        {
            "answer": "An attractive nerd",
            "question": "In the 1980s what was a 'zeek'"
        },
        {
            "answer": "Whoopass Girls",
            "question": "Originally, what were cartoon superheroes the Powerpuff Girls going to be called?"
        },
        {
            "answer": "Wrestle",
            "question": "In Ashbourne, UK, an annual event challenges people to use only their toes to do what?"
        },
        {
            "answer": "Grave robbers",
            "question": "Shakespeare wrote a curse against whom on his tombstone?"
        },
        {
            "answer": "His heart",
            "question": "What did Mary Shelley keep as a memento to remember her dead husband?"
        },
        {
            "answer": "His dad owned a cafe called \"Lolly's\"",
            "question": "How did mobster Joseph \"Junior Lollipops\" Carna get his nickname?"
        },
        {
            "answer": "They thought they contained demons",
            "question": "Why did people avoid Brussels sprouts in Medieval Britain?"
        },
        {
            "answer": "Told you the time",
            "question": "In 1933, a 24-hour phone hotline was set up in the UK. What service did it offer?"
        },
        {
            "answer": "Gerbils",
            "question": "In the 1970s, what did MI5 try using to detect if someone was lying?"
        },
        {
            "answer": "Bob Dylan lyrics",
            "question": "Professors in Sweden made a bet to place as many what in their research articles as possible"
        },
        {
            "answer": "Wake people up",
            "question": "During the Industrial Revolution in Britain, what did a 'knocker-upper' do?"
        },
        {
            "answer": "Up to tricks",
            "question": "In bingo, what name is given to the number 46?"
        },
        {
            "answer": "Cow poo",
            "question": "What did a man in India cover his phone with in order to avoid radiation?"
        },
        {
            "answer": "A raccoon",
            "question": "What did students in Volusia County, Florida, unexpectedly find in a vending machine?"
        },
        {
            "answer": "Income taxes",
            "question": "What did Albert Einstein say was the most difficult thing to understand?"
        },
        {
            "answer": "Human hair",
            "question": "The first-ever tennis balls were stuffed with what?"
        },
        {
            "answer": "Farting",
            "question": "The emperor Claudius legalized doing what at banquets?"
        },
        {
            "answer": "Psycho",
            "question": "Which horror film was originally called Whimpy?"
        },
        {
            "answer": "Owl",
            "question": "In Old English, what was a 'Wink-a-Puss'?"
        },
        {
            "answer": "Virtual reality headset",
            "question": "In 1968, 'The Sword of Damocles' was the name given to the first ever what?"
        },
        {
            "answer": " The Luxuriant Flowing Hair Club",
            "question": "The official club for scientists with long hair is called what?"
        },
        {
            "answer": "Sid",
            "question": "What is Cookie Monster's first name?"
        },
        {
            "answer": "A Tree",
            "question": "In New Dehli, India, you can call an ambulance if what non-human thing falls sick?"
        },
        {
            "answer": "They rioted while dressed as women",
            "question": "In Wales in the 1840s, how did farmers protest against the introduction of tollbooths?"
        },
        {
            "answer": "It set fire to their trousers",
            "question": "In New Zealand in the 1930s, what happened when farmers used a new weed killer?"
        },
        {
            "answer": "Ferns",
            "question": "In the Victorian era people with 'Pteridomania' were addicted to collecting what?"
        },
        {
            "answer": "David Bowie",
            "question": "The society for the Prevention of Cruelty to Long-Haired Men was set up by who?"
        },
        {
            "answer": "Executing traitors",
            "question": "What is the old-English nurse rhyme Three Blind Mice actually about?"
        },
        {
            "answer": "Christmas Day",
            "question": "What did English leader Oliver Cromwell ban in 1644?"
        },
        {
            "answer": "Exploding tea towels",
            "question": "What did a fire chief blame after two fires in one day in a UK town?"
        },
        {
            "answer": "The Lord of the Rings",
            "question": "What special title is given to the head of the UK Roundabout Appreciation Society?"
        },
        {
            "answer": "Lucky Charms",
            "question": "Saturday Morning is the name of a beer flavored with what?"
        },
        {
            "answer": "Carve them into art",
            "question": "At 'Night of the Radishes' in Mexico, what do people do with radishes?"
        },
        {
            "answer": "Wear ant-filled gloves",
            "question": "To prove themselves, boys in an Amazonian tribe must do what?"
        },
        {
            "answer": "False teeth made from dead people's teeth",
            "question": "What are 'Waterloo Teeth'?"
        },
        {
            "answer": "007",
            "question": "Alchemist John Dee was said to be a spy for Queen Elizabeth I. How did he sign his letters to her?"
        },
        {
            "answer": "To show he was a god",
            "question": "In Ancient Greece, why did the philosopher Empedocles jump into a volcano?"
        },
        {
            "answer": "Stray cats",
            "question": "In 1769, eccentric trader Timothy Dexter exported what to the Caribbean?"
        },
        {
            "answer": "A toddler",
            "question": "In 2019 in the UK, what got inside of an arcade claw machine?"
        },
        {
            "answer": "Throw her poo out the window",
            "question": "A woman from Bristol, UK, got stuck in a bathroom window trying to do what?"
        },
        {
            "answer": "Flying refrigerators",
            "question": "In 1900, what did the curator of the Smithsonian predict people would have in the future?"
        },
        {
            "answer": "Upside-down church",
            "question": "A sculpture in Vancouver called 'Device to Route Out Evil' is shaped like a what?"
        },
        {
            "answer": "Psychic vampire repellent",
            "question": "Gwyneth Paltrow's company 'goop' sells what to help protect your aura?"
        },
        {
            "answer": "Giant frog",
            "question": "In Dominica, a 'Mountain Chicken' is actually a what?"
        },
        {
            "answer": "Land a flying saucer",
            "question": "In ChĂ˘teauneuf-du-Pape, France, it is illegal to do what in vineyards?"
        },
        {
            "answer": "Cow poo",
            "question": "What did french artist Aquabouse use to paint cows?"
        },
        {
            "answer": "Send themselves flowers",
            "question": "What are 15% of women estimated to do on Valentines's Day?"
        },
        {
            "answer": "Point at fish",
            "question": "In Cornwall, UK, it is illegal to trespass unless you are climbing a tree to do what?"
        },
        {
            "answer": "Batman",
            "question": "In Australia, it is illegal to dress up as who?"
        },
        {
            "answer": "A butterfly",
            "question": "In Old English, what was a 'Bobby-Dazzler'?"
        },
        {
            "answer": "He was trampled by an elephant",
            "question": "In 2019, what happened to a poacher after he shot a rhino in a South African National Park?"
        },
        {
            "answer": "Buying and selling crypto-currency",
            "question": "Mr Goxx is a hamster who helps people make decisions about what?"
        },
        {
            "answer": "Mailbox",
            "question": "Just outside Susami, Japan, the world's first underwater what was installed?"
        },
        {
            "answer": "Any woman he had met",
            "question": "Walt Disney said that he loved Mickey Mouse more than what?"
        },
        {
            "answer": "Typewriters",
            "question": "A Boston orchestra, whose music is all about 'office work', uses only what to make their music?"
        },
        {
            "answer": "All parachuted from crashing planes",
            "question": "Founded in 1922, what quality unites the members of the Caterpillar Club?"
        },
        {
            "answer": "Bat soup",
            "question": "In Palau in the Western Pacific, what is the national dish?"
        },
        {
            "answer": "Opens the fridge",
            "question": "The average American does what 22 times a day?"
        },
        {
            "answer": "Clothes hangers",
            "question": "What does Kylie Minogue have a phobia of?"
        },
        {
            "answer": "Boiled frog",
            "question": "What might a medieval doctor prescribe for asthma?"
        },
        {
            "answer": "Eggs",
            "question": "Alfred Hitchcock was terrified of what?"
        },
        {
            "answer": "Unicorn hunting",
            "question": "At Lake Superior University in the US, what tradition has gone on since 1971?"
        },
        {
            "answer": "Tripped over his beard",
            "question": "In 1567, in Braunau, Austria, the mayor died in a very strange way. How?"
        },
        {
            "answer": "Lifeguard",
            "question": "What was US president Ronald Reagan's first ever job?"
        },
        {
            "answer": "Hot drinks machine",
            "question": "The 'Pluto Lamp', invented in 1898, was a cross between a street lamp and a what?"
        },
        {
            "answer": " Walnuts",
            "question": "A woman's car broke down in Pittsburgh, USA. What was the engine full of?"
        },
        {
            "answer": "Speeding ticket",
            "question": "In 1899 in New York, Jacob German was given the world's first what?"
        },
        {
            "answer": "Pigeons",
            "question": "Other than boxing, what unusual hobby does Mike Tyson enjoy?"
        },
        {
            "answer": "Eh",
            "question": "In 1999, hackers discovered that any Hotmail account could be accessed using what password?"
        },
        {
            "answer": "Toilet seats",
            "question": "In 2007, Kevin Shelley broke 46 what, with his head in a minute?"
        },
        {
            "answer": "Froggyland",
            "question": "In Croatia, there's a museum of taxidermied frogs doing human activities. What is it called?"
        },
        {
            "answer": "Arnold Schwarzenegger movies",
            "question": "Thrash metal band Austrian Death Machine write songs based entirely on what?"
        },
        {
            "answer": "The cat flap",
            "question": "Some people believe that Sir Isaac Newton invented what for animals?"
        },
        {
            "answer": "A pringles can",
            "question": "The ashes of American chemist Fredric Baur were buried inside which unusual item?"
        },
        {
            "answer": "Vulture vomit",
            "question": "In the US state of Texas, what severely damaged a border protection radio tower?"
        },
        {
            "answer": "Alcohol poisoning",
            "question": "Attila the Hun died on his honeymoon due to what?"
        },
        {
            "answer": "The plastic tip of a shoelace",
            "question": "What is an \"aglet\"?"
        },
        {
            "answer": "Noodles",
            "question": "A Russian saying is: \"I'm not hanging what on your ears\"?"
        },
        {
            "answer": "A blessing",
            "question": "What is the collective noun for a group of unicorns?"
        },
        {
            "answer": "John Lennon's tooth",
            "question": "What piece of Beatles memorabilia did dentist Michael Zuk buy for ÂŁ19,500?"
        },
        {
            "answer": "Finger length",
            "question": "The British Journal of Psychology published a study connecting exam scores with people's what?"
        },
        {
            "answer": "Punches",
            "question": "Researchers in the US believe that beards on men may have evolved to protect them from what?"
        },
        {
            "answer": "Squirrels",
            "question": "What is responsible for most of the power outages in the United States?"
        },
        {
            "answer": "Her wedding ring",
            "question": "In 2019, a woman from San Diego ate what in her sleep?"
        },
        {
            "answer": "Wrestling",
            "question": "Abraham Lincoln excelled at what past-time?"
        },
        {
            "answer": "Cut it with a knife",
            "question": "What is it considered uncouth to do to a baguette in France?"
        },
        {
            "answer": "Wear a hat",
            "question": "In Madagascar, what are pregnant women not allowed to do?"
        },
        {
            "answer": "Insects are crawling on them",
            "question": "What does someone suffering from 'Formication' think is happening to them?"
        },
        {
            "answer": "Madness",
            "question": "What did some Victorians believe was a side-effect of riding on a train?"
        },
        {
            "answer": "His parrot",
            "question": "In 1845, who kept swearing loudly at the funeral of US president Andrew Jackson?"
        },
        {
            "answer": "Make babies cry",
            "question": "At the Nakizumo festival in Japan, what is it traditional for sumo wrestlers to do?"
        },
        {
            "answer": "Napoleon",
            "question": "In France, what is it illegal to call your pig?"
        },
        {
            "answer": "Gorillas",
            "question": "In the US city of Boston, it is illegal to have what in the back seat of your car?"
        },
        {
            "answer": "Knitting",
            "question": "What unexpected hobby does Ryan Gosling enjoy?"
        },
        {
            "answer": "Stones",
            "question": "What did the ancient Greeks use for toilet paper?"
        },
        {
            "answer": "Santa Claus",
            "question": "Who did the U.S Government issue with a pilots licence in 1927?"
        },
        {
            "answer": "Lego",
            "question": "In 2021, there was a spike in people selling what innocent item on the  black market?"
        },
        {
            "answer": "Writing emails in all caps",
            "question": "In 2009, an accountant in New Zealand got fired for doing what?"
        },
        {
            "answer": "Wallpaper",
            "question": "What was Bubble Wrap originally marketed as?"
        },
        {
            "answer": "A cornflake",
            "question": "In 2008, what item shaped like the state of Illinois, did two sisters sell on eBay for $1350?"
        },
        {
            "answer": "Sprayed them with a hose",
            "question": "In 2018, what did a 70-year-old couple do to their neighbour to get a restraining order?"
        },
        {
            "answer": "Jesus",
            "question": "According to the 'Aetherius Society', who is alive and living on Venus?"
        },
        {
            "answer": "Squirting jam",
            "question": "Before Madonna was famous, she was fired from Dunkin' Donuts for doing what?"
        },
        {
            "answer": "Head",
            "question": "In Armenia they have a saying: \"Stop ironing my what\"?"
        },
        {
            "answer": "Cure for diarrhoea",
            "question": "Before it was considered a condiment, ketchup was sold as a what?"
        },
        {
            "answer": "Spiderwebs",
            "question": "The Greeks and Romans used which unusual material as a bandage?"
        },
        {
            "answer": "A waitress' notebook",
            "question": "In 2019, a man managed to open a small safe locked for 49 years. What was inside?"
        },
        {
            "answer": "He wore a wooden helmet",
            "question": "What did inventory Huge Gernsback do to avoid any distractions?"
        },
        {
            "answer": "Big Muddy Monster",
            "question": "What is the name of the monster who is said to live near Murphysboro, Illinois?"
        },
        {
            "answer": "Nuts",
            "question": "An old Arabic saying is: \"God gives what to a man with no teeth\"?"
        },
        {
            "answer": "Flush the toilet",
            "question": "In Switzerland, what is it illegal to do after 10pm?"
        },
        {
            "answer": "A swamp rabbit",
            "question": "President Jimmy Carter was attacked in his fishing boat by what?"
        },
        {
            "answer": "Entrepreneurs",
            "question": "Research by the University of Colorado found that cat owners were more likely to be what?"
        },
        {
            "answer": "MooLoo",
            "question": "In Dummerstorf, Germany, they have invented a toilet for cattle. What is it called?"
        },
        {
            "answer": "Sherlock Holmes",
            "question": "25% of Americans believe that which fictional character was real?"
        },
        {
            "answer": "Making snow globes",
            "question": "What unusual hobby does Taylor Swift enjoy?"
        },
        {
            "answer": "A bullet",
            "question": "In Irvine, California, what was found in a Costco hot dog?"
        },
        {
            "answer": "Bottles of Pepsi",
            "question": "In 1989, the Soviet Union traded three battleships and 17 submarines for what?"
        },
        {
            "answer": "Squirrel fishing",
            "question": "In 1988 an unusual sport was invented at Ohio State University. What was it?"
        },
        {
            "answer": "Cash",
            "question": "In 2021, people jumped out of their cars on a California highway to collect what from a tipped truck?"
        },
        {
            "answer": "Fingernails",
            "question": "Indian man Shridhar Chillal holds the world record for having the longest what?"
        },
        {
            "answer": "Milk it",
            "question": "In the US state of Texas, it is illegal to do what to a neighbour's cow?"
        },
        {
            "answer": "Dance",
            "question": "In North Dakota, what are you not allowed to do while wearing a hat?"
        },
        {
            "answer": "Nice dinner",
            "question": "What does the old English word \"Bouffage\" mean?"
        },
        {
            "answer": "Underpants",
            "question": "In Thailand, what is it illegal to leave home without?"
        },
        {
            "answer": "Chickens",
            "question": "Alectryomancy uses what to predict the future?"
        },
        {
            "answer": "A comfortable hole",
            "question": "When Koko the Gorilla was asked, \"Where do gorillas go when they die?\" she signed back what?"
        },
        {
            "answer": "He walks on broken glass",
            "question": "In LA, there is a street performer called 'The Venice Beach Glass Man'. What is his act?"
        },
        {
            "answer": "Doug",
            "question": "The world's biggest potato was given a name. What was it?"
        },
        {
            "answer": "He ate it",
            "question": "During his crossing of America in 1803, Meriwether Lewis' dog died. How?"
        },
        {
            "answer": "A corpse",
            "question": "In the US state of Texas, it is illegal to swear in from of what?"
        },
        {
            "answer": "Throw them on the roof",
            "question": "In Greece, what do children do with their baby teeth?"
        },
        {
            "answer": "Gossip",
            "question": "What does the old English word \"Twattle\" mean?"
        },
        {
            "answer": "Guinea pig",
            "question": "In Switzerland it is illegal to own just one what?"
        },
        {
            "answer": "A cow",
            "question": "If you suffer from a condition called boanthropy, you believe that you are what?"
        },
        {
            "answer": "They were fined",
            "question": "What happened when two Buddhists released captive lobsters into the wild for good karma?"
        },
        {
            "answer": "Jump at  the same time",
            "question": "A British astronomer played an April Fools' prank on UK citizens by tricking them to do what?"
        },
        {
            "answer": "A mum",
            "question": "A New York woman in her 60s started a business where you can rent what for $40 an hour?"
        },
        {
            "answer": "A carrot",
            "question": "After 16 years, a Swedish woman found her lost wedding ring attached to what?"
        },
        {
            "answer": "He photocopied his face",
            "question": "In 2019, what mistake did a burglar in Toronto make before leaving the crime scene?"
        },
        {
            "answer": "A shotgun",
            "question": "In 1996, what did an American woman use to remove a corn from her foot?"
        },
        {
            "answer": "He tried to clone them",
            "question": "What did the Russian defence minister do with the remains of some 3000-year old warriors?"
        },
        {
            "answer": "Eels",
            "question": "In medieval England, what was sometimes used instead of money?"
        },
        {
            "answer": "Spaghetti",
            "question": "In the Phillippines, what surprising dish do they serve in McDonald's?"
        },
        {
            "answer": "Meat",
            "question": "In Kentucky in 1876, what strange thing rained down from the sky?"
        },
        {
            "answer": "Touch",
            "question": "What name was originally given to the Spice Girls?"
        },
        {
            "answer": "Wizard",
            "question": "In Christchurch, New Zealand, the city council used to pay someone to be their official what?"
        },
        {
            "answer": "Unsinkable Sam",
            "question": "In WWII, what did the Royal Navy call a cat who survived being on three ships that sank?"
        },
        {
            "answer": "Frozen cow poo",
            "question": "What was the first-ever ice hockey puck made from?"
        },
        {
            "answer": "Confetti",
            "question": "What is it illegal to throw in Alabama?"
        },
        {
            "answer": "His own detached head",
            "question": "After the events of The Wizard of Oz, what does Tin Man have an argument with?"
        },
        {
            "answer": "A donkey",
            "question": "In Arizona, what is it illegal to put in your bathtub after 7pm?"
        },
        {
            "answer": "Mechanic",
            "question": "Queen Elizabeth II was a fully trained what?"
        },
        {
            "answer": "Maggots",
            "question": "An acquired taste, Casu Martzu is a cheese containing what unusual ingredient?"
        },
        {
            "answer": "The letter Z",
            "question": "What did Roman Emperor Caecus ban for nearly 200 years?"
        },
        {
            "answer": "A puppet",
            "question": "If someone is playing with a 'quockerwodger ', what are they playing with?"
        },
        {
            "answer": "An icicle of pee",
            "question": "In 1984, what caused the space shuttle Discovery to malfunction?"
        },
        {
            "answer": "Sit down",
            "question": "In the USA, Washinton police officers get a half-hour class in how to what?"
        },
        {
            "answer": "Seagulls",
            "question": "What does Adele have a fear of?"
        },
        {
            "answer": "Pickled sheep's eyes",
            "question": "What did the Mongols eat to cure a hangover?"
        },
        {
            "answer": "A cat",
            "question": "What fulfilled the role of mayor of Talkeetna, Alaska, for 20 years?"
        },
        {
            "answer": "Drink beer",
            "question": "In 1777, Frederick the Great asked his subjects to do what in the mornings?"
        },
        {
            "answer": "A pigeon",
            "question": "Inventor Nikola Tesla never married, but claimed to have fallen in love with what instead?"
        },
        {
            "answer": "A hair museum",
            "question": "What kind of museum would you find in Avanos, Turkey?"
        },
        {
            "answer": "Oswald the Lucky Rabbit",
            "question": "What was the name of Walk Disney's first ever character?"
        },
        {
            "answer": "A plant",
            "question": "In Greek myth, Lycurgus mistook his son for a what?"
        },
        {
            "answer": "A cow",
            "question": "In Brazil, a man was killed when what fell through his roof?"
        },
        {
            "answer": "A kettle to make tea",
            "question": "What surprising item is found inside every British tank?"
        },
        {
            "answer": "Make them dance",
            "question": "In 1518 a mysterious plague struck Strasbourg. What did it do to people?"
        },
        {
            "answer": "Hurricanes",
            "question": "In the 1950s, 'Popular Mechanica' magazine predicted what would be eliminated by the year 2000?"
        },
        {
            "answer": "Had his teeth removed",
            "question": "What did champion 'gurner' Peter Jackman do to secure his fifth championship win?"
        },
        {
            "answer": "Made it an officer",
            "question": "During WWII, the Polish army found a tame bear. What did they do with it?"
        },
        {
            "answer": "Toilets",
            "question": "Every year 40,000 Americans are injured in the home by what?"
        },
        {
            "answer": "Shaved off their own eyebrows",
            "question": "What did the ancient Egyptians do when their cat died?"
        },
        {
            "answer": "Bad person",
            "question": "What does the old English word \"Wagpastie\" mean?"
        },
        {
            "answer": "Potatoes",
            "question": "In Western Australia, it is illegal to own over 50kg of which normally legal item?"
        },
        {
            "answer": "Wearing trousers",
            "question": "What did Adeline and Augusta van Buren get repeatedly arrested for in 1916 while crossing America?"
        },
        {
            "answer": "A frog figurine",
            "question": "What did composer Edvard Grieg carry around in his pocket for good luck?"
        },
        {
            "answer": "Buttocks",
            "question": "If something has a \"natiform\" shape, what does it resemble?"
        },
        {
            "answer": "Farting next to him",
            "question": "A man from Australia tried to sue his boss for $900,000 for doing what?"
        },
        {
            "answer": "A bottle of wine",
            "question": "What item worth $407,000 was stolen from a Spanish hotel in 2021?"
        },
        {
            "answer": "Constipation",
            "question": "Coprastastaphobia is the fear of what?"
        },
        {
            "answer": "Babies",
            "question": "In El Colacho, Spain, the tradition is for a man dressed as the devil to jump over what?"
        },
        {
            "answer": "A smack",
            "question": "What is the collective noun for a group of jellyfish"
        },
        {
            "answer": "Spaghetti Day",
            "question": "On the 4th Jan in the USA it's National what day?"
        },
        {
            "answer": "A car",
            "question": "In the movie Braveheart, what was accidentally filmed in the background during a battle scene?"
        },
        {
            "answer": "Spaceman from Pluto",
            "question": "What was the movie Back to the Future originally going to be called?"
        },
        {
            "answer": "A Christmas dinner",
            "question": "A 66-year-old lost weight by eating what every day?"
        },
        {
            "answer": "The high five",
            "question": "What is baseball player Dusty Baker credited with inventing in 1977?"
        },
        {
            "answer": "He was taller",
            "question": "After being in zero gravity, what did astronaut Scott Kelly discover had changed about himself?"
        },
        {
            "answer": "Skydive",
            "question": "On Sunday in Florida it is illegal for a single woman to do what?"
        },
		{
		  "question": "AI: What unique animal did ancient Egyptians use to guard their homes?",
		  "answer": "Baboon"
		},
		{
		  "question": "AI: What object was once used as currency in the Solomon Islands?",
		  "answer": "Dolphin teeth"
		},
		{
		  "question": "AI: What odd creature did the Roman emperor Elagabalus try to feed to his dinner guests as a prank?",
		  "answer": "Live ostrich"
		},
		{
		  "question": "AI: What unique material was used by ancient Romans to whiten their teeth?",
		  "answer": "Urine"
		},
		{
		  "question": "AI: What strange animal did the British royal family use in ceremonies in the 16th century?",
		  "answer": "Beavers"
		},
		{
		  "question": "AI: What rare and expensive spice was once used as a form of rent in medieval Europe?",
		  "answer": "Pepper"
		},
		{
		  "question": "AI: What unusual ingredient did ancient Greek athletes eat to improve their performance?",
		  "answer": "Honey"
		},
		{
		  "question": "AI: What bizarre method was used in the Victorian era to preserve the dead for viewing?",
		  "answer": "Glass coffin"
		},
		{
		  "question": "AI: What was once considered a medical treatment and fashion statement in ancient China?",
		  "answer": "Foot binding"
		},
		{
		  "question": "AI: What strange form of entertainment did the Aztecs enjoy using with rubber balls?",
		  "answer": "Human sacrifices"
		},
		{
		  "question": "AI: What rare gemstone did Cleopatra dissolve in vinegar to drink as a show of wealth?",
		  "answer": "Pearl"
		},
		{
		  "question": "AI: What unusual food item did astronaut John Young smuggle onto a NASA space mission in 1965?",
		  "answer": "Corned beef sandwich"
		},
		{
		  "question": "AI: What item of furniture did the French Revolutionaries use for executions?",
		  "answer": "Guillotine"
		},
		{
		  "question": "AI: What animal was legally prosecuted in medieval Europe for property damage?",
		  "answer": "Pig"
		},
		{
		  "question": "AI: What strange invention did the ancient Greeks use to measure distances?",
		  "answer": "Odometer"
		},
		{
		  "question": "AI: What dangerous element was used in hats during the 18th and 19th centuries, giving rise to the phrase 'mad as a hatter'?",
		  "answer": "Mercury"
		},
		{
		  "question": "AI: What unusual method did the ancient Persians use to decide important matters?",
		  "answer": "Drunken deliberation"
		},
		{
		  "question": "AI: What animal was used to detect poison in ancient Rome?",
		  "answer": "Dog"
		},
		{
		  "question": "AI: What food did British sailors receive to prevent scurvy in the 18th century, giving them the nickname 'Limeys'?",
		  "answer": "Limes"
		},
		{
		  "question": "AI: What bird did the US Army try to use to deliver explosives in World War II?",
		  "answer": "Pigeon"
		},
		{
		  "question": "AI: What bizarre method was once used to cure the plague in medieval times?",
		  "answer": "Live frogs"
		},
		{
		  "question": "AI: What rare animal did Napoleon Bonaparte use to prank his officers by releasing them in large numbers?",
		  "answer": "Rabbits"
		},
		{
		  "question": "AI: What bizarre punishment was given to bakers who cheated customers in ancient Egypt?",
		  "answer": "Nose removal"
		},
		{
		  "question": "AI: What deadly weapon was disguised as an umbrella in Cold War assassinations?",
		  "answer": "Poisoned pellet"
		},
		{
		  "question": "AI: What was the primary ingredient in Egyptian mummification fluid?",
		  "answer": "Natron"
		},
		{
		  "question": "AI: What strange treatment was recommended by doctors during the Black Death to prevent infection?",
		  "answer": "Sitting in a sewer"
		},
		{
		  "question": "AI: What food was forbidden for consumption by the Catholic Church during the 10th century?",
		  "answer": "Horse meat"
		},
		{
		  "question": "AI: What did Henry Ford use to construct a car prototype in the 1940s?",
		  "answer": "Soybeans"
		},
		{
		  "question": "AI: What dangerous insect did ancient Romans use to extract revenge on their enemies?",
		  "answer": "Bees"
		},
		{
		  "question": "AI: What strange material was used in the 19th century to treat burns and wounds?",
		  "answer": "Spider webs"
		},
		{
		  "question": "AI: What rare flower bulb was worth more than gold in the Netherlands during the 1600s?",
		  "answer": "Tulip"
		},
		{
		  "question": "AI: What bird was brought to France by Queen Marie Antoinette for exotic entertainment?",
		  "answer": "Kangaroo"
		},
		{
		  "question": "AI: What common household object did the Japanese consider an act of rebellion when it was used without permission during the 17th century?",
		  "answer": "Umbrella"
		},
		{
		  "question": "AI: What bizarre act of self-defense was used by South American tribes to protect their homes?",
		  "answer": "Poison blow darts"
		},
		{
		  "question": "AI: What ancient Roman god was once worshipped in the form of a black stone?",
		  "answer": "Cybele"
		},
		{
		  "question": "AI: What unusual clothing item did Roman soldiers wear to display wealth and status?",
		  "answer": "Gold armor"
		},
		{
		  "question": "AI: What strange method did ancient Chinese doctors use to determine the effectiveness of acupuncture?",
		  "answer": "Colored smoke"
		},
		{
		  "question": "AI: What unique tool was used by medieval knights to clean their armor?",
		  "answer": "Sand"
		},
		{
		  "question": "AI: What odd material did ancient Romans use to construct some of their public baths?",
		  "answer": "Volcanic ash"
		},
		{
		  "question": "AI: What was once used as a disinfectant during the plague that is still used in perfumes today?",
		  "answer": "Rose water"
		},
		{
		  "question": "AI: What curious object was used by the Vikings to navigate in cloudy weather?",
		  "answer": "Sunstone"
		},
		{
		  "question": "AI: What strange object did the ancient Egyptians place inside the tombs of the dead to guide them to the afterlife?",
		  "answer": "Model boats"
		},
		{
		  "question": "AI: What bizarre form of art was practiced by ancient Mayans to reshape the heads of infants?",
		  "answer": "Skull deformation"
		},
		{
		  "question": "AI: What curious item was used as an early form of toothpaste by the ancient Greeks?",
		  "answer": "Crushed oyster shells"
		},
		{
		  "question": "AI: What odd device did King Louis XIV of France have installed in his palace so he could speak with nobles while using it?",
		  "answer": "Toilet"
		},
		{
		  "question": "AI: What curious animal did ancient Egyptians revere so much that harming it was punishable by death?",
		  "answer": "Cat"
		},
		{
		  "question": "AI: What material did medieval alchemists believe could turn base metals into gold?",
		  "answer": "Philosopher's stone"
		},
		{
		  "question": "AI: What strange item did pirates use to prevent scurvy while at sea?",
		  "answer": "Sauerkraut"
		},
		{
		  "question": "AI: What curious object did early Arctic explorers eat to survive?",
		  "answer": "Penguin eggs"
		},
		{
		  "question": "AI: What ancient Persian queen invented a new method of communication using colored ribbons?",
		  "answer": "Tomyris"
		},
		{
		  "question": "AI: What did ancient Egyptians use as a rudimentary form of deodorant?",
		  "answer": "Crocodile dung"
		},
		{
		  "question": "AI: What strange body modification was practiced by the people of ancient Myanmar for spiritual reasons?",
		  "answer": "Neck rings"
		},
		{
		  "question": "AI: What unusual item was used by medieval monks to punish themselves for sins?",
		  "answer": "Cilice"
		},
		{
		  "question": "AI: What peculiar material was used in the 18th century to fill bed mattresses?",
		  "answer": "Horsehair"
		},
		{
		  "question": "AI: What bizarre method did ancient Greeks use to predict the future by interpreting the patterns of?",
		  "answer": "Liver"
		},
		{
		  "question": "AI: What curious animal did the Romans import in large numbers to use in the Colosseum for gladiatorial combat?",
		  "answer": "Elephant"
		},
		{
		  "question": "AI: What strange device did medieval knights use to increase their visibility during battle?",
		  "answer": "Torch helmet"
		},
		{
		  "question": "AI: What unusual vegetable was considered unfit for human consumption and only suitable for pigs in the 19th century?",
		  "answer": "Potato"
		},
		{
		  "question": "AI: What curious material did ancient Mesopotamians use to build their homes?",
		  "answer": "Mud brick"
		},
		{
		  "question": "AI: What odd food did Queen Victoria serve to impress foreign dignitaries at her royal banquets?",
		  "answer": "Peacock"
		},
		{
		  "question": "AI: What material did the Incas use to construct bridges that could withstand earthquakes?",
		  "answer": "Grass rope"
		},
		{
		  "question": "AI: What peculiar item was used as an early form of mail delivery in New Zealand?",
		  "answer": "Pigeon"
		},
		{
		  "question": "AI: What strange material did the Japanese samurai use to make their armor lightweight and flexible?",
		  "answer": "Lacquered wood"
		},
		{
		  "question": "AI: What curious method did Genghis Khan use to motivate his soldiers before battle?",
		  "answer": "Animal blood"
		}
    ]