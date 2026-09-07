{%- set _mod_docs_content_type = "PROCEDURE" %}
# Identifying an unhealthy etcd member {id="restore-identify-unhealthy-etcd-member_{{ context }}"}

You can identify an unhealthy etcd member by checking the `EtcdMembersAvailable` status condition to see how many members are available and which member is unhealthy. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You created an etcd backup.

**Procedure**

*   Check the status of the `EtcdMembersAvailable` status condition by running the following command:
    ```terminal
    $ oc get etcd -o=jsonpath='{range .items[0].status.conditions[?(@.type=="EtcdMembersAvailable")]}{.message}{"\n"}{end}'
    ```
    ```terminal title="Example output"
    2 of 3 members are available, ip-10-0-131-183.ec2.internal is unhealthy
    ```