#  LockerLegends website 2022 

## Exam project and a live site rebuilding the lockerlegends.net / .org websites 
(site is hosted in two locations, two domains, youll fint the links in the end of my reflektion)

So this is the repo of the "end result" of my exam project at KYH, I decided to rebuild the lockerlegends website.
I have also promised the product owner that I will continue to update and refine the website thru this year. 
Add features and optimize a few things to make it faster and more stable. 


### Why did I choose this project?

Well James Higgins is the owner of the website and and locker goes by the alias O.G SKEETER RABBIT and is member of the crew called GOGO BROTHERS. 
He had this website since 2004, when I was seaching for history and the background of the dance style Locking I stumbled up on his website and used it as my source of information while teaching the ART FORM OF LOCKING. 
I also contacted the Owner and his partners and did a project called ** FUNKCAMP ** which gave the oportunity for youth in Stockholm to learn directly from the sources, pioneers of the dance. 
He has always shared his knowledge and is the first one who actually had an informative page about the pioneers, history, steps and so on online.
James has always given his time for the people who have shown interest and many times put in hours of his free time to teach and travel.

#### > Giving back
So for me a chance of giving back to a person who has helped me in my carreer since 2005, his knowledge is a reason I had a great carreer as a dancer and been one of the most prominant teachers in the artform of locking and also hiphop here in Sweden. 

### What is the goal?

The goal is to be able to use / implement everything ive learned since fall 2020 when this education started. 
Its my exam so I have to use the different subjects we had during this education, try to get something from every part of the curriculum.
Also i decided to use a new framework so I chose NEXT cause I've been working a little bit (for a year) in REACT
We have to use the Web development techniques, UX (im not the best at this but did it) Design (using figma) and working methodologies, scrum kanban (used Trello).

## The problem to solve

Well the website has not been updated the past probably 10 years, it´s done in wordpress and has a lot of bugs in it that needs to be fixed.
Links that goes no where or to pages that most dont want to visit. There are pages without content and so forth.
It was hard to navigate as most commented this when i did the user research and har to read due to a lot of contect being plain text with out sepration of any kind no good quality images and so on. 
The UI is outdated. The owner cant upload images in to wordpress, code is missing some one who has helped has missed and erased this in the php file. 
The average visitor statistic is 1-2 pages per visitor, lasting from 30s-2min. In other words something is needed to be done. 
A lot of spam to be removed with over 9000 comments, 23.000 spam messages of somekind and there is no comment section open!

### Customer wants to have a 70´s look with a modern approach and feel of "news paper articles"


## How will I try to solve the problems and build this site?

So I desided to rebuild the page from scratch, In the end I chose NEXT JS.
I have downloaded the DB and started a new WP project locally 
I then restructured it in WP first, cleaned the DB and copied all the old information from the db, so it can be used as a headless CMS.
Uploaded it to siteground.
I built all pages in NEXT.JS that is not going to have any changes, so all the pages with valuable information and knowledge that dont change. 
Used SASS scss.module for styling (switched from styled components)
Made it so that the customer can use posts, create new posts in WP then fetch that information so that he has a blog section on the new website
I first made it possible to also do pages, but then i changed my mind, cause if the customer can create new pages then the website will probable in the end,
end up looking like the old one. So I wanted to avoid this. 
Use headless cms in NEXT.js to get the data from wp (tried apollo and will probably change to it, used regular FETCH API on this one for now)
Use siteground and make a subdomain for use as the wp site with the information
Take the domain and use it in VERCEL where the new site will be hosted, for now. 
Rebuild the nav, design new look, and add images, gifs and videos to the website (right now its a bit heavy on the image part so will move the images to provider, processor like imgix)


# __Languages and Tools:__

- ☕
- [vscode]
- [github]
- [worpress]
- [xampp]
- [graphql]
- [next-js]
- [react-js]
- [javascript]
- [html]
- [css]
- [scss]
- [framer-motion]
- [siteground]
- [html-react-parser]
- [localstorage]
- [json-server]

### For design:
- [figma]

### For my Scrumboard, sprints etc:
- [trello]

</br>

---
</br>


# Preview
A look of the old website and the new (before after)

#### > images from the old site:

<img src="/../../../../robonexx/db/blob/main/images/ll1.png" alt="Project image" width="150"><img src="/../../../../robonexx/db/blob/main/images/ll2.png" alt="Project image" width="150"><img src="/../../../../robonexx/db/blob/main/images/ll3.png" alt="Project image" width="150"><img src="/../../../../robonexx/db/blob/main/images/ll4.png" alt="Project image" width="150">

<img src="/../../../../robonexx/db/blob/main/images/ll5.png" alt="Project image" width="150">

#### > images from this rebuild project

