{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding new users in {{ tekton_hub }} configuration {id="adding-new-users-in-tekton-hub-configuration_{{ context }}"}

Cluster administrators can add new users to {{ tekton_hub }} with different scopes. {._abstract}

**Procedure**

1.  Modify the `TektonHub` CR to add new users with different scopes.
    ```yaml
    ...
    scopes:
      - name: agent:create
        users: [<username_1>, <username_2>] (1)
      - name: catalog:refresh
        users: [<username_3>, <username_4>]
      - name: config:refresh
        users: [<username_5>, <username_6>]

    default:
      scopes:
        - rating:read
        - rating:write
    ...
    ```
    1.  The usernames registered with the Git repository hosting service provider.

        :::note

        A new user signing in to {{ tekton_hub }} for the first time will have only the default scope. To activate additional scopes, ensure the user’s username is added in the `scopes` field of the `TektonHub` CR.
        
        :::

1.  Apply the updated `TektonHub` CR.
    ```terminal
    $ oc apply -f <tekton-hub-cr>.yaml
    ```
1.  Check the status of the {{ tekton_hub }}. The updated `TektonHub` CR might take some time to attain a steady state.
    ```terminal
    $ oc get tektonhub.operator.tekton.dev
    ```
    ```terminal title="Sample output"
    NAME   VERSION   READY   REASON   APIURL                    UIURL
    hub    v1.9.0    True             https://api.route.url/    https://ui.route.url/
    ```
1.  Refresh the configuration.
    ```terminal
    $ curl -X POST -H "Authorization: <access-token>" \ (1)
        --header "Content-Type: application/json" \
        --data '{"force": true} \
        <api-route>/system/config/refresh
    ```
    1.  The JWT token.