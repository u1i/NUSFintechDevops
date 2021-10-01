# NUSFintechDevops
Devops Assignment - CI/CD Flow

https://nusfintechdevopsfx-3w6afueuvq-as.a.run.app/FX.html


## PLAN,BUILD,CODE & TEST

### Front end Development

- Build FX.js where it is connected to Polygon.io API to get either historical or up-to-date FX rate
- Link the FX.js to a frontend interface (FX.html and fx.css) where it serve to collect the user input to make the relevant API call so as to display the desired results
- Build node.js(main.js) where it start a listen port 3000 and redirect the any access to the page to the FX.html front

### App containerization using Docker

##### Create a Dockerfile

- Specify the operating system image                            eg FROM alpine:latest
- set the working directory                                     eg WORKDIR /app
- Copy all the source code and file into the working director   eg Copy . /app
- Defined the listening port as indicated in the node.js file   eg EXPOSE 3000
- Install all the essential modules and packages for it to run  eg RUN apk add nodejs npm npm install
- Enable an executable container                                eg ENTRYPOINT ["node"] & CMD ["main.js"

With the created Dockerfile, the following steps were executed :
https://docs.docker.com/engine/reference/commandline/docker/

##### Build Docker Image (where the . represent to include every files in the directory)
```docker build -t mainjs . ```

##### Check on the existing image
```docker images ```

##### Run the images with a container
```docker run -it -d -p 3001:3000 mainjs ```

##### Check any container is running
```docker ps ```

##### Stop the container from running
 ```docker stop c42758de58f0 ```
 
### Continuous Integration
Using the Github action to continuous build and push any git push file update to DockerHub to ensure that the images is always up to date for container deployment.

- Define the Dockerhub username and password via Setting > Secret

Workflow (YAML file)
- Setup the docker login with the secret.username and password
- Setup the Node.js environment
- Build the Docker Image
- Enable Docker Push

### Continuous Development 
Using the function of the Google Cloud Build and Google Cloud Run






