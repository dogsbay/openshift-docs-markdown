{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the ServiceBGPStatus custom resource {id="nw-viewing-service-bgp-status_{{ context }}"}

You can verify border gateway protocol (BGP) advertisement status for your services by viewing the `ServiceBGPStatus` custom resource, which shows which BGP peers receive advertisements from each node. This is essential for debugging connectivity in telco environments. {._abstract}

The `ServiceBGPStatus` CR reports the BGP peering status for a service, detailing which neighbors are receiving updates from a specific node.


:::note

`ServiceBGPStatus` resources are created in the `metallb-system` namespace, not in the namespace where your `LoadBalancer` service is deployed. Always query these resources with `-n metallb-system`.

:::


**Prerequisites**

*   You have an {{ product_title }} cluster with the MetalLB Operator installed.
*   You have deployed a MetalLB instance.

This example shows how to configure MetalLB for BGP mode, deploy a service, and view the `ServiceBGPStatus` to verify BGP advertisements.

**Procedure**

1.  Create an `IPAddressPool` CR for BGP, like the following example, and save it as `ipaddresspool.yaml`:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: IPAddressPool
    metadata:
      name: bgp-pool
      namespace: metallb-system
    spec:
      addresses:
      - 192.168.122.210-192.168.122.220
      autoAssign: true
    ```
1.  Run the following command to create the `IPAddressPool` configuration:
    ```terminal
    $ oc apply -f ipaddresspool.yaml
    ```
1.  To configure a BGP peer, create a file named `bgppeer.yaml` with the following content:
    ```yaml
    apiVersion: metallb.io/v1beta2
    kind: BGPPeer
    metadata:
      name: bgp-peer
      namespace: metallb-system
    spec:
      myASN: 64501
      peerASN: 64500
      peerAddress: 192.168.1.1
    ```
    *   Set the `spec:peerAddress` field to the IP address of your BGP router.
1.  Apply the BGPPeer configuration by running the following command:
    ```terminal
    $ oc apply -f bgppeer.yaml
    ```
1.  To create a BGP advertisement to advertise the pool, create a file named `bgpadvertisement.yaml` with the following content:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: BGPAdvertisement
    metadata:
      name: bgp-advertisement
      namespace: metallb-system
    spec:
      ipAddressPools:
      - bgp-pool
    ```
1.  Apply the BGPAdvertisement configuration by running the following command:
    ```terminal
    $ oc apply -f bgpadvertisement.yaml
    ```
1.  Deploy an application and expose it with a `LoadBalancer` service. For this example, create a simple test application named for example `test-app` by creating a file named `deployment.yaml` with the following content:
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: test-app
      namespace: default
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: test-app
      template:
        metadata:
          labels:
            app: test-app
        spec:
          containers:
          - name: test-app
            image: quay.io/openshifttest/hello-openshift:multiarch
            ports:
            - containerPort: 8080
    ```
1.  Apply the deployment:
    ```terminal
    $ oc apply -f deployment.yaml
    ```
1.  Create a `LoadBalancer` service for the application:
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: test-service
      namespace: default
    spec:
      selector:
        app: test-app
      ports:
        - protocol: TCP
          port: 80
          targetPort: 8080
      type: LoadBalancer
    ```

    :::important

    The system creates `ServiceBGPStatus` resources automatically only when the service has at least one ready endpoint (running pod). Ensure your application pods are running before checking for `ServiceBGPStatus` resources.
    
    :::

1.  Apply the service configuration by running the following command:
    ```terminal
    $ oc apply -f service.yaml
    ```
1.  Verify the service received an external IP by running the following command:
    ```terminal
    $ oc get svc test-service -n default
    ```

    The output is similar to the following:
    ```terminal
    NAME           TYPE           CLUSTER-IP       EXTERNAL-IP       PORT(S)        AGE
    test-service   LoadBalancer   172.30.116.108   192.168.122.210   80:32431/TCP   2m
    ```
1.  View the `ServiceBGPStatus` resources by running the following command:
    ```terminal
    $ oc get servicebgpstatus -n metallb-system
    ```

    The output is similar to the following:
    ```terminal
    NAME                  NODE       SERVICE NAME   SERVICE NAMESPACE
    bgp-xxxxx             worker0    test-service   default
    ```

    :::note

    `ServiceBGPStatus` resources are created with generated names. Use labels to find the status for your service:

    ```terminal
    $ oc get servicebgpstatus -n metallb-system -l metallb.io/service-name=test-service
    ```
    
    :::

1.  View the details of the `ServiceBGPStatus` CR for your service:
    ```terminal
    $ oc get servicebgpstatus bgp-xxxxx -n metallb-system -o yaml
    ```

    The output is similar to the following:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: ServiceBGPStatus
    metadata:
      name: bgp-xxxxx
      namespace: metallb-system
      labels:
        metallb.io/node: worker0
        metallb.io/service-name: test-service
        metallb.io/service-namespace: default
    status:
      node: worker0
      peers:
      - bgp-peer
      serviceName: test-service
      serviceNamespace: default
    ```
    *   `metadata.labels.metallb.io/node` indicates the node that is advertising the service via BGP.
    *   `metadata.labels.metallb.io/service-name` identifies the service being advertised.
    *   `metadata.labels.metallb.io/service-namespace` identifies the namespace of the service being advertised.
    *   `status.node` confirms the name of the node advertising the service.
    *   `status.peers` lists the names of the BGPPeer resources to which the service is being advertised. This is useful for confirming that the advertisement is reaching the intended peers.
    *   `status.serviceName` indicates the name of the service being advertised.
    *   `status.serviceNamespace` indicates the namespace of the service being advertised.