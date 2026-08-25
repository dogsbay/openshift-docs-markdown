{% if context == "updating-cluster-rhel-compute" %}
{%- set rhel = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating a cluster by using the web console {id="update-upgrading-web_{{ context }}"}

If updates are available, you can update your cluster from the web console. {._abstract}

You can find information about available {{ product_title }} advisories and updates
[in the errata section](https://access.redhat.com/downloads/content/290) of the Customer Portal.

**Prerequisites**

*   Have access to the web console as a user with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.
*   Pause all `MachineHealthCheck` resources.
*   You have updated all Operators previously installed through Operator Lifecycle Manager (OLM) to a version that is compatible with your target release. Updating the Operators ensures they have a valid update path when the default software catalogs switch from the current minor version to the next during a cluster update. See "Updating installed Operators" in the "Additional resources" section for more information on how to check compatibility and, if necessary, update the installed Operators.
*   Your machine config pools (MCPs) are running and not paused. Nodes associated with a paused MCP are skipped during the update process. You can pause the MCPs if you are performing a canary rollout update strategy.
*   Your {{ op_system_base }}7 workers are replaced with {{ op_system_base }}8 or {{ op_system }} workers. Red&#160;Hat does not support in-place {{ op_system_base }}7 to {{ op_system_base }}8 updates for {{ op_system_base }} workers; those hosts must be replaced with a clean operating system install.

**Procedure**

1.  From the web console, click **Administration** → **Cluster Settings** and review the contents of the **Details** tab.

{% if not openshift_origin %}
1.  For production clusters, ensure that the **Channel** is set to the correct channel for the version that you want to update to, such as `stable-{{ product_version }}`{minja}.

    :::important

    For production clusters, you must subscribe to a `stable-\*`, `eus-*` or `fast-*` channel.
    
    :::

{% endif %}
{% if openshift_origin %}
1.  For production clusters, ensure that the **Channel** is set to `stable-4`.
{% endif %}

    :::note

    When you are ready to move to the next minor version, choose the channel that corresponds to that minor version.
    The sooner you declare the update channel, the more effectively the cluster can recommend update paths to your target version.
    The cluster might take some time to evaluate all the possible updates that are available and offer the best update recommendations to choose from.
    Update recommendations can change over time, as they are based on what update options are available at the time.

    If you cannot see an update path to your target minor version, keep updating your cluster to the latest patch release for your current version until the next minor version is available in the path.
    
    :::


    If the **Update status** is not **Updates available**, you cannot update your cluster.

    **Select channel** indicates the cluster version that your cluster is running or is updating to.
1.  Select a version to update to, and click **Save**.

    The Input channel
    **Update status** changes to **Update to &lt;product-version> in progress**, and you can review the progress of the cluster update by watching the progress bars for the Operators and nodes.

    :::note

    If you are updating your cluster to the next minor version, for example from version 4.10 to 4.11, confirm that your nodes are updated before deploying workloads that rely on a new feature. Any pools with worker nodes that are not yet updated are displayed on the **Cluster Settings** page.
    
    :::

1.  After the update completes and the Cluster Version Operator refreshes the available updates, check if more updates are available in your current channel.
    *   If updates are available, continue to perform updates in the current channel until you can no longer update.
{%- if not openshift_origin %}
    *   If no updates are available, change the **Channel** to the `stable-\*`, `eus-*` or `fast-*` channel for the next minor version, and update to the version that you want in that channel.
{%- endif %}
{%- if openshift_origin %}
    *   If no updates are available, change the **Channel** to the `stable-*` channel for the next minor version, and update to the version that you want in that channel.
{%- endif %}

    You might need to perform several intermediate updates until you reach the version that you want.
{%- if rhel %}

    :::important

    When you update a cluster that contains {{ op_system_base_full }} worker machines, those workers temporarily become unavailable during the update process. You must run the update playbook against each {{ op_system_base }} machine as it enters the `NotReady` state for the cluster to finish updating.
    
    :::


{% endif %}