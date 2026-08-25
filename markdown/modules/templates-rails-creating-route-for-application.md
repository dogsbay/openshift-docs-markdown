{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a route for your application {id="templates-rails-creating-route-for-application_{{ context }}"}

You can create a route for your application with the `oc expose service` command. The route makes the application accessible from outside the cluster. {._abstract}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}

**Procedure**

*   Make the frontend service accessible externally by running the following command:
    ```terminal
    $ oc expose service rails-app --hostname=www.example.com
    ```

    :::warning

    Ensure that the hostname you specify resolves to the IP address of the router.
    
    :::

{% endif %}