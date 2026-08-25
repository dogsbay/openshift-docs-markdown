{%- set _mod_docs_content_type = "REFERENCE" %}
# Egress requirements for {{ hcp }} {id="hcp-egress-reqs_{{ context }}"}

Egress ports involve outgoing traffic from {{ hcp }}. Ensure the correct ports are open for communication between the management cluster, the {{ hcp }} components, and the compute nodes. {._abstract}

The following table details the ports that must be accessible for outgoing traffic from {{ hcp }}, across all platforms.

**Common egress ports**

| Port | Protocol | Service | Purpose |
| --- | --- | --- | --- |
| `443` | TCP | HTTPS | OLM images, `Ignition` content, external HTTPS services |
| `6443` | TCP | Kubernetes API server | Communication with management cluster API |
| `53` | TCP and UDP | DNS | Standard DNS queries |

Compute nodes require outbound network access to several {{ hcp }} services. The following table details the egress requirements for compute nodes.

**Compute node egress requirements**

| Port | Protocol | Service | Purpose | When required |
| --- | --- | --- | --- | --- |
| `443` | TCP | HTTPS | Container registries, `Ignition` or `Konnectivity` service via `Route` service publishing strategy, external HTTPS services | Always |
| `6443` | TCP | Kubernetes API server | Cluster management and kubelet communication | Always |
| `8091` | TCP | Konnectivity server | Establishes a reverse tunnel for control plane access | `NodePort` or `LoadBalancer` publishing only |
| `8443` | TCP | Ignition Proxy | Retrieves bootstrap configuration | `NodePort` publishing only for Agent platform or bare metal |
| `53` | TCP and UDP | DNS | Name resolution | Always |