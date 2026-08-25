{%- set _mod_docs_content_type = "PROCEDURE" %}
# Interacting with your cluster resources {id="support-cluster-resources_{{ context }}"}

To view and edit the global configuration of your {{ product_title }} cluster, use the {{ oc_first }} to query and change cluster resources. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   You have access to the web console or you have installed the `oc` CLI tool.

**Procedure**

1.  To check which configuration Operators apply to your cluster, run the following command:
    ```terminal
    $ oc api-resources -o name | grep config.openshift.io
    ```
1.  To see what cluster resources you can configure, run the following command:
    ```terminal
    $ oc explain <resource_name>.config.openshift.io
    ```
1.  To see the configuration of custom resource definition (CRD) objects in the cluster, run the following command:
    ```terminal
    $ oc get <resource_name>.config -o yaml
    ```
1.  To edit the cluster resource configuration, run the following command:
    ```terminal
    $ oc edit <resource_name>.config -o yaml
    ```