{%- set _mod_docs_content_type = "REFERENCE" %}
# Network Observability Operator 2.0 Technology Preview features {id="network-observability-operator-release-notes-2-0-technology-preview_{{ context }}"}

The Network Observability Operator 2.0 includes Technology Preview features that provide early access to upcoming capabilities. {._abstract}


:::important

Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.

For more information about the support scope of Red Hat Technology Preview features, see [Technology Preview Features Support Scope](https://access.redhat.com/support/offerings/techpreview/).

:::



Network Observability Operator automatic installation
:   The Network Observability Operator is available as a Technology Preview feature for automatic installation in {{ product_title }} 5.0. You can enable network traffic visualization and monitoring capabilities during cluster installation without performing a separate Operator installation.

    To use this Technology Preview feature, you must enable the `NetworkObservabilityInstall` feature gate through a manifest file during cluster installation.

    :::note


    This feature is available starting with {{ product_title }} 5.0.
    
    :::