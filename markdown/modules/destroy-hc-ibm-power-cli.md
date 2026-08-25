{%- set _mod_docs_content_type = "PROCEDURE" %}
# Destroying a hosted cluster on {{ ibm_power_title }} by using the CLI {id="destroy-hc-ibm-power-cli_{{ context }}"}

To destroy a hosted cluster on {{ ibm_power_title }}, you can use the hcp command-line interface (CLI). {._abstract}

**Procedure**

*   Delete the hosted cluster by running the following command:
    ```terminal
    $ hcp destroy cluster agent
     --name=<hosted_cluster_name> \
     --namespace=<hosted_cluster_namespace> \
     --cluster-grace-period <duration>
    ```
    *   `<hosted_cluster_name>` specifies the name of your hosted cluster.
    *   `<hosted_cluster_namespace>` specifies the name of your hosted cluster namespace.
    *   `<duration>` specifies the duration to destroy the hosted cluster completely, for example, `20m0s`.