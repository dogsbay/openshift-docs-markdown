{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure DNS records in a private zone {id="configure-dns-records-in-a-private-zone-con_{{ context }}"}

You can stop a cluster from publishing DNS records publicly by removing the public zone from the DNS custom resource. The Ingress Operator then writes records only to the private zone, so internal infrastructure details are not publicly resolvable.