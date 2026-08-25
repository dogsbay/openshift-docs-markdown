---
title: Persistent storage using local volumes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Persistent storage using local volumes {id="persistent-storage-using-local-volume"}
{%- set context = "persistent-storage-local" %}

{{ product_title }} can be provisioned with persistent storage by using local volumes. Local persistent volumes allow you to access local storage devices, such as a disk or partition, by using the standard persistent volume claim interface. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-install-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-local-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-local-install-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-local-install-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-create-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-create-cr-manual.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-pvc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-pod.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-discovery.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-symlinks-top-level.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-local-symlinks-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-local-symlinks-procedure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-tolerations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-metrics.md" %}{% endleveloffset %}

{% leveloffset +2- %}{% include "./modules/persistent-storage-local-metrics-procedure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-deleting-resources-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-local-removing-devices.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-local-uninstall-operator.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Installing the Local Storage Operator](/storage/persistent_storage_local/persistent-storage-local#local-storage-install-overview_persistent-storage-local)
*   [Enabling Local Storage Operaator Metric](/storage/persistent_storage_local/persistent-storage-local#local-storage-metrics-procedure_persistent-storage-local)
*   [Accessing metrics as an administrator](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-an-administrator)