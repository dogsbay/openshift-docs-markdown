{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering data for a hosted cluster by using the CLI {id="hcp-must-gather-cli_{{ context }}"}

You can gather {{ product_title }} debugging information for a hosted cluster by using the command-line interface (CLI). {._abstract}

**Prerequisites**

*   You must have `cluster-admin` access to the management cluster.
*   You need the `name` value for the `HostedCluster` resource and the namespace where the CR is deployed.
*   You must have the `hcp` command-line interface installed. For more information, see "Installing the {{ hcp }} command-line interface".
*   You must have the OpenShift CLI (`oc`) installed.
*   You must ensure that the `kubeconfig` file is loaded and is pointing to the management cluster.

**Procedure**

1.  Generate the `kubeconfig` file by entering the following command:
    ```terminal
    $ hcp create kubeconfig --namespace <hosted_cluster_namespace> \
      --name <hosted_cluster_name> > <hosted_cluster_name>.kubeconfig
    ```
1.  After you save the `kubeconfig` file, you can access the hosted cluster by entering the following example command:
    ```terminal
    $ oc --kubeconfig <hosted_cluster_name>.kubeconfig get nodes
    ```
1.  Collect the must-gather information by entering the following command:
    ```terminal
    $ oc adm must-gather
    ```