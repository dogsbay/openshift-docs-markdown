{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exposing the back-end service {id="getting-started-cli-creating-route-backend_{{ context }}"}

To expose the back-end service so that it is accessible externally, create a route. {._abstract}

**Prerequisites**

*   You have deployed the `nationalparks` back-end application.
*   You have `cluster-admin` or project-level `admin` privileges.

**Procedure**

1.  Create a route to expose the `nationalparks` back-end application by running the following command:
    ```terminal
    $ oc create route edge nationalparks --service=nationalparks
    ```
1.  Label the `nationalparks` route by running the following command:
    ```terminal
    $ oc label route nationalparks type=parksmap-backend
    ```

    The application code expects the `nationalparks` route to be labeled with `type=parksmap-backend`.