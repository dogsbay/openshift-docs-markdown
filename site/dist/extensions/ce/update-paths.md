---
title: Update paths
---

# Update paths {#update-paths}

{{ olmv1_first }} supports {{ olmv0 }} semantics for update paths, also known as upgrade edges or upgrade constraints. Support includes `replaces`, `skips`, and `skipRange` directives, with a few noted differences.

By supporting {{ olmv0 }} semantics, {{ olmv1 }} accurately reflects the update graph from catalogs.

{{ olmv1 }} differs from the original {{ olmv0 }} implementation in the following ways:

- If there are multiple possible successors, {{ olmv1 }} behavior differs in the following ways:

  - In {{ olmv0 }}, the successor closest to the channel head is chosen.
  - In {{ olmv1 }}, the successor with the highest semantic version (semver) is chosen.
- Consider the following set of file-based catalog (FBC) channel entries:

  ```yaml
  # ...
  - name: example.v3.0.0
    skips: ["example.v2.0.0"]
  - name: example.v2.0.0
    skipRange: >=1.0.0 <2.0.0
  ```

  If `1.0.0` is installed, {{ olmv1 }} behavior differs in the following ways:

  - {{ olmv0_caps }} will not detect an update path to `v2.0.0` because `v2.0.0` is skipped and not on the `replaces` chain.
  - {{ olmv1 }} will detect the update path because {{ olmv1 }} does not have a concept of a `replaces` chain. {{ olmv1 }} finds all entries that have a `replace`, `skip`, or `skipRange` value that covers the currently installed version.

**Additional resources**

- [{{ olmv0_caps }} upgrade semantics](/openshift-docs-markdown/operators/understanding/olm/olm-workflow#olm-upgrades_olm-workflow)

**Additional resources**

- [Support for version ranges](/openshift-docs-markdown/extensions/ce/update-paths#olmv1-version-range-support_update-paths)

**Additional resources**

- [Deprecated API Migration Guide (Kubernetes documentation)](https://kubernetes.io/docs/reference/using-api/deprecation-guide/)

**Additional resources**

- [Understanding cluster Operator condition types](/openshift-docs-markdown/updating/understanding_updates/intro-to-updates#understanding_clusteroperator_conditiontypes_understanding-openshift-updates)
- [Upgrading installed Operators](/openshift-docs-markdown/operators/admin/olm-upgrading-operators#olm-upgrading-operators)
- [Deleting Operators from a cluster](/openshift-docs-markdown/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operators-from-a-cluster)
- [Cluster Operators reference -> {{ olmv1_first }} Operator](/openshift-docs-markdown/operators/operator-reference#cluster-operators-ref-olmv1_operator-reference)
