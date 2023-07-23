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
