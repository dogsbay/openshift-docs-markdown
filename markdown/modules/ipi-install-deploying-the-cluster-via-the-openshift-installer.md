{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the cluster via the {{ product_title }} installer {id="deploying-the-cluster-via-the-openshift-installer_{{ context }}"}

You can deploy the cluster by running the {{ product_title }} installer. {._abstract}

**Procedure**

*   Run the {{ product_title }} installer:
    ```terminal
    $ ./openshift-baremetal-install --dir ~/clusterconfigs --log-level debug create cluster
    ```