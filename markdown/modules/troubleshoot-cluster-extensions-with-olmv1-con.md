{%- set _mod_docs_content_type = "CONCEPT" %}
# Troubleshoot cluster extensions with {{ olmv1 }} {id="troubleshoot-cluster-extensions-with-olmv1-con_{{ context }}"}

When an extension does not install or update as expected, you can inspect its state to decide what to do next. {._abstract}

{{ olmv1_first }} reports progress through the rollout of the extension and surfaces the most common failure classes, such as unresolved catalog content and invalid extension deployment settings.