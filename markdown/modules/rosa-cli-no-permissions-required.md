{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ rosa_cli }} commands with no required permissions {id="rosa-cli-no-permissions-required_{{ context }}"}

These {{ rosa_cli_first }} commands do not need the Identity and Access Management (IAM) policies. They need an access key, a secret key, or an attached role. {._abstract}

**Commands**

| Command | Input |
| --- | --- |
| list cluster | `$ rosa list cluster` |
| list versions | `$ rosa list versions` |
| describe cluster | `$ rosa describe cluster -c <cluster_name>` |
| create admin | `$ rosa create admin -c <cluster_name>` |
| list users | `$ rosa list users -c <cluster_name>` |
| list upgrades | `$ rosa list upgrades` |
| list OIDC configuration | `$ rosa list oidc-config` |
| list identity providers | `$ rosa list idps -c <cluster_name>` |
| list ingresses | `$ rosa list ingresses -c <cluster_name>` |