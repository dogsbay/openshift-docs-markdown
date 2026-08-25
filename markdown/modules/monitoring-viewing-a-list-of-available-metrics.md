{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing a list of available metrics {id="viewing-a-list-of-available-metrics_{{ context }}"}

As a cluster administrator or as a user with view permissions for all projects, you can view a list of metrics available in a cluster and output the list in JSON format.

**Prerequisites**

*   You are a cluster administrator, or you have access to the cluster as a user with the `cluster-monitoring-view` cluster role.
*   You have installed the {{ product_title }} CLI (`oc`).
*   You have obtained the {{ product_title }} API route for Thanos Querier.
*   You are able to get a bearer token by using the `oc whoami -t` command.

    :::important

    You can only use bearer token authentication to access the Thanos Querier API route.
    
    :::


**Procedure**

1.  If you have not obtained the {{ product_title }} API route for Thanos Querier, run the following command:
    ```terminal
    $ oc get routes -n openshift-monitoring thanos-querier -o jsonpath='{.status.ingress[0].host}'
    ```
1.  Retrieve a list of metrics in JSON format from the Thanos Querier API route by running the following command. This command uses `oc` to authenticate with a bearer token.
    ```terminal
    $ curl -k -H "Authorization: Bearer $(oc whoami -t)" https://<thanos_querier_route>/api/v1/metadata (1)
    ```
    1.  Replace `<thanos_querier_route>` with the {{ product_title }} API route for Thanos Querier.