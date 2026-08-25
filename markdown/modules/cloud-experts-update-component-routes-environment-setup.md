{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up your environment {id="cloud-experts-update-component-routes-environment-setup_{{ context }}"}

You can use environment variables to ensure consistency across the commands within this lab. {._abstract}

**Procedure**

1.  Log in to your cluster using an account with `cluster-admin` privileges.
1.  Configure an environment variable for your cluster name:
    ```terminal
    $ export CLUSTER_NAME=$(oc get infrastructure cluster -o=jsonpath="{.status.infrastructureName}"  | sed 's/-[a-z0-9]\{5\}$//')
    ```
1.  Ensure all fields output correctly before moving to the next section:
    ```terminal
    $ echo "Cluster: ${CLUSTER_NAME}"
    ```
    ```text title="Example output"
    Cluster: my-rosa-cluster
    ```