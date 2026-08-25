{%- set _mod_docs_content_type = "CONCEPT" %}
# Proxy certificate renewal {id="proxy-cert-renewal_{{ context }}"}

No Operators can auto-renew proxy certificates on {{ op_system }} nodes. You might need to periodically update the trust bundle manually. {._abstract}

There are no Operators that can auto-renew certificates on the {{ op_system }} nodes.


:::note

Red Hat does not monitor when CAs expire. Due to the long life of CAs, this is generally not an issue. However, you might need to periodically update the trust bundle.

:::