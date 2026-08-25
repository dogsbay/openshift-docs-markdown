{%- set _mod_docs_content_type = "REFERENCE" %}
# Namespace use in {{ microshift_short }} {id="microshift-olm-namespaces_{{ context }}"}

The `microshift-olm` RPM creates the three default namespaces: one for running Operator Lifecycle Manager (OLM), and two for catalog and Operator installation. You can create additional namespaces as needed for your use case. {._abstract}

## Default namespaces {id="microshift-olm-default-namespaces_{{ context }}"}

The following table lists the default namespaces and a brief description of how each namespace works.

**Default namespaces created by OLM for {{ microshift_short }}**

|     |     |
| --- | --- |
| **Default Namespace** | **Details** |
| `openshift-operator-lifecycle-manager` | The OLM package manager runs in this namespace. |
| `openshift-marketplace` | The global namespace. Empty by default. To make the catalog source to be available globally to users in all namespaces, set the `openshift-marketplace` namespace in the catalog-source YAML. |
| `openshift-operators` | The default namespace where Operators run in {{ microshift_short }}. Operators that reference catalogs in the `openshift-operators` namespace must have the **AllNamespaces** watch scope. |

## Custom namespaces {id="microshift-olm-custom-namespace_{{ context }}"}

If you want to use a catalog and Operator together in a single namespace, then you must create a custom namespace. After you create the namespace, you must create the catalog in that namespace. All Operators running in the custom namespace must have the same single-namespace watch scope.