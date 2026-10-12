{%- set _mod_docs_content_type = "CONCEPT" %}
# Control plane disaster recovery {id="disaster-recovery-for-control-planes-intro_{{ context }}"}

To return your cluster to a working state after quorum loss, control plane failure, or expired certificates, follow the disaster recovery procedures for your situation. You can restore etcd quorum, restore the cluster from an etcd snapshot, or recover from expired control plane certificates. {._abstract}


:::important

Disaster recovery requires you to have at least one healthy control plane host.

:::