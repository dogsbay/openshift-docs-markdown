{%- set _mod_docs_content_type = "CONCEPT" %}
# Install optional RPM packages {id="microshift-install-optional-rpms_{{ context }}"}

After installing {{ microshift_short }}, you can add optional RPM packages to expand your deployment capabilities. Optional packages include networking extensions such as Multus, application lifecycle management with Operator Lifecycle Manager (OLM), GitOps, observability with OpenTelemetry, and AI model serving with {{ rhoai }}. Install only the packages that your deployment requires.