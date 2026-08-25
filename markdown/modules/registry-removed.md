{%- set _mod_docs_content_type = "CONCEPT" %}
# Image registry removed during installation {id="registry-removed_{{ context }}"}

On platforms that do not provide shareable object storage, the OpenShift Image Registry Operator bootstraps itself as `Removed`. This allows `openshift-installer` to complete installations on these platform types. {._abstract}

After installation, you must edit the Image Registry Operator configuration to switch the `managementState` from `Removed` to `Managed`. When this has completed, you must configure storage.