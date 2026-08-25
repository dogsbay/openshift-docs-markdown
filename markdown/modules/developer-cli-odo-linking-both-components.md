{%- set _mod_docs_content_type = "PROCEDURE" %}

# Linking both components {id="linking-both-components_{{ context }}"}

Components running on the cluster need to be connected to interact. {{ product_title }} provides linking mechanisms to publish communication bindings from a program to its clients.

**Procedure**

1.  List all the components that are running on the cluster:
    ```terminal
    $ odo list
    ```
    ```terminal title="Example output"
    OpenShift Components:
    APP     NAME         PROJECT     TYPE          SOURCETYPE     STATE
    app     backend      testpro     openjdk18     binary         Pushed
    app     frontend     testpro     nodejs        local          Pushed
    ```
1.  Link the current front-end component to the back end:
    ```terminal
    $ odo link backend --port 8080
    ```
    ```terminal title="Example output"
     ✓  Component backend has been successfully linked from the component frontend

    Following environment variables were added to frontend component:
    - COMPONENT_BACKEND_HOST
    - COMPONENT_BACKEND_PORT
    ```

    The configuration information of the back-end component is added to the front-end component and the front-end component restarts.