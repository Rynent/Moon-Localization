const { Language, util} = require("klasa");
const { member, message, client } = require('discord.js');
const { command, keys } = require('togami-command-loader');
const prefix = ['?'];
module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {
         DEFAULT: key => `${key} Has Not Been Localized For En-US`,
         DEFAULT_LANGUAGE: "Default Language",
         DEFAULT_WELCOME: `Welcome To **${member.guild.name}**, ${member}!`,
         DEFAULT_LEAVE: `Aww Man, Why Did **${member.user.username}** Have To Leave Us?`,
         COMMAND_HELP_DM: "📥 | Check Your Direct Messages For My Commands",
         COMMAND_HELP_DM_ERR: `${message.member}, I Am Sorry But You Have Direct Messages Disabled...`,
         DEFAULT_PREFIX: `${message.member}, My Default Prefix Is ${prefix}`,
         COMMAND_ERROR: `${message.member}, Something Went Wrong Please Try Again...`,
         INHIBITOR_NSFW: "NSFW Commands Are Disabled In Non-NSFW Channels... Please Use Them In A NSFW Channel :)",
         INHIBITOR_PERMISSIONS: "You Do Not Have Permission To Use This Command",
         EVENT_READY: `Logged In As ${client.user.tag}!`,
         EVENT_MESSAGE: `Event 'Message' Doesn't Have A Locale Yet...`,
         COMMAND_REBOOT: `${message.member}, I Am Shutting Down...`,
         COMMAND_PREFIX: `Hoi, My Default Prefix Is ${prefix}!`,
         COMMAND_ERROR: `${message.member}, Sorry But Something Went Wrong Please Try Again Later...`,
         COMMAND_LEVEL: `${message.member}, You Are A Level ${level}!`,
         COMMAND_LEADERBOARD: `This Feature Is Currently Disabled, Please Use ?Help To See All My Enabled Commands!`,
         COMMAND_HANDLER_LOAD: `I Have Loaded A Total Of ${command.keys}!`,
         TOGAMI_ERROR: `Sorry, Something Went Wrong With Togami-Command-Loader Please Try Again Later...`, 
        };
    }

    async init() {
        await super.init();
    }

};
