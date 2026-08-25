{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring sidecars for traffic management {id="ossm-routing-sidecar_{{ context }}"}

By default, {{ SMProductName }} configures every Envoy proxy to accept traffic on all the ports of its associated workload, and to reach every workload in the mesh when forwarding traffic. You can use a sidecar configuration to do the following:

*   Fine-tune the set of ports and protocols that an Envoy proxy accepts.
*   Limit the set of services that the Envoy proxy can reach.


:::note

To optimize performance of your service mesh, consider limiting Envoy proxy configurations.

:::


In the Bookinfo sample application, configure a Sidecar so all services can reach other services running in the same namespace and control plane. This Sidecar configuration is required for using {{ SMProductName }} policy and telemetry features.

**Procedure**

1.  Create a YAML file using the following example to specify that you want a sidecar configuration to apply to all workloads in a particular namespace. Otherwise, choose specific workloads using a `workloadSelector`.
    ```yaml title="Example sidecar.yaml"
    apiVersion: networking.istio.io/v1alpha3
    kind: Sidecar
    metadata:
      name: default
      namespace: bookinfo
    spec:
      egress:
      - hosts:
        - "./*"
        - "istio-system/*"
    ```
1.  Run the following command to apply `sidecar.yaml`, where `sidecar.yaml` is the path to the file.
    ```terminal
    $ oc apply -f sidecar.yaml
    ```
1.  Run the following command to verify that the sidecar was created successfully.
    ```terminal
    $ oc get sidecar
    ```