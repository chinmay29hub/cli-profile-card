#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require("fs");
// const request = require("request");
const path = require("path");
const Ora = require("ora");




clear();

//! importing User Data from data.json
const res = fs.readFileSync(path.resolve(__dirname, "data.json"));
const user_data = JSON.parse(res);
const {
    user_name,
    user_email,
    twitter_username,
    linkedin_username,
    github_username,
    instagram_username,
    npx_card_handle,
} = user_data;

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            
            {
                name: `open ${chalk.cyanBright.bold("Latest")} project: `,
                value: () => {
                    open(`http://chinmay29hub.herokuapp.com/` );
                    console.log("\nRedirecting You...\n");
                },
            },
            // Send an email
            {
                name: `Say 👋, on my ${chalk.green.bold("Email")}?`,
                value: () => {
                    open(`mailto:${user_email}`);
                    console.log("\nOpening your Email application. See you at my Inbox\n");
                },
            },
            
            // Here you can add your Projects, Games or any showcase Project

            
            {
                name: `Fork this ${chalk.yellow.bold("Repository")}?`,
                value: () => {
                    open(`https://github.com/chinmay29hub/cli-profile-card`);
                    console.log("\nLoading...\n");
                },
            },
            //// Quit
            {
                name: "Quit.",
                value: () => {
                    console.log(" Have a bug-free day 🪲.\n");
                },
            },
        ],
    },
];

const data = {
    name: chalk.bold.green(`                  ${user_name} / ${npx_card_handle}`),
    // You can Style the Job titile if You can, As I did.
    // You can also keep it simple by replacing the Line 65 by:
    // work: `${chalk.white(`{job_title}`)}`
    work:  `${chalk.white("Student at")} ${chalk.bold.hex("#2b82b2").bold("Vidyavardhini College of Engineering & Technology, Vasai")}`,
    twitter: chalk.blue("https://twitter.com/") + chalk.yellowBright(`${twitter_username}`),
    github: chalk.blue("https://github.com/") + chalk.green(`${github_username}`),
    linkedin: chalk.blue("https://linkedin.com/in/") + chalk.blueBright(`${linkedin_username}`),
    instagram: chalk.blue("https://instagram.com/") + chalk.magentaBright(`${instagram_username}`),
    npx: chalk.bold.green("npx") + " " + chalk.white(`${npx_card_handle}`),

    labelWork: chalk.white.bold("       Current Position:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelInstagram: chalk.white.bold("  Instagram:"),
    labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelInstagram}  ${data.instagram}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("Hey! I'm Chinmay, I am a computer enginnering student at Vidyavardhini College of Engineering & Technology, Vasai. I love to learn new things and build cool stuffs.")}`,
        `${chalk.italic("I love to connect with new people, Say 'Hii' via Social Media or E-mail")}`,
    ].join("\n"),
    {
        margin: 1,
        float: "center",
        padding: 1,
        borderStyle: "singleDouble",
        borderColor: "yellowBright",
        align:"left",
        backgroundColor: "#333",
        

        
    }
);
function CardPrinter() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(console.log(me));
      }, 12000);
    });
}

// Animation 

function Loaded() {

    const spinner = Ora('Welcome to chinmay29hub').start();

    setTimeout(() => {
        spinner.indent = 30;
        spinner.spinner = 'soccerHeader';
        spinner.text = `${chalk.green('Support Project by giving a Star ⭐ ')}`;
    }, 2000);
    
    setTimeout(() => {
        spinner.indent = 30;
        spinner.spinner = 'soccerHeader';
        spinner.text = `${chalk.green('www.npmjs.com ')}${chalk.yellow('has accepted your order...')}`; 
    }, 4000);
    
    setTimeout(() => {
        spinner.indent = 30;
        spinner.spinner = 'soccerHeader';
        spinner.text = `${chalk.magentaBright('Your order is being prepared...')}`; 
    }, 6000);
    
    setTimeout(() => {
        spinner.indent = 30;
        spinner.spinner = 'soccerHeader';
        spinner.text = 'npm is on the way to pick your order...'; 
    }, 8000);
    
    setTimeout(() => {
        spinner.indent = 30;
        spinner.spinner = 'soccerHeader';
        spinner.text = `${chalk.blueBright('Your order has arrived, Here We go:')}`; 
    }, 10000);
    
    setTimeout(() => {
        spinner.succeed(`${chalk.greenBright('Hello World this is my profile.😄')}`);
    }, 12000);
    
    

};



async function Card() {
    Loaded();
    const card = await CardPrinter();
    prompt(questions).then(answer => answer.action());
}
Card();
