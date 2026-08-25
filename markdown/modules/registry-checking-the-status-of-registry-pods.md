{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking the status of the registry pods {id="checking-the-status-of-registry-pods_{{ context }}"}

[role="_abstract"] 
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
As a cluster administrator,
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
As an administrator with the `dedicated-admin` role,
{%- endif %}
you can list the image registry pods running in the `openshift-image-registry` project and check their status.

**Prerequisites**

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You have access to the cluster as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   You have access to the cluster as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

*   List the pods in the `openshift-image-registry` project and view their status. Example output provided for demonstrative purposes.
    ```terminal
    $ oc get pods -n openshift-image-registry
    ```
    ```terminal
    NAME READY STATUS RESTARTS AGE
    image-registry-79fb4469f6-llrln 1/1 Running 0 77m
    node-ca-hjksc 1/1 Running 0 73m
    node-ca-tftj6 1/1 Running 0 77m
    node-ca-wb6ht 1/1 Running 0 77m
    node-ca-zvt9q 1/1 Running 0 74m
    ```