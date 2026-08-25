{%- set _mod_docs_content_type = "PROCEDURE" %}
# Destroying a hosted cluster on {{ VirtProductName }} by using the CLI {id="destroy-hc-virt-cli_{{ context }}"}

You can use the command-line interface (CLI) to destroy a hosted cluster and its managed cluster resource on {{ VirtProductName }}. {._abstract}

**Procedure**

1.  Delete the managed cluster resource on {{ mce_short }} by running the following command:
    ```terminal
    $ oc delete managedcluster <hosted_cluster_name>
    ```
1.  Delete the hosted cluster and its backend resources by running the following command:
    ```terminal
    $ hcp destroy cluster kubevirt --name <hosted_cluster_name>
    ```