{%- set _mod_docs_content_type = "PROCEDURE" %}
# Automating discovery and provisioning for local storage devices {id="local-storage-discovery_{{ context }}"}

Automate local storage discovery and provisioning using the Local Storage Operator (LSO) to simplify installation when dynamic provisioning is not available, such as with bare metal, {{ vmw_first }}, or {{ aws_first }} instances with attached devices. {._abstract}

{%- set FeatureName = "Automatic discovery and provisioning" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}


:::important

Automatic discovery and provisioning is fully supported when used to deploy {{ rh_storage_first }} on-premise or with platform-agnostic deployment.

:::


Use the following procedure to automatically discover local devices, and to automatically provision local volumes for selected devices.


:::warning

Use the `LocalVolumeSet` object with caution. When you automatically provision persistent volumes (PVs) from local disks, the local PVs might claim all devices that match. If you are using a `LocalVolumeSet` object, make sure the LSO is the only entity managing local devices on the node. Creating multiple instances of a `LocalVolumeSet` that target a node more than once is not supported.

:::


**Prerequisites**

*   You have cluster administrator permissions.
*   You have installed the LSO.
*   You have attached local disks to {{ product_title }} nodes.
*   You have access to the {{ product_title }} web console and the `oc` command-line interface (CLI).

**Procedure**

1.  Enable automatic discovery of local devices from the {{ product_title }} web console:
    1.  Click **Ecosystem** -> **Installed Operators**.
    1.  In the `openshift-local-storage` namespace, click **Local Storage**.
    1.  Click the **Local Volume Discovery** tab.
    1.  Click **Create Local Volume Discovery** and then select either **Form view** or **YAML view**.
    1.  Configure the `LocalVolumeDiscovery` object parameters.
    1.  Click **Create**.

        The LSO creates a local volume discovery instance named `auto-discover-devices`.
1.  Display a continuous list of available devices on a node:
    1.  Log in to the {{ product_title }} web console.
    1.  Click **Compute** -> **Nodes**.
    1.  Click the node name that you want to open. The "Node Details" page is displayed.
    1.  Click the **Disks** tab to display the list of the selected devices.

        The device list updates continuously as local disks are added or removed. You can filter the devices by name, status, type, model, capacity, and mode.
1.  Automatically provision local volumes for the discovered devices from the {{ product_title }} web console:
    1.  Click **Ecosystem** -> **Installed Operators** and select **Local Storage** from the list of Operators.
    1.  Click **Local Volume Set** -> **Create Local Volume Set**.
    1.  Enter a volume set name and a storage class name.
    1.  Click **All nodes** or **Select nodes** to apply filters accordingly.

        :::note

        Only worker nodes are available, regardless of whether you filter using **All nodes** or **Select nodes**.
        
        :::

    1.  Select the disk type, mode, size, and limit that you want to apply to the local volume set, and then click **Create**.

        A message is displayed after several minutes, indicating that the "Operator reconciled successfully."
1.  Alternatively, provision local volumes for the discovered devices from the CLI:
    1.  Create an object YAML file to define the local volume set, such as `local-volume-set.yaml`, as shown in the following example:
        ```yaml title="Example local volume set YAML file"
        apiVersion: local.storage.openshift.io/v1alpha1
        kind: LocalVolumeSet
        metadata:
          name: example-autodetect
        spec:
          nodeSelector:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: kubernetes.io/hostname
                    operator: In
                    values:
                      - worker-0
                      - worker-1
          storageClassName: local-sc
          volumeMode: Filesystem
          fsType: ext4
          maxDeviceCount: 10
          deviceInclusionSpec:
            deviceTypes:
              - disk
              - part
            deviceMechanicalProperties:
              - NonRotational
            minSize: 10G
            maxSize: 100G
            models:
              - SAMSUNG
              - Crucial_CT525MX3
            vendors:
              - ATA
              - ST2000LM
        ```
        *   `spec.storageClassName`: Determines the storage class that is created for persistent volumes that are provisioned from discovered devices. The LSO automatically creates the storage class if it does not exist. Be sure to use a storage class that uniquely identifies this set of local volumes.
        *   `spec.deviceInclusionSpec.deviceTypes`: When using the local volume set feature, the LSO does not support the use of logical volume management (LVM) devices.
    1.  Create the local volume set object:
        ```terminal
        $ oc apply -f local-volume-set.yaml
        ```
    1.  Verify that the local persistent volumes were dynamically provisioned based on the storage class:
        ```terminal
        $ oc get pv
        ```
        ```terminal title="Example output"
        NAME                CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS   REASON   AGE
        local-pv-1cec77cf   100Gi      RWO            Delete           Available           local-sc                88m
        local-pv-2ef7cd2a   100Gi      RWO            Delete           Available           local-sc                82m
        local-pv-3fa1c73    100Gi      RWO            Delete           Available           local-sc                48m
        ```

**Next steps**

Results are deleted after they are removed from the node. Symlinks must be manually removed.