{%- set _mod_docs_content_type = "PROCEDURE" %}
## Configuring sidecars for outgoing connections {id="ossm-security-mtls-sidecars-outgoing_{{ context }}"}

Create a destination rule to configure {{ SMProductShortName }} to use mTLS when sending requests to other services in the mesh.

**Procedure**

1.  Create a YAML file using the following example.
    ```yaml title="DestinationRule example destination-rule.yaml"
    apiVersion: networking.istio.io/v1alpha3
    kind: DestinationRule
    metadata:
      name: default
      namespace: <namespace>
    spec:
      host: "*.<namespace>.svc.cluster.local"
      trafficPolicy:
       tls:
        mode: ISTIO_MUTUAL
    ```
    1.  Replace `<namespace>` with the namespace where the service is located.
1.  Run the following command to create the resource in the namespace where the service is located. It must match the `namespace` field in the `DestinationRule` resource you just created.
    ```terminal
    $ oc create -n <namespace> -f <destination-rule.yaml>
    ```