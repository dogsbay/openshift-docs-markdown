{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually gathering logs without SSH access to your host(s) {id="installation-manually-gathering-logs-without-SSH_{{ context }}"}

Manually gather logs in situations where `must-gather` or automated collection methods do not work. {._abstract}

If you do not have SSH access to your node, you can access the systems journal to investigate what is happening on your host.

**Prerequisites**

*   Your {{ product_title }} installation must be complete.
*   Your API service is still functional.
*   You have system administrator privileges.

**Procedure**

1.  Access `journald` unit logs under `/var/log` by running:
    ```terminal
    $ oc adm node-logs --role=master -u kubelet
    ```
1.  Access host file paths under `/var/log` by running:
    ```terminal
    $ oc adm node-logs --role=master --path=openshift-apiserver
    ```