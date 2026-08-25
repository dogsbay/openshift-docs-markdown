{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up automatic recurring upgrades {id="cloud-experts-getting-started-upgrading-recurring_{{ context }}"}

You can set up automatic recurring upgrades within {{ cluster_manager }} for your clusters. {._abstract}

**Procedure**

1.  Log in to the {{ cluster_manager_url }}, and select the cluster you want to upgrade.
1.  Click **Settings**.
1.  Under **Update Strategy**, click **Recurring updates**.
1.  Set the day and time for the upgrade to occur.
1.  Under **Node draining**, select a grace period to allow the nodes to drain before pod eviction.
1.  Click **Save**.