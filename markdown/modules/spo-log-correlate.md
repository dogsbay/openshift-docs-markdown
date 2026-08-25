{%- set _mod_docs_content_type = "PROCEDURE" %}
# Correlate with Kubernetes audit logs {id="spo-log-correlate_{{ context }}"}

Use the `requestUID` from the Security Profiles Operator (SPO) log to find the corresponding API server log entry, confirming who initiated the session. {._abstract}

**Procedure**

1.  Start the pod by running the following command:
    ```terminal
    $ oc exec my-pod -c nginx -- sh -c "touch /tmp/testfile.txt"
    ```
1.  Identify the node where the pod is running:
    ```terminal
    $ NODE=$(oc get pod my-pod -o jsonpath='{.spec.nodeName}')
    ```
1.  Access the node and check the JSON enriched audit log using the following commands:
    ```terminal
    # oc debug node/$NODE
    # chroot /host
    # grep "testfile" /tmp/logs/audit1.log | jq .
    ```