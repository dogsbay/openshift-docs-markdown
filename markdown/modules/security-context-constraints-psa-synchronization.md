{%- set _mod_docs_content_type = "CONCEPT" %}
# About pod security admission synchronization {id="security-context-constraints-psa-synchronization_{{ context }}"}

Pod security admission `warn` and `audit` labels are automatically synchronized on your namespaces. This synchronization maps security context constraints to pod security profiles based on the service account permissions in each namespace. {._abstract}

The controller examines `ServiceAccount` object permissions to use security context constraints in each namespace. Security context constraints (SCCs) are mapped to pod security profiles based on their field values; the controller uses these translated profiles. Pod security admission `warn` and `audit` labels are set to the most privileged pod security profile in the namespace to prevent displaying warnings and logging audit events when pods are created.

Namespace labeling is based on consideration of namespace-local service account privileges.

Applying pods directly might use the SCC privileges of the user who runs the pod. However, user privileges are not considered during automatic labeling.