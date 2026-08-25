{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring sysctl on a SR-IOV network {id="configuring-sysctl-on-sriov-network_{{ context }}"}

You can set interface specific `sysctl` settings on virtual interfaces created by SR-IOV by adding the tuning configuration to the optional `metaPlugins` parameter of the `SriovNetwork` resource. {._abstract}

The SR-IOV Network Operator manages additional network definitions. When you specify an additional SR-IOV network to create, the SR-IOV Network Operator creates the `NetworkAttachmentDefinition` custom resource (CR) automatically.


:::note

Do not edit `NetworkAttachmentDefinition` custom resources that the SR-IOV Network Operator manages. Doing so might disrupt network traffic on your additional network.

:::


To change the interface-level network `net.ipv4.conf.IFNAME.accept_redirects` `sysctl` settings, create an additional SR-IOV network with the Container Network Interface (CNI) tuning plugin.

**Prerequisites**

*   Install the {{ product_title }} CLI (oc).
*   Log in to the {{ product_title }} cluster as a user with cluster-admin privileges.

**Procedure**

1.  Create the `SriovNetwork` custom resource (CR) for the additional SR-IOV network attachment and insert the `metaPlugins` configuration, as in the following example CR. Save the YAML as the file `sriov-network-interface-sysctl.yaml`.
    ```yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovNetwork
    metadata:
      name: onevalidflag
      namespace: openshift-sriov-network-operator
    spec:
      resourceName: policyoneflag
      networkNamespace: sysctl-tuning-test
      ipam: '{ "type": "static" }'
      capabilities: '{ "mac": true, "ips": true }'
      metaPlugins : |
        {
          "type": "tuning",
          "capabilities":{
            "mac":true
          },
          "sysctl":{
             "net.ipv4.conf.IFNAME.accept_redirects": "1"
          }
        }
    ```
    *   `<name>` specifies a name for the object. The SR-IOV Network Operator creates a NetworkAttachmentDefinition object with same name.
    *   `<namespace>` specifies the namespace where the SR-IOV Network Operator is installed.
    *   `<resourceName>` specifies the value for the `spec.resourceName` parameter from the `SriovNetworkNodePolicy` object that defines the SR-IOV hardware for this additional network.
    *   `<networkNamespace>` specifies the target namespace for the `SriovNetwork` object. Only pods in the target namespace can attach to the additional network.
    *   `<ipam>` specifies a configuration object for the IPAM CNI plugin as a YAML block scalar. The plugin manages IP address assignment for the attachment definition.
    *   `<capabilities>` specifies optional capabilities for the additional network. You can specify `"{ "ips": true }"` to enable IP address support or `"{ "mac": true }"` to enable MAC address support.
    *   `<metaPlugins>` specifies optional additional capabilities for the device. In this use case set the `type` field to `tuning`. Specify the interface-level network `sysctl` you want to set in the `sysctl` field.
1.  Create the `SriovNetwork` resource:
    ```terminal
    $ oc create -f sriov-network-interface-sysctl.yaml
    ```

**Verification**

*   Confirm that the SR-IOV Network Operator created the `NetworkAttachmentDefinition` CR by running the following command:
    ```terminal
    $ oc get network-attachment-definitions -n <namespace>
    ```
    *   Replace `<namespace>` with the value for `networkNamespace` that you specified in the `SriovNetwork` object. For example, `sysctl-tuning-test`. The expected output shows the name of the NAD CRD and the creation age in minutes.

    :::note

    There might be a delay before the SR-IOV Network Operator creates the CR.
    
    :::

    1.  Create a `Pod` CR. Save the following YAML as the file `examplepod.yaml`:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: tunepod
          namespace: sysctl-tuning-test
          annotations:
            k8s.v1.cni.cncf.io/networks: |-
              [
                {
                  "name": "onevalidflag",
                  "mac": "0a:56:0a:83:04:0c",
                  "ips": ["10.100.100.200/24"]
               }
              ]
        spec:
          containers:
          - name: podexample
            image: centos
            command: ["/bin/bash", "-c", "sleep INF"]
            securityContext:
              runAsUser: 2000
              runAsGroup: 3000
              allowPrivilegeEscalation: false
              capabilities:
                drop: ["ALL"]
          securityContext:
            runAsNonRoot: true
            seccompProfile:
              type: RuntimeDefault
        ```
        *   `<name>` specifies the name of the SR-IOV network attachment definition CR.
        *   `<mac>` is optional. The MAC address for the SR-IOV device that is allocated from the resource type defined in the SR-IOV network attachment definition CR. To use this feature, you also must specify `{ "mac": true }` in the SriovNetwork object.
        *   `<ips>` is optional. IP addresses for the SR-IOV device that are allocated from the resource type defined in the SR-IOV network attachment definition CR. Both IPv4 and IPv6 addresses are supported. To use this feature, you also must specify `{ "ips": true }` in the `SriovNetwork` object.
    1.  Create the `Pod` CR:
        ```terminal
        $ oc apply -f examplepod.yaml
        ```
    1.  Verify that the pod is created by running the following command:
        ```terminal
        $ oc get pod -n sysctl-tuning-test
        ```

        The following is example output:
        ```terminal
        NAME      READY   STATUS    RESTARTS   AGE
        tunepod   1/1     Running   0          47s
        ```
    1.  Log in to the pod by running the following command:
        ```terminal
        $ oc rsh -n sysctl-tuning-test tunepod
        ```
    1.  Verify the values of the configured sysctl flag. Find the value  `net.ipv4.conf.IFNAME.accept_redirects` by running the following command:
        ```terminal
        $ sysctl net.ipv4.conf.net1.accept_redirects
        ```