const model = {
    app: {
        currentPage: "mainPage",
    },

    /*-------------------------------------------------------------------------------*/
    // VIEWSTATE
    /*-------------------------------------------------------------------------------*/

    viewState: {
        mainPage: {
            search: "",
        },

        recipePage: {
            reviews: {
                grade: null,
                comments: "",
            },
            adjustServings: null,
        },

        addRecipePage: {
            id: null,
            name: "",
            type: "",
            lastUpdated: "",

            prepTime: null,
            cookTime: null,
            servings: null,
            ingredients: [
                {
                    amount: null,
                    unitType: "",
                    name: "",
                },
            ],

            instructions: [
                {
                    stepNumber: null,
                    stepText: "",
                    stepImage: "",
                },
            ],
        },

        userReview: {
            grade: null,
            comment: "",
        }
    },


    /*-------------------------------------------------------------------------------*/
    // DATA
    /*-------------------------------------------------------------------------------*/

    recipeTypeList: [
        { id: 1, name: "Breakfast" },
        { id: 2, name: "Lunch" },
        { id: 3, name: "Side Dishes" },
        { id: 4, name: "Main Dishes" },
        { id: 5, name: "Dessert" },
        { id: 6, name: "Snacks & Appetizers" },
        { id: 7, name: "Baking & Bread" },
        { id: 8, name: "Drinks & Smoothies" },
    ],

    unitTypeList: [
        // Vekt og volum (US Customary)
        { id: 1, name: "pound" },
        { id: 2, name: "ounce" },
        { id: 3, name: "fluid ounce" },
        { id: 4, name: "cup" },
        { id: 5, name: "teaspoon" },
        { id: 6, name: "tablespoon" },
        { id: 7, name: "pinch" },

        // Stykk og pakninger (Universelle)
        { id: 8, name: "clove" },
        { id: 9, name: "piece" },
        { id: 10, name: "package" },
        { id: 11, name: "can" },
        { id: 12, name: "to taste" },
    ],

    recipe: [
        {
            id: 1,
            name: "Pork Chops in Garlic Mushroom Sauce",
            type: 4,
            lastUpdated: "2026-10-20",

            prepTime: 10,
            cookTime: 20,
            totalTime: 30,
            servings: 8,

            ingredients: [
                {
                    amount: 2,
                    unitType: 1,
                    name: "boneless pork chops"
                },
                {
                    amount: 0.5,
                    unitType: 5,
                    name: "paprika"
                },
                {
                    amount: null,
                    unitType: 12,
                    name: "kosher salt and ground black pepper"
                },
                {
                    amount: 0.25,
                    unitType: 4,
                    name: "butter, divided"
                },
                {
                    amount: 8,
                    unitType: 2,
                    name: "sliced fresh mushrooms"
                },
                {
                    amount: 4,
                    unitType: 8,
                    name: "garlic, minced"
                },
                {
                    amount: 1,
                    unitType: 5,
                    name: "Dijon mustard"
                },
                {
                    amount: 2,
                    unitType: 6,
                    name: "all-purpose flour"
                },
                {
                    amount: 2,
                    unitType: 4,
                    name: "beef broth"
                }
            ],

            instructions: [
                {
                    stepNumber: 1,
                    stepText: "Gather all ingredients.",
                    stepImage: "https://www.allrecipes.com/thmb/lUVg7xh3cFbMVNTwi_dZ37rI6Bs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-269592-pork-chops-in-garlic-mushroom-sauce-VAT-step-01-d799662f526948f6a662760124d48e11.jpg",
                },
                {
                    stepNumber: 2,
                    stepText: "Season both sides of pork chops with paprika, salt, and pepper.",
                    stepImage: "https://www.allrecipes.com/thmb/bevNvgIMwxdnHeiwHF9JJqCmq8U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-269592-pork-chops-in-garlic-mushroom-sauce-VAT-step-02-ea76bce9848446a2ada4951f19ec2f0e.jpg",
                },
                {
                    stepNumber: 3,
                    stepText: "Heat a large skillet over medium-high heat; add 2 tablespoons butter. Sear pork chops in melted butter until golden brown and no longer pink in the center, 2 to 4 minutes per side. Remove pork chops from the skillet and set aside on a plate loosely covered with foil.",
                    stepImage: "https://www.allrecipes.com/thmb/97qLfGPtp6YR49QsFZAIiUfFYaY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-269592-pork-chops-in-garlic-mushroom-sauce-VAT-step-03-d4e5ed4b7b6d44a8989c7f7707312a51.jpg",
                },
                {
                    stepNumber: 4,
                    stepText: "Melt remaining butter in the same skillet over medium-high heat. Add mushrooms and cook, stirring often, until mushrooms turn golden and excess moisture evaporates, about 5 minutes. Add garlic and mustard; cook until garlic is fragrant, about 1 minute.",
                    stepImage: "https://www.allrecipes.com/thmb/2jLEHQVMptZ26aGFQ4mwdQaQxR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-269592-pork-chops-in-garlic-mushroom-sauce-VAT-step-04-572b629ffd474cfeb1fe6cb8ade51ad6.jpg",
                },
                {
                    stepNumber: 5,
                    stepText: "Add flour to the skillet, stirring to remove any lumps, until flour is no longer raw. Slowly add beef broth, whisking until incorporated. Season with salt and pepper. Reduce heat to medium and simmer, stirring often, until sauce thickens, about 5 minutes. Check for seasoning again.",
                    stepImage: "https://www.allrecipes.com/thmb/2NoaK3GqK_231fKrw6Ovjw7U4F4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-269592-pork-chops-in-garlic-mushroom-sauce-VAT-step-05-8d6165208bf1417a851241e005dedb3b.jpg",
                },
                {
                    stepNumber: 6,
                    stepText: "Return pork chops to the skillet and cook until heated through, about 1 minute.",
                    stepImage: "https://www.allrecipes.com/thmb/-MRcaxBs15lSkbccvyOQtparSLU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-269592-pork-chops-in-garlic-mushroom-sauce-VAT-step-06-2ae269a9e8a2479e904c32cd30b1aea1.jpg",
                },
                {
                    stepNumber: 7,
                    stepText: "Serve hot and enjoy!",
                    stepImage: "https://www.allrecipes.com/thmb/VkyKwVVZMc4ScWArvIqN-LHKDfE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-269592-pork-chops-in-garlic-mushroom-sauce-VAT-4x3-c5083035df544c1eaf528551d43bcfc3.jpg",
                },
            ],
        },

        {
            id: 2,
            name: "Italian Spaghetti Sauce with Meatballs",
            type: 4,
            lastUpdated: "2026-10-22",

            prepTime: 30,
            cookTime: 120,
            totalTime: 150,
            servings: 6,

            ingredients: [
                // Meatballs
                {
                    amount: 1,
                    unitType: 1,
                    name: "lean ground beef",
                    section: "Meatballs",
                },
                {
                    amount: 1,
                    unitType: 4,
                    name: "fresh bread crumbs",
                    section: "Meatballs",
                },
                {
                    amount: 1,
                    unitType: 6,
                    name: "dried parsley",
                    section: "Meatballs",
                },
                {
                    amount: 1,
                    unitType: 6,
                    name: "grated Parmesan cheese",
                    section: "Meatballs",
                },
                {
                    amount: 0.25,
                    unitType: 5,
                    name: "ground black pepper",
                    section: "Meatballs",
                },
                {
                    amount: 0.125,
                    unitType: 5,
                    name: "garlic powder",
                    section: "Meatballs",
                },
                {
                    amount: 1,
                    unitType: 9,
                    name: "egg, beaten",
                    section: "Meatballs",
                },

                // Sauce
                {
                    amount: 0.75,
                    unitType: 4,
                    name: "chopped onion",
                    section: "Sauce",
                },
                {
                    amount: 5,
                    unitType: 8,
                    name: "garlic, minced",
                    section: "Sauce",
                },
                {
                    amount: 0.25,
                    unitType: 4,
                    name: "olive oil",
                    section: "Sauce",
                },
                {
                    amount: 2,
                    unitType: 10,
                    name: "whole peeled tomatoes (28 ounce cans)",
                    section: "Sauce",
                },
                {
                    amount: 2,
                    unitType: 5,
                    name: "salt",
                    section: "Sauce",
                },
                {
                    amount: 1,
                    unitType: 5,
                    name: "white sugar",
                    section: "Sauce",
                },
                {
                    amount: 1,
                    unitType: 9,
                    name: "bay leaf",
                    section: "Sauce",
                },
                {
                    amount: 1,
                    unitType: 10,
                    name: "tomato paste (6 ounce can)",
                    section: "Sauce",
                },
                {
                    amount: 0.75,
                    unitType: 5,
                    name: "dried basil",
                    section: "Sauce",
                },
                {
                    amount: 0.5,
                    unitType: 5,
                    name: "ground black pepper",
                    section: "Sauce",
                },
            ],

            instructions: [
                {
                    stepNumber: 1,
                    stepText: "Gather all ingredients.",
                    stepImage: "https://www.allrecipes.com/thmb/nEJTvugHfy_fx7IJA_wD2lnyQ6Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21353-Italian-Spghetti-Sauce-with-Meatballs-DDMFS-Step1-11966-70cefb685f0943fcbaed8b6369686883.jpg",
                },
                {
                    stepNumber: 2,
                    stepText: "Combine ground beef, bread crumbs, parsley, Parmesan, 1/4 teaspoon black pepper, garlic powder and beaten egg in a large bowl. Mix well and form into 12 balls. Store, covered, in refrigerator until needed.",
                    stepImage: "https://www.allrecipes.com/thmb/UXSQb1Z6Ms1d7NULfVm1JJCzdnE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21353-italian-spaghetti-sauce-with-meatballs-step-2-108-bb26498aff7d4ba3be12a5e67bea3539.jpg",
                },
                {
                    stepNumber: 3,
                    stepText: "In a large saucepan over medium heat, sauté onion and garlic in olive oil until onion is soft and translucent, being careful not to brown, about 5 minutes.",
                    stepImage: "https://www.allrecipes.com/thmb/Nw_mnH6pZeJHwLU03D4Ssudm6oU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21353-Italian-Spghetti-Sauce-with-Meatballs-DDMFS-Step3-11968-6fe931bed0e8417782eef6d9cb03b896.jpg",
                },
                {
                    stepNumber: 4,
                    stepText: "Stir in tomatoes, salt, sugar and bay leaf. Cover, reduce heat to low, and simmer for 90 minutes.",
                    stepImage: "https://www.allrecipes.com/thmb/ZOXQJquiTgf-yVTBGtGz6Eo3u38=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21353-italian-spaghetti-sauce-with-meatballs-step-3-13-fe90f8e94412409b954283c2e7f4fce7.jpg",
                },
                {
                    stepNumber: 5,
                    stepText: "Stir in tomato paste, basil, and 1/2 teaspoon black pepper. Add meatballs, cover, and simmer 30 minutes more.",
                    stepImage: "https://www.allrecipes.com/thmb/SshkUYorUoTdSytmi90uqFXV99Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21353-italian-spaghetti-sauce-with-meatballs-step-4-22-77349f672c86455d872120a4434de95f.jpg",
                },
                {
                    stepNumber: 6,
                    stepText: "Serve hot and enjoy!",
                    stepImage: "https://www.allrecipes.com/thmb/irclWXgT69lzTGQ2UQYYbbdr-EM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21353-Italian-Spghetti-Sauce-with-Meatballs-DDMFS-4x3-a9a1528b4f06483dbec38d0c2945c378.jpg",
                },
            ],
        },
    ],
}

