# DVD-Library-Angular-REST

The DVD library is a two part project. The first part being a DVD Library REST API using Spring Boot, and the second being a browser-based user interface using Angular.

### Part 1 - DVD Library REST API - Spring Boot

REST endpoints :
+ "/dvd/{id}" - GET : Returns a specific DVD ;
+ "/dvds" - GET : Returns a list of all DVDs ;
+ "/dvds/title/{title}" - GET : Returns a list of DVDs that have a matching title ;
+ "/dvds/year/{releaseYear}" - GET : Returns a list of DVDs that have a matching release year ;
+ "/dvds/director/{directorName}" - GET : Returns a list of DVDs that have a matching director name ;
+ "/dvds/rating/{rating}" - GET : Returns a list of DVDs that have a matching rating ;
+ "/dvd" - POST : Send a JSON with the representation of a DVD. Returns a newly created DVD with it's ID ;
+ "/dvd/{id}" - PUT : Send a JSON with the representation of a DVD. It will edit the DVD fields of the DVD with the given ID ;
+ "/dvd/{id}" - DELETE : Deletes the DVD with the given ID.

### Part 2 - Angular Frontend

The Angular application displays the home page at the initial load with a table of all the DVDs with links for editing and deleting each DVD.

At the top of the home page there's a button that redirects to a page for adding a DVD and a search bar that allows the user to switch between the search categories (Title, Release Year, Director name and Rating) and a field for the search term.
