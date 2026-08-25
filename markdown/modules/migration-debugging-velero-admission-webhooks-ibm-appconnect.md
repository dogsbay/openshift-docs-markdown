{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring {{ ibm_title }} AppConnect resources {id="migration-debugging-velero-admission-webhooks-ibm-appconnect_{{ context }}"}

Troubleshoot Velero restore failures for {{ ibm_name }} AppConnect resources that use admission webhooks. Verify your webhook rules and check that the installed Operator supports the backup’s version to successfully complete the restore. {._abstract}

**Procedure**

1.  Check if you have any mutating admission plugins of `kind: MutatingWebhookConfiguration` in the cluster by entering/running the following command:
    ```terminal
    $ oc get mutatingwebhookconfigurations
    ```
1.  Examine the YAML file of each `kind: MutatingWebhookConfiguration` to ensure that none of its rules block creation of the objects that are experiencing issues. For more information, see [the official Kubernetes documentation](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#rulewithoperations-v1-admissionregistration-k8s-io).
1.  Check that any `spec.version` in `type: Configuration.appconnect.ibm.com/v1beta1` used at backup time is supported by the installed Operator.