# parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistant Hashing
- Code Splitting
- Differential Bundling - support browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# structure

/

- Header
- -Logo
- -Nav items
- Body
- -Search
- -Restaurant container
-      -RestaurantCard
-         -Img
-         -Name of res, star rating, cuisine
- Footer
- -Copyright
- -Links
- -Address
- -Contact
  /

Two types of Export/Import

-Default Export/Import

export default component;
import Component from "path";

-Named Export/Import

export const Component;
import {component} from "path";

# React Hooks

(Normal JS utility Functions)
-useState() - Superpowerfull state variables in react

- used to create local state variable
  //Local State Variable

  # const[ListOfRestaurants] = useState([null])

  // Normal JS Variable

  # let ListOfRestaurants = null;

  -useEffect()
  useeffect takes two arguments

  1. arrow function ,af is callback function
  2. dependecy array

  # useeffect(()=>{},[])

Conditional Rendering - rendering on the basis of conditions

# two types of Routing

1.client side routing
2.server side routing

# Redux Toolkoit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- create Slice(cartSlice)
- dispatch(action)
- Selector

# Types of testing (devloper)

- Unit Testing
- Integration Testing
- End to End Testing -e2e testing

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest configuration - npx jest --init
- Install Jsdom library
- Install @babel/preset-react -to make jsx work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom
