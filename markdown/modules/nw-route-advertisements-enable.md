{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling route advertisements {id="nw-route-advertisements-enable_{{ context }}"}

To improve network reachability and failover visibility, you can enable additional routing support for your cluster. You can enable route advertisements to manage network traffic within your environment. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You are logged in to the cluster as a user with the `cluster-admin` role.
*   The cluster is installed on compatible infrastructure.

**Procedure**

*   To enable a routing provider and additional route advertisements, enter the following command:
    ```terminal
    $ oc patch Network.operator.openshift.io cluster --type=merge \
      -p='{
        "spec": {
          "additionalRoutingCapabilities": {
            "providers": ["FRR"]
            },
            "defaultNetwork": {
              "ovnKubernetesConfig": {
                "routeAdvertisements": "Enabled"
        }}}}'
    ```