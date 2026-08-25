{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable autoscaling during cluster creation with the ROSA CLI {id="rosa-enable-cluster-autoscale-cli-during_{{ context }}"}

You can use the {{ rosa_cli_first }} to set cluster-wide autoscaling behavior during cluster creation. You can enable the autoscaler on the entire machine or just a cluster.

**Procedure**

*   During cluster creation, type `--enable autoscaling` after the cluster name to enable machine autoscaling:

{% include "./snippets/rosa-long-cluster-name.md" %}

```terminal title="Example"
$ rosa create cluster --cluster-name <cluster_name> --enable-autoscaling
```

Set at least one parameter to enable cluster autoscaling by running the following command:

```terminal title="Example"
$ rosa create cluster --cluster-name <cluster_name> --enable-autoscaling <parameter>
```