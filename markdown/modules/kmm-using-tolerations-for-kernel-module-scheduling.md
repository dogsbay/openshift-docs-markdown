{%- set _mod_docs_content_type = "CONCEPT" %}
# Using tolerations for kernel module scheduling {id="kmm-using-tolerations-for-kernel-module-scheduling_{{ context }}"}

You can configure user-defined tolerations in the ModuleSpec resource to ensure Kernel Module Management (KMM) housekeeping pods can run on cordoned or tainted nodes during driver and kernel module upgrades. {._abstract}

When you taint a node to evacuate workload pods prior to an upgrade, setting matching tolerations in the ModuleSpec allows KMM housekeeping pods to deploy and execute driver maintenance without being blocked by node taints.