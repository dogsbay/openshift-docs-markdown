{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshoot connectivity for pods that use underlay routing {id="nw-no-overlay-troubleshooting_{{ context }}"}

To troubleshoot connectivity and resolve no-overlay connectivity issues, you can verify BGP sessions, route advertisements, and network status. {._abstract}

**Prerequisites**

*   You have cluster-admin privileges.
*   You configured no-overlay mode for the default network or a `ClusterUserDefinedNetwork` (CUDN) CR.

**Procedure**

1.  Verify that FRR-K8s pods are running by running the following command:
    ```terminal
    $ oc get pods -n openshift-frr-k8s
    ```
1.  If you configured no-overlay for the default network, verify the Cluster Network Operator (CNO) CR by running the following command:
    ```terminal
    $ oc get network.operator cluster -o yaml
    ```

    Confirm that `spec.defaultNetwork.ovnKubernetesConfig` includes the expected `routeAdvertisements`, `transport`, and `noOverlayConfig` values.
1.  If you use unmanaged routing, verify `RouteAdvertisements` objects by running the following commands:
    ```terminal
    $ oc describe routeadvertisements <routeadvertisements_name>
    ```

    Replace `<routeadvertisements_name>` with the name of your `RouteAdvertisements` object.

    The output should show `Accepted=True` in the `status` section.

    :::note

    If you use managed routing, you typically do not create `RouteAdvertisements` yourself for intra-cluster-only designs; if pod connectivity fails, continue with the remaining steps in this procedure.
    
    :::

1.  If you configured a no-overlay `ClusterUserDefinedNetwork` CR, check its status by running the following command:
    ```terminal
    $ oc get clusteruserdefinednetwork <cudn_name> -o yaml
    ```

    Replace `<cudn_name>` with the name of your CUDN CR.
1.  Check for BGP-related errors in the OVN-Kubernetes logs by entering the following command:
    ```terminal
    $ oc logs -n openshift-ovn-kubernetes -l app=ovnkube-node
    ```
1.  Confirm that pod subnets are present in the node routing table by entering the following command:
    ```terminal
    $ oc debug node/<node_name> -- chroot /host ip route
    ```