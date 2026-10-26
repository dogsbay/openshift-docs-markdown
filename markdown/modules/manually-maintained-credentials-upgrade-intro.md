{%- set _mod_docs_content_type = "CONCEPT" %}
# Prepare to update a cluster with manually maintained credentials {id="preparing-manual-creds-update_{{ context }}"}

Before you update a cluster that uses manually maintained credentials, accommodate any new or changed cloud provider credentials in the target release. This preparation ensures the Cloud Credential Operator (CCO) does not block the upgrade. {._abstract}

The CCO `Upgradeable` status for a cluster with manually maintained credentials is `False` by default.

*   For minor releases, for example, from 4.20 to 4.21, this status prevents you from updating until you have addressed any updated permissions and annotated the `CloudCredential` resource to indicate that the permissions are updated as needed for the next version. This annotation changes the `Upgradeable` status to `True`.
*   For z-stream releases, for example, from 4.20.0 to 4.20.1, no permissions are added or changed, so the update is not blocked.