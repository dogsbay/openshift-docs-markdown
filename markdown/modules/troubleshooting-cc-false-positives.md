{%- set _mod_docs_content_type = "PROCEDURE" %}

# Troubleshooting false positives for missing resources {id="troubleshooting-cc-false-positives_{{ context }}"}

The plugin might report a missing resource even though the cluster custom resource (CR) is present in the cluster. {._abstract}

**Procedure**

1.  Ensure you are using the latest version of the `cluster-compare` plugin. For more information, see "Installing the cluster-compare plugin".
1.  Ensure you are using the most up-to-date version of the reference configuration.
1.  Ensure that template has the same `apiVersion`, `kind`, `name`, and `namespace` fields as the cluster CR.