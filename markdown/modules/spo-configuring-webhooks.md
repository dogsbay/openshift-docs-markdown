{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure webhooks {id="spo-configuring-webhooks_{{ context }}"}

Configure webhooks for profile binding and recording so you can limit them to selected namespaces or objects, or allow requests to continue if a webhook fails. Profile binding and recording object configurations are `MutatingWebhookConfiguration` CRs, managed by the Security Profiles Operator. {._abstract}

To change the webhook configuration, edit the `webhookOptions` field in the `spod` custom resource. You can modify the `failurePolicy`, `namespaceSelector`, and `objectSelector` variables to set the webhooks to soft-fail or to restrict them to a subset of namespaces. If a webhook fails, other namespaces or resources are not affected.

**Procedure**

1.  Set the `recording.spo.io` webhook configuration to record only pods labeled with `spo-record=true` by creating the following patch file:
    ```yaml
    spec:
      webhookOptions:
        - name: recording.spo.io
          objectSelector:
            matchExpressions:
              - key: spo-record
                operator: In
                values:
                  - "true"
    ```
1.  Patch the `spod/spod` instance by running the following command:
    ```terminal
    $ oc -n openshift-security-profiles patch spod \
        spod -p $(cat /tmp/spod-wh.patch) --type=merge
    ```
1.  To view the resulting `MutatingWebhookConfiguration` object, run the following command:
    ```terminal
    $ oc get MutatingWebhookConfiguration \
        spo-mutating-webhook-configuration -oyaml
    ```