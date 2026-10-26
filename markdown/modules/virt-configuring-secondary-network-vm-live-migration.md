{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure a dedicated secondary network for live migration {id="virt-configuring-secondary-network-vm-live-migration_{{ context }}"}

Configure a dedicated secondary network for live migration to minimize the effects of network saturation on tenant workloads during live migration. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You logged in to the cluster as a user with the `cluster-admin` role.
*   Each node has at least two Network Interface Cards (NICs).
*   The NICs for live migration are connected to the same VLAN.
*   You have configured a Linux bridge network.

**Procedure**

1.  Create a `NetworkAttachmentDefinition` manifest according to the following example:
    ```yaml {minja}
    apiVersion: "k8s.cni.cncf.io/v1"
    kind: NetworkAttachmentDefinition
    metadata:
      name: my-secondary-network
      namespace: {{ CNVNamespace }}
    spec:
      config: '{
        "cniVersion": "0.3.1",
        "name": "migration-bridge",
        "type": "macvlan",
        "master": "eth1",
        "mode": "bridge",
        "ipam": {
          "type": "whereabouts",
          "range": "10.200.5.0/24"
        }
      }'
    ```
    *   `metadata.name`: Defines the name of the `NetworkAttachmentDefinition` object.
    *   `config.master`: Defines the name of the NIC to be used for live migration.
    *   `config.type`: Defines the name of the CNI plugin that provides the network for the `NetworkAttachmentDefinition`.
    *   `config.range`: Defines an IP address range for the secondary network. This range must not overlap the IP addresses of the main network.
1.  Open the `HyperConverged` CR in your default editor by running the following command:
    ```terminal {minja}
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Add the name of the `NetworkAttachmentDefinition` object to the `spec.virtualization.liveMigrationConfig` stanza of the `HyperConverged` CR.

    Example `HyperConverged` manifest:
    ```yaml {minja}
    apiVersion: hco.kubevirt.io/v1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
      virtualization:
        liveMigrationConfig:
          completionTimeoutPerGiB: 800
          network: <network>
          parallelMigrationsPerCluster: 5
          parallelOutboundMigrationsPerNode: 2
          progressTimeout: 150
    # ...
    ```
    *   `spec.virtualization.liveMigrationConfig.network`: Defines the name of the Multus `NetworkAttachmentDefinition` object to be used for live migrations.
1.  Save your changes and exit the editor. The `virt-handler` pods restart and connect to the secondary network.

**Verification**

*   When the node that the virtual machine runs on is placed into maintenance mode, the VM automatically migrates to another node in the cluster. You can verify that the migration occurred over the secondary network and not the default pod network by checking the target IP address in the virtual machine instance (VMI) metadata.
    ```terminal
    $ oc get vmi <vmi_name> -o jsonpath='{.status.migrationState.targetNodeAddress}'
    ```