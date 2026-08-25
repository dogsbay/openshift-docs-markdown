---
title: Migrating FRR-K8s resources
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Migrating FRR-K8s resources {id="migrating-frr-k8s-resources"}

{%- set context = "migrating-frr-k8s-resources" %}

Migrating FRR-K8s custom resources is required when upgrading from {{ product_title }} 4.17 or earlier with the MetalLB Operator deployed. Existing FRRConfiguration resources in the `metallb-system` namespace must be moved to the `openshift-frr-k8s` namespace to align with the updated architecture. Learn how to migrate these resources using the CLI and how to verify that the migration completed successfully. {._abstract}

All user-created FRR-K8s custom resources (CRs) in the `metallb-system` namespace under {{ product_title }} 4.17 and earlier releases must be migrated to the `openshift-frr-k8s` namespace. As a cluster administrator, you can migrate your FRR-K8s custom resources to the `openshift-frr-k8s` namespace using the CLI.

{% leveloffset +1 %}{% include "./modules/nw-bgp-frr-k8s-migration.md" %}{% endleveloffset %}