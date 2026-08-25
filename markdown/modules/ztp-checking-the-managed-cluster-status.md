{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring the managed cluster installation status {id="ztp-checking-the-managed-cluster-status_{{ context }}"}

Ensure that cluster provisioning was successful by checking the cluster status. {._abstract}

**Prerequisites**

*   All of the custom resources have been configured and provisioned, and the `Agent`
custom resource is created on the hub for the managed cluster.

**Procedure**

1.  Check the status of the managed cluster:
    ```terminal
    $ oc get managedcluster
    ```

    `True` indicates the managed cluster is ready.
1.  Check the agent status:
    ```terminal
    $ oc get agent -n <cluster_name>
    ```
1.  Use the `describe` command to provide an in-depth description of the agent’s condition. Statuses to be aware of include `BackendError`, `InputError`, `ValidationsFailing`, `InstallationFailed`, and `AgentIsConnected`. These statuses are relevant to the `Agent` and `AgentClusterInstall` custom resources.
    ```terminal
    $ oc describe agent -n <cluster_name>
    ```
1.  Check the cluster provisioning status:
    ```terminal
    $ oc get agentclusterinstall -n <cluster_name>
    ```
1.  Use the `describe` command to provide an in-depth description of the cluster provisioning status:
    ```terminal
    $ oc describe agentclusterinstall -n <cluster_name>
    ```
1.  Check the status of the managed cluster’s add-on services:
    ```terminal
    $ oc get managedclusteraddon -n <cluster_name>
    ```
1.  Retrieve the authentication information of the `kubeconfig` file for the managed cluster:
    ```terminal
    $ oc get secret -n <cluster_name> <cluster_name>-admin-kubeconfig -o jsonpath={.data.kubeconfig} | base64 -d > <directory>/<cluster_name>-kubeconfig
    ```