{%- set _mod_docs_content_type = "PROCEDURE" %}
# Expanding the node port range {id="nw-nodeport-service-range-edit_{{ context }}"}

To expand the node port range for your {{ product_title }} cluster after installation, you can use the `oc patch` command to update the `serviceNodePortRange` parameter. You can expand the range on either side, but you cannot shrink it after installation. {._abstract}


:::important

Red&#160;Hat has not performed testing outside the default port range of `30000-32768`. For ranges outside the default port range, ensure that you test to verify that expanding your node port range does not impact your cluster. If you expanded the range and a port allocation issue occurs, create a new cluster and set the required range for it.

:::



:::important

When expanding the `serviceNodePortRange` parameter, ensure the value you set for the parameter does not overlap with the ephemeral port range, `net.ipv4.ip_local_port_range`, of the kernel.

OVN-Kubernetes uses this ephemeral range for source network address translation (SNAT) source port selection on outbound pod traffic. When a SNAT source port coincides with a node port number, return traffic can be misrouted, causing intermittent outbound TCP connection timeouts.

For more information, see "Safe and unsafe sysctls" in the _Additional resources_ section.

:::


**Prerequisites**

*   Installed the {{ oc_first }}.
*   Logged in to the cluster as a user with `cluster-admin` privileges.
*   You ensured that your cluster infrastructure allows access to the ports that exist in the extended range. For example, if you expand the node port range to `30000-32900`, your firewall or packet filtering configuration must allow the inclusive port range of `30000-32900`.

**Procedure**

*   To expand the range for the `serviceNodePortRange` parameter in the `network.config.openshift.io` object that your cluster uses to manage traffic for pods, enter the following command:
    ```terminal
    $ oc patch network.config.openshift.io cluster --type=merge -p \
      '{
        "spec":
          { "serviceNodePortRange": "<port_range>" }
      }'
    ```
    where:


    `<port_range>`
    :   Specifies the expanded range, such as `30000-32900`.

    :::tip

    You can also apply the following YAML to update the node port range:

    ```yaml
    apiVersion: config.openshift.io/v1
    kind: Network
    metadata:
      name: cluster
    spec:
      serviceNodePortRange: "<port_range>"
    # ...
    ```
    
    :::

    ```terminal title="Example output"
    network.config.openshift.io/cluster patched
    ```

**Verification**

*   To confirm that the updated configuration is active, enter the following command. The update can take several minutes to apply.
    ```terminal
    $ oc get configmaps -n openshift-kube-apiserver config \
      -o jsonpath="{.data['config\.yaml']}" | \
      grep -Eo '"service-node-port-range":["[[:digit:]]+-[[:digit:]]+"]'
    ```
    ```terminal title="Example output"
    "service-node-port-range":["30000-32900"]
    ```