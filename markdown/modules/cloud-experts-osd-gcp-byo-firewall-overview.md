{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of the bring your own (BYO) firewall retrofit procedure {id="cloud-experts-osd-gcp-byo-firewall-overview_{{ context }}"}

The retrofit procedure replaces platform-managed firewall rules that use {{ GCP }} network tags with customer-managed rules that target Workload Identity Federation (WIF) service accounts. {._abstract}

The retrofit consists of the following stages:

*   Create service-account-targeted bring your own (BYO) rules alongside the existing tag-targeted rules.
*   Verify coexistence, ensuring both rule sets are active with no conflicts.
*   Delete the platform-managed tag-targeted rules.
*   Disable firewall management in the Cloud Controller Manager (CCM) so that the CCM does not re-create rules.
*   Optionally, validate Day 2 operations such as scale-up and upgrades with BYO rules only.