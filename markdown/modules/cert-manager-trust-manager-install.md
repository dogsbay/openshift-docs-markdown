{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the trust-manager operand {id="cert-manager-trust-manager-install_{{ context }}"}

You can install the trust-manager operand to enable the automated distribution of trust bundles across your cluster namespaces. The trust-manager operand is not installed by default. {._abstract}

{%- set FeatureName = "Distributing certificates by using trust manager" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have installed {{ cert_manager_operator }}.

**Procedure**

1.  Enable the trust manager add-on feature in the Operator subscription by running the following command:
    ```terminal
    oc -n cert-manager-operator patch subscription cert-manager-operator \
      --type='merge' \
      -p '{"spec":{"config":{"env":[{"name":"UNSUPPORTED_ADDON_FEATURES","value":"TrustManager=true"}]}}}'
    ```
1.  Create a YAML file, for example, `trust-manager.yaml`, that defines the `TrustManager` custom resource (CR) as shown in the following example:
    ```yaml title="Example trust-manager.yaml"
    apiVersion: operator.openshift.io/v1alpha1
    kind: TrustManager
    metadata:
      name: cluster
    spec:
      trustManagerConfig:
        logLevel: 2
        logFormat: "text"
        trustNamespace: "cert-manager"
        filterExpiredCertificates: "Enabled"
        secretTargets:
          policy: "Custom"
          authorizedSecrets:
            - "my-trust-bundle"
            - "app-ca-bundle"
        defaultCAPackage:
          policy: "Enabled"
        resources: {}
        affinity: {}
        tolerations: []
        nodeSelector: {}
      controllerConfig:
        labels:
          environment: "production"
          team: "platform"
        annotations:
          example.com/managed-by: "cert-manager-operator"
    ```

    :::note

    Because you can create only one instance of `TrustManager` CR per cluster, the `metadata.name` field must be set to `cluster`.
    
    :::

1.  Create the `TrustManager` CR by running the following command:
    ```terminal
    $ oc create -f trust-manager.yaml
    ```

**Verification**

*   Verify that the `trust-manager` operand is running successfully by running the following command:
    ```terminal
    $ oc get TrustManager cluster -o jsonpath='{.status.conditions}' | jq
    ```
    ```terminal title="Example output"
    [
      {
        "lastTransitionTime": "2026-03-27T11:54:50Z",
        "message": "",
        "reason": "Ready",
        "status": "False",
        "type": "Degraded"
      },
      {
        "lastTransitionTime": "2026-03-27T11:54:50Z",
        "message": "reconciliation successful",
        "reason": "Ready",
        "status": "True",
        "type": "Ready"
      }
    ]
    ```

    The `message` field in the output must have the value `reconciliation successful`.
*   Verify that the `trust-manager` deployment is running successfully in the `cert-manager` namespace:
    ```terminal
    $ oc get Deployments -l "app.kubernetes.io/name=cert-manager-trust-manager" -n cert-manager
    ```
    ```terminal title="Example output"
    NAME            READY   UP-TO-DATE   AVAILABLE   AGE
    trust-manager   1/1     1            1           109s
    ```
*   Verify that the status of the pod is `Running` by running the following command:
    ```terminal
    $ oc get pods -l "app.kubernetes.io/name=cert-manager-trust-manager" -n cert-manager
    ```
    ```terminal title="Example output"
    NAME                             READY   STATUS    RESTARTS   AGE
    trust-manager-547bb59b4b-hd6mv    1/1     Running   0          24s
    ```

**Next Step**

*   Configuring trust bundle