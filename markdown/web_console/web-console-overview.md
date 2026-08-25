---
title: Web Console Overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Web Console Overview {id="web-console-overview"}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "web-console-overview" %}

The {{ product_title }} web console provides a graphical user interface to visualize your project data and perform administrative, management, and troubleshooting tasks. The web console runs as pods on the control plane nodes in the openshift-console project. It is managed by a `console-operator` pod.

{% if not openshift_rosa_hcp %}
{% include "./snippets/snip-unified-perspective-web-console.md" %}

{% endif %}

You can create quick start tutorials for {{ product_title }} that provide guided steps within the web console with user tasks. They are helpful for getting oriented with an application, Operator, or other product offering.

{% leveloffset +1 %}{% include "./modules/about-administrator_web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/about-developer_web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/enabling-developer-perspective_web-console.md" %}{% endleveloffset %}

**Additional resources**

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Learn more about Cluster Administrator](/welcome/learn_more_about_openshift#learn_more_about_openshift)
{%- endif %}
*   [Viewing the applications in your project, verifying their deployment status, and interacting with them in the **Topology** view](/applications/odc-viewing-application-composition-using-topology-view#odc-viewing-application-composition-using-topology-view)
*   [Viewing cluster information](/web_console/using-dashboard-to-get-cluster-information#using-dashboard-to-get-cluster-info)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Configuring the web console](/web_console/configuring-web-console#configuring-web-console)
*   [Customizing the web console](/web_console/customizing-the-web-console#customizing-web-console)
*   [About the web console](/web_console/customizing-the-web-console#customizing-web-console)
{%- endif %}
*   [Using the web terminal](/web_console/web_terminal/odc-using-web-terminal#odc-using-web-terminal)
*   [Creating quick start tutorials](/web_console/creating-quick-start-tutorials#creating-quick-start-tutorials)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Disabling the web console](/web_console/disabling-web-console#disabling-web-console)
{% endif %}