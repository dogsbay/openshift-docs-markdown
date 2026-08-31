{%- set _mod_docs_content_type = "PROCEDURE" %}
# Determining how to replace a healthy etcd member {id="determining-replace-healthy-etcd-member_{{ context }}"}

To choose the correct procedure for replacing a healthy etcd member, check whether your cluster uses the {{ ai_full }}, a control plane machine set, or the Machine API. Use the {{ oc_first }} to identify your cluster configuration and follow the matching replacement procedure. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You logged in to `oc` as a user with the `cluster-admin` role.

**Procedure**

1.  Check whether the cluster was installed by using the {{ ai_full }} by running the following command:
    ```terminal
    $ oc get agentclusterinstall -A
    ```
    *   If the command returns one or more `AgentClusterInstall` resources, follow the procedure in "Replacing a control plane node in a healthy cluster" in the {{ ai_full }} documentation.
    *   If the command returns no resources, continue with the following steps.
1.  Check whether the cluster has a control plane machine set by running the following command:
    ```terminal
    $ oc -n openshift-machine-api get controlplanemachineset
    ```
    *   If the command returns a `ControlPlaneMachineSet` resource, follow the procedure in "Replacing a healthy etcd member with a control plane machine set".
    *   If the command returns no resources, continue to the next step.
1.  Check whether the cluster has control plane `Machine` objects by running the following command:
    ```terminal
    $ oc get machines -l machine.openshift.io/cluster-api-machine-role=master -n openshift-machine-api
    ```
    *   If `Machine` objects exist, follow the procedure in "Replacing a healthy etcd member with the Machine API".
    *   If there are no `Machine` objects, follow the procedure in "Replacing a healthy etcd member by scaling up and scaling down".