{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding the registry CA to the compute nodes for the hosted cluster {id="hcp-dc-tls-hosted_{{ context }}"}

To ensure that the data plane compute nodes in the hosted cluster can retrieve images from the private registry, you must add the registry certificate authority (CA) to the compute nodes. {._abstract}

**Procedure**

1.  In the `hc.spec.additionalTrustBundle` file, add the following specification:
    ```yaml
    spec:
      additionalTrustBundle:
        name: user-ca-bundle
    ```

    The `user-ca-bundle` entry is a config map that you create in the next step.
1.  In the same namespace where the `HostedCluster` object is created, create the `user-ca-bundle` config map. The config map resembles the following example:
    ```yaml
    apiVersion: v1
    data:
      ca-bundle.crt: |
        // Registry1 CA
        -----BEGIN CERTIFICATE-----
        -----END CERTIFICATE-----

        // Registry2 CA
        -----BEGIN CERTIFICATE-----
        -----END CERTIFICATE-----

        // Registry3 CA
        -----BEGIN CERTIFICATE-----
        -----END CERTIFICATE-----

    kind: ConfigMap
    metadata:
      name: user-ca-bundle
      namespace: <hosted_cluster_namespace>
    ```

    Specify the namespace where the `HostedCluster` object is created.