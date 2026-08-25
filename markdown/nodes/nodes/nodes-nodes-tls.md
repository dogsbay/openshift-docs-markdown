---
title: Enabling TLS security profiles for the kubelet
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-nodes-tls" %}
{% include "./_attributes/common-attributes.md" %}
# Enabling TLS security profiles for the kubelet {id="nodes-nodes-tls"}

You can use a TLS (Transport Layer Security) security profile to define which TLS ciphers are required by the kubelet when it is acting as an HTTP server. The kubelet uses its HTTP/GRPC server to communicate with the Kubernetes API server, which sends commands to pods, gathers logs, and run exec commands on pods through the kubelet.

A TLS security profile defines the TLS ciphers that the Kubernetes API server must use when connecting with the kubelet to protect communication between the kubelet and the Kubernetes API server.


:::note

By default, when the kubelet acts as a client with the Kubernetes API server, it automatically negotiates the TLS parameters with the API server.

:::


{% leveloffset +1 %}{% include "./modules/tls-profiles-understanding.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/tls-profiles-kubelet-configuring.md" %}{% endleveloffset %}