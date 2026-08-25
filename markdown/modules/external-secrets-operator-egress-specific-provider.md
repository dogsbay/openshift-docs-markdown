{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a custom network policy to allow egress to a specific provider {id="external-secrets-operator-egress-specific-provider_{{ context }}"}

You must configure custom policies through the `ExternalSecretsConfig` custom resource to allow all egress to a specific provider. {._abstract}

**Prerequisites**

*   An `ExternalSecretsConfig` must be predefined.
*   You must be able to define specific egress rules, including destination ports and protocols

**Procedure**

1.  Edit the `ExternalSecretsConfig` CR by running the following command:
    ```terminal
    $ oc edit externalsecretsconfigs.operator.openshift.io cluster
    ```
1.  Set the policy by editing the `networkPolicies` section. The following example shows how to allow egress to {{ aws_first }} endpoints.
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: ExternalSecretsConfig
    metadata:
      name: cluster
    spec:
      controllerConfig:
        networkPolicies:
          - componentName: ExternalSecretsCoreController
            egress:
              # Allow egress to Kubernetes API server, AWS endpoints, and DNS
              - ports:
                  - port: 443   # HTTPS (AWS Secrets Manager)
                    protocol: TCP
          - name: allow-external-secrets-egress
    ```

    where:

    componentName
    :   Specifies the name for the core controller which is `ExternalSecretsCoreController`. Egress rules must specify the required ports, such as Transmission Control Protocol (TCP) port 443, for services such as the {{ aws_short }} Secrets Manager.