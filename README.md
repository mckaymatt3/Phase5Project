# README

**Intro**
Sitting on the L train back to Brooklyn, I sat around and observed a train full of music fans sitting with their headphones in and listening to their music from an individualistic experience. As an avid music listener and concert goer, I always appreciated the collective nature and environment created through music. Thus, I wanted to create an app to connect music listeners and bring that experience to life.   

See video here of walkthrough of app:
https://www.canva.com/design/DAFDsa964YQ/3rmuFFzrk2-Vwdi9gQEfHA/watch?utm_content=DAFDsa964YQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

**Frontend**
For the frontend I implemented the following features:
- Local storage for Spotify API user authorization
- Asynchronous fetches to display song searches and play songs with Spotify Music Player  
- ActionCable WebSocket to create live chat functionality 
- Redux global state to optimize state functionality for user, chat, and message data       
- UX/UI design thinking to create a user-friendly experience 

_Initial Screen:_
![AuxFront](https://user-images.githubusercontent.com/97127168/174706633-a72b057c-65ae-405b-b65e-82a4d4e74a22.png)


_User Logged In & In ChatRoom_
![AuxFront1](https://user-images.githubusercontent.com/97127168/174706873-17a8e100-cae3-4417-9a66-cbb95631ee20.png)


**Backend**
For the backend:
- Involved Rails, Redis, and Postgresql to create the user, message, and chat room backend data structures and routes
- Implemented ActionCable to broadcast the chatrooms and create a sound pub-sub environment with communication between the client and server  
- Tested the fetches as needed with binding.pry or Postman to ensure back-end working appropriately 


**Deploy**
To deploy I chose to use Heroku to learn the ins and outs of this platform, as well, as several of my other projects involved Netlify. 

Please note - currently updating performance bugs for ActionCable and SpotifyPlayer with Heroku; want to ensure all functionality works as implemented within the local environment, as displayed with the walkthrough video above. Part of the fun of coding - always learning, testing, and debugging! 

https://chatappmatt.herokuapp.com/

**Going Forward**
I want to continue to add user-friendly features to build out a more robust app and user experience, including: 
1. Song statistics - can like songs and capture overall play statistics 
- Thus, we can show the most liked songs of the last week, the last month, top songs in your area, etc. which would involve setting up data structures in the backend to save the song stats 
2. Add to queue - to allow users to further interact with other listeners within a chatroom & create "private" chatrooms to listen to songs when hanging out with friends/family/etc.
- In order to broadcast on a live basis, we could accomplish this by setting up similar data structures, as the messages, with songs in the chatrooms. Thereby leveraging ActionCable and saving the songs to chatrooms with fetches in the frontend.   
4. Skip the line - Add a skip the line button that refreshes every hour or so for users and also allow artists to skip the line to showcase new songs with their fans 
