{%- set _mod_docs_content_type = "REFERENCE" %}

# Telco RAN DU reference design components {id="telco-ran-du-reference-design-components_{{ context }}"}

The following sections describe the various {{ product_title }} components and configurations that you use to configure and deploy clusters to run RAN DU workloads. {._abstract}

**Figure 1. Telco RAN DU reference design components**

![Diagram showing telco RAN DU RDS components](/images/telco-ran-du-reference-design-components.png)


:::note

Ensure that additional components you include that are not specified in the telco RAN DU profile do not affect the CPU resources allocated to workload applications.

:::



:::important

Out of tree drivers are not supported.
5G RAN application components are not included in the RAN DU profile and must be engineered against resources (CPU) allocated to applications.

:::