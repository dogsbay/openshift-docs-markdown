{%- set _mod_docs_content_type = "PROCEDURE" %}
# Identifying an unhealthy etcd member {id="restore-identify-unhealthy-etcd-member_{{ context }}"}

Identify an unhealthy etcd member by checking the `EtcdMembersAvailable` status condition so you can proceed with the correct replacement procedure. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have taken an etcd backup. For more information, see "Backing up etcd data".

**Procedure**

1.  Check the status of the `EtcdMembersAvailable` status condition using the following command:
    ```terminal
    $ oc get etcd -o=jsonpath='{range .items[0].status.conditions[?(@.type=="EtcdMembersAvailable")]}{.message}{"\n"}{end}'
    ```
1.  Review the output:
    ```terminal
    2 of 3 members are available, ip-10-0-131-183.ec2.internal is unhealthy
    ```

    This example output shows that the `ip-10-0-131-183.ec2.internal` etcd member is unhealthy.