{%- set _mod_docs_content_type = "PROCEDURE" %}

# Reviewing the installation {id="ipi-install-troubleshooting-reviewing-the-installation_{{ context }}"}

After installation, ensure the installation program deployed the nodes and pods successfully.

**Procedure**

1.  When the {{ product_title }} cluster nodes are installed appropriately, the following `Ready` state is seen within the `STATUS` column:
    ```terminal
    $ oc get nodes
    ```
    ```terminal
    NAME                   STATUS   ROLES           AGE  VERSION
    master-0.example.com   Ready    master,worker   4h   v1.35.4
    master-1.example.com   Ready    master,worker   4h   v1.35.4
    master-2.example.com   Ready    master,worker   4h   v1.35.4
    ```
1.  Confirm the installation program deployed all pods successfully. The following command removes any pods that are still running or have completed as part of the output:
    ```terminal
    $ oc get pods --all-namespaces | grep -iv running | grep -iv complete
    ```