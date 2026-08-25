{%- set _mod_docs_content_type = "REFERENCE" %}
# Q1 2026 {id="rosa-q1-2026_{{ context }}"}

The following items were added during the first quarter of 2026. {._abstract}


Cluster admins can create multiple users with htpasswd identity providers
:   Cluster administrators can add multiple users to an htpasswd identity providers (IDPs) for {{ product_title }} clusters using the command-line interface (CLI). You can add multiple users to a single htpasswd IDP, streamlining managing user identities. Using the CLI or Terraform, administrators can add users interactively and noninteractively. For more information, see [Configuring an htpasswd identity provider](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/authentication_and_authorization/sd-configuring-identity-providers#config-htpasswd-idp_sd-configuring-identity-providers).

{% if openshift_rosa_hcp %}

Platform monitoring using the Cluster Monitoring Operator
:   With this update, you can configure the in-cluster monitoring stack components, metrics, and alerts to monitor both core platform components and user-defined projects. Previously, you could only monitor user-defined projects. This change applies to both new and existing {{ product_title }} clusters. However, it affects them differently.

    *   For new clusters created after this change, the default, in-cluster monitoring stack is installed during cluster installation and immediately begins collecting metrics. After installation, you can use the default configuration, or you can modify the monitoring components to suit your needs.
    *   For existing clusters created prior to this change, no changes will be made to the cluster’s monitoring configuration. However, you can begin to use the core platform monitoring components, and modify them to suit your needs.


    For more information, see [Monitoring projects on {{ product_title }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/monitoring/index).

    AWS Windows License Included is available for {{ product_title }}
    :   You can add a Windows License Included enabled machine pool to a {{ product_title }} cluster. For more information, see [Creating a machine pool with AWS Windows License Included enabled using the {{ rosa_cli }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/cluster_administration/managing-compute-nodes-using-machine-pools#creating_a_machine_pools_cli_win_li_rosa-managing-worker-nodes).


Updating the global pull secret is available for {{ product_title }} clusters
    :   You can modify the global pull secret to include additional pull secrets for accessing container images from private registries. For more information, see [Updating the global cluster pull secret](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/images/managing-images#images-update-global-pull-secret_using-image-pull-secrets).
{% endif %}


New version of {{ product_title }} available
    :   {{ product_title }} version 4.21 is available for new clusters.