{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up your environment for component route updates {id="cloud-experts-osd-update-component-routes-environment-setup_{{ context }}"}

Log in to your cluster as an admin user and configure environment variables to streamline the component route update workflow. {._abstract}

**Prerequisites**

*   You have installed {{ cluster_manager_first }} command-line interface (CLI) (`ocm`) version 1.0.5 or higher.
*   You have installed `gcloud` CLI.
*   You have created an {{ product_title }} on {{ GCP }} cluster version 4.14 or higher.
*   You have installed {{ oc_first }}.
*   You have installed `jq` CLI.
*   You have confirmed that you have access to the cluster as a user with the `cluster-admin` role.
*   You have installed OpenSSL (for generating the demonstration SSL/TLS certificates).

**Procedure**

1.  Log in to your cluster using an account with `cluster-admin` privileges.
1.  Configure an environment variable for your cluster name:
    ```terminal
    $ export CLUSTER_NAME=$(oc get infrastructure cluster -o=jsonpath="{.status.infrastructureName}"  | sed 's/-[a-z0-9]\{5\}$//')
    $ export CLUSTER_ID=$(oc get clusterversion version -o jsonpath='{.spec.clusterID}')
    ```

**Verification**

*   Ensure the environment variable is set correctly:
    ```terminal
    $ echo "Cluster Name: ${CLUSTER_NAME}"
    $ echo "Cluster ID: ${CLUSTER_ID}"
    ```
    ```text title="Example output"
    Cluster Name: my-osd-cluster
    Cluster ID: 12a3b456-78cd-90ef-1234-56789abcdef0
    ```