# Connecting the database to the front-end application {id="Connecting-the-database-to-the-front-end-application_{{ context }}"}

1.  Link the database to the front-end service:
    ```terminal
    $ odo link mongodb-persistent
    ```
    ```terminal title="Example output"
     ✓  Service mongodb-persistent has been successfully linked from the component nodejs-nodejs-ex-mhbb

    Following environment variables were added to nodejs-nodejs-ex-mhbb component:
    - database_name
    - password
    - uri
    - username
    - admin_password
    ```
1.  See the environment variables of the application and the database in the pod:
    1.  Get the pod name:
        ```terminal
        $ oc get pods
        ```
        ```terminal title="Example output"
        NAME                                READY     STATUS    RESTARTS   AGE
        mongodb-1-gsznc                     1/1       Running   0          28m
        nodejs-nodejs-ex-mhbb-app-4-vkn9l   1/1       Running   0          1m
        ```
    1.  Connect to the pod:
        ```terminal
        $ oc rsh nodejs-nodejs-ex-mhbb-app-4-vkn9l
        ```
    1.  Check the environment variables:
        ```terminal
        sh-4.2$ env
        ```
        ```terminal title="Example output"
        uri=mongodb://172.30.126.3:27017
        password=dHIOpYneSkX3rTLn
        database_name=sampledb
        username=user43U
        admin_password=NCn41tqmx7RIqmfv
        ```
1.  Open the URL in the browser and notice the database configuration in the bottom right:
    ```terminal
    $ odo url list
    ```
    ```terminal title="Example output"
    Request information
    Page view count: 24

    DB Connection Info:
    Type:	MongoDB
    URL:	mongodb://172.30.126.3:27017/sampledb
    ```