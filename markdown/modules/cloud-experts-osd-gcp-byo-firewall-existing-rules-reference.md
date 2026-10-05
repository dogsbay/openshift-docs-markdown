{%- set _mod_docs_content_type = "REFERENCE" %}
# Platform-managed firewall rules reference {id="cloud-experts-osd-gcp-byo-firewall-existing-rules-reference_{{ context }}"}

A standard {{ product_title }} on {{ GCP }} cluster has six platform-managed rules, all of which use network tags as their targeting mechanism. {._abstract}

**Platform-managed firewall rules**

| Rule name pattern | Ports | Targeting |
| --- | --- | --- |
| `<infra_id>-api` | `tcp:6443` | Network tags |
| `<infra_id>-etcd` | `tcp:2379-2380` | Network tags |
| `<infra_id>-control-plane` | `tcp:2379-2380,tcp:6443,tcp:9258-9259,tcp:10257-10259,tcp:22623-22624` | Network tags |
| `<infra_id>-health-checks` | `tcp:6080,tcp:6443,tcp:22624` | Network tags |
| `<infra_id>-internal-cluster` | `tcp,udp,icmp` (all ports) | Network tags |
| `<infra_id>-internal-network` | `tcp,udp` (various ports) | Network tags |