{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ kueue_name }} version 1.4.1 {id="release-notes-1.4.1_{{ context }}"}

{{ kueue_name }} version 1.4.1 is a generally available release that is supported on {{ product_title }} versions 4.18 and later. {{ kueue_name }} version 1.4.1 uses [Kueue](https://kueue.sigs.k8s.io/docs/overview/) version 0.18. {._abstract}

## Fixed issues {id="release-notes-1.4.1-fixed-issues_{{ context }}"}


{{ kueue_name }} no longer accepts invalid webhook configurations at admission time
:   Before this update, {{ kueue_name }} filtered out core validating webhooks during reconciliation. As a consequence, the Operator silently accepted invalid webhook configurations for the following resources:
    *   `Cohort`
    *   `ClusterQueue`
    *   `Workload`
    *   `ResourceFlavor`

With this release, the Operator always registers validating webhooks. As a result, {{ kueue_name }} rejects invalid configurations at admission time.

([OCPBUGS-99316](https://redhat.atlassian.net/browse/OCPBUGS-99316))