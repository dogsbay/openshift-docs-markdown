{%- set _mod_docs_content_type = "PROCEDURE" %}
# Remove a pod from a secondary network {id="nw-multus-remove-pod_{{ context }}"}

To disconnect a pod from specific network configurations in {{ product_title }}, you can remove the pod from a secondary network. Delete the pod using the `oc delete pod` command to remove its connection to the secondary network. {._abstract}

**Prerequisites**

*   A secondary network is attached to the pod.
*   Install the OpenShift CLI (`oc`).
*   Log in to the cluster.

**Procedure**

*   Delete the pod by entering the following command:
    ```terminal
    $ oc delete pod <name> -n <namespace>
    ```
    where:


    `<name>`
    :   Specifies the name of the pod.

    `<namespace>`
    :   Specifies the namespace that contains the pod.