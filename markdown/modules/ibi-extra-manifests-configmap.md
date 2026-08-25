{%- set _mod_docs_content_type = "REFERENCE" %}
# ConfigMap resources for extra manifests {id="ibi-extra-manifests-configmap_{{ context }}"}

You can optionally create a `ConfigMap` resource to define additional manifests in an image-based deployment for managed {{ sno }} clusters.  {._abstract}

After you create the `ConfigMap` resource, reference it in the `ImageClusterInstall` resource. During deployment, the IBI Operator includes the extra manifests in the deployment.

## Creating a ConfigMap resource to add extra manifests in an image-based deployment {id="ibi-create-extra-manifest-configmap_{{ context }}"}

You can use a `ConfigMap` resource to add extra manifests to the image-based deployment for {{ sno }} clusters. 

The following example adds an single-root I/O virtualization (SR-IOV) network to the deployment.


:::note

Filenames for extra manifests must not exceed 30 characters. Longer filenames might cause deployment failures.

:::


Before you begin, ensure that:

*   You preinstalled a host with {{ sno }} using an image-based installation.
*   You logged in as a user with `cluster-admin` privileges.

To create the `ConfigMap` resource, complete the following steps:

1.  Create the `SriovNetworkNodePolicy` and `SriovNetwork` resources:
    1.  Create a YAML file that defines the resources, as in the following example:
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
        ```
    1.  Create the `ConfigMap` resource by running the following command:
        ```terminal
        $ oc create configmap sr-iov-extra-manifest --from-file=sriov-extra-manifest.yaml -n <namespace>
        ```

        where:

        `<namespace>`
        :   Specifies the namespace that has the `ImageClusterInstall` resource, for example `ibi-ns`.
        Example output:
        ```terminal
        configmap/sr-iov-extra-manifest created
        ```

        :::note

        If you add more than one extra manifest, and the manifests must be applied in a specific order, you must prefix the filenames of the manifests with numbers that represent the required order. For example, `00-namespace.yaml`, `01-sriov-extra-manifest.yaml`, and so on.
        
        :::


1.  Reference the `ConfigMap` resource in the `spec.extraManifestsRefs` field of the `ImageClusterInstall` resource:
    ```yaml
    #...
      spec:
        extraManifestsRefs:
        - name: sr-iov-extra-manifest
    #...
    ```

## Creating a ConfigMap resource to add a CA bundle in an image-based deployment {id="ibi-create-ca-extra-manifest-configmap_{{ context }}"}

You can use a `ConfigMap` resource to add a certificate authority (CA) bundle to the host to ensure trusted communications for cluster services. 

After you create the `ConfigMap` resource, reference it in the `spec.caBundleRef` field of the `ImageClusterInstall` resource.

Before you begin, ensure that:

*   You preinstalled a host with {{ sno }} using an image-based installation.
*   You logged in as a user with `cluster-admin` privileges.

To create the CA bundle `ConfigMap` resource, complete the following steps:

1.  Create a CA bundle file called `tls-ca-bundle.pem`, as in the following example:
    ```text
    -----BEGIN CERTIFICATE-----
    MIIDXTCCAkWgAwIBAgIJAKmjYKJbIyz3MA0GCSqGSIb3DQEBCwUAMEUxCzAJBgNV
    ...Custom CA certificate bundle...
    4WPl0Qb27Sb1xZyAsy1ww6MYb98EovazUSfjYr2EVF6ThcAPu4/sMxUV7He2J6Jd
    cA8SMRwpUbz3LXY=
    -----END CERTIFICATE-----
    ```
1.  Create the `ConfigMap` object by running the following command: 
    ```terminal
    $ oc create configmap custom-ca --from-file=tls-ca-bundle.pem -n ibi-ns
    ```

    where:

    `custom-ca`
    :   Specifies the name for the `ConfigMap` resource.

    `tls-ca-bundle.pem`
    :   Specifies the key for the `data` entry in the `ConfigMap` resource. You must include a `data` entry with the `tls-ca-bundle.pem` key.

    `ibi-ns`
    :   Specifies the namespace that has the `ImageClusterInstall` resource.
    Example output:
    ```terminal
    configmap/custom-ca created
    ```

1.  Reference the `ConfigMap` resource in the `spec.caBundleRef` field of the `ImageClusterInstall` resource:
    ```yaml
    #...
      spec:
        caBundleRef:
          name: custom-ca
    #...
    ```