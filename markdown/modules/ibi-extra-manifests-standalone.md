{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring resources for extra manifests {id="ibi-extra-manifest-standalone_{{ context }}"}

You can optionally define additional resources in an image-based deployment for {{ sno }} clusters. {._abstract}

Create the additional resources in an `extra-manifests` folder in the same working directory that has the `install-config.yaml` and `image-based-config.yaml` manifests.


:::note

Filenames for additional resources in the `extra-manifests` directory must not exceed 30 characters. Longer filenames might cause deployment failures.

:::


The following example shows how to create a resource in the `extra-manifests` folder of your working directory to add an single-root I/O virtualization (SR-IOV) network to the deployment.


:::note

If you add more than one extra manifest, and the manifests must be applied in a specific order, you must prefix the filenames of the manifests with numbers that represent the required order. For example, `00-namespace.yaml`, `01-sriov-extra-manifest.yaml`, and so on.

:::


**Prerequisites**

*   You created a working directory with the `install-config.yaml` and `image-based-config.yaml` manifests

**Procedure**

1.  Go to your working directory and create the `extra-manifests` folder by running the following command:
    ```terminal
    $ mkdir extra-manifests
    ```
1.  Create the `SriovNetworkNodePolicy` and `SriovNetwork` resources in the `extra-manifests` folder:
    1.  Create a YAML file that defines the resources, as shown in the following example:

        :::note

        If the cluster nodes include Intel vRAN Boost (VRB1 or VRB2) hardware, you can include a `SriovVrbClusterConfig` resource in the extra manifests to configure the hardware.
        
        :::

        ```yaml
        apiVersion: sriovnetwork.openshift.io/v1
        kind: SriovNetworkNodePolicy
        metadata:
          name: "example-sriov-node-policy"
          namespace: openshift-sriov-network-operator
        spec:
          deviceType: vfio-pci
          isRdma: false
          nicSelector:
            pfNames: [ens1f0]
          nodeSelector:
            node-role.kubernetes.io/master: ""
          mtu: 1500
          numVfs: 8
          priority: 99
          resourceName: example-sriov-node-policy
        ---
        apiVersion: sriovnetwork.openshift.io/v1
        kind: SriovNetwork
        metadata:
          name: "example-sriov-network"
          namespace: openshift-sriov-network-operator
        spec:
          ipam: |-
            {
            }
          linkState: auto
          networkNamespace: sriov-namespace
          resourceName: example-sriov-node-policy
          spoofChk: "on"
          trust: "off"
        ---
        apiVersion: sriovvrb.intel.com/v1
        kind: SriovVrbClusterConfig
        metadata:
          name: config
          namespace: vran-acceleration-operators
        spec:
          priority: 1
          nodeSelector:
            kubernetes.io/hostname: worker-node
          acceleratorSelector:
            pciAddress: 0000:07:00.0
          drainSkip: true
          physicalFunction:
            pfDriver: vfio-pci
            vfDriver: vfio-pci
            vfAmount: 2
            bbDevConfig:
              vrb2:
                pfMode: false
                numVfBundles: 2
                maxQueueSize: 1024
                downlink4G:
                  aqDepthLog2: 4
                  numAqsPerGroups: 16
                  numQueueGroups: 0
                uplink4G:
                  aqDepthLog2: 4
                  numAqsPerGroups: 16
                  numQueueGroups: 0
                downlink5G:
                  aqDepthLog2: 4
                  numAqsPerGroups: 16
                  numQueueGroups: 4
                uplink5G:
                  aqDepthLog2: 4
                  numAqsPerGroups: 16
                  numQueueGroups: 4
                qfft:
                  aqDepthLog2: 4
                  numAqsPerGroups: 16
                  numQueueGroups: 4
                qmld:
                  aqDepthLog2: 4
                  numAqsPerGroups: 64
                  numQueueGroups: 4
        ```

**Verification**

*   When you create the configuration ISO, you can view the reference to the extra manifests in the `.openshift_install_state.json` file in your working directory:
    ```json
     "*configimage.ExtraManifests": {
            "FileList": [
                {
                    "Filename": "extra-manifests/sriov-extra-manifest.yaml",
                    "Data": "YXBFDFFD..."
                }
            ]
        }
    ```