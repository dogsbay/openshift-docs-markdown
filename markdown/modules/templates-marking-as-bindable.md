{%- set _mod_docs_content_type = "PROCEDURE" %}
# Marking a template as bindable {id="templates-marking-as-bindable_{{ context }}"}

To prevent end users from binding to services provisioned from your template, add the `template.openshift.io/bindable: "false"` annotation to the template object. By default, the {{ tsb_name }} advertises each template service as bindable in the service catalog. {._abstract}

**Procedure**

*   Prevent end users from binding against services provisioned from a given template by adding the annotation `template.openshift.io/bindable: "false"` to the template.