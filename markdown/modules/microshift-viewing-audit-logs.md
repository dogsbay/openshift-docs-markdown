{%- set _mod_docs_content_type = "PROCEDURE" %}
# Identify pod security violations through audit logs {id="microshift-security-context-constraints-alert-eval_{{ context }}"}

You can identify pod security admission violations in a workload by viewing the server audit logs. To do this, you must access and parse audit logs to find these violations. {._abstract}

**Prerequisites**

*   You have installed the `jq` utility.
*   You have root access to the node.

**Procedure**

1.  Retrieve the node name by running the following command:
    ```terminal
    $ NODE_NAME=$(oc get node -ojsonpath='{.items[0].metadata.name}')
    ```
1.  View the available audit logs by running the following command:
    ```terminal
    $ oc adm node-logs ${NODE_NAME} --path=kube-apiserver/
    ```
    ```terminal title="Example output"
    rhel-94.lab.local audit-2024-10-18T18-25-41.663.log
    rhel-94.lab.local audit-2024-10-19T11-21-29.225.log
    rhel-94.lab.local audit-2024-10-20T04-16-09.622.log
    rhel-94.lab.local audit-2024-10-20T21-11-41.163.log
    rhel-94.lab.local audit-2024-10-21T14-06-10.402.log
    rhel-94.lab.local audit-2024-10-22T06-35-10.392.log
    rhel-94.lab.local audit-2024-10-22T23-26-27.667.log
    rhel-94.lab.local audit-2024-10-23T16-52-15.456.log
    rhel-94.lab.local audit-2024-10-24T07-31-55.238.log
    ```
1.  Parse the audit logs to find pod security violations by running the following command:
    ```terminal
    $ oc adm node-logs ${NODE_NAME} --path=kube-apiserver/audit.log \
      | jq -r 'select((.annotations["pod-security.kubernetes.io/audit-violations"] != null) and (.objectRef.resource=="pods")) | .objectRef.namespace + " " + .objectRef.name + " " + .objectRef.resource' \
      | sort | uniq -c
    ```