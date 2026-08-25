{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a custom network policy to allow egress to all external providers {id="external-secrets-operator-egress-allow-all-traffic_{{ context }}"}

You must configure custom policies through the `ExternalSecretsConfig` custom resource to allow all egress to all external providers. {._abstract}

**Prerequisites**

*   An `ExternalSecretsConfig` must be predefined.
*   You must be able to define specific egress rules, including destination ports and protocols.

**Procedure**

1.  Edit the `ExternalSecretsConfig` CR by running the following command:
    ```terminal
    $ oc edit externalsecretsconfigs.operator.openshift.io cluster
    ```
1.  Set the policy by editing the `networkPolicies` section:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: ExternalSecretsConfig
    metadata:
      name: cluster
    spec:
      controllerConfig:
        networkPolicies:
          - name: allow-external-secrets-egress
            componentName: CoreController
            egress: # Allow all egress traffic
    ```