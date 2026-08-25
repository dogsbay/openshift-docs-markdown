{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the External Secrets operand by using the CLI {id="external-secrets-operand-install-cli_{{ context }}"}

To install the External Secrets operand, create an instance of the `ExternalSecrets` custom resource by using the command-line interface (CLI) which deploys necessary operand components such as the core controller, webhook, and certificate controller into the `external-secrets` namespace. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.

**Procedure**

1.  Create an `externalsecretsconfig.openshift.operator.io` object by defining a YAML file with the following content:
    ```yaml title="Example externalsecretsconfig.yaml file"
    apiVersion: operator.openshift.io/v1alpha1
    kind: ExternalSecretsConfig
    metadata:
      labels:
        app: external-secrets-operator
        app.kubernetes.io/name: cluster
      name: cluster
    spec:
      controllerConfig:
        networkPolicies:
        - componentName: ExternalSecretsCoreController
          egress:
          - {}
          name: allow-external-secrets-egress
    ```

    For more information on spec configuration, see "External Secrets Operator for Red Hat OpenShift APIs".
1.  Create the `externalsecretsconfigs.openshift.operator.io` object by running the following command:
    ```terminal
    $ oc create -f externalsecretsconfig.yaml
    ```

**Verification**

1.  Verify that the `external-secrets` pods are running by entering the following command:
    ```terminal
    $ oc get pods -n external-secrets
    ```
    ```terminal title="Example output"
    NAME                                                READY   STATUS    RESTARTS   AGE
    external-secrets-75d47cb9c8-6p4n2                   1/1     Running   0          4h5m
    external-secrets-cert-controller-676444b897-qb6ft   1/1     Running   0          4h5m
    external-secrets-webhook-b566658ff-7m4d5            1/1     Running   0          4h5m
    ```
1.  Verify that the `external-secrets-operator` deployment object reports a successful status by running the following command:
    ```terminal
    $ oc get externalsecretsconfig.operator.openshift.io cluster -n external-secrets-operator -o jsonpath='{.status.conditions}' | jq .
    ```
    ```terminal title="Example output"
    [
      {
        "lastTransitionTime": "2025-06-17T14:57:04Z",
        "message": "",
        "observedGeneration": 2,
        "reason": "Ready",
        "status": "False",
        "type": "Degraded"
      },
      {
        "lastTransitionTime": "2025-11-27T05:58:38Z,
        "message": "reconciliation successful",
        "observedGeneration": 2,
        "reason": "Ready",
        "status": "True",
        "type": "Ready"
      }
    ]
    ```

**Next step**

*   Configure the network policies of the operand as described in "Configuring network policy for the operand".