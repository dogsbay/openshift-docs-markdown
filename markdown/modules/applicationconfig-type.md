{%- set _mod_docs_content_type = "REFERENCE" %}

# ApplicationConfig type {id="applicationconfig-type_{{ context }}"}

Use the `ApplicationConfig` {{ oadp_short }} API type to define Velero and Restic server configuration for {{ oadp_short }} backup and restore operations in {{ product_title }}. {._abstract}

**ApplicationConfig**

| Property | Type | Description |
| --- | --- | --- |
| `velero` | *[VeleroConfig](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#VeleroConfig) | Defines the configuration for the Velero server. |
| `restic` | *[ResticConfig](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#ResticConfig) | Defines the configuration for the Restic server. |

**Additional resources**
{._additional-resources}

*   [Complete schema definitions for the type `ApplicationConfig`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#ApplicationConfig)