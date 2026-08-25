{%- set _mod_docs_content_type = "CONCEPT" %}
# Machine pools tab {id="ocm-machinepools-tab_{{ context }}"}

The ***Machine pools*** tab allows the cluster owner to create new machine pools if there is enough available quota, or edit an existing machine pool. {._abstract}

Selecting the ![title=Other options](/_assets/images/kebab.png) > ***Edit*** option opens the "Edit machine pool" dialog. In this dialog, you can change the node count per availability zone, edit node labels and taints, and view any associated AWS security groups.

{% if openshift_rosa %}
Select the ***Edit cluster autoscaling*** button to specify your autoscaling strategy.
{% endif %}