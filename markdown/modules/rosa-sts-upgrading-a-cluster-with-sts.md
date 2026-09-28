{%- set _mod_docs_content_type = "CONCEPT" %}
# Upgrade a cluster {id="rosa-sts-upgrading-a-cluster-with-sts_{{ context }}"}

Upgrade your {{ product_title }} clusters using either the {{ rosa_cli_first }} or the {{ cluster_manager }} console. Both support immediate and scheduled one-time upgrades. {{ cluster_manager }} also schedules recurring upgrade windows that apply new z-versions automatically. {._abstract}

While both methods verify compatibility, the {{ rosa_cli }} can automatically align {{ AWS }} {{ sts_first }} policies to the target version, ensuring your IAM roles meet all security requirements for the new release.


:::note

The actual start time of the cluster upgrade will be within 10 minutes of the upgrade schedule time. Additionally, the duration of the upgrade might vary based on your workload configuration.

:::


When a {{ product_title }} cluster that uses AWS {{ sts_short }} is upgraded, the {{ rosa_cli }} verifies the account and Operator role policies for the chosen cluster are compatible with the target version of the upgrade. If the policies are compatible, the CLI automatically upgrades the cluster. If the policies are not compatible with the chosen upgrade version, the CLI automatically upgrades IAM policies before upgrading the cluster. When scheduling the upgrade, you give administrative acknowledgment to confirm you have reviewed the changes involved with the upgrade, if required.