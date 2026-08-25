{%- set _mod_docs_content_type = "PROCEDURE" %}
# Upgrade manifests for OSTree systems {id="microshift-manifests-upgrade-scenario-ostree_{{ context }}"}

To update resources while preserving data on OSTree-based {{ microshift_short }} systems, you can create new manifests for changes and deletions and use the OSTree removal procedure for the `delete` directory. {._abstract}

Use the following procedure to remove some resources while retaining others to preserve data.


:::important

For OSTree systems, the `delete` subdirectories are read-only.

:::


**Procedure**

1.  Identify the manifest that needs updating.
1.  Create a new manifest to apply in the manifest directories. See [Using manifests example](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/running_applications/applications-with-microshift#microshift-applying-manifests-example_applications-microshift) to create new manifests using the example.
1.  Create a new manifest for resource deletion to be placed in the `delete` subdirectories.
1.  Use the procedure in "Removing manifests for OSTree systems" to remove the manifests.