{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring sidecars for incoming connections for specific services {id="ossm-security-mtls-sidecars-incoming-services_{{ context }}"}

You can also configure mTLS for individual services by creating a policy.

**Procedure**

1.  Create a YAML file using the following example.
    ```yaml title="PeerAuthentication Policy example policy.yaml"
    apiVersion: security.istio.io/v1beta1
    kind: PeerAuthentication
    metadata:
      name: default
      namespace: <namespace>
    spec:
      mtls:
        mode: STRICT
    ```
    1.  Replace `<namespace>` with the namespace where the service is located.
1.  Run the following command to create the resource in the namespace where the service is located. It must match the `namespace` field in the Policy resource you just created.
    ```terminal
    $ oc create -n <namespace> -f <policy.yaml>
    ```


:::note

If you are not using automatic mTLS and you are setting `PeerAuthentication` to STRICT, you must create a `DestinationRule` resource for your service.

:::