{%- set _mod_docs_content_type = "PROCEDURE" %}
# Fast IPAM configuration for the Whereabouts IPAM CNI plugin {id="nw-multus-whereabouts-fast-ipam_{{ context }}"}

Wherabouts is an IP Address Management (IPAM) Container Network Interface (CNI) plugin that assigns IP addresses at a cluster-wide level. Whereabouts does not require a Dynamic Host Configuration Protocol (DHCP) server. {._abstract}

A typical Wherabouts workflow is described as follows:

1.  Whereabouts takes an address range in classless inter-domain routing (CIDR) notation, such as `192.168.2.0/24`, and assigns IP addresses within that range, such as `192.168.2.1` to `192.168.2.254`.
1.  Whereabouts assigns an IP address, the lowest value address in a CIDR range, to a pod and tracks the IP address in a data store for the lifetime of that pod.
1.  When the pod is removed, Whereabouts frees the address from the pod so that the address is available for assignment.

To improve the performance of Whereabouts, especially if nodes in your cluster run a high amount of pods, you can enable the Fast IPAM feature.

{%- set FeatureName = "Fast IPAM" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

The Fast IPAM feature uses `nodeslicepools`, which are managed by the Whereabouts Controller, to optimize IP allocation for nodes.

**Prerequisites**

*   You added the `whereabouts-shim` configuration to the `Network.operator.openshift.io` custom resource (CR), so that the Cluster Network Operator (CNO) can deploy the Whereabouts Controller. See "Creating a Whereabouts reconciler daemon set".
*   For the Fast IPAM feature to work, ensure that the `NetworkAttachmentDefinition` (NAD) and the pod exist in the same `openshift-multus` namespace.

**Procedure**

1.  Confirm that the Whereabouts Controller is running by entering the following command.
    ```terminal
    $ oc get pods -n openshift-multus | grep whereabouts-controller
    ```
    ```terminal
    whereabouts-controller-5cbfd6c475-fr7d7        1/1     Running            0               22s
    ...
    ```

    :::important

    If the Whereabouts Controller is not running, the Fast IPAM does not work.
    
    :::

1.  Create a NAD file for your cluster and add the Fast IPAM details to the file as demonstrated in the following example configuration:
    ```yaml
    apiVersion: "k8s.cni.cncf.io/v1"
    kind: NetworkAttachmentDefinition
    metadata:
      name: wb-ipam
      namespace: openshift-multus
    spec:
      config: '{
        "cniVersion": "0.3.0",
        "name": "wb-ipam-cni-name",
        "type": "bridge",
        "bridge": "cni0",
        "ipam": {
          "type": "whereabouts",
          "range": "10.5.0.0/20",
          "node_slice_size": "/24"
        }
      }'
    # ...
    ```

    where:

    `namespace`
    :   The namespace where CNO deploys the NAD.

    `name`
    :   The name of the Whereabouts IPAM CNI plugin.

    `type`
    :   The type of IPAM CNI plugin, such as `whereabouts`.

    `range`
    :   The IP address range for the IP pool that the Whereabouts IPAM CNI plugin uses for allocating IP addresses to pods.

    `node_slice_size`
    :   Sets the slice size of IP addresses available to each node.

1.  Add the Whereabouts IPAM CNI plugin annotation details to the YAML file for the pod:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: samplepod
      annotations:
      k8s.v1.cni.cncf.io/networks: openshift-multus/wb-ipam
    spec:
      containers:
      - name: samplecontainer
      command: ["/bin/bash", "-c", "trap : TERM INT; sleep infinity & wait"]
      image: registry.redhat.io/ubi9/ubi-minimal
    # ...
    ```

    where:

    `name`
    :   The name of the pod.

    `k8s.v1.cni.cncf.io/networks`
    :   The annotation details that references the Whereabouts IPAM CNI plugin name that exists in the `openshift-multus` namespace.

    `- name`
    :   The name of the container for the pod.

    `command`
    :   Defines the entry point for the container and controls the behavior of the container in the Whereabouts IPAM CNI plugin.

1.  Apply the NAD file configuration to pods that exist on nodes that run in your cluster:
    ```terminal
    $ oc create -f <NAD_file_name>.yaml
    ```

**Verification**

1.  Show the IP address details of the pod by entering the following command:
    ```terminal
    $ oc describe pod <pod_name>
    ```
    ```terminal
    ...
    k8s.v1.cni.cncf.io/network-status:
      [{
          "name": "ovn-kubernetes",
          "interface": "eth0",
          "ips": [
              "10.128.3.174"
          ],
          "mac": "0a:58:0a:80:03:ae",
          "default": true,
          "dns": {}
      },{
          "name": "openshift-multus/wb-ipam",
          "interface": "net1",
          "ips": [
              "10.5.0.1"
          ],
          "mac": "1a:04:6f:a4:15:3c",
          "dns": {}
      }]
    k8s.v1.cni.cncf.io/networks: openshift-multus/wb-ipam
    ...
    ```
1.  Access the pod and confirm its interfaces by entering the following command:
    ```terminal
    $ oc exec <pod_name> -- ip a
    ```
    ```terminal
    ...
    3: net1@if439: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
        link/ether 1a:04:6f:a4:15:3c brd ff:ff:ff:ff:ff:ff link-netnsid 0
        inet 10.5.0.1/20 brd 10.5.15.255 scope global net1
           valid_lft forever preferred_lft forever
        inet6 fe80::1804:6fff:fea4:153c/64 scope link
           valid_lft forever preferred_lft forever
    ...
    ```

    where:

    `inet`: Pod is attached to the `10.5.0.1` IP address on the `net1` interface as expected.
1.  Check that the node selector pool exists in the `openshift-multus` namespace by entering the following command. The expected output shows the name of the node selector pool, such as `nodeslicepool, and the creation age in minutes, such as `32m`.
    ```terminal
    $ oc get nodeslicepool -n openshift-multus
    ```
    ```terminal title="Example output"
    NAME               AGE
    wb-ipam-cni-name   32m
    ```