{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for the Multiarch Tuning Operator 1.2.2 {id="multi-arch-tuning-operator-release-notes-1-2-2_{{ context }}"}

The release notes for the Multiarch Tuning Operator 1.2.2 summarize all new features and enhancements, notable technical changes, major corrections from the previous version, and any known bugs upon general availability. {._abstract}

Issued: 6 February 2026

## Enhancements {id="multi-arch-tuning-operator-1-2-2-enhancements_{{ context }}"}

*   With this update, MTO uses the Red&#160;Hat Universal Base Image (UBI) 9 minimal image. This change improves compatibility with {{ product_title }} ecosystems.
*   MTO has been updated to use `go` version 1.25.3, `k8s` version 1.34.1, and Operator SDK v4 version 1.33.
*   The `ENoExecEvent.Status.Command` field has been removed from the `ENoExecEvent` custom resource. This field was not in use.