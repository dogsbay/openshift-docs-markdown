{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a machine pool using the ROSA CLI {id="deleting-machine-pools-cli_{{ context }}"}

You can delete a machine pool for your {{ product_title }} cluster by using the {{ rosa_cli_first }}.


:::note

For users of `rosa` version 1.2.25 and earlier versions, the machine pool (ID='Default') that is created along with the cluster cannot be deleted. For users of `rosa` version 1.2.26 and later, the machine pool (ID='worker') that is created along with the cluster can be deleted if there is one machine pool within the cluster that contains no taints, and at least two replicas for a Single-AZ cluster or three replicas for a Multi-AZ cluster.

:::


**Prerequisites**

{% if openshift_rosa or openshift_rosa_hcp %}
*   You created a {{ product_title }} cluster.
*   The cluster is in the ready state.
*   You have an existing machine pool without any taints and with at least two instances for a Single-AZ cluster or three instances for a Multi-AZ cluster.
{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   You have created an {{ product_title }} cluster.
{% endif %}

**Procedure**

1.  From the {{ rosa_cli }}, run the following command:
    ```terminal
    $ rosa delete machinepool -c=<cluster_name> <machine_pool_ID>
    ```
    ```terminal title="Example output"
    ? Are you sure you want to delete machine pool <machine_pool_ID> on cluster <cluster_name>? (y/N)
    ```
1.  Enter `y` to delete the machine pool.

    The selected machine pool is deleted.