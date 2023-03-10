## `npm i -D react typescript @types/react`

Notice that we are passing the flag -D because we need to install it as devDependencies rather than a project dependency; we’ll need those dependencies when we are building the bundle.
In the future, this library will be used inside a React project. Therefore, we don’t need to bundle it, and we can move the React dependency to the peerDependency section (you will probably need to add this in your package.json file).

## We will be using CSS-in-JS. CSS-in-JS provides many benefits over regular CSS, for example:

Reusability: Because CSS-in-JS is written in JavaScript, the styles you define will be reusable JavaScript objects, and you can even extend their properties

Encapsulation: CSS-in-JS scopes are generated by unique selectors that prevent styles from leaking into other components

Dynamic: CSS-in-JS will allow you to dynamically change the properties of the styling depending on the value that the variables hold
