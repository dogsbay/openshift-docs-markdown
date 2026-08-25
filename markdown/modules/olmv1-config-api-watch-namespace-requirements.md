{%- set _mod_docs_content_type = "REFERENCE" %}
# Watch namespace configuration requirements {id="olmv1-config-api-watch-namespace-requirements_{{ context }}"}

Avoid installation failures by using the correct `watchNamespace` value for the install modes supported by your bundle. Requirements vary based on whether the bundle supports `AllNamespaces`, `OwnNamespace`, and `SingleNamespace` install modes. {._abstract}

{{ olmv0 }} `registry+v1` bundles declare the install modes they support. These install modes control whether `watchNamespace` configuration is required or optional, and what values are valid.


:::note

{{ olmv1 }} does not support multi-tenancy. You cannot install the same extension more than once on a cluster. As a result, the `MultiNamespace` install mode is not supported.

:::



`AllNamespaces`
:   Watches resources across all namespaces in the cluster.

`OwnNamespace`
:   Watches resources only in the installation namespace.

`SingleNamespace`
:   Watches resources in a single namespace that differs from the installation namespace.

Whether the `.spec.config.inline.watchNamespace` field is required depends on the install modes that the bundle supports.

**Watch namespace requirements by bundle capability**

| Bundle install mode support | watchNamespace field | Valid values |
| --- | --- | --- |
| `AllNamespaces` mode only | Not applicable | The `watchNamespace` field is not supported. Extensions watch all namespaces. |
| `OwnNamespace` mode only | Required | Must match `.spec.namespace` field |
| `SingleNamespace` mode only | Required | Must differ from `.spec.namespace` field |
| Both `OwnNamespace` and `SingleNamespace` install modes | Required | Can match or differ from `.spec.namespace` field |
| `AllNamespaces` install mode with one or both of the `OwnNamespace` and `SingleNamespace` install modes | Optional | Omit to watch all namespaces, or specify a namespace to watch only that namespace |


:::important

{{ olmv1 }} validates the `watchNamespace` value based on the install mode support that is declared by the bundle. The installation fails with a validation error if you specify an invalid value or omit a required field.

:::