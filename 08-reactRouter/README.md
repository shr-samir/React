# React Router

- react router chai euta third party router ho

### Link and NavLink
- Link component chai hamro anchor tag lai replace garna use garinxa kinaki anchor le purai page lai reload garxa. But react ma refresh hudaina so tyo solve garna Link use garinxa.
- Link is used to navigate to different routes in an application.
- to is used instead of href attribute.
- NavLink extends Link by adding styles to the link when active. 
- yesma className ma callback pass garne, ani tesma as arg chai isActive pass garne

### Router and Routing

- RouterProvider component provide garxa react-router-dom le. Tesle chai euta props linxa ie router
- Now we use createBrowserRouter() to define the route. Tesma ani createRoutesFromElements() vitra Route comp pass garera route define garne ho.
- Route comp ma use hune props haru chai path, element, loader haru ho.
- loader is used to preload or execute the given function just on hover over the element. It is loaded even before any hooks execute and also stores data in cache.
- Also, there is concept of Layout for optimization. For eg. Navbar and Footer chai sab pages ma same hunxa ni ta so teslai chai Layout ma rakhera aru change hune part lai chai Outlet component of react-router-dom through as a child component use garinxa.