{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure machine pools after cluster installation {id="rosa-nodes-machinepools-configuring-after-install_{{ context }}"}

After a cluster is installed, you can configure machine pools by adding labels, taints, and additional machine pools. {._abstract}

After a cluster’s installation, you can:

*   Remove or add labels to any machine pool.
*   Add additional machine pools to an existing cluster.
*   Add taints to any machine pool if there is one machine pool without any taints.
{%- if not openshift_rosa_hcp %}
*   Create or delete a machine pool if there is one machine pool without any taints and at least two replicas for a Single-AZ cluster or three replicas for a Multi-AZ cluster.

    :::note

    You cannot change the machine pool node type or size. The machine pool node type or size is specified during their creation only. If you need a different node type or size, you must re-create a machine pool and specify the required node type or size values.
    
    :::

{%- endif %}
{%- if openshift_rosa_hcp %}
*   Create or delete a machine pool if there is one machine pool without any taints and at least two replicas.

    :::note

    You cannot change the machine pool node type or size. The machine pool node type or size is specified during their creation only. If you need a different node type or size, you must re-create a machine pool and specify the required node type or size values.
    
    :::

{%- endif %}
*   You can add a label to each added machine pool.

{% if openshift_rosa or openshift_rosa_hcp %}
{% include "./snippets/rosa-node-lifecycle.md" %}
{% endif %}

**Procedure**

*   **Optional:** Add a label to the default machine pool after configuration by using the default machine pool labels and running the following command:
    ```terminal
    $ rosa edit machinepool -c <cluster_name> <machinepool_name> -i
    ```
    ```terminal title="Example input"
    $ rosa edit machinepool -c mycluster worker -i
    ```
    ```terminal title="Example output"
    ? Enable autoscaling: No
    ? Replicas: 3
    ? Labels: mylabel=true
    I: Updated machine pool 'worker' on cluster 'mycluster'
    ```