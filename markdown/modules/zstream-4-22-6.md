{%- set _mod_docs_content_type = "REFERENCE" %}
# RHSA-2026:40768 - {{ product_title }} {{ product_version }}.6 bug fix and security update {id="zstream-4-22-6_{{ context }}"}

Issued: 21 July 2026

{{ product_title }} release {{ product_version }}.6 is now available. The list of fixed issues that are included in the update is documented in the [RHSA-2026:40768](https://access.redhat.com/errata/RHSA-2026:40768) advisory. The RPM packages that are included in the update are provided by the [RHBA-2026:40763](https://access.redhat.com/errata/RHBA-2026:40763) advisory. {._abstract}

Space precluded documenting all of the container images for this release in the advisory.

You can view the container images in this release by running the following command:

```terminal
$ oc adm release info 4.22.6 --pullspecs
```

## New features {id="zstream-4-22-6-new-features_{{ context }}"}


Self-service Technical Supportability Review
:   You can use the self-service Technical Supportability Review (TSR) on the Red&#160;Hat Customer Portal to validate your cluster configuration against Red&#160;Hat common practices. The self-service TSR uses AI to evaluate your cluster’s `must-gather` data and provides a prioritized executive summary that identifies your cluster’s top risks and recommends corrective actions. The TSR performs hundreds of checks across the {{ product_title }} platform, including {{ VirtProductName }}, and coverage is continually expanding.

    For more information, see [Technical Supportability Review with AI tool](https://access.redhat.com/support/cases/#/analyze) and [Red&#160;Hat Technical Supportability Review with AI: Proactive AI-Driven Cluster Assessments for {{ product_title }}](https://access.redhat.com/solutions/7141255).

## Fixed issues {id="zstream-4-22-6-fixed-issues_{{ context }}"}

*   Before this update, vSphere Container Storage Interface (CSI) volume provisioning could fail when new ESXi hosts in maintenance mode lacked datastore access. With this release, volume provisioning skips ESXi hosts that are in maintenance mode, and the CSI driver is updated to version 3.6.2. As a result, volume provisioning succeeds when hosts are in maintenance mode. ([OCPBUGS-92190](https://redhat.atlassian.net/browse/OCPBUGS-92190))
*   Before this update, when you navigated to **Compute** → **Nodes** → **[node]** → **Terminal** in the {{ product_title }} web console, the component checked for the debug pod while the pod was still being created. As a consequence, a `Debug pod not found or was deleted.` error briefly flashed before the terminal loaded successfully. With this release, a loading spinner is shown while the debug pod is being created, and the cleanup logic guards against an undefined namespace to prevent errors on early unmount. As a result, the node **Terminal** tab loads without displaying a false error message. ([OCPBUGS-95580](https://redhat.atlassian.net/browse/OCPBUGS-95580))
*   Before this update, the Cluster Ingress Operator migrated Gateway API from Operator Life Management (OLM) to the Sail Library. As a consequence, the subscription persisted with the `ingress.operator.openshift.io/owned` annotation and {{ SMProductName }} users did not know whether to retain or delete these subscriptions. With this release, an `OrphanedOSSMSubscription` Prometheus alert, gauge metric, and `ClusterOperator` status condition identify these orphaned {{ SMProductShortName }} subscriptions and provide remediation guidance. As a result, the metric resets after the annotation is removed. ([OCPBUGS-97563](https://redhat.atlassian.net/browse/OCPBUGS-97563))
*   Before this update, the oc-mirror plugin failed to find signatures for multi-architecture {{ product_title }} payloads. As a consequence, the mirror-to-disk process failed when writing the `tar` archive file. With this release, oc-mirror correctly handles multi-architecture {{ product_title }} payloads that have unsigned manifest lists. As a result, mirror-to-disk operations complete successfully for multi-architecture payloads. ([OCPBUGS-97946](https://redhat.atlassian.net/browse/OCPBUGS-97946))

## Updating {id="zstream-4-22-6-updating_{{ context }}"}

To update an {{ product_title }} 4.22 cluster to this latest release, see [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli).