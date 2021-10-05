# NUSFintechDevops - CI/CD Flow

#### Deployed Pages
https://nusfintechdevopsfx-3w6afueuvq-as.a.run.app/main.html

## Front end Development
***
Build javascript(JS) to connect Polygon.io API to get Forex,Stock and Crypto price movement via the user input in the html.
___
- Build node.js(main.js) where it start a listen port 3000 and redirect the any access to the page to the main.html front.
- Link the FXcheck.js,Stock.js and Crypto.js to a frontend interface (main.html and split.css) where it serve to collect the user input to make the relevant API call and display the desired results.
- The main.html has a hyperlink to FX.html where the FX conversion is performed after the user input throught FX.js API call to get the ccnversion result.

## App containerization using Docker
***
##### Create a Dockerfile

- Specify the operating system image                            `FROM alpine:latest`
- set the working directory                                     `WORKDIR /app`
- Copy all the source code into the working directory           `Copy . /app`
- Defined the listening port as indicated in the node.js file   `EXPOSE 3000`
- Install all the essential modules and packages for it to run  `RUN apk add nodejs npm npm install`
- Enable an executable container                                `ENTRYPOINT ["node"]` & `CMD ["main.js"]`


```mermaid
flowchart TD 

id1[Specify the operating system image] --> id2[Set the working directory] --> id3[Copy all the source code and file into the working directory] --> id4[Defined the listening port as indicated in the node.js file] --> id5[Install all the essential modules and packages for it to run]--> id6[Enable an executable container]

id7[FROM alpine:latest] --> id8[WORKDIR /app] --> id9[Copy . /app] --> id10[EXPOSE 3000] --> id11[RUN apk add nodejs npm / npm install]--> id12["ENTRYPOINT [''node'']"] --> id13["CMD [''main.js'']"]
```



With the created Dockerfile, the following steps were executed :
https://docs.docker.com/engine/reference/commandline/docker/

##### Build Docker Image 
```docker build -t mainjs . ```

##### Check on the existing image
```docker images ```

##### Run the images with a container
```docker run -it -d -p 3001:3000 mainjs ```

##### Check any container is running
```docker ps ```

##### Stop the container from running
 ```docker stop c42758de58f0 ```
 
## Continuous Integration & Continuous Development 
***
### Docker Hub & YAML
Using the Github action to continuous build and push any git push file update to DockerHub to ensure that the images is always up to date for container deployment.

Workflow (YAML file)
- Setup the docker login with the secret.username and password
- Setup the Node.js environment
- Build the Docker Image
- Enable Docker Push

 Docker Image for deployment 
 ---
 ```docker pull andrewlimyh/mainjs```

 
***
Using the function of the Google Cloud Build and Google Cloud Run

### Google Cloud Build (Container Registry)
https://cloud.google.com/build/docs/automating-builds/build-repos-from-github

The process is a breeeze with the Cloud Build API where it enable the build,test and deploy from any update (push event int the github repository) via their serverless CI/CD interface.

This was done by enable and authorise the Cloud Build to connect to your Github repository(*https://github.com/AntoryuLimyh*) followed by selecting the repository (*NUSFintechDevops*) that you want it track.

Select the push to a branch option and have the configuration set as Dockerfile where it will set off the building process on any push action detected in the said repository. (Similar to the Dockerfile YAML where the end images will be push the repository in Dockerhub).

### Google Cloud run
Develop and deploy the containerized applications on the serverless platform

Select the image from the container registry (us.gcr.io/nusdevops/github_antoryulimyh_nusfintechdevops/nusfintechdevops@sha256:87bac07f112ec9b38ab8e504c761463a17032b7be48a1aed9c9533f9c7a564b0) from you have done with the Cloud Build. 

Specify the container port in Advanced Setting to make sure that it is same as what was listed in your node.js and Dockerfile (*3000*)

In order for make it easy for the general public to access the apps do note that on how the service is triggerconfiguration set it to (_Allow all traffic_) & (_Allow unauthenticated invocations_)












