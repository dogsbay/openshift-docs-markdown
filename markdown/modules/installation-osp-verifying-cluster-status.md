{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying cluster status {id="installation-osp-verifying-cluster-status_{{ context }}"}

You can verify your {{ product_title }} cluster’s status during or after installation. {._abstract}

**Procedure**

1.  In the cluster environment, export the administrator’s kubeconfig file by entering the following command:
    ```terminal
    $ export KUBECONFIG=<installation_directory>/auth/kubeconfig
    ```
    *   For `<installation_directory>`, specify the path to the directory that you stored the installation files in.

        The `kubeconfig` file contains information about the cluster that is used by the CLI to connect a client to the correct cluster and API server.
1.  View the control plane and compute machines created after a deployment by entering the following command:
    ```terminal
    $ oc get nodes
    ```
1.  View the version of your cluster by entering the following command:
    ```terminal
    $ oc get clusterversion
    ```
1.  View the status of the cluster Operators by entering the following command:
    ```terminal
    $ oc get clusteroperator
    ```
1.  View all running pods in the cluster by entering the following command:
    ```terminal
    $ oc get pods -A
    ```