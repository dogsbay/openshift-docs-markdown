{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering data for a hosted cluster by using the web console {id="hcp-must-gather-console_{{ context }}"}

You can gather {{ product_title }} debugging information for a hosted cluster by using the {{ mce_short }} web console. {._abstract}

**Prerequisites**

*   You must have `cluster-admin` access to the management cluster.
*   You need the `name` value for the `HostedCluster` resource and the namespace where the CR is deployed.
*   You must have the `hcp` command-line interface installed. For more information, see "Installing the {{ hcp }} command-line interface".
*   You must have the OpenShift CLI (`oc`) installed.
*   You must ensure that the `kubeconfig` file is loaded and is pointing to the management cluster.

**Procedure**

1.  In the web console, select **All Clusters** and select the cluster you want to troubleshoot.
1.  In the upper-right corner, select **Download kubeconfig**.
1.  Export the downloaded `kubeconfig` file.
1.  Collect the must-gather information by entering the following command:
    ```terminal
    $ oc adm must-gather
    ```