{%- set _mod_docs_content_type = "REFERENCE" %}
# Q1 2026 {id="osd-q1-2026_{{ context }}"}

The following items were added during the first quarter of 2026. {._abstract}


Virtualization support for {{ product_title }} on {{ GCP }}
:   {{ product_title }} on {{ GCP }} version 4.21.5 supports running virtualized workloads using the {{ VirtProductName }} Operator version 4.21.1, leveraging {{ GCP }} C3 bare-metal instances and {{ GCP }} Hyperdisk. This enables you to migrate and modernize virtual machines (VMs) from existing platforms directly onto {{ product_title }}, managing them alongside containerized workloads on a single, unified application platform.

    For more information about using {{ VirtProductName }} on {{ product_title }} on {{ gcp }}, see:

    *   [Virtualization](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/virtualization/index)
    *   [OpenShift Virtualization release notes](https://docs.redhat.com/en/documentation/openshift_container_platform/4.21/html/virtualization/release-notes)

{{ product_title }} is available in {{ GCP }} console
    :   {{ product_title }} is available directly within the [{{ GCP }} console](https://console.cloud.google.com/redhat-openshift/landing), making it easier to find and deploy alongside native {{ GCP }} services. This integration simplifies the initial setup by allowing you to validate environment prerequisites for {{ product_title }} cluster deployment.
    ***Key improvements:***

*   Improved discoverability: Locate {{ product_title }} quickly within the {{ GCP }} console alongside Google’s native compute and container offerings, allowing you to start creating clusters immediately.
*   Streamlined onboarding: Validate your {{ GCP }} configuration directly in the console before transitioning to a guided deployment flow in the {{ hybrid_console }}.
*   Unified billing and procurement: Use the {{ GCP }} Marketplace to simplify setup and apply your existing {{ GCP }} committed spend, negotiated discounts, or pay-as-you-go pricing.


    For more information about deploying {{ product_title }} on {{ GCP }}, see [Understanding Customer Cloud Subscriptions on Google Cloud](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/planning_your_environment/gcp-ccs#ccs-gcp-understand_gcp-ccs).

    Cluster admins can create multiple users with htpasswd identity providers
    :   Cluster administrators can add multiple users to an htpasswd identity providers (IDPs) for {{ product_title }} clusters using the command-line interface (CLI). You can add multiple users to a single htpasswd IDP, streamlining managing user identities. Using the CLI, administrators can add multiple users interactively and noninteractively. For more information, see [Configuring an htpasswd identity provider](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/authentication_and_authorization/sd-configuring-identity-providers#config-htpasswd-idp_sd-configuring-identity-providers).


New version of {{ product_title }} available
    :   {{ product_title }} on {{ gcp }} and {{ product_title }} on {{ aws }} versions 4.21 are available for new clusters.