{%- set _mod_docs_content_type = "CONCEPT" %}
# About sosreport archive {id="about-microshift-sos-reports_{{ context }}"}

You can use an `sosreport` archive to troubleshoot a failing host or problems with {{ gitops_title }}. The `sos` tool combines plugins that help you gather information from different applications. The `sos report` command generates a detailed report that shows all of the enabled plugins and data from the different components and applications in a system. {._abstract}

A {{ microshift_short }}-specific plugin from sos version 4.5.1 gathers the following data:

*   {{ microshift_short }} configuration and version
*   YAML output for node and system namespaced resources
*   OVN-Kubernetes information