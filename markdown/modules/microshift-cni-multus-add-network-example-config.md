{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure an additional network {id="microshift-cni-multus-add-network-example-config_{{ context }}"}

After you have created the `NetworkAttachmentDefinition` object and applied it, you can configure an additional network. {._abstract}

In this example, the `bridge` type additional network is used. You can also use this workflow for other network types.

**Prerequisites**

*   You created and applied the `NetworkAttachmentDefinition` object configuration.

**Procedure**

1.  Verify that the bridge was created on the host by running the following command:
    ```terminal
    $ ip a show br-test
    ```
    ```terminal title="Example output"
    22: br-test: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
        link/ether 96:bf:ca:be:1d:15 brd ff:ff:ff:ff:ff:ff
        inet6 fe80::34e2:bbff:fed2:31f2/64 scope link
           valid_lft forever preferred_lft forever
    ```
1.  Configure an IP address for the bridge by running the following command:
    ```terminal
    $ sudo ip addr add 10.10.0.10/24 dev br-test
    ```
1.  Verify that the IP address configuration is added to the bridge by running the following command:
    ```terminal
    $ ip a show br-test
    ```
    ```terminal title="Example output"
    22: br-test: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
        link/ether 96:bf:ca:be:1d:15 brd ff:ff:ff:ff:ff:ff
        inet 10.10.0.10/24 scope global br-test
           valid_lft forever preferred_lft forever
        inet6 fe80::34e2:bbff:fed2:31f2/64 scope link
           valid_lft forever preferred_lft forever
    ```

    Confirm that the IP address is configured as expected.
1.  Verify the IP address of the pod by running the following command:
    ```terminal
    $ oc get pod test-bridge --output=jsonpath='{.metadata.annotations.k8s\.v1\.cni\.cncf\.io/network-status}'
    ```
    ```terminal title="Example output"
    [{
        "name": "ovn-kubernetes",
        "interface": "eth0",
        "ips": [
            "10.42.0.17"
        ],
        "mac": "0a:58:0a:2a:00:11",
        "default": true,
        "dns": {}
    },{
        "name": "default/bridge-conf",
        "interface": "net1",
        "ips": [
            "10.10.0.20"
        ],
        "mac": "82:01:98:e5:0c:b7",
        "dns": {}
    ```

    Confirm that the bridge additional network is attached as expected-`"default/bridge-conf"`.
1.  Optional: You can use `oc exec` to access the pod and confirm its interfaces by using the `ip` command:
    ```terminal
    $ oc exec -ti test-bridge -- ip a
    ```
    ```terminal title="Example output"
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
           valid_lft forever preferred_lft forever
        inet6 ::1/128 scope host
           valid_lft forever preferred_lft forever
    2: eth0@if21: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
        link/ether 0a:58:0a:2a:00:11 brd ff:ff:ff:ff:ff:ff
        inet 10.42.0.17/24 brd 10.42.0.255 scope global eth0
           valid_lft forever preferred_lft forever
        inet6 fe80::858:aff:fe2a:11/64 scope link
           valid_lft forever preferred_lft forever
    3: net1@if23: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue
        link/ether 82:01:98:e5:0c:b7 brd ff:ff:ff:ff:ff:ff
        inet 10.10.0.20/24 brd 10.10.0.255 scope global net1
           valid_lft forever preferred_lft forever
        inet6 fe80::8001:98ff:fee5:cb7/64 scope link
           valid_lft forever preferred_lft forever
    ```

    In the example the pod is attached to the 10.10.0.20 IP address on the `net1 interface` as expected.
1.  Confirm that the connection is working as expected by accessing the HTTP server in the pod from the {{ microshift_short }} host. Use the following command:
    ```terminal
    $ curl 10.10.0.20:8080
    ```
    ```terminal title="Example output"
    Hello MicroShift
    ```