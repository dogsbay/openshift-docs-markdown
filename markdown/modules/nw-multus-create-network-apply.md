{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a primary network attachment by applying a YAML manifest {id="nw-multus-create-network-apply_{{ context }}"}

Create a primary network attachment by directly applying a `NetworkAttachmentDefinition` YAML manifest. This gives you full control over the network configuration without relying on the Cluster Network Operator to manage the resource automatically. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in as a user with `cluster-admin` privileges.
*   You are working in the namespace where the NAD is to be deployed.

**Procedure**

1.  Create a YAML file with your primary network configuration, such as in the following example:
    ```yaml
    apiVersion: k8s.cni.cncf.io/v1
    kind: NetworkAttachmentDefinition
    metadata:
      name: next-net
    spec:
      config: |-
        {
          "cniVersion": "0.3.1",
          "name": "work-network",
          "namespace": "namespace2",
          "type": "host-device",
          "device": "eth1",
          "ipam": {
            "type": "dhcp"
          }
        }
    ```
    1.  Optional: You can specify a namespace to which the NAD is applied. If you are working in the namespace where the NAD is to be deployed, the `namespace` specification is not necessary.
1.  To create the primary network, enter the following command:
    ```terminal
    $ oc apply -f <file>.yaml
    ```
    where:


    `<file>`
    :   Specifies the name of the file contained the YAML manifest.