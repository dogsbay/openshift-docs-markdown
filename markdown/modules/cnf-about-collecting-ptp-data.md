{%- set _mod_docs_content_type = "PROCEDURE" %}
# Collecting PTP Operator data {id="cnf-about-collecting-nro-data_{{ context }}"}

You can use the `oc adm must-gather` command to collect information about your cluster, including features and objects associated with PTP Operator.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the {{ oc_first }}.
*   You have installed the PTP Operator.

**Procedure**

*   To collect PTP Operator data with `must-gather`, you must specify the PTP Operator `must-gather` image.
    ```terminal {minja}
    $ oc adm must-gather --image=registry.redhat.io/openshift4/ptp-must-gather-rhel9:v{{ product_version }}
    ```