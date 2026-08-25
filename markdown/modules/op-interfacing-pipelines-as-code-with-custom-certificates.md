{%- set _mod_docs_content_type = "REFERENCE" %}
# Interfacing {{ pac }} with custom certificates {id="interfacing-pipelines-as-code-with-custom-certificates_{{ context }}"}

To configure {{ pac }} with a Git repository that is accessible with a privately signed or custom certificate, you can expose the certificate to {{ pac }}. {._abstract}

**Procedure**

*   If you have installed {{ pac }} using the {{ pipelines_title }} Operator, you can add your custom certificate to the cluster using the `Proxy` object. The Operator exposes the certificate in all {{ pipelines_title }} components and workloads, including {{ pac }}.