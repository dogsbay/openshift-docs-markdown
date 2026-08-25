{%- set _mod_docs_content_type = "REFERENCE" %}
# Network Observability Operator 1.12 known issues {id="network-observability-operator-release-notes-1-12-known-issues_{{ context }}"}

The following known issues affect the Network Observability Operator 1.12 release. {._abstract}


Operator fails to start when custom web console logos are configured
:   When you configure custom product logos in the `Console.operator.openshift.io` resource using the `spec.customization.logos` field, the Network Observability Operator pod fails to start during installation. The Operator incorrectly reports a validation error indicating that both `logos` and the deprecated `customLogoFile` fields are set, even though only `logos` is configured.

    To work around this problem, manually enable the Network Observability Operator {{ product_title }} web console plugin by adding `netobserv-plugin-static` to the `spec.plugins` list in the `Console` cluster resource, or by enabling the plugin through the web console under **Administration** -> **Cluster Settings** -> **Configuration** -> **Console** -> **Console plugins**.

    [NETOBSERV-2767](https://issues.redhat.com/browse/NETOBSERV-2767)