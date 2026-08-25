{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling route advertisements {id="nw-route-advertisements-disable_{{ context }}"}

To prevent your cluster from advertising additional routes to the network, you must disable the route advertisements feature in the network operator configuration. You can disable route advertisements to manage network traffic and maintain security within your environment. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You are logged in to the cluster as a user with the `cluster-admin` role.
*   The cluster is installed on compatible infrastructure.

**Procedure**

*   To disable additional routing support, enter the following command:
    ```terminal
    $ oc patch network.operator cluster -p '{
      "spec": {
        "defaultNetwork": {
          "ovnKubernetesConfig": {
            "routeAdvertisements": "Disabled"
          }
        }
      }
    }'
    ```