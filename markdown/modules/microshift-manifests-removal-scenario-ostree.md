{%- set _mod_docs_content_type = "PROCEDURE" %}
# Remove manifests for OSTree systems {id="microshift-manifests-removal-scenario-ostree_{{ context }}"}

On OSTree-based {{ microshift_short }} systems, you can remove a resource by packaging the manifest in an RPM, adding it to a blueprint, and letting {{ microshift_short }} process the `delete` directory. {._abstract}


:::important

For OSTree installation, the `delete` subdirectories are read-only.

:::


**Procedure**

1.  Identify the manifest that needs to be placed in the `delete` subdirectories.
1.  Package the manifest into an RPM. See [Building the RPM package for the application](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/running_applications/microshift-embedding-apps-tutorial#microshift-building-apps-rpms_microshift-embedding-apps-tutorial) for the procedure to package the manifest into an RPM.
1.  Add the packaged RPM to the blueprint file to install it into correct location. See [Adding application RPMs to a blueprint](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/{{ ocp_version }}/html/running_applications/microshift-embedding-apps-tutorial#microshift-adding-app-rpms-to-blueprint_microshift-embedding-apps-tutorial) for the procedure to add an RPM to a blueprint.