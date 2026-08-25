{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the application in a web browser {id="getting-started-cli-view_{{ context }}"}

After you have deployed the necessary applications and loaded data into the database, you are now ready view your application through a browser. You can get the URL for the application by retrieving the route information for the front-end application. {._abstract}

**Prerequisites**

*   You have deployed the `parksmap` front-end application.
*   You have deployed the `nationalparks` back-end application.
*   You have deployed the `mongodb-nationalparks` database application.
*   You have loaded the data into the `mongodb-nationalparks` database.

**Procedure**

1.  Get your route information to retrieve your map application URL by running the following command:
    ```terminal
    $ oc get route parksmap
    ```
    ```terminal title="Example output"
    NAME       HOST/PORT                                                  PATH   SERVICES    PORT       TERMINATION   WILDCARD
    parksmap   parksmap-user-getting-started.apps.cluster.example.com            parksmap    8080-tcp   edge          None
    ```
1.  From the above output, copy the value in the `HOST/PORT` column.
1.  Add `https://` in front of the copied value to get the application URL. This is necessary because the route is a secured route.
    ```text title="Example application URL"
    https://parksmap-user-getting-started.apps.cluster.example.com
    ```
1.  Paste this application URL into your web browser. Your browser should display a map of the national parks across the world.
    **Figure 1. National parks across the world**

    ![Map of the national parks across the world](/_assets/images/getting-started-map-national-parks.png)

    If you allow the application to access your location, the map will center on your location.