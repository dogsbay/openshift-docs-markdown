{% if context == "creating-a-multicomponent-application-with-odo" %}
{%- set multi = true -%}
{% endif %}
{% if context == "creating-an-application-with-a-database" %}
{%- set database = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}

# Deploying the front-end component {id="deploying-the-front-end-component_{{ context }}"}

To create and deploy a front-end component, download the Node.js application and push the source code to your cluster with `{{ odo_title }}`.

**Procedure**

1.  Download the example front-end application:
    ```terminal
    $ git clone https://github.com/openshift/nodejs-ex frontend
    ```
1.  Change the current directory to the front-end directory:
    ```terminal
    $ cd frontend
    ```
1.  List the contents of the directory to see that the front end is a Node.js application.
    ```terminal
    $ ls
    ```
    ```terminal title="Example output"
    README.md       openshift       server.js       views
    helm            package.json    tests
    ```

    :::note

    The front-end component is written in an interpreted language (Node.js); it does not need to be built.
    
    :::

1.  Create a component configuration of Node.js component-type named `frontend`:
    ```terminal
    $ odo create --s2i nodejs frontend
    ```
    ```terminal title="Example output"
     ✓  Validating component [5ms]
    Please use `odo push` command to create the component with source deployed
    ```

{% if database %}
1.  Create a URL to access the frontend interface.
    ```terminal
    $ odo url create myurl
    ```
    ```terminal title="Example output"
     ✓  URL myurl created for component: nodejs-nodejs-ex-pmdp
    ```
1.  Push the component to the {{ product_title }} cluster.
    ```terminal
    $ odo push
    ```
    ```terminal title="Example output"
    Validation
     ✓  Checking component [7ms]

     Configuration changes
     ✓  Initializing component
     ✓  Creating component [134ms]

     Applying URL changes
     ✓  URL myurl: http://myurl-app-myproject.192.168.42.79.nip.io created

     Pushing to component nodejs-nodejs-ex-mhbb of type local
     ✓  Checking files for pushing [657850ns]
     ✓  Waiting for component to start [6s]
     ✓  Syncing files to the component [408ms]
     ✓  Building component [7s]
     ✓  Changes successfully pushed to component
    ```
{% endif %}

{% if multi %}
1.  Push the component to a running container.
    ```terminal
    $ odo push
    ```
    ```terminal title="Example output"
    Validation
     ✓  Checking component [8ms]

    Configuration changes
     ✓  Initializing component
     ✓  Creating component [83ms]

    Pushing to component frontend of type local
     ✓  Checking files for pushing [2ms]
     ✓  Waiting for component to start [45s]
     ✓  Syncing files to the component [3s]
     ✓  Building component [18s]
     ✓  Changes successfully pushed to component
    ```
{% endif %}

{% if context == "creating-a-multicomponent-application-with-odo" %}
{%- set multi = false -%}
{% endif %}
{% if context == "creating-an-application-with-a-database" %}
{%- set database = false -%}
{% endif %}