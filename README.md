Video: https://www.youtube.com/watch?v=6fNy0iD3hsk&ab_channel=SonnySangha

Using next-auth, firebase, cloud.google (for google authentication)

in Google console search for your firebase project "youtube-nextjs-instagram"
<br>https://console.cloud.google.com/home/dashboard?q=search&referrer=search&project=nextjs-instagram-d49b8&authuser=1

set up api credentials at
https://console.cloud.google.com/apis/credentials?authuser=1&project=nextjs-instagram-d49b8

Edit the OAuth 2.0 Client IDs

Then add http://localhost:3000 to Authorized Javascript origins

And add the http://localhost:3000/api/auth/callback/google to the "Authorized redirect URIs"


Run the app:<br>
\> yarn dev