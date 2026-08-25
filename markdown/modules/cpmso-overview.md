{%- set _mod_docs_content_type = "CONCEPT" %}
# Control Plane Machine Set Operator overview {id="cpmso-overview_{{ context }}"}

You can use the Control Plane Machine Set Operator to automate management of control plane machines in your {{ product_title }} cluster, including automated replacement of degraded machines and rollout of configuration changes. {._abstract}

When the state of the cluster control plane machine set is set to `Active`, the Operator ensures that the cluster has the correct number of control plane machines with the specified configuration. This allows the automated replacement of degraded control plane machines and rollout of changes to the control plane.

A cluster has only one control plane machine set, and the Operator only manages objects in the `openshift-machine-api` namespace.