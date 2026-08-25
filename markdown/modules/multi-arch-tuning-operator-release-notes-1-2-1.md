{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for the Multiarch Tuning Operator 1.2.1 {id="multi-arch-tuning-operator-release-notes-1-2-1_{{ context }}"}

The release notes for the Multiarch Tuning Operator 1.2.1 summarize all new features and enhancements, notable technical changes, major corrections from the previous version, and any known bugs upon general availability. {._abstract}

Issued: 15 December 2025

## Bug fixes {id="multi-arch-tuning-operator-1-2-1-bug-fixes_{{ context }}"}

*   Previously, the Multiarch Tuning Operator image inspector incorrectly processed images whose registry address included a digest, tag, and port number. The port portion of the registry was incorrectly interpreted as an image tag and was trimmed, causing the inspector to construct an invalid image reference. With this update, image references that contain a digest, tag, and registry port are now correctly parsed and handled. ([MULTIARCH-5767](https://issues.redhat.com/browse/MULTIARCH-5767))