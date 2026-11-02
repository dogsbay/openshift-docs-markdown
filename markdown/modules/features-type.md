{%- set _mod_docs_content_type = "REFERENCE" %}

# Features type {id="features-type_{{ context }}"}

Use the `Features` {{ oadp_short }} API type to configure optional {{ oadp_short }} features in {{ product_title }}. It defines the Data Mover configuration for volume snapshot data movement. {._abstract}

**Features**

| Property | Type | Description |
| --- | --- | --- |
| `dataMover` | *[`DataMover`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#DataMover) | Defines the configuration of the Data Mover. |

**Additional resources**
{._additional-resources}

*   [Complete schema definitions for the type `Features`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#Features)