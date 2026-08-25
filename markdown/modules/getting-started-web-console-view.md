{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the application in a web browser {id="getting-started-web-console-view_{{ context }}"}

After you have deployed the necessary applications and loaded data into the database, you are now ready view your application through a browser. You can access the application by opening the URL for the front-end application. {._abstract}

**Prerequisites**

*   You have deployed the `parksmap` front-end application.
*   You have deployed the `nationalparks` back-end application.
*   You have deployed the `mongodb-nationalparks` database application.
*   You have loaded the data into the `mongodb-nationalparks` database.

**Procedure**

1.  Navigate to **Workloads** → **Topology**.
1.  Click the **Open URL** link from the `parksmap` deployment.

    **Figure 1. National parks across the world**

    ![Opening the URL for the parksmap deployment](/_assets/images/getting-started-parksmap-url.png)
1.  Verify that your web browser displays a map of the national parks across the world.

    **Figure 2. National parks across the world**

    ![Map of the national parks across the world](/_assets/images/getting-started-map-national-parks.png)

    If you allow the application to access your location, the map will center on your location.