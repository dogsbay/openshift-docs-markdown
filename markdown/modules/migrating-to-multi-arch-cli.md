{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrating to a cluster with multi-architecture compute machines using the CLI {id="migrating-to-multi-arch-cli_{{ context }}"}

You can use the {{ oc_first }} to migrate to a cluster with multi-architecture compute machines. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   Your {{ product_title }} version is 4.13.0 or later.

    For more information on how to update your cluster version, see "Updating a cluster using the web console" or "Updating a cluster using the CLI".
*   You have installed the {{ oc_first }} that matches the version for your current cluster.
*   Your `oc` client is updated to version 4.13.0 or later.
*   Your {{ product_title }} cluster is installed on AWS, Azure, {{ gcp_short }}, bare metal, or IBM P/Z platforms.

    For more information on selecting a supported platform for your cluster installation, see "Selecting a cluster installation type".

**Procedure**

1.  Verify that the `RetrievedUpdates` condition is `True` in the Cluster Version Operator (CVO) by running the following command:
    ```terminal
    $ oc get clusterversion/version -o=jsonpath="{.status.conditions[?(.type=='RetrievedUpdates')].status}"
    ```

    If the `RetrievedUpates` condition is `False`, you can find supplemental information regarding the failure by using the following command:
    ```terminal
    $ oc adm upgrade
    ```

    For more information about cluster version condition types, see "Understanding cluster version condition types".

{% if not openshift_origin %}
1.  If the condition `RetrievedUpdates` is `False`, change the channel to `stable-<4.y>` or `fast-<4.y>` by running the following command:
    ```terminal
    $ oc adm upgrade channel <channel>
    ```

    After setting the channel, verify if `RetrievedUpdates` is `True`.

    For more information about channels, see "Understanding update channels and releases".
{% endif %}
1.  Migrate to the multi-architecture payload by running the following command:
    ```terminal
    $ oc adm upgrade --to-multi-arch
    ```

**Verification**

*   Monitor the migration by running the following command:
    ```terminal
    $ oc adm upgrade
    ```
    ```terminal title="Example output"
    working towards ${VERSION}: 106 of 841 done (12% complete), waiting on machine-config
    ```

    :::important

    Machine launches may fail as the cluster settles into the new state. To notice and recover when machines fail to launch, it is recommended that you deploy machine health checks. For more information about machine health checks and how to deploy them, see "About machine health checks".
    
    :::

    1.  Optional: Retrieve more detailed information about the status of your update and monitor the migration by running the following command:
        ```terminal
        $ oc adm upgrade status
        ```

        For more information about how to use the `oc adm upgrade status` command, see "Gathering cluster update status using oc adm upgrade status (Technology Preview)".

The migrations must be complete and all the cluster operators must be stable before you can add compute machine sets with different architectures to your cluster.