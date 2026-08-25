{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attaching an OVS hardware offloading network {id="nw-osp-hardware-offload-attaching-network_{{ context }}"}

You can attach an Open vSwitch (OVS) hardware offloading network to your cluster. {._abstract}

**Prerequisites**

*   Your cluster is installed and running.
*   You provisioned an OVS hardware offloading network on {{ rh_openstack_first }} to use with your cluster.

**Procedure**

1.  Create a file named `network.yaml` from the following template:
    ```yaml
    spec:
      additionalNetworks:
      - name: hwoffload1
        namespace: cnf
        rawCNIConfig: '{ "cniVersion": "0.3.1", "name": "hwoffload1", "type": "host-device","pciBusId": "0000:00:05.0", "ipam": {}}' (1)
        type: Raw
    ```

    where:

    `pciBusId`
    :   Specifies the device that is connected to the offloading network. If you do not have it, you can find this value by running the following command:
    ```terminal
    $ oc describe SriovNetworkNodeState -n openshift-sriov-network-operator
    ```

1.  From a command line, enter the following command to patch your cluster with the file:
    ```terminal
    $ oc apply -f network.yaml
    ```