{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites for installing a cluster on Google Cloud Dedicated {id="prereqs-installing-gcp-dedicated_{{ context }}"}

Installing {{ product_title }} on GCD requires a configured project with domain-scoped IDs, Workforce Identity Federation credentials, and network access to sovereign cloud API endpoints. {._abstract}

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   You [configured a {{ gcp_short }} project](/installing/installing_gcp/installing-gcp-account#installing-gcp-account) to host the cluster.
*   You have a credential file for a GCD service account that includes the `universe_domain` field for your sovereign cloud region.
*   If you use a firewall, you [configured access to the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires, including the GCD API endpoints for your region.