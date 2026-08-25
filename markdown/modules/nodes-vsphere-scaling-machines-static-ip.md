{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling machines to use static IP addresses {id="nodes-vsphere-scaling-machines-static-ip_{{ context }}"}

You can add machines with predefined static IP addresses by creating machine resources that specify static network configuration in the machine YAML file. {._abstract}

You can scale additional machine sets to use predefined static IP addresses on your cluster. For this configuration, you need to create a machine resource YAML file and then define static IP addresses in this file.

**Prerequisites**

*   You deployed a cluster that runs at least one node with a configured static IP address.

**Procedure**

1.  Create a machine resource YAML file and define static IP address network information in the `network` parameter.

    Example of a machine resource YAML file with static IP address information defined in the `network` parameter:
    ```yaml
    apiVersion: machine.openshift.io/v1beta1
    kind: Machine
    metadata:
      creationTimestamp: null
      labels:
        machine.openshift.io/cluster-api-cluster: <infrastructure_id>
        machine.openshift.io/cluster-api-machine-role: <role>
        machine.openshift.io/cluster-api-machine-type: <role>
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>
      name: <infrastructure_id>-<role>
      namespace: openshift-machine-api
    spec:
      lifecycleHooks: {}
      metadata: {}
      providerSpec:
        value:
          apiVersion: machine.openshift.io/v1beta1
          credentialsSecret:
            name: vsphere-cloud-credentials
          diskGiB: 120
          kind: VSphereMachineProviderSpec
          memoryMiB: 8192
          metadata:
            creationTimestamp: null
          network:
            devices:
            - gateway: 192.168.204.1
              ipAddrs:
              - 192.168.204.8/24
              nameservers:
              - 192.168.204.1
              networkName: qe-segment-204
          numCPUs: 4
          numCoresPerSocket: 2
          snapshot: ""
          template: <vm_template_name>
          userDataSecret:
            name: worker-user-data
          workspace:
            datacenter: <vcenter_data_center_name>
            datastore: <vcenter_datastore_name>
            folder: <vcenter_vm_folder_path>
            resourcepool: <vsphere_resource_pool>
            server: <vcenter_server_ip>
    status: {}
    ```

    where:

    `gateway`
    :   Specifies an IP address for the default gateway for the network interface.

    `ipAddrs`
    :   Specifies a list of IPv4, IPv6, or both IP addresses that installation program passes to the network interface. Both IP families must use the same network interface for the default network.

    `nameservers`
    :   Specifies a DNS name server. You can define up to 3 DNS name servers. Consider defining more than one DNS name server to take advantage of DNS resolution if that one DNS name server becomes unreachable.

*   Create a `machine` custom resource (CR) by entering the following command in your terminal:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```