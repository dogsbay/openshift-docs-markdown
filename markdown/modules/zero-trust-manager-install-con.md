{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing the {{ zero_trust_full }} {id="zero-trust-manager-install-con_{{ context }}"}

Install {{ zero_trust_full }} to help ensure secure communication between your workloads. You can install the {{ zero_trust_full }} by using either the web console or CLI. {._abstract}

If you install the Operator into a custom namespace (for example, `my-custom-namespace`), all managed operand resources are deployed within that same namespace. All secrets and ConfigMaps referenced by the Custom Resources (CRs) must also exist in that custom namespace.


:::important

The Operator installation is not supported in the `openshift-*` namespaces and the `default` namespace.

:::