{%- set _mod_docs_content_type = "PROCEDURE" %}
# Destroying a hosted cluster on non-bare-metal agent machines {id="destroy-hc-non-bm-cli_{{ context }}"}

You can use the `hcp` command-line interface (CLI) to destroy a hosted cluster on non-bare-metal agent machines. {._abstract}

**Procedure**

*   Delete the hosted cluster and its backend resources by running the following command:
    ```terminal
    $ hcp destroy cluster agent --name <hosted_cluster_name>
    ```

    Replace `<hosted_cluster_name>` with the name of your hosted cluster.