---
title: Catalog source pod scheduling
---

# Catalog source pod scheduling {#olm-cs-podsched}

When a `grpc` type catalog source defines the `spec.image` field, the Catalog Operator creates a pod to serve that image.

By default, the pod specification configures the following default settings:

- Node selector: `kubernetes.io/os=linux`
- Priority class name: `system-cluster-critical`
- Tolerations: None

As an administrator, you can override these defaults by configuring fields in the optional `spec.grpcPodConfig` section of the `CatalogSource` object.

> [!IMPORTANT]
> The Marketplace Operator, `openshift-marketplace`, manages the default `OperatorHub` custom resource’s (CR). This CR manages `CatalogSource` objects. If you attempt to modify fields in the `CatalogSource` object’s `spec.grpcPodConfig` section, the Marketplace Operator automatically reverts these modifications. By default, if you modify fields in the `spec.grpcPodConfig` section of the   `CatalogSource` object, the Marketplace Operator automatically reverts these changes.
>
> To apply persistent changes to `CatalogSource` object, you must first disable a default `CatalogSource` object.

**Additional resources**

- [OLM concepts and resources -> Catalog source](/operators/understanding/olm/olm-understanding-olm#olm-catalogsource_olm-understanding-olm)

**Additional resources**

- [OperatorHub custom resource](/operators/understanding/olm-understanding-software-catalog#olm-software-catalog-arch-operatorhub-crd_olm-understanding-software-catalog)
- [Disabling the default OperatorHub catalog sources](/disconnected/using-olm#olm-restricted-networks-operatorhub_olm-restricted-networks)

**Additional resources**

- [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)

**Additional resources**

- [Pod priority classes](/nodes/pods/nodes-pods-priority#admin-guide-priority-preemption-priority-class_nodes-pods-priority)

**Additional resources**

- [Understanding taints and tolerations](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-about_nodes-scheduler-taints-tolerations)
