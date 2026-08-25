{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating additional ports for node pools {id="hosted-clusters-openstack-addl-ports_{{ context }}"}

You can configure additional ports for node pools for hosted clusters that run on {{ rh_openstack_first }}. {._abstract}

**Prerequisites**

*   You created a hosted cluster.
*   You have access to the management cluster.
*   The `hcp` CLI is installed.
*   Additional networks are created in {{ rh_openstack }}.
*   The project that is used by the hosted cluster must have access to the additional networks.
*   You reviewed the options that are listed in "Options for additional ports for node pools".

**Procedure**

*   Create a hosted cluster with additional ports attached to it by running the `hcp create nodepool openstack` command with the `--openstack-node-additional-port` options. For example:
    ```terminal
    $ hcp create nodepool openstack \
      --cluster-name <cluster_name> \
      --name <nodepool_name> \
      --replicas <replica_count> \
      --openstack-node-flavor <flavor> \
      --openstack-node-additional-port "network-id=<sriov_net_id>,vnic-type=direct,disable-port-security=true" \
      --openstack-node-additional-port "network-id=<lb_net_id>,address-pairs:192.168.0.1-192.168.0.2"
    ```
    where:


    `<cluster_name>`
    :   Specifies the name of the hosted cluster.

    `<nodepool_name>`
    :   Specifies the name of the node pool.

    `<replica_count>`
    :   Specifies the number of replicas that you need.

    `<flavor>`
    :   Specifies the {{ rh_openstack }} flavor to use.

    `<sriov_net_id>`
    :   Specifies a SR-IOV network ID.

    `<lb_net_id>`
    :   Specifies a load balancer network ID.