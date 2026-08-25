{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the `IPAddressPool` status {id="nw-metallb-configure-address-pool_{{ context }}"}

Check IP address allocation from your MetalLB pools by viewing the `IPAddressPool` status. This status shows the number of addresses assigned to services and the number remaining available for assignment. {._abstract}

As a cluster administrator, you can add address pools to your cluster to control the IP addresses that MetalLB can assign to load-balancer services. This example shows how to create an `IPAddressPool` custom resource (CR) and view its status. The configuration sets the advertisement mode to Layer 2 (L2).

**Prerequisites**

*   You have an {{ product_title }} cluster with the MetalLB Operator installed.
*   You have deployed a MetalLB instance.

**Procedure**

1.  Create an IP address pool.
    1.  Create a file, named for example `ipaddresspool.yaml`, with content such as the following:
        ```yaml
        apiVersion: metallb.io/v1beta1
        kind: IPAddressPool
        metadata:
          name: doc-example-l2
          namespace: metallb-system
        spec:
          addresses:
          - 192.168.122.200-192.168.122.220
          autoAssign: true
          avoidBuggyIPs: false
        ```
    1.  Apply the configuration for the IP address pool:
        ```terminal
        $ oc apply -f ipaddresspool.yaml
        ```
1.  View the status of the IP address pool by running the following command:
    ```terminal
    $ oc get ipaddresspool doc-example-l2 -n metallb-system -o yaml
    ```

    The output is similar to the following:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: IPAddressPool
    metadata:
      annotations:
        kubectl.kubernetes.io/last-applied-configuration: |
          {"apiVersion":"metallb.io/v1beta1","kind":"IPAddressPool","metadata":{"annotations":{},"name":"doc-example-l2","namespace":"metallb-system"},"spec":{"addresses":["192.168.122.200-192.168.122.220"],"autoAssign":true,"avoidBuggyIPs":false}}
      creationTimestamp: "2025-07-17T10:13:37Z"
      generation: 1
      name: doc-example-l2
      namespace: metallb-system
      resourceVersion: "29080"
      uid: 8df1c303-03ac-4d31-8970-6dacdb173dc2
    spec:
      addresses:
      - 192.168.122.200-192.168.122.220
      autoAssign: true
      avoidBuggyIPs: false
    status:
      assignedIPv4: 0
      assignedIPv6: 0
      availableIPv4: 21
      availableIPv6: 0
    ```
    *   `assignedIPv4` represents the total number of IPv4 addresses that MetalLB has successfully assigned from this pool to `LoadBalancer` services.
    *   `assignedIPv6` represents the total number of IPv6 addresses that MetalLB has successfully assigned from this pool to `LoadBalancer` services.
    *   `availableIPv4` indicates the total number of IPv4 addresses remaining and available for assignment within this pool. MetalLB calculates this value by subtracting `assignedIPv4` from the total theoretical IPv4 addresses in the `spec.addresses` ranges, potentially accounting for `avoidBuggyIPs` if enabled.
    *   `availableIPv6` indicates the total number of IPv6 addresses remaining and available for assignment within this pool. The system calculates this value similarly to `availableIPv4`, using the total theoretical IPv6 addresses in the `spec.addresses` ranges.
1.  Create an `L2Advertisement` CR for Layer 2 mode with the following sample YAML:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: L2Advertisement
    metadata:
      name: l2advertisement
      namespace: metallb-system
    spec:
      ipAddressPools:
      - doc-example-l2
    ```
    1.  Apply the configuration for the L2 advertisement by running the following command:
        ```terminal
        $ oc apply -f l2advertisement.yaml
        ```
1.  Deploy an application and expose it with a `LoadBalancer` service.
    1.  Create a file, like `nginx.yaml`, with the following content to deploy an Nginx application:
        ```yaml
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: nginx-deployment
          labels:
            app: nginx
        spec:
          replicas: 2
          selector:
            matchLabels:
              app: nginx
          template:
            metadata:
              labels:
                app: nginx
            spec:
              containers:
              - name: nginx
                image: quay.io/openshifttest/hello-openshift:multiarch
                ports:
                - containerPort: 8080
        ```
    1.  Apply the configuration by running the following command:
        ```terminal
        $ oc apply -f nginx.yaml
        ```
    1.  Expose the deployment as a `LoadBalancer` service by creating a file, such as `nginx-service.yaml`, with content like the following:
        ```yaml
        apiVersion: v1
        kind: Service
        metadata:
          name: nginx-service
          namespace: default
          annotations:
            metallb.universe.tf/address-pool: doc-example-l2
        spec:
          selector:
            app: nginx
          ports:
            - protocol: TCP
              port: 80
              targetPort: 8080
          type: LoadBalancer
        ```

        :::important

        The service must be in the same namespace as your application deployment. The `metallb.universe.tf/address-pool` annotation tells MetalLB which `IPAddressPool` to use for IP allocation.
        
        :::

    1.  Apply the service configuration by running the following command:
        ```terminal
        $ oc apply -f nginx-service.yaml
        ```
1.  View the updated `IPAddressPool` status to see the assigned and available IP addresses by running the following command:
    ```terminal
    $ oc get ipaddresspool doc-example-l2 -n metallb-system -o yaml
    ```

    The output is similar to the following:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: IPAddressPool
    metadata:
      annotations:
        kubectl.kubernetes.io/last-applied-configuration: |
          {"apiVersion":"metallb.io/v1beta1","kind":"IPAddressPool","metadata":{"annotations":{},"name":"doc-example-l2","namespace":"metallb-system"},"spec":{"addresses":["192.168.122.200-192.168.122.220"],"autoAssign":true,"avoidBuggyIPs":false}}
      creationTimestamp: "2025-07-17T10:13:37Z"
      generation: 1
      name: doc-example-l2
      namespace: metallb-system
      resourceVersion: "30250"
      uid: 8df1c303-03ac-4d31-8970-6dacdb173dc2
    spec:
      addresses:
      - 192.168.122.200-192.168.122.220
      autoAssign: true
      avoidBuggyIPs: false
    status:
      assignedIPv4: 1
      assignedIPv6: 0
      availableIPv4: 20
      availableIPv6: 0
    ```

    The `assignedIPv4` value of `1` indicates that one IPv4 address from this pool has been successfully assigned by MetalLB to your `nginx-service` `LoadBalancer`.