{%- set _mod_docs_content_type = "CONCEPT" %}
# About Velero restore issues with admission webhooks {id="oadp-about-velero-admission-webhooks_{{ context }}"}

Velero has limited abilities to resolve admission webhook issues during a restore. If you have workloads with admission webhooks, you might need to use an additional Velero plugin or make changes to how you restore the workload. {._abstract}

Typically, workloads with admission webhooks require you to create a resource of a specific kind first. This is especially true if your workload has child resources because admission webhooks typically block child resources.

For example, creating or restoring a top-level object such as `service.serving.knative.dev` typically creates child resources automatically. If you do this first, you will not need to use Velero to create and restore these resources. This avoids the problem of child resources being blocked by an admission webhook that Velero might use.


:::note

Velero plugins are started as separate processes. After a Velero operation has completed, either successfully or not, it exits. Receiving a `received EOF, stopping recv loop` message in the debug logs indicates that a plugin operation has completed. It does not mean that an error has occurred.

:::