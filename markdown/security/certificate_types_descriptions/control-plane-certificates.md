---
title: Control plane certificates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Control plane certificates {id="cert-types-control-plane-certificates"}
{%- set context = "cert-types-control-plane-certificates" %}

Review control plane certificate namespaces and automatic rotation in {{ product_title }} to plan maintenance and recover from expiration. {._abstract}

## Location {id="control-plane-certs-location_{{ context }}"}

Control plane certificates are included in these namespaces:

*   `openshift-config-managed`
*   `openshift-kube-apiserver`
*   `openshift-kube-apiserver-operator`
*   `openshift-kube-controller-manager`
*   `openshift-kube-controller-manager-operator`
*   `openshift-kube-scheduler`

## Management {id="control-plane-certs-management_{{ context }}"}

Control plane certificates are managed by the system and rotated automatically.

If control plane certificates expire, see "Recovering from expired control plane certificates".

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Recovering from expired control plane certificates](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-3-expired-certs#dr-recovering-expired-certs)