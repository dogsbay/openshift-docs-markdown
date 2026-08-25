{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating ConfigMap objects of extra manifests for the image-based upgrade with {{ lcao }} {id="cnf-image-based-upgrade-prep-extramanifests_{{ context }}"}

Create additional manifests that you want to apply to the target cluster. {._abstract}


:::note

If you add more than one extra manifest, and the manifests must be applied in a specific order, you must prefix the filenames of the manifests with numbers that represent the required order. For example, `00-namespace.yaml`, `01-sriov-extra-manifest.yaml`, and so on.

:::


**Procedure**

1.  Create a YAML file that contains your extra manifests, such as SR-IOV.
    ```yaml title="Example SR-IOV resources"
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
    ```
1.  Create the `ConfigMap` object by running the following command:
    ```terminal
    $ oc create configmap example-extra-manifests-cm --from-file=example-extra-manifests.yaml=<path_to_extramanifest> -n openshift-lifecycle-agent
    ```
1.  Patch the `ImageBasedUpgrade` CR by running the following command:
    ```terminal
    $ oc patch imagebasedupgrades.lca.openshift.io upgrade \
      -p='{"spec": {"extraManifests": [{"name": "example-extra-manifests-cm", "namespace": "openshift-lifecycle-agent"}]}}' \
      --type=merge -n openshift-lifecycle-agent
    ```