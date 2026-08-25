{%- set _mod_docs_content_type = "REFERENCE" %}
# Ingress certificate management and renewal {id="ingress-certificates-management-renewal_{{ context }}"}

Review ingress certificate renewal in {{ product_title }} to learn which certificates rotate automatically and which Operator defaults you must replace. {._abstract}

Ingress certificates are managed by the user. For more information, see "Replacing the default ingress certificate".

The `service-ca` controller automatically rotates the certificates that it issues. However, it is possible to use `oc delete secret <secret>` to manually rotate service serving certificates.

The Ingress Operator does not rotate its own signing certificate or the default certificates that it generates. Operator-generated default certificates are intended as placeholders for custom default certificates that you configure.