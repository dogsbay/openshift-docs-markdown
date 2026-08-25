---
title: Disaster recovery for a hosted cluster in AWS
---

# Disaster recovery for a hosted cluster in AWS  {#hcp-disaster-recovery-aws}

You can recover a hosted cluster to the same region within {{ aws_first }}. For example, you need disaster recovery when the upgrade of a management cluster fails and the hosted cluster is in a read-only state.

The disaster recovery process involves the following steps:

1. Backing up the hosted cluster on the source management cluster
2. Restoring the hosted cluster on a destination management cluster
3. Deleting the hosted cluster from the source management cluster

Your workloads remain running during the process. The Cluster API might be unavailable for a period, but that does not affect the services that are running on the worker nodes.

> [!IMPORTANT]
> Both the source management cluster and the destination management cluster must have the `--external-dns` flags to maintain the API server URL. See the following example:
>
> ```terminal {title="Example: External DNS flags"}
> --external-dns-provider=aws \
> --external-dns-credentials=<path_to_aws_credentials_file> \
> --external-dns-domain-filter=<basedomain>
> ```
>
> If you do not include the `--external-dns` flags to maintain the API server URL, you cannot migrate the hosted cluster.
