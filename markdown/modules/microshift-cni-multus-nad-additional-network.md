{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a NetworkAttachmentDefinition for an additional network {id="microshift-cni-multus-nad-additional-network_{{ context }}"}

You can create a `NetworkAttachmentDefinition` configuration file for an additional network in order to use other CNI plugins. {._abstract}

In this example, a bridge-type interface is used. You can also use the example workflow here that uses `host-local` IP address management (IPAM) to configure other supported additional network types.


:::important

If you use `bridge` and the `dhcp` IPAM, a DHCP server listening on the bridged network is required. If you are also using a firewall, configuring the firewalld service to allow DHCP traffic on the network zone is also required. You can run the `firewall-cmd --remove-service=dhcp` command in this case.

:::


**Prerequisites**

*   The {{ microshift_short }} Multus CNI is installed.
*   The {{ oc_first }} is installed.
*   {{ microshift_short }} is running.

**Procedure**

1.  Optional: Verify that the {{ microshift_short }} node is running with the Multus CNI by running the following command:
    ```terminal
    $ oc get pods -n openshift-multus
    ```
    ```terminal title="Example output"
    NAME                READY   STATUS    RESTARTS   AGE
    dhcp-daemon-dfbzw   1/1     Running   0          5h
    multus-rz8xc        1/1     Running   0          5h
    ```
1.  Create a `NetworkAttachmentDefinition` configuration file by running the following command and using the following example file for reference:
    ```terminal
    $ oc apply -f network-attachment-definition.yaml
    ```
    ```yaml title="Example NetworkAttachmentDefinition file"
    apiVersion: "k8s.cni.cncf.io/v1"
    kind: NetworkAttachmentDefinition
    metadata:
      name: bridge-conf
    spec:
      config: '{
          "cniVersion": "0.4.0",
          "type": "bridge",
          "bridge": "br-test",
          "mode": "bridge",
          "ipam": {
            "type": "host-local",
            "ranges": [
              [
                {
                  "subnet": "10.10.0.0/24",
                  "rangeStart": "10.10.0.20",
                  "rangeEnd": "10.10.0.50",
                  "gateway": "10.10.0.254"
                 }
              ],
              [
                {
                  "subnet": "fd00:IJKL:MNOP:10::0/64",
                  "rangeStart": "fd00:IJKL:MNOP:10::1",
                  "rangeEnd": "fd00:IJKL:MNOP:10::9"
            "dataDir": "/var/lib/cni/br-test"
          }
        }'
    ```

    where:

    `type`
    :   Specifies a name of the CNI plugin. This example uses the `bridge` type.

    `bridge`
    :   Specifies the name of the bridge on the {{ microshift_short }} host that is used. The additional interface of the pod is connected to that bridge. If the interface does not exist on the host, the Bridge CNI creates it. If the interface already exists, it is reused. In this example, the name of the interface is `br-test`.

    `ipam`
    :   Specifies the IPAM type.

    `ipam.ranges.`
    :   Specifies the IP address range for the additional network. IPv6 addresses can be added to the secondary interface.

    :::note

    Using the name of the bridge is specific to the `bridge` type of plugin. Other plugins use different fields in their `NetworkAttachmentDefinitions`. For example, the `macvlan` and `ipvlan` configurations use `master` to specify the host interface to attach.
    
    :::