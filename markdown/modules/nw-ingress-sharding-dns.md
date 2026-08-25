{%- set _mod_docs_content_type = "CONCEPT" %}
# Ingress sharding and DNS {id="nw-ingress-sharding-dns_{{ context }}"}

As a cluster administrator, ensure that you add a separate DNS entry for each router in a project. A router will not forward unknown routes to another router. {._abstract}

Consider the following example:

*   Router A lives on host 192.168.0.5 and has routes with `*.foo.com`.
*   Router B lives on host 192.168.1.9 and has routes with `*.example.com`.

Separate DNS entries must resolve `\*.foo.com` to the node hosting Router A and `*.example.com` to the node hosting Router B:

*   `*.foo.com A IN 192.168.0.5`
*   `*.example.com A IN 192.168.1.9`