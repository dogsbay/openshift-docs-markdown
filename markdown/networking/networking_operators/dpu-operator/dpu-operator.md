---
title: DPU Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# DPU Operator {id="dpu-operator"}
{%- set context = "dpu-operator" %}

As a cluster administrator, you can add the Data Processing Unit (DPU) Operator to your cluster to manage DPU devices and network attachments. {._abstract}

{%- set FeatureName = "The DPU Operator" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/nw-about-dpu.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpu-intro-installing-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-dpu-installing-operator-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-dpu-installing-operator-ui.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpu-configuring-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpu-running-workloads.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpu-creating-a-sfc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-monitoring-dpu-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpu-operator-uninstall.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Deleting Operators from a cluster](/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operators-from-a-cluster)