const { Language, util} = require("klasa");
const { member, message, client } = require('discord.js');
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
         INHIBITOR_NSFW: "NSFW Commands Are Disabled In Non-NSFW Channels...",
         INHIBITOR_PERMISSIONS: "You Do Not Have Permission To Use This Command",
         EVENT_READY: `Logged In As ${client.user.tag}!`
         // More Locale Responses Coming Soon!
        };
    }

    async init() {
        await super.init();
    }

};
