{%- set _mod_docs_content_type = "CONCEPT" %}
# Patching a reference configuration {id="cluster-compare-patching_{{ context }}"}

In certain scenarios, you might need to patch the reference configuration to handle expected deviations in a cluster configuration. The plugin applies the patch during the comparison process, modifying the specified resource fields as defined in the patch file. {._abstract}

For example, you might need to temporarily patch a template because a cluster uses a deprecated field that is out-of-date with the latest reference configuration. Patched files are reported in the comparison output summary.

You can create a patch file in two ways:

*   Use the `cluster-compare` plugin to generate a patch YAML file.
*   Create your own patch file.