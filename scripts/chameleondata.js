const chameleonData = [
    {
    "category": "Fruits",
    "items": ["Apple", "Banana", "Orange", "Grape", "Mango", "Pineapple", "Peach", "Strawberry", "Watermelon", "Blueberry", "Pear", "Lemon", "Kiwi", "Plum", "Cherry", "Apricot"]
    },
    {
    "category": "Countries",
    "items": ["USA", "Canada", "Brazil", "India", "China", "Japan", "Australia", "Germany", "France", "Italy", "Mexico", "Russia", "South Korea", "Spain", "South Africa", "Egypt"]
    },
    {
    "category": "Colors",
    "items": ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Black", "White", "Gray", "Brown", "Cyan", "Magenta", "Violet", "Indigo", "Gold"]
    },
    {
    "category": "Sports",
    "items": ["Soccer", "Basketball", "Tennis", "Golf", "Baseball", "Rugby", "Hockey", "Volleyball", "Cricket", "Swimming", "Cycling", "Running", "Boxing", "Wrestling", "Skiing", "Skating"]
    },
    {
    "category": "Animals",
    "items": ["Dog", "Cat", "Horse", "Elephant", "Tiger", "Lion", "Bear", "Giraffe", "Penguin", "Dolphin", "Shark", "Whale", "Kangaroo", "Monkey", "Wolf", "Fox"]
    },
    {
    "category": "Instruments",
    "items": ["Guitar", "Piano", "Violin", "Drums", "Flute", "Saxophone", "Trumpet", "Harp", "Cello", "Clarinet", "Accordion", "Trombone", "Bass", "Banjo", "Ukulele", "Mandolin"]
    },
    {
    "category": "Car Brands",
    "items": ["Tesla", "BMW", "Mercedes", "Toyota", "Honda", "Ford", "Audi", "Chevrolet", "Lamborghini", "Ferrari", "Porsche", "Nissan", "Jaguar", "Bentley", "Volvo", "Jeep"]
    },
    {
    "category": "Vegetables",
    "items": ["Carrot", "Potato", "Tomato", "Onion", "Cucumber", "Lettuce", "Broccoli", "Cauliflower", "Pepper", "Spinach", "Garlic", "Radish", "Pumpkin", "Cabbage", "Zucchini", "Beetroot"]
    },
    {
    "category": "Planets",
    "items": ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Ceres", "Eris", "Haumea", "Makemake", "Ganymede", "Europa", "Io"]
    },
    {
    "category": "Professions",
    "items": ["Doctor", "Teacher", "Engineer", "Lawyer", "Nurse", "Police Officer", "Scientist", "Artist", "Pilot", "Chef", "Firefighter", "Photographer", "Architect", "Musician", "Writer", "Mechanic"]
    },
    {
    "category": "Shapes",
    "items": ["Circle", "Square", "Triangle", "Rectangle", "Pentagon", "Hexagon", "Octagon", "Star", "Oval", "Heart", "Diamond", "Cube", "Sphere", "Pyramid", "Cylinder", "Cone"]
    },
    {
    "category": "Flowers",
    "items": ["Rose", "Tulip", "Lily", "Sunflower", "Daisy", "Orchid", "Lavender", "Daffodil", "Iris", "Peony", "Chrysanthemum", "Violet", "Jasmine", "Magnolia", "Carnation", "Marigold"]
    },
    {
    "category": "Jobs in Tech",
    "items": ["Software Engineer", "Data Scientist", "Web Developer", "IT Specialist", "Systems Administrator", "UX Designer", "Database Administrator", "Network Engineer", "AI Specialist", "Cloud Engineer", "Game Developer", "Cybersecurity Analyst", "Product Manager", "DevOps Engineer", "Mobile Developer", "Business Analyst"]
    },
    {
    "category": "Movies",
    "items": ["Titanic", "Avatar", "Inception", "The Godfather", "The Dark Knight", "Star Wars", "Jurassic Park", "The Matrix", "The Avengers", "Frozen", "Toy Story", "Forrest Gump", "Harry Potter", "Gladiator", "The Lion King", "Pulp Fiction"]
    },
    {
    "category": "Days of the Week",
    "items": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Weekday", "Weekend", "Holiday", "Workday", "Funday", "Midweek", "Daybreak", "End of Week", "Beginning of Week"]
    },
    {
    "category": "Modes of Transport",
    "items": ["Car", "Bus", "Bicycle", "Motorcycle", "Train", "Airplane", "Boat", "Tram", "Helicopter", "Subway", "Scooter", "Ferry", "Truck", "Taxi", "Rocket", "Ship"]
    },
    {
    "category": "Body Parts",
    "items": ["Head", "Arm", "Leg", "Hand", "Foot", "Eye", "Ear", "Mouth", "Nose", "Finger", "Toe", "Knee", "Elbow", "Neck", "Back", "Shoulder"]
    },
    {
    "category": "Languages",
    "items": ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Russian", "Arabic", "Hindi", "Italian", "Portuguese", "Dutch", "Swedish", "Greek", "Polish"]
    },
    {
    "category": "Types of Weather",
    "items": ["Sunny", "Rainy", "Cloudy", "Snowy", "Windy", "Stormy", "Foggy", "Misty", "Humid", "Dry", "Hot", "Cold", "Freezing", "Breezy", "Thunderstorm", "Blizzard"]
    },
    {
    "category": "School Subjects",
    "items": ["Math", "English", "Science", "History", "Geography", "Art", "Physical Education", "Music", "Computer Science", "Biology", "Chemistry", "Physics", "Economics", "Drama", "French", "Spanish"]
    },
    {
    "category": "Beverages",
    "items": ["Water", "Coffee", "Tea", "Juice", "Soda", "Milk", "Wine", "Beer", "Whiskey", "Smoothie", "Lemonade", "Hot Chocolate", "Cocktail", "Milkshake", "Iced Tea", "Energy Drink"]
    },
    {
    "category": "Famous Authors",
    "items": ["Shakespeare", "Hemingway", "Tolstoy", "Orwell", "Austen", "Dostoevsky", "Fitzgerald", "Dickens", "Rowling", "King", "Tolkien", "Bradbury", "Steinbeck", "Bronte", "Kafka", "Joyce"]
    },
    {
    "category": "Countries in Europe",
    "items": ["France", "Germany", "Italy", "Spain", "Portugal", "Poland", "Sweden", "Norway", "Finland", "Denmark", "Greece", "Hungary", "Austria", "Belgium", "Netherlands", "Ireland"]
    },
    {
    "category": "Ocean Creatures",
    "items": ["Shark", "Whale", "Dolphin", "Octopus", "Jellyfish", "Starfish", "Crab", "Lobster", "Seahorse", "Turtle", "Squid", "Eel", "Shrimp", "Clam", "Ray", "Seal"]
    },
    {
    "category": "Board Games",
    "items": ["Chess", "Monopoly", "Checkers", "Scrabble", "Clue", "Catan", "Risk", "Ticket to Ride", "Battleship", "Pandemic", "Uno", "Backgammon", "Carcassonne", "Pictionary", "Twister", "Jenga"]
    },
    {
    "category": "Furniture",
    "items": ["Chair", "Table", "Couch", "Bed", "Desk", "Wardrobe", "Dresser", "Stool", "Bookshelf", "Cabinet", "Nightstand", "Ottoman", "Recliner", "Bench", "Armchair", "Crib"]
    },
    {
    "category": "Clothing Items",
    "items": ["Shirt", "Pants", "Dress", "Skirt", "Jacket", "Coat", "Socks", "Shoes", "Hat", "Scarf", "Gloves", "Sweater", "Shorts", "T-shirt", "Belt", "Tie"]
    },
    {
    "category": "Famous Cities",
    "items": ["New York", "Paris", "London", "Tokyo", "Sydney", "Rome", "Berlin", "Moscow", "Dubai", "Beijing", "Los Angeles", "Rio de Janeiro", "Madrid", "Cairo", "Hong Kong", "Bangkok"]
    },
    {
    "category": "Languages of Love",
    "items": ["Words of Affirmation", "Physical Touch", "Quality Time", "Acts of Service", "Receiving Gifts", "Kind Gestures", "Compliments", "Hugs", "Listening", "Being Present", "Helping", "Writing Notes", "Holding Hands", "Understanding", "Patience", "Empathy"]
    },
    {
    "category": "Types of Vehicles",
    "items": ["Sedan", "SUV", "Truck", "Van", "Convertible", "Coupe", "Motorcycle", "Bicycle", "Minivan", "Hybrid", "Electric Car", "Limousine", "ATV", "Tractor", "Pickup Truck", "Sports Car"]
    },
    {
    "category": "Famous Painters",
    "items": ["Van Gogh", "Picasso", "Monet", "Rembrandt", "Da Vinci", "Michelangelo", "Vermeer", "Dali", "Warhol", "Matisse", "Renoir", "Goya", "Cézanne", "Klimt", "Frida Kahlo", "Edward Hopper"]
    },
    {
    "category": "Types of Fish",
    "items": ["Salmon", "Tuna", "Trout", "Goldfish", "Clownfish", "Bass", "Mackerel", "Swordfish", "Carp", "Piranha", "Catfish", "Halibut", "Eel", "Cod", "Guppy", "Herring"]
    },
    {
    "category": "Jewelry Items",
    "items": ["Ring", "Necklace", "Bracelet", "Earrings", "Watch", "Pendant", "Brooch", "Anklet", "Cufflinks", "Tie Clip", "Tiara", "Bangle", "Charm", "Choker", "Locket", "Medallion"]
    },
    {
    "category": "Types of Birds",
    "items": ["Eagle", "Owl", "Sparrow", "Parrot", "Pigeon", "Hawk", "Falcon", "Penguin", "Dove", "Swan", "Flamingo", "Woodpecker", "Crow", "Robin", "Hummingbird", "Vulture"]
    },
    {
    "category": "Musical Genres",
    "items": ["Pop", "Rock", "Jazz", "Classical", "Hip-Hop", "Country", "Blues", "Reggae", "Electronic", "Folk", "Heavy Metal", "R&B", "Latin", "Gospel", "Funk", "Disco"]
    },
    {
    "category": "Kitchen Appliances",
    "items": ["Refrigerator", "Oven", "Microwave", "Toaster", "Blender", "Mixer", "Dishwasher", "Stove", "Coffee Maker", "Kettle", "Grill", "Slow Cooker", "Air Fryer", "Food Processor", "Rice Cooker", "Waffle Iron"]
    },
    {
    "category": "Baked Goods",
    "items": ["Bread", "Cake", "Croissant", "Muffin", "Donut", "Bagel", "Cookie", "Pie", "Brownie", "Biscuit", "Cupcake", "Scone", "Tart", "Pastry", "Danish", "Brioche"]
    },
    {
    "category": "Things in Space",
    "items": ["Planet", "Star", "Asteroid", "Comet", "Black Hole", "Nebula", "Galaxy", "Moon", "Satellite", "Space Station", "Rocket", "Meteor", "Solar Flare", "Constellation", "Quasar", "Pulsar"]
    },
    {
    "category": "Types of Dance",
    "items": ["Ballet", "Jazz", "Hip-Hop", "Salsa", "Tango", "Waltz", "Tap", "Breakdance", "Ballroom", "Swing", "Contemporary", "Folk", "Flamenco", "Belly Dance", "Zumba", "Polka"]
    },
    {
    "category": "Types of Candy",
    "items": ["Chocolate", "Gummy Bears", "Lollipop", "Jelly Beans", "Candy Corn", "Toffee", "Caramel", "Hard Candy", "Taffy", "Marshmallow", "Licorice", "Mints", "Bubblegum", "Truffles", "Fudge", "Candy Cane"]
    },
    {
    "category": "Fairy Tale Characters",
    "items": ["Cinderella", "Snow White", "Prince Charming", "Little Red Riding Hood", "Sleeping Beauty", "Rumpelstiltskin", "The Big Bad Wolf", "The Gingerbread Man", "Rapunzel", "Goldilocks", "Hansel", "Gretel", "The Beast", "The Wicked Witch", "Jack", "The Fairy Godmother"]
    },
    {
    "category": "Types of Shoes",
    "items": ["Sneakers", "Boots", "Sandals", "Flip Flops", "High Heels", "Loafers", "Slippers", "Wedges", "Clogs", "Espadrilles", "Oxfords", "Moccasins", "Running Shoes", "Ballet Flats", "Crocs", "Skate Shoes"]
    },
    {
    "category": "Boarding Locations",
    "items": ["Airport", "Train Station", "Bus Stop", "Harbor", "Pier", "Subway Station", "Taxi Stand", "Helipad", "Car Rental", "Cruise Terminal", "Ferry Dock", "Bus Terminal", "Cable Car Stop", "Light Rail Station", "Depot", "Port"]
    },
    {
    "category": "Comic Book Characters",
    "items": ["Superman", "Batman", "Wonder Woman", "Spider-Man", "Iron Man", "The Hulk", "Thor", "Captain America", "The Flash", "Green Lantern", "Aquaman", "Black Panther", "Wolverine", "Doctor Strange", "Harley Quinn", "Joker"]
    },
    {
    "category": "Room Decorations",
    "items": ["Painting", "Mirror", "Lamp", "Rug", "Curtains", "Pillows", "Candles", "Plants", "Vase", "Clock", "Picture Frame", "Bookshelf", "Throw Blanket", "Wall Art", "Sculpture", "Chandelier"]
    },
    {
    "category": "Types of Dogs",
    "items": ["Labrador", "Beagle", "Bulldog", "Golden Retriever", "Poodle", "Dachshund", "Chihuahua", "Pug", "Shih Tzu", "Boxer", "Rottweiler", "German Shepherd", "Border Collie", "Husky", "Doberman", "Cocker Spaniel"]
    },
    {
    "category": "Breakfast Foods",
    "items": ["Pancakes", "Waffles", "Cereal", "Oatmeal", "Eggs", "Toast", "Bacon", "Sausage", "Bagels", "Muffins", "Yogurt", "Fruit Salad", "Smoothies", "Croissants", "Hash Browns", "French Toast"]
    },
    {
    "category": "Ice Cream Flavors",
    "items": ["Vanilla", "Chocolate", "Strawberry", "Mint Chocolate Chip", "Cookies and Cream", "Rocky Road", "Butter Pecan", "Pistachio", "Neapolitan", "Mango", "Cookie Dough", "Peach", "Rum Raisin", "Lemon", "Coconut", "Coffee"]
    },
    {
    "category": "Famous Historical Figures",
    "items": ["Abraham Lincoln", "George Washington", "Cleopatra", "Alexander the Great", "Napoleon", "Julius Caesar", "Mahatma Gandhi", "Martin Luther King Jr.", "Winston Churchill", "Albert Einstein", "Marie Curie", "Queen Elizabeth I", "Nelson Mandela", "Leonardo da Vinci", "Joan of Arc", "Socrates"]
    },
    {
    "category": "Things in a Kitchen",
    "items": ["Fork", "Knife", "Spoon", "Plate", "Cup", "Bowl", "Frying Pan", "Pot", "Toaster", "Microwave", "Blender", "Cutting Board", "Oven Mitt", "Measuring Cup", "Grater", "Spatula"]
    },
    {
    "category": "Types of Fish",
    "items": ["Goldfish", "Betta", "Salmon", "Trout", "Bass", "Cod", "Tuna", "Catfish", "Clownfish", "Piranha", "Shark", "Mackerel", "Swordfish", "Flounder", "Guppy", "Snapper"]
    },
    {
    "category": "Magical Creatures",
    "items": ["Unicorn", "Dragon", "Phoenix", "Griffin", "Mermaid", "Fairy", "Goblin", "Elf", "Centaur", "Werewolf", "Vampire", "Troll", "Cyclops", "Nymph", "Minotaur", "Chimera"]
    },
    {
    "category": "Holidays",
    "items": ["Christmas", "Easter", "Halloween", "Thanksgiving", "New Year's Day", "Valentine's Day", "Fourth of July", "Hanukkah", "Kwanzaa", "St. Patrick's Day", "Labor Day", "Memorial Day", "Mother's Day", "Father's Day", "Veterans Day", "Earth Day"]
    },
    {
    "category": "Toys",
    "items": ["Doll", "Action Figure", "Lego", "Rubber Ball", "Stuffed Animal", "Puzzle", "Yo-Yo", "Toy Car", "Building Blocks", "Teddy Bear", "Toy Train", "Marbles", "Slinky", "Jump Rope", "Play-Doh", "Frisbee"]
    },
    {
    "category": "Snack Foods",
    "items": ["Chips", "Popcorn", "Pretzels", "Granola Bars", "Cookies", "Crackers", "Peanuts", "Almonds", "Trail Mix", "Fruit Snacks", "Candy Bar", "Cheese Puffs", "Jerky", "Graham Crackers", "Rice Cakes", "Hummus"]
    },
    {
    "category": "Superpowers",
    "items": ["Flying", "Invisibility", "Super Strength", "Telepathy", "Telekinesis", "Time Travel", "Shape Shifting", "Super Speed", "X-Ray Vision", "Healing", "Mind Control", "Immortality", "Fire Manipulation", "Water Control", "Ice Powers", "Force Fields"]
    },
    {
    "category": "Items in a Bathroom",
    "items": ["Toothbrush", "Towel", "Shampoo", "Soap", "Toothpaste", "Shower", "Bathtub", "Razor", "Mirror", "Toilet", "Sink", "Lotion", "Deodorant", "Toilet Paper", "Brush", "Hairdryer"]
    },
    {
    "category": "Modes of Communication",
    "items": ["Phone Call", "Text Message", "Email", "Letter", "Video Chat", "Social Media", "Instant Message", "Fax", "Morse Code", "Telegraph", "Radio", "Pigeon Post", "Telegram", "Smoke Signals", "Face-to-Face", "Sign Language"]
    },
    {
    "category": "Sports Equipment",
    "items": ["Soccer Ball", "Tennis Racket", "Golf Club", "Baseball Bat", "Football", "Hockey Stick", "Basketball", "Boxing Gloves", "Ski Poles", "Cricket Bat", "Volleyball", "Ping Pong Paddle", "Fishing Rod", "Skates", "Surfboard", "Helmet"]
    },
    {
    "category": "Cartoon Characters",
    "items": ["Mickey Mouse", "Bugs Bunny", "SpongeBob", "Bart Simpson", "Scooby-Doo", "Tom", "Jerry", "Daffy Duck", "Donald Duck", "Goofy", "Shaggy", "Fred Flintstone", "Popeye", "Betty Boop", "Tweety", "Yogi Bear"]
    },
    {
    "category": "Famous Explorers",
    "items": ["Christopher Columbus", "Marco Polo", "Ferdinand Magellan", "Vasco da Gama", "Leif Erikson", "Captain Cook", "Lewis", "Clark", "Hernán Cortés", "Francisco Pizarro", "Amerigo Vespucci", "Henry Hudson", "David Livingstone", "Ernest Shackleton", "Jacques Cartier", "Ibn Battuta", "Roald Amundsen"]
    },
    {
    "category": "Things at the Beach",
    "items": ["Sand", "Waves", "Shells", "Towel", "Beach Ball", "Sunglasses", "Umbrella", "Swimsuit", "Bucket", "Shovel", "Flip Flops", "Cooler", "Sunscreen", "Lifeguard", "Sandcastle", "Surfboard"]
    },
    {
    "category": "Jobs",
    "items": ["Doctor", "Teacher", "Police Officer", "Firefighter", "Lawyer", "Nurse", "Chef", "Engineer", "Mechanic", "Scientist", "Artist", "Farmer", "Journalist", "Musician", "Actor", "Plumber"]
    },
    {
    "category": "Modes of Transportation",
    "items": ["Car", "Bus", "Train", "Airplane", "Bicycle", "Boat", "Motorcycle", "Tram", "Taxi", "Helicopter", "Subway", "Scooter", "Ferry", "Skateboard", "Rollerblades", "Hot Air Balloon"]
    },
    {
    "category": "School Subjects",
    "items": ["Math", "Science", "History", "Geography", "English", "Art", "Music", "Physical Education", "Biology", "Chemistry", "Physics", "Literature", "Economics", "Computer Science", "Drama", "Social Studies"]
    },
    {
    "category": "Colors",
    "items": ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", "White", "Gray", "Cyan", "Magenta", "Gold", "Silver", "Teal"]
    },
    {
    "category": "Common Adjectives",
    "items": ["Happy", "Sad", "Angry", "Excited", "Nervous", "Brave", "Curious", "Confused", "Tired", "Lazy", "Generous", "Friendly", "Shy", "Silly", "Kind", "Honest"]
    },
    {
    "category": "Fast Food Chains",
    "items": ["McDonald's", "Burger King", "Taco Bell", "KFC", "Subway", "Pizza Hut", "Wendy's", "Domino's", "Chick-fil-A", "Sonic", "Dunkin'", "Starbucks", "Popeyes", "Arby's", "In-N-Out", "Five Guys"]
    },
    {
    "category": "Flowers",
    "items": ["Rose", "Tulip", "Lily", "Daisy", "Sunflower", "Orchid", "Violet", "Lavender", "Peony", "Chrysanthemum", "Iris", "Marigold", "Daffodil", "Poppy", "Carnation", "Lilac"]
    },
    {
    "category": "Furniture",
    "items": ["Chair", "Table", "Sofa", "Bed", "Desk", "Wardrobe", "Bookshelf", "Dresser", "Nightstand", "Couch", "Ottoman", "Bench", "Armchair", "Stool", "Cabinet", "Coffee Table"]
    },
    {
    "category": "Types of Fruit",
    "items": ["Apple", "Banana", "Orange", "Strawberry", "Grapes", "Mango", "Pineapple", "Peach", "Cherry", "Watermelon", "Lemon", "Kiwi", "Blueberry", "Raspberry", "Coconut", "Pear"]
    },
    {
    "category": "Insects",
    "items": ["Ant", "Bee", "Butterfly", "Mosquito", "Spider", "Ladybug", "Grasshopper", "Dragonfly", "Cockroach", "Moth", "Beetle", "Wasp", "Fly", "Caterpillar", "Cricket", "Termite"]
    }
]