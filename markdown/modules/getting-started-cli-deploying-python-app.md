{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the back-end application {id="getting-started-cli-deploying-python-app_{{ context }}"}

Deploy the back-end application that provides the service that queries the database to return the national park data required for your application. {._abstract}

The following procedure deploys `nationalparks`, which is the back-end component for the `national-parks-app` application. The Python application performs 2D geo-spatial queries against a MongoDB database to locate and return map coordinates of all national parks in the world.

**Prerequisites**

*   You have deployed the `parksmap` front-end application.

**Procedure**

*   Create the `nationalparks` back-end application by running the following command:
    ```terminal
    $ oc new-app https://github.com/openshift-roadshow/nationalparks-py.git --name nationalparks -l 'app=national-parks-app,component=nationalparks,role=backend,app.kubernetes.io/part-of=national-parks-app,app.kubernetes.io/name=python' --allow-missing-images=true
    ```
    ```text title="Example output"
    --> Found image 9531750 (2 weeks old) in image stream "openshift/python" under tag "3.11-ubi8" for "python"

        Python 3.11
        -----------
    ...

    --> Creating resources with label app=national-parks-app,app.kubernetes.io/name=python,app.kubernetes.io/part-of=national-parks-app,component=nationalparks,role=backend ...
        imagestream.image.openshift.io "nationalparks" created
        buildconfig.build.openshift.io "nationalparks" created
        deployment.apps "nationalparks" created
        service "nationalparks" created
    --> Success
        Build scheduled, use 'oc logs -f buildconfig/nationalparks' to track its progress.
        Application is not exposed. You can expose services to the outside world by executing one or more of the commands below:
         'oc expose service/nationalparks'
        Run 'oc status' to view your app.
    ```