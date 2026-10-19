{%- set _mod_docs_content_type = "CONCEPT" %}
# Uninstall OADP {id="oadp-uninstall-intro_{{ context }}"}

You can uninstall the OpenShift API for Data Protection (OADP) by deleting the OADP Operator from your cluster. Before uninstalling, ensure that you have deleted all backup and restore custom resources and that no backup operations are in progress. For instructions on deleting an Operator, see "Deleting Operators from a cluster" in the _Operator Lifecycle Manager_ documentation.