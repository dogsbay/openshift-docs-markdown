{%- set _mod_docs_content_type = "CONCEPT" %}
# Control Plane Only updates for layered products and Operators installed through Operator Lifecycle Manager {id="updating-control-plane-only-olm-operators_{{ context }}"}

There are additional steps to consider when performing Control Plane Only updates for clusters with either layered products or Operators installed through Operator Lifecycle Manager (OLM). {._abstract}

Layered products refer to products that are made of multiple underlying products that are intended to be used together and cannot be broken into individual subscriptions. For examples of layered {{ product_title }} products, see [Layered Offering On OpenShift](https://access.redhat.com/support/policy/updates/openshift/#layered).

As you perform a Control Plane Only update for the clusters of layered products and those of Operators that have been installed through OLM, you must complete the following actions:

1.  You have updated all Operators previously installed through Operator Lifecycle Manager (OLM) to a version that is compatible with your target release. Updating the Operators ensures they have a valid update path when the default software catalogs switch from the current minor version to the next during a cluster update. See "Updating installed Operators" for more information on how to check compatibility and, if necessary, update the installed Operators.
1.  Confirm the cluster version compatibility between the current and intended Operator versions. You can verify which versions your OLM Operators are compatible with by using the [Red&#160;Hat {{ product_title }} Operator Update Information Checker](https://access.redhat.com/labs/ocpouic/?operator=logging&&ocp_versions=4.10,4.11,4.12).

For example, the following high level steps describe how to perform a Control Plane Only update from &lt;4.y> to &lt;4.y+2> for {{ rh_storage }} (ODF). This can be done through the CLI or web console. For information about how to update clusters through your desired interface, see "Control Plane Only update using the web console" and "Control Plane Only update using the CLI".

1.  Pause the worker machine pools.
1.  Update {{ product_title }} from &lt;4.y> to &lt;4.y+1>.
1.  Update ODF from &lt;4.y> to &lt;4.y+1>.
1.  Update {{ product_title }} from &lt;4.y+1> to &lt;4.y+2>.
1.  Update ODF to &lt;4.y+2>.
1.  Unpause the worker machine pools.


:::note

The update to ODF &lt;4.y+2> can happen before or after worker machine pools have been unpaused.

:::