{%- set _mod_docs_content_type = "REFERENCE" %}
# OADP API reference {id="oadp-api-reference-intro_{{ context }}"}

You can use the following APIs with {{ oadp_short }}. Review the API type descriptions in the following sections for each configurable part of the DPA specification. {._abstract}


Velero API
:   Velero API documentation is maintained by Velero and is not maintained by Red&#160;Hat. For more information, see [Velero API types](https://velero.io/docs/main/api-types/).


OADP API
:   The following are the {{ oadp_short }} APIs:
    *   `DataProtectionApplicationSpec`
    *   `BackupLocation`
    *   `SnapshotLocation`
    *   `ApplicationConfig`
    *   `VeleroConfig`
    *   `CustomPlugin`
    *   `ResticConfig`
    *   `PodConfig`
    *   `Features`
    *   `DataMover`

**Additional resources**
{._additional-resources}

*   [Velero API types](https://velero.io/docs/main/api-types/)
*   [OADP Operator (Go documentation)](https://pkg.go.dev/github.com/openshift/oadp-operator)
*   [Complete schema definitions for the type `PodConfig`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#PodConfig)