{%- set _mod_docs_content_type = "REFERENCE" %}
# Example firewall configuration {id="hcp-ingress-egress-example_{{ context }}"}

Review an example of what the firewall configuration looks like for a typical {{ hcp }} on {{ aws_short }} deployment that uses `Route` service publishing. {._abstract}


Ingress rules

:   *   Port `6443`/TCP: Kubernetes API server, from compute nodes and external clients
    *   Port `443`/TCP: OpenShift Router for Ignition or Konnectivity routes, from compute nodes

Egress rules

:   *   Port `443`/TCP: HTTPS, to container registries, routes, and external services
    *   Port `6443`/TCP: Management cluster API, to management cluster
    *   Port `53`/TCP and UDP: DNS, to DNS servers

If you use `NodePort` or `LoadBalancer` service publishing instead of `Route` service publishing, the following rules apply:

*   Port `8091`/TCP: Konnectivity server, from compute nodes
*   Port `8443`/TCP: Ignition Proxy, from compute nodes during the bootstrap process, `NodePort` publishing strategy only
*   Port `9090`/TCP: Ignition server, from compute nodes during the bootstrap process, `NodePort` publishing strategy only