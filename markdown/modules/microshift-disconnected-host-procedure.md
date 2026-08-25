{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the networking settings for fully disconnected hosts {id="microshift-disconnected-host-network-config_{{ context }}"}

To configure the networking settings for running {{ microshift_short }} on a fully disconnected host, you must prepare the host, update the networking configuration, then restart to apply the new settings. All commands are executed from the host CLI. {._abstract}

**Prerequisites**

*   RHEL 9 or newer.
*   {{ microshift_short }} 4.16 or newer.
*   Access to the host CLI.
*   A valid IP address chosen to avoid both internal and potential future external IP conflicts when running {{ microshift_short }}.
*   {{ microshift_short }} networking settings are set to defaults.


:::important

The following procedure is for use cases in which access to the {{ microshift_short }} node is not required after devices are deployed in the field. There is no remote node access after the network connection is removed.

:::


**Procedure**

1.  Add a fake IP address to the loopback interface by running the following command:
    ```terminal
    $ IP="10.44.0.1"
    ```

    The fake IP address used in this example is `"10.44.0.1"`.
    ```terminal
    $ sudo nmcli con add type loopback con-name stable-microshift ifname lo ip4 ${IP}/32
    ```

    :::note

    Any valid IP works if it avoids both internal {{ microshift_short }} and potential future external IP conflicts. This can be any subnet that does not collide with the {{ microshift_short }} node subnet or is be accessed by other services on the device.
    
    :::

1.  Configure the DNS interface to use the local name server by setting modifying the settings to ignore automatic DNS and reset it to the local name server:
    1.  Bypass the automatic DNS by running the following command:
        ```terminal
        $ sudo nmcli conn modify stable-microshift ipv4.ignore-auto-dns yes
        ```
    1.  Point the DNS interface to use the local name server:
        ```terminal
        $ sudo nmcli conn modify stable-microshift ipv4.dns "10.44.1.1"
        ```
1.  Get the hostname of the device by running the following command:
    ```terminal
    $ NAME="$(hostnamectl hostname)"
    ```
1.  Add an entry for the hostname of the node in the `/etc/hosts` file by running the following command:
    ```terminal
    $ echo "$IP $NAME" | sudo tee -a /etc/hosts >/dev/null
    ```
1.  Update the {{ microshift_short }} configuration file by adding the following YAML snippet to `/etc/microshift/config.yaml`:
    ```terminal
    sudo tee /etc/microshift/config.yaml > /dev/null <<EOF
    node:
      hostnameOverride: $(echo $NAME)
      nodeIP: $(echo $IP)
    EOF
    ```
1.  {{ microshift_short }} is now ready to use the loopback device for intra-node communications. Finish preparing the device for offline use.
    1.  If the device currently has a NIC attached, disconnect the device from the network.
    1.  Shut down the device and disconnect the NIC.
    1.  Restart the device for the offline configuration to take effect.
1.  Restart the {{ microshift_short }} host to apply the configuration changes by running the following command:
    ```terminal
    $ sudo systemctl reboot
    ```

    This step restarts the node. Wait for the greenboot health check to report the system healthy before implementing verification.

**Verification**

At this point, network access to the {{ microshift_short }} host has been severed. If you have access to the host terminal, you can use the host CLI to verify that the node has started in a stable state.

1.  Verify that the {{ microshift_short }} node is running by entering the following commands:
    ```terminal
    $ export KUBECONFIG=/var/lib/microshift/resources/kubeadmin/kubeconfig
    ```
    ```terminal
    $ sudo -E oc get pods -A
    ```
    ```terminal title="Example output"
    NAMESPACE                  NAME                                       READY   STATUS    RESTARTS      AGE
    kube-system                csi-snapshot-controller-74d566564f-66n2f   1/1     Running   0             1m
    openshift-dns              dns-default-dxglm                          2/2     Running   0             1m
    openshift-dns              node-resolver-dbf5v                        1/1     Running   0             1m
    openshift-ingress          router-default-8575d888d8-xmq9p            1/1     Running   0             1m
    openshift-ovn-kubernetes   ovnkube-master-gcsx8                       4/4     Running   1             1m
    openshift-ovn-kubernetes   ovnkube-node-757mf                         1/1     Running   1             1m
    openshift-service-ca       service-ca-7d7c579f54-68jt4                1/1     Running   0             1m
    openshift-storage          topolvm-controller-6d777f795b-bx22r        5/5     Running   0             1m
    openshift-storage          topolvm-node-fcf8l                         4/4     Running   0             1m
    ```