{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating a {{ product_title }} cluster in the {{ hybrid_console }} {id="rosa-create-cluster-ui-log-groups_{{ context }}"}

You can forward logs from your {{ product_title }} cluster to `CloudWatch`, `S3`, or both. When you forward your control plane logs, you can store them in the infrastructure that you designated, helping you meet compliance and audit requirements and workflows.  {._abstract}

In the {{ hybrid_console }}, you set up your {{ product_title }} cluster to forward control plane logs when you create the cluster. Then, you can continue to use the web user interface (UI) to forward your control plane logs.

Enable control plane log forwarding when you create the cluster to ensure a complete audit trail. If enabled later, the feature cannot capture logs generated before the activation, leaving gaps in your data.