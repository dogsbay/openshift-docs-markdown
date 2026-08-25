{%- set _mod_docs_content_type = "PROCEDURE" %}
# Control Plane Only update using the CLI {id="updating-control-plane-only-update-cli_{{ context }}"}

You can perform a Control Plane Only update by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You verified that machine config pools are unpaused.
*   You have access to the {{ product_title }} web console as a user with `cluster-admin` privileges.
*   You updated the {{ oc_first }} to the target version before each update.

    :::important

    It is highly discouraged to skip this prerequisite. If the {{ oc_first }} is not updated to the target version before your update, unexpected issues may occur.
    
    :::


**Procedure**

1.  Using the web console, update any Operator Lifecycle Manager (OLM) Operators to the versions that are compatible with your intended updated version. You can find more information on how to perform this action in "Updating installed Operators"; see "Additional resources".
1.  Verify that all machine config pools display a status of `UPDATED` and that no machine config pool displays a status of `UPDATING`.
To view the status of all machine config pools, run the following command:
    ```terminal
    $ oc get mcp
    ```
    ```terminal title="Example output"
    NAME     CONFIG                                         	UPDATED   UPDATING
    master   rendered-master-ecbb9582781c1091e1c9f19d50cf836c       True  	  False
    worker   rendered-worker-00a3f0c68ae94e747193156b491553d5       True  	  False
    ```
1.  Your current version is &lt;4.y>, and your intended version to update is &lt;4.y+2>. Change to the `eus-<4.y+2>` channel by running the following command:
    ```terminal
    $ oc adm upgrade channel eus-<4.y+2>
    ```

    :::note

    If you receive an error message indicating that `eus-<4.y+2>` is not one of the
    available channels, this indicates that Red Hat is still rolling out EUS version updates.
    This rollout process generally takes 45-90 days starting at the GA date.
    
    :::

1.  Pause all worker machine pools except for the master pool by running the following command:
    ```terminal
    $ oc patch mcp/worker --type merge --patch '{"spec":{"paused":true}}'
    ```

    :::note

    You cannot pause the master pool.
    
    :::

1.  Update to the latest version by running the following command:
    ```terminal
    $ oc adm upgrade --to-latest
    ```
    ```terminal title="Example output"
    Updating to latest version <4.y+1.z>
    ```
1.  Review the cluster version to ensure that the updates are complete by running the following command:
    ```terminal
    $ oc adm upgrade
    ```
    ```terminal title="Example output"
    Cluster version is <4.y+1.z>
    ...
    ```
1.  Update to version &lt;4.y+2> by running the following command:
    ```terminal
    $ oc adm upgrade --to-latest
    ```
1.  Retrieve the cluster version to ensure that the &lt;4.y+2> updates are complete by running the following command:
    ```terminal
    $ oc adm upgrade
    ```
    ```terminal title="Example output"
    Cluster version is <4.y+2.z>
    ...
    ```
1.  To update your worker nodes to &lt;4.y+2>, unpause all previously paused machine config pools by running the following command:
    ```terminal
    $ oc patch mcp/worker --type merge --patch '{"spec":{"paused":false}}'
    ```

    :::important

    If pools are not unpaused, the cluster is not permitted to update to any future minor versions, and some maintenance tasks are inhibited. This puts the cluster at risk for future degradation.
    
    :::

1.  Verify that your previously paused pools are updated and that the update to version &lt;4.y+2> is complete by running the following command:
    ```terminal
    $ oc get mcp
    ```

    :::important

    When you update a cluster that contains {{ op_system_base_full }} compute machines, those machines temporarily become unavailable during the update process. You must run the upgrade playbook against each {{ op_system_base }} machine as it enters the `NotReady` state for the cluster to finish updating. For more information, see "Updating a cluster that includes RHEL compute machines" in the additional resources section.
    
    :::

    ```terminal title="Example output"
    NAME 	   CONFIG                                            UPDATED     UPDATING
    master   rendered-master-52da4d2760807cb2b96a3402179a9a4c    True  	 False
    worker   rendered-worker-4756f60eccae96fb9dcb4c392c69d497    True 	 False
    ```