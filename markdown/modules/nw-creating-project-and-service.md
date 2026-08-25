{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a project and service {id="nw-creating-project-and-service_{{ context }}"}

If the project and service that you want to expose does not exist, create the project and then create the service. {._abstract}

If the project and service already exists, skip to the procedure on exposing the service to create a route.

**Prerequisites**

*   Install the {{ oc_first }} and log in as a cluster administrator.

**Procedure**

1.  Create a new project for your service by running the `oc new-project` command:
    ```terminal
    $ oc new-project <project_name>
    ```
1.  Use the `oc new-app` command to create your service:
    ```terminal
    $ oc new-app nodejs:12~https://github.com/sclorg/nodejs-ex.git
    ```
1.  To verify that the service was created, run the following command:
    ```terminal
    $ oc get svc -n <project_name>
    ```
    ```terminal title="Example output"
    NAME        TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
    nodejs-ex   ClusterIP   172.30.197.157   <none>        8080/TCP   70s
    ```

    :::note

    By default, the new service does not have an external IP address.
    
    :::