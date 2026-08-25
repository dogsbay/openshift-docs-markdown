{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtaining information about a failed cluster {id="rosa-troubleshooting-general-deployment-failure_{{ context }}"}

If a cluster deployment fails, the cluster is put into an "error" state. {._abstract}

**Procedure**

*   Run the following command to get more information:
    ```terminal
    $ rosa describe cluster -c <my_cluster_name> --debug
    ```