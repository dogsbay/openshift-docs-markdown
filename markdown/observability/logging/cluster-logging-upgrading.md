{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-upgrading" %}
{% include "./_attributes/common-attributes.md" %}
# Updating Logging {id="cluster-logging-upgrading"}

There are two types of {{ logging }} updates: minor release updates (5.y.z) and major release updates (5.y).

## Minor release updates {id="cluster-logging-upgrading-minor"}

If you installed the {{ logging }} Operators using the **Automatic** update approval option, your Operators receive minor version updates automatically. You do not need to complete any manual update steps.

If you installed the {{ logging }} Operators using the **Manual** update approval option, you must manually approve minor version updates. For more information, see [Manually approving a pending Operator update](/operators/admin/olm-upgrading-operators#olm-approving-pending-upgrade_olm-upgrading-operators).

## Major release updates {id="cluster-logging-upgrading-major"}

For major version updates you must complete some manual steps.

For major release version compatibility and support information, see [OpenShift Operator Life Cycles](https://access.redhat.com/support/policy/updates/openshift_operators#platform-agnostic).

{% leveloffset +1 %}{% include "./modules/logging-operator-upgrading-all-ns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-upgrading-clo.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-upgrading-loki.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-upgrading-loki-schema.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-upgrading-elasticsearch.md" %}{% endleveloffset %}