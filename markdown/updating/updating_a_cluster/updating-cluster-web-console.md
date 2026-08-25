---
title: Updating a cluster using the web console
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Updating a cluster using the web console {id="updating-cluster-web-console"}
{%- set context = "updating-cluster-web-console" %}

You can perform minor version and patch updates on an {{ product_title }} cluster by using the web console. {._abstract}


:::note

Use the web console or `oc adm upgrade channel _<channel>_` to change the update channel. You can follow the steps in [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli) to complete the update after you change to a {{ product_version }} channel.

:::


{% leveloffset +1 %}{% include "./modules/before-updating-ocp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-changing-update-server-web.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding update channels and releases](/updating/understanding_updates/understanding-update-channels-release#understanding-update-channels-releases)

{% leveloffset +1 %}{% include "./modules/machine-health-checks-pausing-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-upgrading-web.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Updating installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)

{% leveloffset +1 %}{% include "./modules/update-conditional-web-console.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Updating installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)
*   [Update recommendations and Conditional Updates](/updating/understanding_updates/understanding-update-channels-release#conditional-updates-overview_understanding-update-channels-releases)

{% leveloffset +1 %}{% include "./modules/update-using-custom-machine-config-pools-canary.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Performing a canary rollout update](/updating/updating_a_cluster/update-using-custom-machine-config-pools#update-using-custom-machine-config-pools)

{% leveloffset +1 %}{% include "./modules/updating-sno.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the Machine Config Operator](/machine_configuration/index#about-machine-config-operator_machine-config-index)