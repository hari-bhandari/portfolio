import React from 'react';
import Project from "./Project";
import Budget from './img/budget.webp'
import ItLogger from './img/it-logger.webp'
import Mcdonalds from './img/mcdonalds.webp'
import Sort from './img/sort.webp'
import ContactKeeper from './img/Contact-Keeper.webp'
import GithubFinder from './img/github-finder.webp'
import DevCamper from './img/DevCamperApi.webp'
import aStar from './img/aStar.png'
const Projects = () => {

    const projects=[
        {   title:'Fully functional Bootcamp API',
            description:'This is an extensive backend API for bootcamp Finder, a bootcamp directory app.I made it after I learned Node.js and it has taught me countless information about programming fundamentals.In addition, This is my first website i deployed using Digital Ocean.I have also created documentation for my API which helps any other people to use my API easily',
            picture:DevCamper,
            demo:'https://www.haribhandari.uk/'

        },

        {   title:'EXPENSE TRACKER',
            description:'This tracks your spending\'s and total income though out the month and calculates total available money to spend. It\'s really healpful for those people who are bad with money.This app was made using plain vanilla js,css and HTML',
            picture:Budget,
            demo:'http://haribhandari.co.uk/'

        },
        {   title:'SORTING ALGORITHM VISUALISER',
            description:'Sorting Algorithm Visualiser is a React App to visualise 5 different sorting algorithms.My previous knowledge from school helped me to create this app even faster.This is a responsive Visualiser that can be used on Mobile phone,tablet or PC.',
            picture:Sort,
            mode:'mobile',
            demo:'https://sort-visualiser.haribhandari.me/'

        },

        {   title:'GITHUB FINDER',
            description:'This app allows us to search for github user. I made it using github API! Easy,Fun and Responsive',
            picture:GithubFinder,
            demo:'https://github-finder.haribhandari.me/'

        },


        {   title:'Error Logger',
            description:'Error Logger can be used to log system errors.We can also add technicians who are reporting the error.I made this app using react and Nodejs',
            picture:ItLogger,
            demo:'https://error-logge.herokuapp.com/'

        },
        {   title:'Store My Contacts',
            description:'SMC for Everyone...SMC allows anyone to keeps all their contacts on one Place.I made this using React,MongoDb and Node.js(with authentication)',
            picture:ContactKeeper,
            mode:'mobile',
            demo:'https://storemycontacts.herokuapp.com/'

        },
        {   title:'A* Pathfinding Visualiser using Python',
            description:'This is a Path finding Visualiser app which was made using python and pygame.This app visualises A star path finding algorithm. You can choose your own start node,end node and you can add barriers to your graph.I could not host my app online but you can certainly check my code on Github.' ,
            picture:aStar,
            demo:'https://github.com/hari-bhandari/Astar-visualiser'

        },
        {   title:'MCDONALD\'S SCHEDULE VIEWER',
            description:'This is an amazing web scraping app that scrapes mcdonald\'s schedule. I made this app as Mcdonald\'s schedule is extremely unresponsive and hard to work with.NodeJs and Reactjs were used while making this project. This app scrapes mcdonald\'s schedule every 24 hours at 0:00 am.\n' +
                'By the way, I work at Mcdonald\'s.',
            picture:Mcdonalds,
            mode:'mobile',
            demo:'https://mcdonalds-schedule.herokuapp.com/'

        },
        {   title:'Corona Virus Tracker',
            description:'This app uses www.disease.sh api to track total number of cases of corona virus. It also visualizes number of cases,deaths and recovered totals across the world.In addition, I have listed countries by total number of corona virus cases.',
            picture:Mcdonalds,
            demo:'https://corona.haribhandari.me/'
        },

        ]
    return (
        <div id={"projects"} className="background">
            {projects.map((value,index) =>(
                <Project title={value.title} description={value.description} picture={value.picture} mode={value.mode} key={index} demo={value.demo}/>
            ))}
        </div>
    );
};

export default Projects;