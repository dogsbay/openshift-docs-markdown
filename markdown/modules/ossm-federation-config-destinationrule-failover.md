{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a DestinationRule for failover {id="ossm-federation-config-destinationrule-failover_{{ context }}"}

Create a `DestinationRule` resource that configures the following:

*   Outlier detection for the service. This is required in order for failover to function properly. In particular, it configures the sidecar proxies to know when endpoints for a service are unhealthy, eventually triggering a failover to the next locality.
*   Failover policy between regions. This ensures that failover beyond a region boundary will behave predictably.

**Procedure**

1.  Log in to the {{ product_title }} CLI as a user with the `cluster-admin` role. Enter the following command. Then, enter your username and password when prompted.
    ```terminal
    $ oc login --username=<NAMEOFUSER> <API token> https://<HOSTNAME>:6443
    ```
1.  Change to the project where you installed the {{ SMProductShortName }} control plane.
    ```terminal
    $ oc project <smcp-system>
    ```

    For example, `green-mesh-system`.
    ```terminal
    $ oc project green-mesh-system
    ```
1.  Create a `DestinationRule` file based on the following example where if green-mesh is unavailable, the traffic should be routed from the green-mesh in the `us-east` region to the red-mesh in `us-west`.
    ```yaml title="Example DestinationRule"
    apiVersion: networking.istio.io/v1beta1
    kind: DestinationRule
    metadata:
      name: default-failover
      namespace: bookinfo
    spec:
      host: "ratings.bookinfo.svc.cluster.local"
      trafficPolicy:
        loadBalancer:
          localityLbSetting:
            enabled: true
            failover:
              - from: us-east
                to: us-west
        outlierDetection:
          consecutive5xxErrors: 3
          interval: 10s
          baseEjectionTime: 1m
    ```
1.  Deploy the `DestinationRule`, where `<DestinationRule>` includes the full path to your file, enter the following command:
    ```terminal
    $ oc create -n <application namespace> -f <DestinationRule.yaml>
    ```

    For example:
    ```terminal
    $ oc create -n bookinfo -f green-mesh-us-west-DestinationRule.yaml
    ```