{%- if context == "creating-a-single-component-application-with-odo" %}
{%- set single = true -%}
{% endif %}
{% if context == "creating-a-multicomponent-application-with-odo" %}
{%- set multi = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Node.js application with {{ odo_title }} {id="creating-a-nodejs-application-with-odo_{{ context }}"}

To create a Node.js component, download the Node.js application and push the source code to your cluster with `{{ odo_title }}`{minja}.

**Procedure**

{% if single %}

1.  Create a directory for your components:
    ```terminal
    $ mkdir my_components && cd my_components
    ```
1.  Download the example Node.js application:
    ```terminal
    $ git clone https://github.com/openshift/nodejs-ex
    ```
{% endif %}

{% if multi %}

1.  Download the example front-end application:
    ```terminal
    $ git clone https://github.com/openshift-evangelists/Wild-West-Frontend frontend
    ```

{% endif %}

1.  Change the current directory to the directory with your application:
    ```terminal
    $ cd <directory_name>
    ```
1.  Add a component of the type Node.js to your application:
    ```terminal
    $ odo create nodejs
    ```

    :::note

    By default, the latest image is used. You can also explicitly specify an image version by using `odo create openshift/nodejs:8`.
    
    :::

1.  Push the initial source code to the component:
    ```terminal
    $ odo push
    ```

    Your component is now deployed to {{ product_title }}.
1.  Create a URL and add an entry in the local configuration file as follows:
    ```terminal
    $ odo url create --port 8080
    ```
1.  Push the changes. This creates a URL on the cluster.
    ```terminal
    $ odo push
    ```
1.  List the URLs to check the desired URL for the component.
    ```terminal
    $ odo url list
    ```
1.  View your deployed application using the generated URL.
    ```terminal
    $ curl <url>
    ```

{% if context == "creating-a-single-component-application-with-odo" %}
{%- set single = "" -%}
{% endif %}
{% if context == "creating-a-multicomponent-application-with-odo" %}
{%- set multi = "" -%}
{% endif %}