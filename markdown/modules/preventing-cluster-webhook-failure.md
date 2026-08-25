{%- set _mod_docs_content_type = "CONCEPT" %}
# Prevent cluster failure due to webhooks {id="third-party-cluster-webhook-failure_{{ context }}"}

To prevent potential cluster failure and ensure pods can always start, you must configure third-party admission webhooks to exclude infrastructure namespaces. Implementing specific selectors and adopting a `ValidatingAdmissionPolicy` resource provides a more stable environment for cluster recovery and management. {._abstract}

When possible, use a `ValidatingAdmissionPolicy` resource instead of an admission webhook. It does not require an external service, has no timeout limitations, and cannot cause cluster-wide failures.

If you use admission webhooks take the following precautions:

*   Configure the webhook to exclude {{ product_title }} and Kubernetes infrastructure namespaces.
*   Configure webhook timeouts to 10 seconds or less to provide a safety buffer for the system-enforced 13-second limit.
*   Set the `failurePolicy` value to `Ignore` for non-critical webhooks so that requests can proceed if the webhook is unavailable.