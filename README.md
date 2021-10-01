# NUSFintechDevops
For Devops Assignment

CI/CD Flow

https://nusfintechdevopsfx-3w6afueuvq-as.a.run.app/FX.html

## PLAN,BUILD,CODE & TEST

### Front end Development
- Build FX.js where it is connected to Polygon.io API to get either historical or up-to-date FX rate
- Link the FX.js to a frontend interface (FX.html and fx.css) where it serve to collect the user input to make the relevant API call so as to display the desired results
- Build main.js where it start a listen port 3000 and redirect the any access to the page to the FX.html front


### DOCKER
https://docs.docker.com/engine/reference/commandline/docker/

### Build Docker Image (where the . represent to include every files in the directory)
```docker build -t (imagename) . ```

example - ```docker build -t mainjs . ```

#### Check on the existing image
```docker images ```

#### Run the images with a container
```docker run -it -d -p (any port number):(port defined in your node.js file) (imagename) ```

example - ```docker run -it -d -p 3001:3000 mainjs ```

#### Check any container is running
```docker ps ```

#### Stop the container from running
```docker stop <container id> ```

example - ```docker stop c42758de58f0 ```
