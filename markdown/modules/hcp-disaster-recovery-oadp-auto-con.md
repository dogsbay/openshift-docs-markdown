{%- set _mod_docs_content_type = "CONCEPT" %}
# Automated disaster recovery for a hosted cluster by using {{ oadp_short }} {id="hcp-disaster-recovery-oadp-auto-con_{{ context }}"}

In hosted clusters on bare-metal or {{ aws_first }} platforms, you can automate some backup and restore steps by using the {{ oadp_first }} Operator. {._abstract}

The process involves the following steps:

1.  Configuring {{ oadp_short }}
1.  Defining a Data Protection Application (DPA)
1.  Backing up the data plane workload
1.  Backing up the control plane workload
1.  Restoring a hosted cluster by using {{ oadp_short }}

For information about automated disaster recovery for hosted clusters on {{ azure_first }}, see "Automated disaster recovery for {{ hcp }} on {{ azure_short }}".