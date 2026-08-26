{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding taints to a machine pool using the {{ rosa_cli }} {id="rosa-adding-taints-cli_{{ context }}"}

You can add taints to a machine pool for your {{ product_title }} cluster by using the {{ rosa_cli_first }}. {._abstract}


:::note

For users of `rosa` version 1.2.25 and prior versions, the number of taints cannot be changed within the machine pool (ID=`Default`) created along with the cluster. For users of `rosa` version 1.2.26 and beyond, the number of taints can be changed within the machine pool (ID=`worker`) created along with the cluster.
{%- if not openshift_rosa_hcp %}
There must be at least one machine pool without any taints and with at least two replicas for a Single-AZ cluster or three replicas for a Multi-AZ cluster.
{%- endif %}
{%- if openshift_rosa_hcp %}
There must be at least one machine pool without any taints and with at least two replicas.
{%- endif %}

:::


**Prerequisites**

{% if openshift_rosa or openshift_rosa_hcp %}
*   You installed and configured the latest AWS (`aws`), ROSA (`rosa`), and OpenShift (`oc`) CLIs on your workstation.
*   You logged in to your Red&#160;Hat account by using the `rosa` CLI.
*   You created a {{ product_title }} cluster.
{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}
*   You created an {{ product_title }} cluster.
{%- endif %}
*   You have an existing machine pool that does not contain any taints and contains at least two instances.

**Procedure**

{% if openshift_rosa or openshift_rosa_hcp %}
1.  List the machine pools in the cluster by running the following command:
    ```terminal
    $ rosa list machinepools --cluster=<cluster_name>
    ```

    **Example output**

{%- if not (openshift_rosa or openshift_rosa_hcp) %}
    ```terminal
    ID           AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS    TAINTS    AVAILABILITY ZONES    SPOT INSTANCES     DISK SIZE   SG IDs
    Default      No           2         m7i.xlarge                          us-east-1a            N/A                300 GiB     sg-0e375ff0ec4a6cfa2
    db-nodes-mp  No           2         m7i.xlarge                          us-east-1a            No                 300 GiB     sg-0e375ff0ec4a6cfa2
    ```
{%- endif %}
{%- if openshift_rosa_hcp %}
    ```terminal
    ID           AUTOSCALING  REPLICAS  INSTANCE TYPE  LABELS    TAINTS    AVAILABILITY ZONE  SUBNET                    VERSION  AUTOREPAIR
    workers      No           2/2       m7i.xlarge                          us-east-2a         subnet-0df2ec3377847164f  4.16.6   Yes
    db-nodes-mp  No           2/2       m7i.xlarge                          us-east-2a         subnet-0df2ec3377847164f  4.16.6   Yes
    ```
{%- endif %}
1.  Add or update the taints for a machine pool:
    *   To add or update taints for a machine pool that does not use autoscaling, run the following command:
        ```terminal
        $ rosa edit machinepool --cluster=<cluster_name> \
                                --taints=<key>=<value>:<effect>,<key>=<value>:<effect> \
                                <machine_pool_id>
        ```

        where:

        `<key>=<value>:<effect>,<key>=<value>:<effect>`
        :   Specifies a key, value, and effect for each taint, for example `--taints=key1=value1:NoSchedule,key2=value2:NoExecute`. Available effects include `NoSchedule`, `PreferNoSchedule`, and `NoExecute`. This list overwrites any modifications made to node taints on an ongoing basis.
        The following example adds taints to the `db-nodes-mp` machine pool:
        ```terminal
        $ rosa edit machinepool --cluster=mycluster --replicas 2 --taints=key1=value1:NoSchedule,key2=value2:NoExecute db-nodes-mp
        ```
        ```terminal title="Example output"
        I: Updated machine pool 'db-nodes-mp' on cluster 'mycluster'
        ```

**Verification**

1.  Describe the details of the machine pool with the new taints:
    ```terminal
    $ rosa describe machinepool --cluster=<cluster_name> --machinepool=<machinepool_name>
    ```

    **Example output**

{%- if not openshift_rosa_hcp %}
    ```terminal
    ID:                         db-nodes-mp
    Cluster ID:                 <ID_of_cluster>
    Autoscaling:                No
    Replicas:                   2
    Instance type:              m7i.xlarge
    Labels:
    Taints:                     key1=value1:NoSchedule, key2=value2:NoExecute
    Availability zones:         us-east-1a
    Subnets:
    Spot instances:             No
    Disk size:                  300 GiB
    Security Group IDs:
    ```
{%- endif %}
{%- if openshift_rosa_hcp %}
    ```terminal
    ID:                            db-nodes-mp
    Cluster ID:                    <ID_of_cluster>
    Autoscaling:                   No
    Desired replicas:              2
    Current replicas:              2
    Instance type:                 m7i.xlarge
    Labels:
    Tags:
    Taints:                        key1=value1:NoSchedule, key2=value2:NoExecute
    Availability zone:             us-east-2a
    ...
    ```
{%- endif %}
1.  Verify that the taints are included for your machine pool in the output.
{% endif %}