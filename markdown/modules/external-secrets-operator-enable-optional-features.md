{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling optional features for {{ external_secrets_operator }} {id="external-secrets-operator-enable-optional-features_{{ context }}"}

The {{ external_secrets_operator }} supports optional capabilities that can be enabled cluster-wide through the `ExternalSecretsManager` custom resource (CR). Features are disabled by default and must be explicitly enabled. {._abstract}

You can enable or disable a feature at any time. The Operator reconciles the core controller deployment when the feature state changes, without requiring a restart or reinstallation.


:::warning

`UnsafeAllowGenericTargets` is a pre-release feature. It is not recommended for production use. Enabling this feature allows `ExternalSecret` resources to write secret data to arbitrary Kubernetes resource types beyond Secret objects. This might cause data managed by other controllers to be overwritten and can expose sensitive values through non-secret resources. This feature provides no additional access control beyond standard Kubernetes role-based access control (RBAC).

:::


When enabled, `ExternalSecret` resources can target arbitrary Kubernetes resource types as their sync destination, instead of being limited to `Secret` objects.

The Operator passes the `--unsafe-allow-generic-targets=true` flag to the core `external-secrets` controller. The webhook and cert-controller are not affected.

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have installed the {{ external_secrets_operator }} and created the `ExternalSecretsConfig` CR.

**Procedure**

1.  Edit the `ExternalSecretsManager` CR by running the following command:
    ```terminal
    $ oc edit externalsecretsmanagers.operator.openshift.io cluster
    ```
1.  Add the `features` field under `spec` and set the desired feature mode:
    ```yaml
    apiVersion: operator.openshift.io/v1alpha1
    kind: ExternalSecretsManager
    metadata:
      name: cluster
    spec:
      features:
        - name: UnsafeAllowGenericTargets
          mode: Enabled
    ```

    To disable the feature, set `mode: Disabled` or remove the entry from the features list.

**Verification**

1.  Verify that the feature flag is passed to the core controller by running the following command:
    ```terminal
    $ oc get deployment external-secrets \
      -n external-secrets \
      -o jsonpath='{.spec.template.spec.containers[0].args}' | jq .
    ```
    ```json title="Example output"
    [
      "--concurrent=1",
      "--metrics-addr=:8080",
      "--loglevel=warn",
      "--zap-time-encoding=epoch",
      "--enable-leader-election=true",
      "--enable-push-secret-reconciler=true",
      "--enable-cluster-store-reconciler=true",
      "--enable-cluster-external-secret-reconciler=true",
      "--unsafe-allow-generic-targets=true"
    ]
    ```


    When the feature is enabled, the output includes `--unsafe-allow-generic-targets=true`. When disabled or not configured, the flag is absent.
1.  Verify that the `ExternalSecretsManager` CR reflects the configured feature by running the following command:
    ```terminal
    $ oc get externalsecretsmanagers.operator.openshift.io cluster -o jsonpath='{.spec.features}' | jq .
    ```
    ```json title="Example output"
    [
      {
        "mode": "Enabled",
        "name": "UnsafeAllowGenericTargets"
      }
    ]
    ```