<img src="/../../../../robonexx/db/blob/main/images/lln1.png" alt="Project image" width="150"><img src="/../../../../robonexx/db/blob/main/images/lln2.png" alt="Project image" width="150"><img src="/../../../../robonexx/db/blob/main/images/lln3.png" alt="Project image" width="150"><img src="/../../../../robonexx/db/blob/main/images/lln4.png" alt="Project image" width="150">

<img src="/../../../../robonexx/db/blob/main/images/lln5.png" alt="Project image" width="150"><img src="/../../../../robonexx/db/blob/main/images/lln6.png" alt="Project image" width="150">



# Issues

- Built parts of the site using REACT and Styled components first, so it was a bit of a learning curve to get it working in NEXT.
I then changed my mind and changed all styling from styled components to SCSS Module, due to styled components making the app super slow. (dont know why, maybe styled componets just isent built to go hand in hand with NEXT, even if it is duable and i fixed issues got it working but, NOPE)

- importing images, solved with the help of nexts own Image Component and Image Optimization .

- Had a Nav issue not closing in NEXT, and laggy not rerouting, fixed with Callback and useRouter in a useEffect using subscribe and unsubscribe, also set in menuOnClick with page refresh and scroll to top function to redirect after onClick

- samesite cookie issue using iframe when using youtube videos as source (needs to be fixed, not done yet). giving errors seems to be a common problem, could be fixed by using cookies, which i havent done yet. Probably will fix this on an future update. 

- Background video not playing on Iphone / Ipads in Safari, needs fixing havent solved the issue yet, Will use a ternary operator to have image on smaller devices.

- hade som issues when destructuring featuredImage from WP, got it working evertually

Well this showed up a few times, maybe not the best to code when tired and having p tags inside of p tags lol
- Uncaught Error: Hydration failed because the initial UI does not match what was rendered on the server.

- A lot of minor issues due to me thinking wrong or missing syntax, but evetually got the things working for this MVP


</br>

--- 
</br>

# Reflection of the process

So from the IDEA, the product owner meetings, the user feedbacks I build and planned this site using Trello, without it I would have been more messy. 
Ive done skiss in Figma and Wireframe which ive used but then on the go made changes to styles, design, and a try to build a new logo and functions on the page. 
When doing or adding I always checked if the product owner liked it. 
## The challenge of designing a page with a 70´s feel, look to it, beeing similar to a news paper article, and still modern 
was a bit of chanllenge, but I think managed to fix it ok. With a designer It probably would have looked a bit better. 

I've learned the most in my coding period on this project, 
Also taking the process to learn new things while trying to build this webpage, was a challenge but also a lot of fun. Ive put in a good amount of time in to this project, and is not ready as I see it, even thou the Product owner is more then happy and amazed by the new page. 
Ive learned a lot that I havent used yet, due to me not beeing secure enough yet on some techniques and working methods, Like trying out Docker for local work environment. 

I will use stuff that ive learned but dident use in this one, like building a preview of the next project in wp, fetching header, menus and pages. Which I will use in one of my upcoming projects. 

I will deep dive more in to Graphql, and learn it deeper, I dident use Fragments on this project even thoud Ive could have for example.

Ive would ove to find time to learn more about SVG animation, been trying it out, but its super cool stuff.  

I loved working with NEXT even thou I still also like REACT a lot, I love FRAMER MOTION, makes animations fun, even thou i like doing the hole keyframes thingy and manipulating with Javascript also, just takes more time. 

A yeah and contolling my ADHD... with that written  

</br>

### take a look on the page here 
</br>

--- 
</br>

[lockerlegendsOld]: https://www.lockerlegends.net/ 

- will be up until end of may
</br>

--- 
</br>
and the New website (my version)

[lockerlegendsNew]: https://www.lockerlegends.org/

- this page is already up and running and updated

</br>

--- 
</br>

## __My Socials__

- Github - [robonexx](https://github.com/robonexx)
- Instagram - [r.o.b_o.n.e](https://www.instagram.com/r.o.b_o.n.e/)
- Linkedin - [Robert Wägar](https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/)
- Portfolio - "In the works"

</br>

--- 
</br>


[vscode]: https://code.visualstudio.com/
[github]: https://github.com/
[worpress]: https://wordpress.org/
[xampp]: https://www.apachefriends.org/index.html
[graphql]: https://graphql.org/
[next-js]: https://nextjs.org/
[react-js]: https://reactjs.org/ 
[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[html]: https://www.w3schools.com/html/
[css]: https://www.w3.org/Style/CSS/Overview.en.html
[scss]: https://sass-lang.com/documentation
[framer-motion]: https://www.framer.com/motion/
[siteground]: https://www.siteground.com/
[localstorage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[json-server]: https://newbedev.com/javascript-how-to-install-json-server-in-vscode-code-example
[figma]: https://www.figma.com/
[trello]: https://trello.com/
[html-react-parser]: https://www.npmjs.com/package/html-react-parser