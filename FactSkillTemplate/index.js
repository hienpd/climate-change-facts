'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Climate Change Facts';

/**
 * Array containing climate change facts.
 */
var CLIMATE_CHANGE_FACTS = [
    "Global sea level rose about 8 inches in the last century. The rate in the last two decades, however, is nearly double that of the last century.",
    "All three major global surface temperature reconstructions show that Earth has warmed since 1880. Most of the warming occurred in the past 35 years, with 15 of the 16 warmest years on record occurring since 2001.",
    "The year 2015 was the first time the global average temperatures were 1 degree Celsius or more above the 1880-1899 average. The oceans have absorbed much of this increased heat, with the top 700 meters (about 2,300 feet) of ocean showing warming of 0.302 degrees Fahrenheit since 1969.",
    "The Greenland and Antarctic ice sheets have decreased in mass. Data from NASA's Gravity Recovery and Climate Experiment show Greenland lost 150 to 250 cubic kilometers (36 to 60 cubic miles) of ice per year between 2002 and 2006, while Antarctica lost about 152 cubic kilometers (36 cubic miles) of ice between 2002 and 2005.",
    "Both the extent and thickness of Arctic sea ice has declined rapidly over the last several decades.",
    "Glaciers are retreating almost everywhere around the world — including in the Alps, Himalayas, Andes, Rockies, Alaska and Africa.",
    "The number of record high temperature events in the United States has been increasing, while the number of record low temperature events has been decreasing, since 1950. The U.S. has also witnessed increasing numbers of intense rainfall events.",
    "Since the beginning of the Industrial Revolution, the acidity of surface ocean waters has increased by about 30 percent. This increase is the result of humans emitting more carbon dioxide into the atmosphere and hence more being absorbed into the oceans. The amount of carbon dioxide absorbed by the upper layer of the oceans is increasing by about 2 billion tons per year.",
    "The temperature inside the Sun can reach 15 million degrees Celsius.",
    "Satellite observations reveal that the amount of spring snow cover in the Northern Hemisphere has decreased over the past five decades and that the snow is melting earlier."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random climate change fact from the climate change facts list
        var factIndex = Math.floor(Math.random() * CLIMATE_CHANGE_FACTS.length);
        var randomFact = CLIMATE_CHANGE_FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a climate change fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
