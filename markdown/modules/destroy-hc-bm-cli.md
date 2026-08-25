{%- set _mod_docs_content_type = "PROCEDURE" %}
# Destroying a hosted cluster on bare metal by using the CLI {id="destroy-hc-bm-cli_{{ context }}"}

If you created a hosted cluster by using the command-line interface (CLI), you can destroy that hosted cluster and its back-end resources by running a command. {._abstract}

**Procedure**

*   Delete the hosted cluster and its back-end resources by running the following command:
    ```terminal
    $ oc delete -f <hosted_cluster_config>.yaml
    ```

    Specify the name of the configuration YAML file that was rendered when you created the hosted cluster.

    :::note

    If you created the hosted cluster without specifying the `--render` and `--render-sensitive` flags in its configuration file, you must remove its back-end resources manually.
    
    :::