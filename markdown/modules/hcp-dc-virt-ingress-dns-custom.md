{%- set _mod_docs_content_type = "CONCEPT" %}
# Customize ingress and DNS behavior {id="hcp-dc-virt-ingress-dns-custom_{{ context }}"}

If you do not want to use the default ingress and DNS behavior, you can configure a hosted cluster on {{ VirtProductName }} with a unique base domain at creation time.  {._abstract}

This option requires manual configuration steps during creation and involves three main steps: cluster creation, load balancer creation, and wildcard DNS configuration.