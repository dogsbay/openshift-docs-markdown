{%- set _mod_docs_content_type = "PROCEDURE" %}
# Perform a {{ sno }} network reconfiguration {id="cnf-changing-sno-ip-configuration_{{ context }}"}

You can change the network configuration of a {{ sno }} cluster by editing the `IPConfig` custom resource (CR) and transitioning through the configuration stages. {._abstract}

**Prerequisites**

*   You have a {{ sno }} cluster.
*   You have installed the {{ lcao }}.
*   You have the new network configuration details, including IP addresses, gateways, and DNS servers.
*   You have cluster administrator privileges.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Verify that the `IPConfig` CR exists and check its current state by running the following command:
    ```terminal
    $ oc get ipc ipconfig -o yaml
    ```

    If the CR does not exist, verify that you installed the {{ lcao }}.
1.  Verify that the `spec.stage` field is set to `Idle`, the `Idle` status condition is set to `true`, and review the current network configuration in the `status` fields.

    :::note

    You can only modify spec fields when the CR is in the `Idle` stage.
    
    :::

1.  Edit the `IPConfig` CR to specify the new network configuration by running the following command:
    ```terminal
    $ oc edit ipc ipconfig
    ```
1.  Update the spec fields with your new network configuration. The following example shows a dual-stack configuration with VLAN and DNS settings:
    ```yaml
    apiVersion: lca.openshift.io/v1
    kind: IPConfig
    metadata:
      name: ipconfig
    spec:
      stage: Idle
      ipv4:
        address: 192.0.2.10
        machineNetwork: 192.0.2.0/24
        gateway: 192.0.2.1
      ipv6:
        address: 2001:db8::10
        machineNetwork: 2001:db8::/64
        gateway: 2001:db8::1
      dnsServers:
      - 192.0.2.53
      - 2001:4860:4860::8888
      vlanID: 100
      dnsFilterOutFamily: none
      autoRollbackOnFailure:
        initMonitorTimeoutSeconds: 1800
    ```

    where:

    `spec.stage`
    :   Set this field to `Config` when you are ready to apply the new network settings.

    `spec.ipv4.address`
    :   Specifies the target IPv4 address. Must be within the machine network CIDR.

    `spec.ipv4.machineNetwork`
    :   Specifies the target machine network CIDR.

    `spec.ipv4.gateway`
    :   Specifies the target default gateway.

    `spec.dnsServers`
    :   Specifies an ordered list of DNS servers. The first server in the list is used as the primary DNS server. Use a maximum of two servers.

    `spec.vlanID`
    :   Specifies an optional VLAN ID. Only specify if the cluster already has VLAN configuration.

    `spec.dnsFilterOutFamily`
    :   Specifies optional DNS filtering for dual-stack clusters. Set to `ipv4` or `ipv6` to filter out A or AAAA records respectively.

    `spec.autoRollbackOnFailure.initMonitorTimeoutSeconds`
    :   Specifies the timeout in seconds for automatic rollback if the configuration does not complete. The default value is 1800 seconds, or 30 minutes.

1.  After saving the configuration, change the stage to `Config` to start the network reconfiguration by running the following command:
    ```terminal
    $ oc patch ipc ipconfig --type merge -p '{"spec":{"stage":"Config"}}'
    ```

    :::note

    After triggering the network reconfiguration, update your external DNS servers to resolve the cluster’s new API and ingress endpoints.
    
    :::

1.  Monitor the progress of the configuration by running the following command:
    ```terminal
    $ oc get ipc ipconfig -o yaml
    ```

    Watch for the following progression:
    *   The controller sets the `ConfigInProgress` condition
    *   The pre-pivot phase runs and triggers a reboot
    *   After reboot, the post-pivot phase applies the network changes
    *   The controller waits for cluster stabilization
    *   The `ConfigCompleted` condition is set when successful
1.  After the configuration completes successfully, verify that the `status.validNextStages` field includes `Idle` and `Rollback`.
1.  Verify the new network configuration by running the following command:
    ```terminal
    $ oc get nodes -o wide
    ```
1.  Verify cluster health by running the following command:
    ```terminal
    $ oc get clusteroperators
    ```
1.  When you are satisfied with the new configuration, finalize the change by setting the stage to `Idle`. Run the following command:
    ```terminal
    $ oc patch ipc ipconfig --type merge -p '{"spec":{"stage":"Idle"}}'
    ```

    :::important

    After you finalize the configuration by transitioning to `Idle`, you cannot roll back to the previous network configuration. The old stateroot is removed during `Idle` state cleanup.
    
    :::