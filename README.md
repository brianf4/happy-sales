# Happy Sales
Happy Sales is a full-stack website that enables businesses to efficiently generate barcodes, manage inventory, track sales, and analyze business performance overtime through comprehensive reports and analytics. The inspiration came from when I used to work in the back at a retail store as a stock/inventory associate and hated the slow and sluggish technology that I had to use to to keep track of inventory. This project is solution to better inproving the software.

**Link to project:** https://happy-sales-production.up.railway.app/

![10 second gif of the front page of the Happy Sales website going from top to bottom](https://github.com/brianf4/happy-sales/blob/main/Happy%20Sales-logo/landing-page.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React.js, Node.js/Express.js, MongoDB

For the frontend happy sales is built with React.js and am really happy how it turned out. For styling I used a CSS framework called tailwindcss and used a useful component library called Daisyui. For authentication I used JSON Web Tokens and the backend is powered by using Node.js with the Express framework. Additionally for storage MongoDB is being used as the database. 

## Optimizations
Some of the things I would optimize is after generating your barcode you can send it to another device via email/text or other method to so that the current machine you're on can scan it. As well as be able to provide filters for the inventory to select items based on price, amount of items, genre of items etc.


## Lessons Learned:

I am really proud on how this web app came out. I learned so much from React/Express/MongoDB and all the little things that came with it. Especially how React makes their syntax composable, meaning, how they take a large amount of mixed html/css/javascript and fit it into my own custom component to make code more maintainable and flexible. As well as leveraging the advanced methods and query selectors that MongoDB has to offer, effectively letting me query and select those documents in an efficient manner.

## Demo Login

Demo Email: Demo.user@gmail.com
Demo Password: Demopass123!

## Installation

1. Clone Repo
2. Run `npm install` on root, frontend, AND backend
3. Update PORT, MONGO_URI, SECRET

## Usage

1. Navigate to `frontend`
2. run `npm run dev`
3. Navigate to `backend`
4. run `npm run dev`

## Contact me
📫 **Brian.Fuentes04@gmail.com**
<a href="https://linkedin.com/in/brian fuentes" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="brian fuentes" height="15" width="25" /> LinkedIn</a>
<a href="https://twitter.com/brianfuentes124" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="brianfuentes124" height="15" width="25" /> Twitter</a>