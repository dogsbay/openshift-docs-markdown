---
title: Deleting Operators from a cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Deleting Operators from a cluster {id="olm-deleting-operators-from-a-cluster"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olm-deleting-operators-from-a-cluster" %}

You can delete Operators that were previously installed with Operator Lifecycle Manager (OLM) on your {{ product_title }} cluster.


:::important

You must successfully and completely uninstall an Operator prior to attempting to reinstall the same Operator. Failure to fully uninstall the Operator properly can leave resources, such as a project or namespace, stuck in a "Terminating" state and cause "error resolving resource" messages to be observed when trying to reinstall the Operator.

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
For more information, see "Reinstalling Operators after failed uninstallation".
{%- endif %}

:::


{% leveloffset +1 %}{% include "./modules/olm-deleting-operators-from-a-cluster-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-deleting-operators-from-a-cluster-using-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-refresh-subs.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}

**Additional resources**

*   [Reinstalling Operators after failed uninstallation](/operators/admin/olm-troubleshooting-operator-issues#olm-reinstall_olm-troubleshooting-operator-issues)
{% endif %}