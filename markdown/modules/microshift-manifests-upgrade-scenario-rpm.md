{%- set _mod_docs_content_type = "PROCEDURE" %}
# Upgrade manifests for RPM systems {id="microshift-manifests-upgrade-scenario-rpm_{{ context }}"}

To update resources while preserving data on RPM-based {{ microshift_short }} systems, you can create new manifests for changes and deletions, and then move the deletion manifests into a `delete` subdirectory. {._abstract}

Use the following procedure to remove some resources while retaining others to preserve data.

**Procedure**

1.  Identify the manifest that requires updating.
1.  Create new manifests to be applied in the manifest directories.
1.  Create new manifests for resource deletion. It is not necessary to include the `spec` in these manifests. See [Using manifests example](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/running_applications/applications-with-microshift#microshift-applying-manifests-example_applications-microshift) to create new manifests using the example.
1.  Use the procedure in "Removing manifests for RPM systems" to create `delete` subdirectories and place the manifests created for resource deletion in this path.