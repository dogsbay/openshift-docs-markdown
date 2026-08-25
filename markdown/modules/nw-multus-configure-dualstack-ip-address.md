{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a configuration for assignment of dual-stack IP addresses dynamically {id="nw-multus-configure-dualstack-ip-address_{{ context }}"}

You can dynamically assign dual-stack IP addresses to a secondary network so that pods can communicate over both IPv4 and IPv6 addresses. {._abstract}

You can configure the following IP address assignment types in the `ipRanges` parameter:

*   IPv4 addresses
*   IPv6 addresses
*   multiple IP address assignment

**Procedure**

1.  Set `type` to `whereabouts`.
1.  Use `ipRanges` to allocate IP addresses as shown in the following example:
    ```yaml
    cniVersion: operator.openshift.io/v1
    kind: Network
    metadata:
      name: cluster
    spec:
      additionalNetworks:
      - name: whereabouts-shim
        namespace: default
        type: Raw
        rawCNIConfig: |-
          {
           "name": "whereabouts-dual-stack",
           "cniVersion": "0.3.1,
           "type": "bridge",
           "ipam": {
             "type": "whereabouts",
             "ipRanges": [
                      {"range": "192.168.10.0/24"},
                      {"range": "2001:db8::/64"}
                  ]
           }
          }

    ```
1.  Attach the secondary network to a pod. For more information, see "Adding a pod to a secondary network".

**Verification**

*   Verify that all IP addresses got assigned to the network interfaces within the network namespace of a pod by entering the following command:
    ```yaml
    $ oc exec -it <pod_name> -- ip a
    ```

    where:

    `<pod_name>`
    :   The name of the pod.