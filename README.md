# JStudy
A place to study Japanese based on popular textbooks! This website is meant to be a tool alongside the textbooks. 

Right now, you can visit the website by going to https://www.jstudy.org, but it only works on certain browsers and is not intended to be mobile friendly at the moment. Also, study content is being developed for Genki 1 and is the only content for now.


## Development Information
### Frontend
The frontend is a react and typescript app that is hosted using AWS amplify. Amplify watches the main branch and deploys any diffs for the frontend CI/CD. AWS Route 53 is used to redirect my custom domain.

