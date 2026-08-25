{%- set _mod_docs_content_type = "CONCEPT" %}
# Customized ingress and DNS behavior {id="hcp-virt-ingress-dns-custom_{{ context }}"}

If you do not want to use the default ingress and DNS behavior, you can configure a KubeVirt hosted cluster with a unique base domain at creation time.  {._abstract}

This option requires manual configuration steps during creation and involves three main steps: cluster creation, load balancer creation, and wildcard DNS configuration.