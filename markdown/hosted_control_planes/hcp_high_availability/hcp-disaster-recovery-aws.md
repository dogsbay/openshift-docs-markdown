---
title: Disaster recovery for a hosted cluster in AWS
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Disaster recovery for a hosted cluster in AWS  {id="hcp-disaster-recovery-aws"}
{%- set context = "hcp-disaster-recovery-aws" %}

You can recover a hosted cluster to the same region within {{ aws_first }}. For example, you need disaster recovery when the upgrade of a management cluster fails and the hosted cluster is in a read-only state.

The disaster recovery process involves the following steps:

1.  Backing up the hosted cluster on the source management cluster
1.  Restoring the hosted cluster on a destination management cluster
1.  Deleting the hosted cluster from the source management cluster

Your workloads remain running during the process. The Cluster API might be unavailable for a period, but that does not affect the services that are running on the worker nodes.


:::important

Both the source management cluster and the destination management cluster must have the `--external-dns` flags to maintain the API server URL. See the following example:

```terminal title="Example: External DNS flags"
--external-dns-provider=aws \
--external-dns-credentials=<path_to_aws_credentials_file> \
--external-dns-domain-filter=<basedomain>
```

If you do not include the `--external-dns` flags to maintain the API server URL, you cannot migrate the hosted cluster.

:::


{% leveloffset +1 %}{% include "./modules/dr-backup-restore-aws-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dr-hosted-cluster-within-aws-region-backup.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dr-hosted-cluster-within-aws-region-restore.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dr-hosted-cluster-within-aws-region-delete.md" %}{% endleveloffset %}