{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the application logs {id="cloud-experts-deploying-application-logging-view-app-logs_{{ context }}"}

You can view your application’s logs by using the `oc` command. {._abstract}

**Procedure**

1.  Enter the following command in the command-line interface (CLI) to retrieve the name of your frontend pod:
    ```terminal
    $ oc get pods -o name
    ```

    ***Example output***
    ```terminal
    pod/ostoy-frontend-679cb85695-5cn7x (1)
    pod/ostoy-microservice-86b4c6f559-p594d
    ```

    The pod name in this example is `ostoy-frontend-679cb85695-5cn7x`.
1.  Run the following command to see both the `stdout` and `stderr` messages:
    ```terminal
    $ oc logs <pod-name>
    ```

    ***Example output***
    ```terminal
    $ oc logs ostoy-frontend-679cb85695-5cn7x
    [...]
    ostoy-frontend-679cb85695-5cn7x: server starting on port 8080
    Redirecting to /home
    stdout: All is well!
    stderr: Oh no! Error!
    ```