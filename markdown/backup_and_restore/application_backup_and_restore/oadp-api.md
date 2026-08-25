---
title: APIs used with OADP
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# APIs used with OADP {id="oadp-api"}
{%- set toc = true %}

{%- set context = "oadp-api" -%}
{%- set namespace = "openshift-adp" -%}
{%- set local_product = "OADP" -%}
{%- set velero_domain = "velero.io" %}

You can use the following APIs with {{ oadp_short }}: {._abstract}


Velero API
:   Velero API documentation is maintained by Velero and is not maintained by Red&#160;Hat.


OADP API

:   The following are the {{ oadp_short }} APIs:

    *   `DataProtectionApplicationSpec`
    *   `BackupLocation`
    *   `SnapshotLocation`
    *   `ApplicationConfig`
    *   `VeleroConfig`
    *   `CustomPlugin`
    *   `ResticConfig`
    *   `PodConfig`
    *   `Features`
    *   `DataMover`

{% leveloffset +1 %}{% include "./modules/dataprotectionapplicationspec-type.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/backuplocation-type.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/snapshotlocation-type.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/applicationconfig-type.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/veleroconfig-type.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/customplugin-type.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/resticconfig-type.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/podconfig-type.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/features-type.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/datamover-type.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Velero API types](https://velero.io/docs/main/api-types/)
*   [OADP Operator (Go documentation)](https://pkg.go.dev/github.com/openshift/oadp-operator) 
*   [OADP plugins](/backup_and_restore/application_backup_and_restore/oadp-features-plugins#oadp-features-plugins)
*   [Complete schema definitions for the type `PodConfig`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#PodConfig)