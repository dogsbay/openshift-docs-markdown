{%- set _mod_docs_content_type = "PROCEDURE" %}
# Recovering an unstable cluster due to admission webhooks {id="third-party-cluster-webhook-failures_{{ context }}"}

If a misconfigured admission webhook causes your cluster to fail, you must delete the webhook configuration to restore functionality. {._abstract}

**Procedure**

1.  Back up the webhook configuration. Choose either `ValidatingWebhookConfiguration` or `MutatingWebhookConfiguration` for the `<webhook_configuration>` value.
    ```terminal
    oc get <webhook_configuration> <webhook_name> -o yaml > webhook-backup.yaml
    ```
1.  Delete the webhook.
    ```terminal
    oc delete <webhook_configuration> <webhook_name>
    ```
1.  Fix the webhook configuration to exclude infrastructure namespaces when you reapply it.
    ```yaml title="Example"
    apiVersion: admissionregistration.k8s.io/v1
    kind: MutatingWebhookConfiguration
    metadata:
      name: machine-api
    webhooks:
      - name: default.machine.machine.openshift.io
        rules:
          - apiGroups: [""]
            apiVersions: ["v1"]
            operations: ["CREATE", "UPDATE"]
            resources: ["pods"]
            scope: "*"
        clientConfig:
          service:
            namespace: machine-api-operator-webhook
            name: openshift-machine-api
            path: "/validate"
        admissionReviewVersions: ["v1"]
        sideEffects: None
        timeoutSeconds: 5
        namespaceSelector:
          matchExpressions:
            - key: kubernetes.io/metadata.name
              operator: NotIn
              values:
                - openshift
                - openshift-apiserver
                - openshift-authentication
                - openshift-monitoring
                - kube-system
                - kube-public
                - kube-node-lease
                - default
    ```

    Where `kind` is the type of webhook configuration you are using. Valid values are `ValidatingWebhookConfiguration` or `MutatingWebhookConfiguration`.