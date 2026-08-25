{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure router IP addresses {id="microshift-config-ip-addresses_{{ context }}"}

To limit ingress to selected host IP addresses or network interfaces in {{ microshift_short }}, you can set the `ingress.listenAddress` list in your `config.yaml` file. {._abstract}

You can restrict the network traffic to the router by configuring specific IP addresses. For example:

*   Use cases where the router is reachable only on internal networks, but not on northbound public networks
*   Use cases where the router is reachable only by northbound public networks, but not on internal networks
*   Use cases where the router is reachable by both internal networks and northbound public networks, but on separate IP addresses

**Prerequisites**

*   You installed {{ microshift_short }}.
*   You created a {{ microshift_short }} `config.yaml` file.
*   The {{ oc_first }} is installed.


:::tip

If you complete all the configurations that you need to make in the {{ microshift_short }} `config.yaml` file at the same time, you can minimize system restarts.

:::


**Procedure**

1.  Update the list in the `ingress.listenAddress` field in the {{ microshift_short }} `config.yaml` according to your requirements and as shown in the following examples:
    ```yaml title="Default router IP address list"
    # ...
    ingress:
      listenAddress:
        - "<host_network>"
    # ...
    ```

    where:

    `ingress.listenAddress`
    :   Specifies the IP addresses or network interfaces to limit ingress to. The default value is the entire network of the host. To continue to use the default list, remove the `listen.Address` field from the {{ microshift_short }} `config.yaml` file. To customize this parameter, use a list. The list can contain either a single IP address or NIC name or multiple IP addresses and NIC names.

    :::important

    You must either remove the `listenAddress` parameter or add values to it in the form of a list when using the `config.yaml` file. Do not leave the field empty or {{ microshift_short }} crashes on restart.
    
    :::

    ```yaml title="Example router setting with a single host IP address"
    # ...
    ingress:
      listenAddress:
        - 10.2.1.100
    # ...
    ```
    ```yaml title="Example router setting with a combination of IP addresses and NIC names"
    # ...
    ingress:
      listenAddress:
        - 10.2.1.100
        - 10.2.2.10
        - ens3
    # ...
    ```
1.  Restart the {{ microshift_short }} service by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```

**Verification**

*   To verify that your settings are applied, make sure that the `ingress.listenAddress` IP addresses are reachable, then you can `curl` the route with the destination to one of these load balancer IP address.