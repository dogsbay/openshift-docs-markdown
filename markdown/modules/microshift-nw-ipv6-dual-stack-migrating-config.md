{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrating a {{ microshift_short }} node to IPv6 dual-stack networking {id="microshift-nw-ipv6-dual-stack-migrating-config_{{ context }}"}

To convert a single-stack node to dual-stack node networking that supports IPv4 and IPv6 address families, set two entries in the service and node network parameters in the {{ microshift_short }} configuration file and restart the service. {._abstract}

*   The first IP family in the configuration is the primary IP stack in the node.
*   {{ microshift_short }} system pods and services are automatically updated upon {{ microshift_short }} restart.
*   After the node is migrated to dual-stack networking and has restarted, enable workload pods and services for dual-stack networking by restarting them.


:::important

The OVN-Kubernetes network plugin requires that both IPv4 and IPv6 default routes be on the same network device. IPv4 and IPv6 default routes on separate network devices is not supported.

:::



:::important

When using dual-stack networking where IPv6 is required, you cannot use IPv4-mapped IPv6 addresses, such as `::FFFF:198.51.100.1`.

:::


**Prerequisites**

*   You installed the {{ oc_first }}.
*   You have root access to the node.
*   Your node uses the OVN-Kubernetes network plugin.
*   The host has both IPv4 and IPv6 addresses and routes, including a default for each.
*   The host has at least two L3 networks, IPv4 and IPv6.

**Procedure**

1.  If you have not done so, make a copy of the provided `config.yaml.default` file in the `/etc/microshift/` directory, renaming it `config.yaml`.
1.  Keep the new {{ microshift_short }} `config.yaml` in the `/etc/microshift/` directory. Your `config.yaml` file is read every time the {{ microshift_short }} service starts.

    :::note

    After you create it, the `config.yaml` file takes precedence over built-in settings.
    
    :::

1.  Add IPv6 configurations to the `network` section of the {{ microshift_short }} YAML with your valid values:

    :::warning

    You must keep the same first entry across restarts and migrations. This is true for any migration: single-to-dual stack, or dual-to-single stack. A complete wipe of the etcd database is required if a change to the first entry is needed. This might result in application data loss and is not supported.
    
    :::

    1.  Add an IPv6 configuration for a second network in the `network` section of the {{ microshift_short }} YAML with your valid values.
    1.  Add network assignments to the `network` section of the {{ microshift_short }} `config.yaml` to enable dual stack with IPv6 as secondary network.
        ```yaml title="Example dual-stack IPv6 configuration with network assignments"
        # ...
        apiServer:
          subjectAltNames:
          - 192.168.113.117
          - 2001:db9:ca7:ff::1db8
        network:
          clusterNetwork:
          - 10.42.0.0/16
          - fd01::/48
          serviceNetwork:
          - 10.43.0.0/16
          - fd02::/112
        node:
          nodeIP: 192.168.113.117
          nodeIPv6: 2001:db9:ca7:ff::1db8
        # ...
        ```

        where:

        `2001:db9:ca7:ff::1db8`
        :   Specifies an IPv6 node address.

        `10.42.0.0/16`
        :   Specifies an IPv4 `clusterNetwork` address with a CIDR value that is less than `24`.

        `fd01::/48`
        :   Specifies an IPv6 `clusterNetwork` address with a CIDR value that is less than `64`.

        `fd02::/112`
        :   Specifies an IPv6 CIDR with a prefix of `112`. Kubernetes uses only the lowest 16 bits. For a prefix of `112`, IP addresses are assigned from `112` to `128` bits.

        `192.168.113.117`
        :   Specifies an IPv4 node IP address. Maintain the previous IPv4 IP address.

        `2001:db9:ca7:ff::1db8`
        :   Specifies an IPv6 node IP address. Must be an IPv6 address family.
1.  Complete any other configurations you require, then restart {{ microshift_short }} by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```
1.  Reset the IP family policy for application pods and services as needed, then restart those application pods and services to enable dual-stack networking. See "Resetting the IP family policy for application pods and services" for a simple example.

**Verification**

You can verify that all of the system services and pods to have two IP addresses, one for each family, by using the following steps:

1.  Retrieve the status of the pods by running the following command:
    ```terminal
    $ oc get pod -A -o wide
    ```
    ```text title="Example output"
    NAMESPACE                  NAME                                      READY   STATUS    RESTARTS        AGE     IP                NODE           NOMINATED NODE   READINESS GATES
    kube-system                csi-snapshot-controller-bb7cb654b-7s5ql   1/1     Running   0               46m     10.42.0.6         microshift-9   <none>           <none>
    openshift-dns              dns-default-zxkqn                         2/2     Running   0               46m     10.42.0.5         microshift-9   <none>           <none>
    openshift-dns              node-resolver-r2h5z                       1/1     Running   0               46m     192.168.113.117   microshift-9   <none>           <none>
    openshift-ingress          router-default-5b75594b4-228z7            1/1     Running   0               2m5s    10.42.0.3         microshift-9   <none>           <none>
    openshift-ovn-kubernetes   ovnkube-master-bltk7                      4/4     Running   2 (2m32s ago)   2m36s   192.168.113.117   microshift-9   <none>           <none>
    openshift-ovn-kubernetes   ovnkube-node-9ghgs                        1/1     Running   2 (2m32s ago)   46m     192.168.113.117   microshift-9   <none>           <none>
    openshift-service-ca       service-ca-5d7bd9db6-qgwgw                1/1     Running   0               46m     10.42.0.7         microshift-9   <none>           <none>
    openshift-storage          lvms-operator-656cd9b59b-8rpf4            1/1     Running   0               46m     10.42.0.8         microshift-9   <none>           <none>
    openshift-storage          vg-manager-wqmh4                          1/1     Running   2 (2m39s ago)   46m     10.42.0.10        microshift-9   <none>           <none>
    ```
1.  Retrieve the networks defined by the OVN-K network plugin by running the following command:
    ```terminal
    $ oc get pod -n openshift-ovn-kubernetes ovnkube-master-bltk7 -o jsonpath='{.status.podIPs}'
    ```
    ```text title="Example output"
    [{"ip":"192.168.113.117"},{"ip":"2001:db9:ca7:ff::1db8"}]
    ```
1.  Retrieve the networks defined in the node resource by running the following command:
    ```terminal
    $ oc get pod -n openshift-ingress router-default-5b75594b4-228z7 -o jsonpath='{.status.podIPs}'
    ```
    ```text title="Example output"
    [{"ip":"10.42.0.3"},{"ip":"fd01:0:0:1::3"}]
    ```

    :::note

    To return to single-stack networking, you can remove the second entry to the networks and return to the single stack that was configured before migrating to dual-stack.
    
    :::