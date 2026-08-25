{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling IP forwarding globally {id="nw-cno-enable-ip-forwarding_{{ context }}"}

From {{ product_title }} 4.14 onward, OVN-Kubernetes disables global IP forwarding by default. By setting the Cluster Network Operator `gatewayConfig.ipForwarding` spec to `Global`, you can enable cluster-wide forwarding. {._abstract}

**Procedure**

1.  Backup the existing network configuration by running the following command:
    ```terminal
    $ oc get network.operator cluster -o yaml > network-config-backup.yaml
    ```
1.  Run the following command to modify the existing network configuration:
    ```terminal
    $ oc edit network.operator cluster
    ```
    1.  Add or update the following block under `spec` as illustrated in the following example:
        ```yaml
        spec:
          clusterNetwork:
          - cidr: 10.128.0.0/14
            hostPrefix: 23
          serviceNetwork:
          - 172.30.0.0/16
          networkType: OVNKubernetes
          clusterNetworkMTU: 8900
          defaultNetwork:
            ovnKubernetesConfig:
              gatewayConfig:
                ipForwarding: Global
        ```
    1.  Save and close the file.
1.  After applying the changes, the OpenShift Cluster Network Operator (CNO) applies the update across the cluster. You can monitor the progress by using the following command:
    ```terminal
    $ oc get clusteroperators network

    ```

    The status should eventually report as `Available`, `Progressing=False`, and `Degraded=False`.
1.  Alternatively, you can enable IP forwarding globally by running the following command:
    ```terminal
    $ oc patch network.operator cluster -p '{"spec":{"defaultNetwork":{"ovnKubernetesConfig":{"gatewayConfig":{"ipForwarding": "Global"}}}}}' --type=merge
    ```

    :::note

    The other valid option for this parameter is `Restricted` in case you want to revert this change. `Restricted` is the default and with that setting global IP address forwarding is disabled.
    
    :::