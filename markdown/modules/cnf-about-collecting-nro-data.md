{%- set _mod_docs_content_type = "PROCEDURE" %}
# Collecting NUMA Resources Operator data {id="cnf-about-collecting-nro-data_{{ context }}"}

You can use the `oc adm must-gather` CLI command to collect information about your cluster, including features and objects associated with the NUMA Resources Operator. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.

**Procedure**

*   To collect NUMA Resources Operator data with `must-gather`, you must specify the NUMA Resources Operator `must-gather` image.
    ```terminal
    $ oc adm must-gather --image=registry.redhat.io/openshift4/numaresources-must-gather-rhel9:v{{ product_version }}
    ```