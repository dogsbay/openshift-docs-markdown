{%- set _mod_docs_content_type = "PROCEDURE" %}
# Listing pods on a node in your cluster {id="nodes-nodes-viewing-listing-pods_{{ context }}"}

You can list all of the pods on a node by using the `oc get pods` command along with specific flags. This command shows the number of pods on that node, the state of the pods, number of pod restarts, and the age of the pods. {._abstract}

**Procedure**

*   To list all or selected pods on selected nodes:
    ```terminal
    $ oc get pod --selector=<nodeSelector>
    ```
    ```terminal
    $ oc get pod --selector=kubernetes.io/os
    ```

    Or:
    ```terminal
    $ oc get pod -l=<nodeSelector>
    ```
    ```terminal
    $ oc get pod -l kubernetes.io/os=linux
    ```
*   To list all pods on a specific node, including terminated pods:
    ```terminal
    $ oc get pod --all-namespaces --field-selector=spec.nodeName=<nodename>
    ```