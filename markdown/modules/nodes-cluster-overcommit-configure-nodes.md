{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding nodes overcommitment {id="nodes-cluster-overcommit-configure-nodes_{{ context }}"}

To maintain optimal system performance and stability in an overcommitted environment in {{ product_title }}, configure your nodes to manage resource contention effectively. {._abstract}

When the node starts, it ensures that the kernel tunable flags for memory management are set properly. The kernel should never fail memory allocations unless it runs out of physical memory.

To ensure this behavior, {{ product_title }} configures the kernel to always overcommit memory by setting the `vm.overcommit_memory` parameter to `1`, overriding the default operating system setting.

{{ product_title }} also configures the kernel to not panic when it runs out of memory by setting the `vm.panic_on_oom` parameter to `0`. A setting of 0 instructs the kernel to call the OOM killer in an Out of Memory (OOM) condition, which kills processes based on priority.

You can view the current setting by running the following commands on your nodes:

```terminal
$ sysctl -a |grep commit
```

```terminal title="Example output"
#...
vm.overcommit_memory = 0
#...
```

```terminal
$ sysctl -a |grep panic
```

```terminal title="Example output"
#...
vm.panic_on_oom = 0
#...
```


:::note

The previous commands should already be set on nodes, so no further action is required.

:::


You can also perform the following configurations for each node:

*   Disable or enforce CPU limits using CPU CFS quotas
*   Reserve resources for system processes
*   Reserve memory across quality of service tiers