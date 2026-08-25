{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the {{ product_title }} Ingress Controller for dual-stack networking {id="nw-router-configuring-dual-stack_{{ context }}"}

If your {{ product_title }} cluster is configured for IPv4 and IPv6 dual-stack networking, your cluster is externally reachable by {{ product_title }} routes.

The Ingress Controller automatically serves services that have both IPv4 and IPv6 endpoints, but you can configure the Ingress Controller for single-stack or dual-stack services.

**Prerequisites**

*   You deployed an {{ product_title }} cluster on bare metal.
*   You installed the OpenShift CLI (`oc`).

**Procedure**

1.  To have the Ingress Controller serve traffic over IPv4/IPv6 to a workload, you can create a service YAML file or modify an existing service YAML file by setting the `ipFamilies` and `ipFamilyPolicy` fields. For example:
    ```yaml title="Sample service YAML file"
    apiVersion: v1
    kind: Service
    metadata:
      creationTimestamp: yyyy-mm-ddT00:00:00Z
      labels:
        name: <service_name>
        manager: kubectl-create
        operation: Update
        time: yyyy-mm-ddT00:00:00Z
      name: <service_name>
      namespace: <namespace_name>
      resourceVersion: "<resource_version_number>"
      selfLink: "/api/v1/namespaces/<namespace_name>/services/<service_name>"
      uid: <uid_number>
    spec:
      clusterIP: 172.30.0.0/16
      clusterIPs: (1)
      - 172.30.0.0/16
      - <second_IP_address>
      ipFamilies: (2)
      - IPv4
      - IPv6
      ipFamilyPolicy: RequireDualStack (3)
      ports:
      - port: 8080
        protocol: TCP
        targetport: 8080
      selector:
        name: <namespace_name>
      sessionAffinity: None
      type: ClusterIP
    status:
      loadbalancer: {}
    ```
    1.  In a dual-stack instance, there are two different `clusterIPs` provided.
    1.  For a single-stack instance, enter `IPv4` or `IPv6`. For a dual-stack instance, enter both `IPv4` and `IPv6`.
    1.  For a single-stack instance, enter `SingleStack`. For a dual-stack instance, enter `RequireDualStack`.

        These resources generate corresponding `endpoints`. The Ingress Controller now watches `endpointslices`.
1.  To view `endpoints`, enter the following command:
    ```terminal
    $ oc get endpoints
    ```
1.  To view `endpointslices`, enter the following command:
    ```terminal
    $ oc get endpointslices
    ```