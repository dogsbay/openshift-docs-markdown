{%- set _mod_docs_content_type = "CONCEPT" %}
# Monitoring for user-defined projects {id="monitoring-for-user-defined-projects_{{ context }}"}

You can monitor your own {{ product_title }} projects without requiring an additional monitoring solution. {{ product_title }} enables this capability by default when you install a cluster, allowing you to track metrics and performance for your custom workloads. {._abstract}

The `dedicated-admin` user has default permissions to configure and access monitoring for user-defined projects.

Optionally, you can disable monitoring for user-defined projects during or after a cluster installation.


:::note

Custom Prometheus instances and the Prometheus Operator installed through Operator Lifecycle Manager (OLM) can cause issues with user-defined project monitoring if it is enabled. Custom Prometheus instances are not supported.

:::