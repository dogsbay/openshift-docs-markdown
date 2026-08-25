---
title: Bootstrap certificates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Bootstrap certificates {id="cert-types-bootstrap-certificates"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-types-bootstrap-certificates" %}

You should understand how bootstrap certificates enable kubelet transport layer security (TLS) bootstrapping when nodes join a cluster, including how the certificates are issued and rotated and how the certificates are managed.

## Purpose {id="bootstrap-certificates-purpose_{{ context }}"}

The kubelet, in {{ product_title }} 4 and later, uses the bootstrap certificate located in `/etc/kubernetes/kubeconfig` to initially bootstrap. This is followed by the bootstrap initialization process and the authorization of the kubelet to create a certificate signing request (CSR).

In that process, the kubelet generates a CSR while communicating over the bootstrap channel. The controller manager signs the CSR, resulting in a certificate that the kubelet manages. For more information, see "Bootstrap initialization" and "Authorize kubelet to create a CSR" in the _Additional resources_ section.

## Management {id="bootstrap-certificates-management_{{ context }}"}

These certificates are managed by the system and not the user.

## Expiration {id="bootstrap-certificates-expiration_{{ context }}"}

This bootstrap certificate is valid for 10 years.

The kubelet-managed certificate is valid for one year and rotates automatically at around the 80 percent mark of that one year.


:::note

OpenShift Lifecycle Manager (OLM) does not update the bootstrap certificate.

:::


## Customization {id="bootstrap-certificates-customization_{{ context }}"}

You cannot customize the bootstrap certificates.

**Additional resources**

*   [Bootstrap initialization](https://kubernetes.io/docs/reference/access-authn-authz/kubelet-tls-bootstrapping/#bootstrap-initialization)
*   [Authorize kubelet to create a CSR](https://kubernetes.io/docs/reference/access-authn-authz/kubelet-tls-bootstrapping/#authorize-kubelet-to-create-csr)