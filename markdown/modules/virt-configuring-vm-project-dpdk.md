{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a project for DPDK workloads {id="virt-configuring-vm-project-dpdk_{{ context }}"}

You can configure the project to run DPDK workloads on SR-IOV hardware. {._abstract}

**Prerequisites**

*   Your cluster is configured to run DPDK workloads.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a namespace for your DPDK applications:
    ```terminal
    $ oc create ns dpdk-ns
    ```
1.  Create an `SriovNetwork` object that references the `SriovNetworkNodePolicy` object. When you create an `SriovNetwork` object, the SR-IOV Network Operator automatically creates a `NetworkAttachmentDefinition` object.

    Example `SriovNetwork` manifest:
    ```yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovNetwork
    metadata:
      name: dpdk-sriovnetwork
      namespace: openshift-sriov-network-operator
    spec:
      ipam: |
        {
          "type": "host-local",
          "subnet": "10.56.217.0/24",
          "rangeStart": "10.56.217.171",
          "rangeEnd": "10.56.217.181",
          "routes": [{
            "dst": "0.0.0.0/0"
          }],
          "gateway": "10.56.217.1"
        }
      networkNamespace: dpdk-ns
      resourceName: intel_nics_dpdk
      spoofChk: "off"
      trust: "on"
      vlan: 1019
    ```
    *   `spec.networkNamespace` defines the namespace where the `NetworkAttachmentDefinition` object is deployed.
    *   `spec.resourceName` defines the value of the `spec.resourceName` attribute of the `SriovNetworkNodePolicy` object that was created when configuring the cluster for DPDK workloads.