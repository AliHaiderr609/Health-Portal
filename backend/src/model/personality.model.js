const mongoose = require('mongoose');

const personalitySchema = new mongoose.Schema({
    personalityType: { type: String, required: true },
    oceanScores: {
        Openness: { type: Number, default: 0 },
        Conscientiousness: { type: Number, default: 0 },
        Extraversion: { type: Number, default: 0 },
        Agreeableness: { type: Number, default: 0 },
        Neuroticism: { type: Number, default: 0 }
    }
});

const Personality = mongoose.model('Personality', personalitySchema);

// Function to populate the model with 'introvert', 'ambivert', and 'extrovert'
async function populatePersonalityModel() {
    try {
        // Check if the model is already populated
        const existingPersonalities = await Personality.find();
        if (existingPersonalities?.length === 0) {
            const introvert = new Personality({ 
                personalityType: 'introvert',
                oceanScores: {} 
            });
            const ambivert = new Personality({ 
                personalityType: 'ambivert',
                oceanScores: {} 
            });
            const extrovert = new Personality({ 
                personalityType: 'extrovert',
                oceanScores: {} 
            });

            await Promise.all([
                introvert.save(),
                ambivert.save(),
                extrovert.save()
            ]);

        } else {
            console.log('Personality model already populated.');
        }
    } catch (error) {
        console.error('Error populating Personality model:', error);
    }
}

populatePersonalityModel();

module.exports = Personality;
