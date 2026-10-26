{%- set _mod_docs_content_type = "CONCEPT" %}
# OpenShift TLS security profile support {id="network-observability-openshift-tls-security-profile-support_{{ context }}"}

The Network Observability Operator automatically inherits the cluster-wide TLS security profile configuration from {{ product_title }}, applying consistent encryption standards to managed components when TLS is enabled. {._abstract}

The Network Observability Operator reads the TLS security profile from the `APIServer` configuration and applies the profile’s minimum TLS version, cipher suites, and cryptographic curve preferences to its internal servers and managed components when TLS is enabled for those components.

This feature does not enable TLS. This feature ensures that components with TLS enabled use the cluster’s security profile. No manual configuration is required. The Network Observability Operator manages this automatically.

## Affected components {id="network-observability-tls-profile-affected-components_{{ context }}"}

The TLS security profile applies to the following network observability components:

*   Operator metrics and webhook servers
*   eBPF agent
*   `flowlogs-pipeline`
*   Console plugin

When the TLS security profile changes, the Network Observability Operator automatically restarts to load the updated settings and reconciles the affected managed workloads. These workloads might undergo a rolling update to apply the new TLS configuration.

## Expected behavior during TLS profile changes {id="network-observability-tls-profile-rollout-behavior_{{ context }}"}

When the cluster TLS security profile changes, the API server rolls out the new configuration across the control plane. During this rollout, network observability components might temporarily report a degraded status, and flow collection or access to flows might be interrupted.

This occurs because the Network Observability Operator and its managed components restart to apply the updated TLS settings while the cluster reconciles the new security profile. Normal operation resumes after the rollout completes and all components have restarted with the new TLS configuration.