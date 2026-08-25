{%- set _mod_docs_content_type = "CONCEPT" %}
# Automatic defragmentation {id="automatic-defrag-etcd-data_{{ context }}"}

When etcd database growth affects performance, the etcd Operator can automatically defragment member disks based on cluster metrics. {._abstract}


:::note

Automatic defragmentation works well in most cases because the etcd Operator uses cluster metrics to choose the most efficient defragmentation approach.

:::


The etcd Operator automatically defragments disks. No manual intervention is needed.

Verify that defragmentation succeeded by checking one of these logs:

*   etcd logs
*   cluster-etcd-operator pod
*   operator status error log


:::warning

Automatic defragmentation can cause leader election failure in various {{ product_title }} core components, such as the Kubernetes controller manager, which triggers a restart of the failing component. The restart is harmless and either triggers failover to the next running instance or the component resumes work again after the restart.

:::


The following is example log output for successful defragmentation:

```terminal
etcd member has been defragmented: __<member_name>__, memberID: __<member_id>__
```

The following is example log output for unsuccessful defragmentation:

```terminal
failed defrag on member: __<member_name>__, memberID: __<member_id>__: __<error_message>__
```