{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster updates blocked by olm cluster Operator {id="olmv1-blocked-cluster-updates_{{ context }}"}

If an installed Operator’s `olm.maxOpenShiftVersion` field is set and a cluster administrator attempts to update their cluster to a version that the Operator does not provide a valid update path for, the cluster update fails and the `Upgradeable` status for the `olm` cluster Operator is set to `False`. {._abstract}

To resolve the issue, the cluster administrator must either update the installed Operator to a version with a valid update path, if one is available, or they must uninstall the Operator. Then, they can attempt the cluster update again.