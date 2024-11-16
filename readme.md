--why react?
//to manage and build complex front ends

--why should I learn react?
//if you master in JS, most project doesn't need react in initial pahse.

--Why react was created?
//Facebook faced ghost message problem, I read those messages in facebook chats but the number showing on top of the chat icon. So to manage states facebook made react.

--State is managed by JS and UI is managed by DOM, so to connect State to the DOM w need to use the React
--React is Library and Next JS is a frame work.

--Difference between Framework and library
//In library we can write codes here and there and in framework, we can write codes in a proper manner and we can make pages inside the folder in a particular name.

--TOpics to learn in react
//core of react (state or UI manipulation, JSX)
//comopnent reusability
//reusing the component (props- properties)
//how to propagate change(hooks)

--Additonal information
//router (React doesn't use router) - NEXT js have routers and different pages
//State management -- React don't have state management (Redux, Redux Toolkit, Zustand, Contnet API)
//class based component (legacy code)
//Baas Apps (Social media clone, E-commerce App) - Backend as a service (Appwrite, firebase, Superbase)

Where to go after learning React?
--React is not a complete solution (SEO, browser rendering, routing)
--NEXT js, Gatsby, Remix

--what attachments you got with react library?
//With React library I got React Dom and react native.
//so basically react-dom is for web apps and reactnative is for mobile apps

--What is DOM (Document Object Model?)
//In DOM, we can see the website as an document like when the webpage loads it represent the HTML structure in a tree like model, where we can see text and attributes as an object in the DOM tree, which you can access and manupaulate with javascript using "document.getelementbyID"

--What is npx and npm?
//npm is called as node package manager and npx is called as node package executor
//npm allows you to install some extra libraries or packages with react and if you want to directly execute it then you can use node package executor

-- what is (npx create-react-app )
//npx is node package executor and "create-react-app" is a utility or you can say that it is an app.

--npm run start
//we use "npm run start" to start our application. use "run", don't use npm start

--What is package.json?
//contains all the information about react packages and all
//it includes the react scripsm and react domand also include the test packages jest, have the informations of which browser versions supported.

--npm run eject use?
//Running this command will "eject" all the hidden configuration (e.g., Webpack, Babel) into your project, making them accessible for direct customization.

--Dev depandencies(package.json file)
//it can't go to the production, its jsut for work

--Web vitals (package,json)
//this will track how is thw performance of your website

--package.lock.json file?
//in this file, a stable version is locked for all the dependencies.

--manifest.json
//this file shows metatext for mobile apps

--what is react DOM?
//react creates his own DOM and Compares his own DOM and browser's DOM that what needs to be change, it can efficiently change that part only.
//So it target the root element which is written in index.html file.
//ReactDOM provides the render() method, which takes a React component and a DOM element to render it into. This is commonly used to display the root component of a React app in the index.html file.

--what is Createroot?
//Same as "createRoot()", but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer which is used a event listner. it is a method for ReactDOM.

--root.render
//rendering HTML elements thorough javascript like importing the file in another js and render it like html elements. "<App/>"

--React.StrictMode
//A tool in React that helps developers write better, more resilient code by highlighting potential issues in an application during development. It doesn’t render anything visible on the UI or affect the production build but enables additional checks and warnings to assist in finding issues earlier.

--So what is the benefits when we write HTML through the Javascript?
//it injects the index file into the app file automatically
//in Vitereact the index file directly loads the script file using "script" tag because there is no dependency in the package.
//vite is lightweight because it directly renders the root file.

--What needs to be taken care of?
//when you are making functions in a js file then please start the function name from uppercase letters.

--in vitereact an react application
