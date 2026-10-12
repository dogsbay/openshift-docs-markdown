{%- set _mod_docs_content_type = "CONCEPT" %}
# Disaster recovery for a hosted cluster by using {{ oadp_short }} {id="hcp-disaster-recovery-oadp-con_{{ context }}"}

By using the {{ oadp_first }} Operator for disaster recovery, you can restore hosted cluster namespaces from object storage instead of manually rebuilding every cluster. In addition, you back up etcd as part of the control plane backup, and you can back up hosted clusters independently. {._abstract}

You can use the {{ oadp_short }} Operator to perform disaster recovery for {{ hcp }} on {{ aws_first }} and bare metal.

The disaster recovery process with {{ oadp_first }} involves the following steps:

1.  Preparing your platform, such as {{ aws_full }} or bare metal, to use {{ oadp_short }}
1.  Backing up the data plane workload
1.  Backing up the control plane workload
1.  Restoring a hosted cluster by using {{ oadp_short }}