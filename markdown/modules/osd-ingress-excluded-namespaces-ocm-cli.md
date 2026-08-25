{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure excluded namespaces for the default ingress controller {id="osd-ingress-excluded-namespaces-ocm-cli_{{ context }}"}

As a cluster administrator, you can use the {{ cluster_manager }} CLI (`ocm`) to exclude namespaces from the default application ingress on an existing cluster. Excluded namespaces do not have routes served by that ingress. {._abstract}

**Prerequisites**

*   You installed the `ocm` CLI and logged in with credentials that can change cluster ingress settings in {{ cluster_manager_first }}.
*   You have the cluster name, cluster ID, or external ID of your cluster.


:::important

Do not exclude namespaces that host required platform routes (for example, `openshift-console` or `openshift-authentication`). Excluding them can break the web console, downloads, or OAuth flows.

:::


**Procedure**

1.  Optional: Set your cluster name in a variable:
    ```terminal
    $ export CLUSTER_NAME=<cluster_name>
    ```
1.  List ingress endpoints for the cluster and note the `id` of the default ingress:
    ```terminal
    $ ocm list ingress -c ${CLUSTER_NAME}
    ```
1.  Optional: To store the default ingress ID in a variable:
    ```terminal
    $ export INGRESS_ID=$(ocm list ingress -c ${CLUSTER_NAME}| jq -r '.[] | select(.default == true) | .id')
    ```
1.  Edit the default ingress and set excluded namespaces as a comma-separated list of namespace names:
    ```terminal
    $ ocm edit ingress -c ${CLUSTER_NAME} ${INGRESS_ID} \
        --excluded-namespaces 'namespace-one,namespace-two'
    ```

    Substitute `namespace-one`, `namespace-two`, and any additional entries with the metadata names of the namespaces to exclude.

**Verification**

*   After the command completes, verify that the updated ingress object reflects your excluded namespace settings.
    ```terminal
    $ ocm list ingress -c <cluster_name>
    ```