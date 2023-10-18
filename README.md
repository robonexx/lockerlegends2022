#  LockerLegends website 2022 

### - will combine some of this "old lockerlegends website with the new 2024 version"

## This project and a live site rebuilding the lockerlegends.net site, still old site up will be switced to this latest 19th of may 2022 (was on schedule)

So this is a heart filled project for me, I decided to rebuild the lockerlegends website for Mr James Higgins aka "Skeeter Rabbit".
Also my first solo project and customer :D


### Why did I choose this project?

Well James Higgins is the owner of the website and he is a pioneer old school Soul-train dancer and locker, representing the artform of locking aka Campbellocking.
He has always shared his knowledge and is the first one who actually had an informative page about the artform of locking, the pioneers, history, steps and so on.
James has always given his time for the people who have shown interest and many times put in hours of his free time to teach and travel.

#### > Giving back
So for me a chance of giving back to a person who has helped me in my carreer since 2005, his knowledge is a reason I had a great carreer as a dancer and been one of the most prominant teachers in the artform of locking and also hiphop here in Sweden. 

### What is the goal?

The goal is to be able to use / implement a lot of what I learned since fall 2020 when I took a deepdive in to programming. 
Its my solo "big project" so I have to use the different subjects that I have learned and also learned when I was a student at KYH.
I´m try to get something from every part of the curriculums I've learned from.

Web development techniques, UX and working methodologies.

## The problem to solve

Well the website had not been updated for the past probably 10 years, it´s done in wordpress and has a lot of bugs in it, spam and such, that needs to be cleaned/ fixed. (cleaned 18.000 comments and spam, links that was to well not so good sites etc)
It´s hard to navigate and read due to a lot of content being plain text with out separation of any kind. 
The UI is outdated. The owner can't upload images in to wordpress, code is missing. (fixed) 
The average visitor statistic is 1-2 pages per visitor, lasting from 30s-2min. In other words something is needed to be done. (went up to about 2-300 first weeks and now jan 2023 its about 20-50 visitors, no updates for awhile)
A lot of spam to be removed with over 18.000 comments/spam, and there is no comment section open? (fixed it)

## How will I try to solve the problems and build this site?

So I desided to rebuild the page from scratch, I have downloaded the DB and started a new WP project locally. 
I will then restructure it in WP first so it can be used as a CMS
I will build all pages in NEXT.JS that is not going to have any changes
Use posts in WP as the dynamic 'pages' that the customer will use as a cms
Use headless cms in NEXT.js to get the data from wp
Use siteground and make a subdomain for use as the wp site
Then use NEXT and vercel to have the website on. 
Wp page is hosted on siteground. 
(all done and done)


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

- LockerLegends old - [OldLockerLegends](https://www.lockerlegends.net/)

- will be up until end of may
</br>

- importing images, solved with the help of stack and next documents

- Nav not closing in NEXT due to it being serverside rendered (found a fix implemented it)

Next.js images, links, useEffect problems with useRef, (got it working)

</br>

--- 
</br>

## __My Socials__

- Github - [robonexx](https://github.com/robonexx)
- Instagram - [r.o.b_o.n.e](https://www.instagram.com/r.o.b_o.n.e/)
- Linkedin - [Robert Wägar](https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/)
- Portfolio - "Coming 2023"

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