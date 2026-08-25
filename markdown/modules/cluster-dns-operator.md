{%- set _mod_docs_content_type = "REFERENCE" %}
# DNS Operator {id="dns-operator_{{ context }}"}

The DNS Operator deploys and manages CoreDNS to provide a name resolution service to pods that enables DNS-based Kubernetes Service discovery in {{ product_title }}.

The Operator creates a working default deployment based on the cluster’s configuration.

*   The default cluster domain is `cluster.local`.
*   Configuration of the CoreDNS Corefile or Kubernetes plugin is not yet supported.

The DNS Operator manages CoreDNS as a Kubernetes daemon set exposed as a service with a static IP. CoreDNS runs on all nodes in the cluster.

## Project {id="_project"}

[cluster-dns-operator](https://github.com/openshift/cluster-dns-operator)