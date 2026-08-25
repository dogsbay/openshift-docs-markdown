---
title: Creating virtual machines from instance types
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating virtual machines from instance types {id="virt-creating-vms-from-instance-types"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-creating-vms-from-instance-types" %}

You can simplify virtual machine (VM) creation by using instance types, whether you use the {{ product_title }} web console or the CLI to create VMs.

{%- if openshift_rosa or openshift_rosa_hcp %}

:::note

Creating a VM from an instance type in {{ VirtProductName }} 4.15 and higher is supported on {{ product_title }} clusters. In {{ VirtProductName }} 4.14, creating a VM from an instance type is a Technology Preview feature and is not supported on {{ product_title }} clusters.

:::

{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-about-instance-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-common-instancetypes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-specifying-instance-preference.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-using-flags-specify.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-infer-instancetype-preference.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-inferfromvolume-labels.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-vm-instancetype.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-instance-types-changing-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-change-vm-instance-type.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-change-vm-instance-type-cli.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Configuring a downward metrics device](/virt/monitoring/virt-exposing-downward-metrics#virt-configuring-downward-metrics_virt-exposing-downward-metrics)
{% endif %}