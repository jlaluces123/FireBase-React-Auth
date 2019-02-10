# FireBase-React-Auth
This is to learn using firebase's auth !


# Steps to success

1. Create a new project in firebase.google.com
2. Go into authentication tab inside your newly created project
3. Under the `Sign-in Method` tab:
  - Enable the `Email/Password` provider

---

1. We need to download the firebase npm module
  - `yarn add firebase`
2. Create a config folder inside the `src` folder
  - Inside the config folder -> create a `fire.js`
  - Look inside `fire.js` for steps on what to put inside this file
3. Create a `authListener()` function that will look to check whether or not the auth state has changed
  - Then create a componentDidMount to invoke the authListener
4. Inside app.js you can check if the user is logged in or not and render pages accordingly
5. Follow along in Login.js file
  - You will be creating a login() and signUp() function here
6. Create a Home.js, and follow along inside the file
  - You will be creating a signOut() function here