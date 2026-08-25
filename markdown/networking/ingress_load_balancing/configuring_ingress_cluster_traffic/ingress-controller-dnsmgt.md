---
title: Understanding DNS management policies
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding DNS management policies {id="ingress-controller-dnsmgt"}
{%- set context = "ingress-controller-dnsmgt" %}

As a cluster administrator, when you create an Ingress Controller, the Operator manages the DNS records automatically. This approach has some limitations when the required DNS zone is different from the cluster DNS zone or when the DNS zone is hosted outside the cloud provider. {._abstract}

The following list details key aspects for a managed DNS management policy:

*   The Managed DNS management policy for Ingress Controllers ensures that the lifecycle of the wildcard DNS record on the cloud provider is automatically managed by the Operator. This is the default behavior.
*   When you change an Ingress Controller from `Managed` to `Unmanaged` DNS management policy, the Operator does not clean up the previous wildcard DNS record provisioned on the cloud.
*   When you change an Ingress Controller from `Unmanaged` to `Managed` DNS management policy, the Operator attempts to create the DNS record on the cloud provider if it does not exist or updates the DNS record if it already exists.

The following list details key aspects for a unmanaged DNS management policy:

*   The Unmanaged DNS management policy for Ingress Controllers ensures that the lifecycle of the wildcard DNS record on the cloud provider is not automatically managed; instead, it becomes the responsibility of the cluster administrator.

    :::note

    For {{ gcp_first }} installations, you can use a custom DNS solution. Refer to the `DNSRecord` CR for information on what you need to include in the DNS record. For more information, see [Enabling a user-managed DNS](/installing/installing_gcp/installing-gcp-customizations#installation-gcp-enabling-user-managed-DNS_installing-gcp-customizations) and [Provisioning your own DNS records](/installing/installing_gcp/installing-gcp-customizations#installation-gcp-provisioning-own-dns-records_installing-gcp-customizations).
    
    :::


{% leveloffset +1 %}{% include "./modules/creating-a-custom-ingress-controller.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/modifying-an-existing-ingress-controller.md" %}{% endleveloffset %}

## Additional resources {id="configuring-ingress-controller-dns-management-additional-resources" ._additional-resources}
*   [Ingress Controller configuration parameters](/networking/networking_operators/ingress-operator#nw-ingress-controller-configuration-parameters_configuring-ingress)