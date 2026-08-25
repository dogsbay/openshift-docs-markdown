{%- set _mod_docs_content_type = "CONCEPT" %}
# Deploying additional changes to clusters {id="ztp-deploying-additional-changes-to-clusters_{{ context }}"}

If you require cluster configuration changes outside of the base {{ ztp_first }} pipeline configuration, there are three options: {._abstract}


Apply the additional configuration after the {{ ztp }} pipeline is complete
:   When the {{ ztp }} pipeline deployment is complete, the deployed cluster is ready for application workloads. At this point, you can install additional Operators and apply configurations specific to your requirements. Ensure that additional configurations do not negatively affect the performance of the platform or allocated CPU budget.


Add content to the {{ ztp }} library
:   The base source custom resources (CRs) that you deploy with the {{ ztp }} pipeline can be augmented with custom content as required.


Create extra manifests for the cluster installation
:   Extra manifests are applied during installation and make the installation process more efficient.


:::important

Providing additional source CRs or modifying existing source CRs can significantly impact the performance or CPU profile of {{ product_title }}.

:::