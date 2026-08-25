{% if context == "aws-compute-edge-tasks-local-zone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "aws-compute-edge-tasks-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = true -%}
{% endif %}
{% if context == "installing-aws-outposts" %}
{%- set outposts = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Finalizing the MTU migration {id="nw-cluster-mtu-finalizing-migration_{{ context }}"}

Finalize the MTU migration to apply the new maximum transmission unit (MTU) settings to the OVN-Kubernetes network plugin. This updates the cluster configuration and triggers a rolling reboot of the nodes to complete the process. {._abstract}

**Procedure**

1.  To finalize the MTU migration, enter the following command for the OVN-Kubernetes network plugin:
    ```terminal
    $ oc patch Network.operator.openshift.io cluster --type=merge --patch \
      '{"spec": { "migration": null, "defaultNetwork":{ "ovnKubernetesConfig": { "mtu": <mtu> }}}}'
    ```
    where:


    `<mtu>`
    :   Specifies the new cluster network MTU that you specified with `<overlay_to>`.
1.  After finalizing the MTU migration, each machine config pool node is rebooted one by one. You must wait until all the nodes are updated. Check the machine config pool status by entering the following command:
    ```terminal
    $ oc get machineconfigpools
    ```

    A successfully updated node has the following status: `UPDATED=true`, `UPDATING=false`, `DEGRADED=false`.

**Verification**

{% if local_zone or wavelength_zone or post_aws_zones or outposts %}
*   Verify that the node in your cluster uses the MTU that you specified by entering the following command:
    ```terminal
    $ oc describe network.config cluster
    ```
{% endif %}

{% if not (local_zone or wavelength_zone or post_aws_zones or outposts) %}
1.  To get the current MTU for the cluster network, enter the following command:
    ```terminal
    $ oc describe network.config cluster
    ```
1.  Get the current MTU for the primary network interface of a node:
    1.  To list the nodes in your cluster, enter the following command:
        ```terminal
        $ oc get nodes
        ```
    1.  To obtain the current MTU setting for the primary network interface on a node, enter the following command:
        ```terminal
        $ oc adm node-logs <node> -u ovs-configuration | grep configure-ovs.sh | grep mtu | grep <interface> | head -1
        ```

        where:

        `<node>`
        :   Specifies a node from the output from the previous step.

        `<interface>`
        :   Specifies the primary network interface name for the node.
        ```text title="Example output"
        ens3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 8051
        ```
{% endif %}

{% if context == "aws-compute-edge-tasks-local-zone" %}
{%- set local_zone = "" -%}
{% endif %}
{% if context == "aws-compute-edge-tasks-wavelength-zone" %}
{%- set wavelength_zone = "" -%}
{% endif %}
{% if context == "aws-compute-edge-zone-tasks" %}
{%- set post_aws_zones = "" -%}
{% endif %}
{% if context == "installing-aws-outposts" %}
{%- set outposts = "" -%}
{% endif %}