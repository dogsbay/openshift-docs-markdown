{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for the Multiarch Tuning Operator 1.3.4 {id="multi-arch-tuning-operator-release-notes-1-3-4_{{ context }}"}

The release notes for the Multiarch Tuning Operator 1.3.4 summarize all new features and enhancements, notable technical changes, major corrections from the previous version, and any known bugs upon general availability. {._abstract}

Issued: 8 September 2026

## Enhancements {id="multi-arch-tuning-operator-1-3-4-enhancements_{{ context }}"}

*   MTO has been updated to use `go` version 1.26.7.

## Bug fixes {id="multi-arch-tuning-operator-1-3-4-bug-fixes_{{ context }}"}

*   Previously, deleting a `ClusterPodPlacementConfig` object immediately after creation could leave the object stuck with a deletion timestamp and finalizer, and operand resources could remain. With this update, the Operator reads the current object state so deletion is processed correctly. [(MULTIARCH-6269)](https://redhat.atlassian.net/browse/MULTIARCH-6269)
*   Previously, the enoexec-event-daemon DaemonSet could fail to start because its ServiceAccount image pull secret was not yet available. With this update, the Operator waits until the ServiceAccount pull secret is provisioned before creating the DaemonSet. [(MULTIARCH-6270)](https://redhat.atlassian.net/browse/MULTIARCH-6270)
*   Previously, OLM CSV lifecycle cycling could prevent the Operator from reaching a stable installed state and block `ClusterPodPlacementConfig` finalizer processing. With this update, the Operator converges after installation and can process `ClusterPodPlacementConfig` deletion. [(MULTIARCH-6271)](https://redhat.atlassian.net/browse/MULTIARCH-6271)

## Security fixes {id="multi-arch-tuning-operator-1-3-4-security-fixes_{{ context }}"}

*   Previously, the Operator and pod placement controller ServiceAccounts had cluster-wide permission to read Secrets. With this update, Secret access is limited to the permissions required for image inspection. [(MULTIARCH-6187)](https://redhat.atlassian.net/browse/MULTIARCH-6187)
*   Previously, the Operator ServiceAccount could create, update, or delete any `MutatingWebhookConfiguration`. With this update, update, patch, and delete permissions are restricted to the webhook configuration that the Operator manages. [(MULTIARCH-6188)](https://redhat.atlassian.net/browse/MULTIARCH-6188)
*   Previously, the Operator ServiceAccount had unscoped write access to `ClusterRoles`, `ClusterRoleBindings`, `Roles`, and `RoleBindings`. With this update, those write permissions are restricted to the operand resources that the Operator manages. [(MULTIARCH-6189)](https://redhat.atlassian.net/browse/MULTIARCH-6189)
*   Previously, the `pod-placement-controller` used hostPath mounts that could create directories on the node. With this update, the `/etc/containers/` hostPath mount requires the directory to already exist and does not create it. [(MULTIARCH-6191)](https://redhat.atlassian.net/browse/MULTIARCH-6191)
*   Previously, the image-architecture cache used a hash that was not collision-resistant. With this update, the cache key uses a collision-resistant hash. [(MULTIARCH-6193)](https://redhat.atlassian.net/browse/MULTIARCH-6193)
*   Previously, architecture strings and error messages from container registries were written to pod labels, annotations, and events without validation. With this update, architecture values are validated against supported architectures, and error messages are truncated before they are written to pod metadata. [(MULTIARCH-6194)](https://redhat.atlassian.net/browse/MULTIARCH-6194)

## CVEs {id="multi-arch-tuning-operator-1-3-4-cves_{{ context }}"}

*   [CVE-2026-33818](https://access.redhat.com/security/cve/cve-2026-33818)
*   [CVE-2026-56853](https://access.redhat.com/security/cve/cve-2026-56853)
*   [CVE-2026-56860](https://access.redhat.com/security/cve/cve-2026-56860)
*   [CVE-2026-56862](https://access.redhat.com/security/cve/cve-2026-56862)