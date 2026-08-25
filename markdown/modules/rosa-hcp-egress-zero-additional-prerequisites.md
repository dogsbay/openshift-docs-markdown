{%- set _mod_docs_content_type = "REFERENCE" %}
# Additional prerequisites for egress zero install {id="rosa-hcp-egress-zero-additional-prerequisites_{{ context }}"}

Before you begin the egress zero install procedure, ensure you have the following: {._abstract}

*   An AWS account with sufficient permissions to create VPCs, subnets, and other required infrastructure
*   Terraform v1.4.0 or higher installed
*   {{ rosa_cli_first }} v1.2.45 or higher installed
*   AWS CLI installed and configured with the necessary credentials
*   git CLI installed
*   The necessary {{ rosa_cli }} and {{ hybrid_console }} firewall rules enabled