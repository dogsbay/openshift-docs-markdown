{%- set _mod_docs_content_type = "PROCEDURE" %}

# Reviewing the installation {id="ipi-install-troubleshooting-reviewing-the-installation_{{ context }}"}

After installation, ensure the installation program deployed the nodes and pods successfully. {._abstract}

**Procedure**

1.  When the {{ product_title }} cluster nodes are installed appropriately, ensure the following `Ready` state within the `STATUS` column by running the following command:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                   STATUS   ROLES           AGE  VERSION
    master-0.example.com   Ready    master,worker   4h   v1.35.4
    master-1.example.com   Ready    master,worker   4h   v1.35.4
    master-2.example.com   Ready    master,worker   4h   v1.35.4
    ```
1.  Confirm the installation program deployed all pods successfully. Remove any pods that are still running or have completed as part of the output by running the following command:
    ```terminal
    $ oc get pods --all-namespaces | grep -iv running | grep -iv complete
    ```