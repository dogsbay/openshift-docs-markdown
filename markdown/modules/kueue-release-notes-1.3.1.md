{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ kueue_name }} version 1.3.1 {id="release-notes-1.3.1_{{ context }}"}

{{ kueue_name }} version 1.3.1 is a generally available release that is supported on {{ product_title }} versions 4.18 and later. {{ kueue_name }} version 1.3 uses [Kueue](https://kueue.sigs.k8s.io/docs/overview/) version 0.16.5. {._abstract}

## Fixed issues {id="release-notes-1.3.1-fixed-issues_{{ context }}"}


kueue.x-k8s.io/queue-name refers to a non-existent queue
:   Fixed a bug where referencing a non-existent `LocalQueue via kueue.x-k8s.io/queue-name` could cause a running pod to be terminated and permanently stuck with unremovable scheduling gates.

    ([OCPBUGS-78789](https://redhat.atlassian.net/browse/OCPBUGS-78789))