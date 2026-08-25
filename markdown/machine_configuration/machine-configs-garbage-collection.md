---
title: Managing unused rendered machine configs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing unused rendered machine configs {id="machine-configs-garbage-collection"}
{%- set context = "machine-configs-garbage-collection" %}

You can remove old, unused rendered machine configs by using the `oc adm prune renderedmachineconfigs` command. By removing these objects, you can free up disk space and reduce performance issues. {._abstract}

The Machine Config Operator (MCO) does not perform any garbage collection activities. This means that all rendered machine configs remain in the cluster. Each time a user or controller applies a new machine config, the MCO creates new rendered configs for each affected machine config pool. Over time, this can lead to a large number of rendered machine configs, which can make working with machine configs confusing. Having too many rendered machine configs can also contribute to disk space issues and performance issues with etcd. 

By using the `oc adm prune renderedmachineconfigs` command with the `--confirm` flag, you can remove all unused rendered machine configs or only those in a specific machine config pool. You can also remove a specific number of unused rendered machine configs, keeping some older machine configs in case you want to check older configurations.

You can use the `oc adm prune renderedmachineconfigs` command without the `--confirm` flag to see which rendered machine configs would be removed.

Use the `list` subcommand to display all the rendered machine configs in the cluster or a specific machine config pool.


:::note

The `oc adm prune renderedmachineconfigs` command deletes only rendered machine configs that are not in use. If a rendered machine configs are in use by a machine config pool, the rendered machine config is not deleted. In this case, the command output specifies the reason that the rendered machine config was not deleted.

:::


{% leveloffset +1 %}{% include "./modules/machineconfig-garbage-collect-viewing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineconfig-garbage-collect-removing.md" %}{% endleveloffset %}