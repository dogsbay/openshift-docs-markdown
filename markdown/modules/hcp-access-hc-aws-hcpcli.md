{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing a hosted cluster on {{ aws_short }} by using the hcp CLI {id="hcp-access-hc-aws-hcpcli_{{ context }}"}

You can access the hosted cluster by using the `hcp` command-line interface (CLI) to generate the `kubeconfig` file.

**Procedure**

1.  Generate the `kubeconfig` file by entering the following command:
    ```terminal
    $ hcp create kubeconfig --namespace <hosted_cluster_namespace> \
      --name <hosted_cluster_name> > <hosted_cluster_name>.kubeconfig
    ```
1.  After you save the `kubeconfig` file, you can access the hosted cluster by entering the following command:
    ```terminal
    $ oc --kubeconfig <hosted_cluster_name>.kubeconfig get nodes
    ```