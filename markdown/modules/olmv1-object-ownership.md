{%- set _mod_docs_content_type = "CONCEPT" %}

# Object ownership for cluster extensions {id="olmv1-object-ownership_{{ context }}"}

In {{ olmv1_first }}, a Kubernetes object can only be owned by a single `ClusterExtension` object at a time. This ensures that objects within an {{ product_title }} cluster are managed consistently and prevents conflicts between multiple cluster extensions attempting to control the same object. {._abstract}

## Single ownership {id="olmv1-single-ownership_{{ context }}"}

The core ownership principle enforced by {{ olmv1 }} is that each object can only have one cluster extension as its owner. This prevents overlapping or conflicting management by multiple cluster extensions, ensuring that each object is uniquely associated with only one bundle. Single ownership has the following implications:

*   Bundles that provide a `CustomResourceDefinition` (CRD) object can only be installed once.

    Bundles provide CRDs, which are part of a `ClusterExtension` object. This means you can install a bundle only once in a cluster. Attempting to install another bundle that provides the same CRD results in failure, as each custom resource can have only one cluster extension as its owner.
*   Cluster extensions cannot share objects.

    The single-owner policy of {{ olmv1 }} means that cluster extensions cannot share ownership of any objects. If one cluster extension manages a specific object, such as a `Deployment`, `CustomResourceDefinition`, or `Service` object, another cluster extension cannot claim ownership of the same object. Any attempt to do so is blocked by {{ olmv1 }}.

## Error messages {id="olmv1-error-messages_{{ context }}"}

When a conflict occurs due to multiple cluster extensions attempting to manage the same object, Operator Controller returns an error message indicating the ownership conflict, such as the following:

```text title="Example error message"
CustomResourceDefinition 'logfilemetricexporters.logging.kubernetes.io' already exists in namespace 'kubernetes-logging' and cannot be managed by operator-controller
```

This error message signals that the object is already being managed by another cluster extension and cannot be reassigned or shared.

## Considerations {id="olmv1-ownership-considerations_{{ context }}"}

As a cluster or extension administrator, review the following considerations:


Uniqueness of bundles
:   Ensure that Operator bundles providing the same CRDs are not installed more than once. This can prevent potential installation failures due to ownership conflicts.


Avoid object sharing
:   If you need different cluster extensions to interact with similar resources, ensure they are managing separate objects. Cluster extensions cannot jointly manage the same object due to the single-owner enforcement.