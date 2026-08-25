{%- set _mod_docs_content_type = "CONCEPT" %}
# Security scanning in {{ op_system_base }} {id="security-container-content-scanning_{{ context }}"}

For {{ op_system_base_full }} systems, OpenSCAP scanning is available from the `openscap-utils` package. In {{ op_system_base }}, you can use the `openscap-podman` command to scan images for vulnerabilities. {._abstract}

{{ product_title }} enables you to use {{ op_system_base }} scanners with your Continuous Integration and Continuous Delivery (CI/CD) process. For example, you can integrate static code analysis tools that test for security flaws in your source code and software composition analysis tools that identify open source libraries to provide metadata on those libraries such as known vulnerabilities.

## Scanning OpenShift images {id="quay-security-scan_{{ context }}"}

For the container images that are running in {{ product_title }} and are pulled from {{ quay }} registries, you can use an Operator to list the vulnerabilities of those images. The {{ rhq_cso }} can be added to {{ product_title }} to provide vulnerability reporting for images added to selected namespaces.

Container image scanning for {{ quay }} is performed by Clair. In {{ quay }}, Clair can search for and report vulnerabilities in images built from {{ op_system_base }}, CentOS, Oracle, Alpine, Debian, and Ubuntu operating system software.