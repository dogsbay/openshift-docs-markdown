{%- set _mod_docs_content_type = "CONCEPT" %}
# Azure government regions {id="installation-azure-about-government-region_{{ context }}"}

Microsoft Azure Government (MAG) is a cloud environment designed for US government agencies for US government agencies at the federal,
state, and local level, as well as contractors, educational institutions, and
other US customers that must run sensitive workloads on Azure. MAG is composed
of government-only data center regions, all granted an
Impact Level 5 Provisional Authorization. {._abstract}

Deploying a {{ product_title }} cluster to a Microsoft Azure Government (MAG) region requires manually configuring the Azure Government cloud instance and region in the `install-config.yaml` file before you install the cluster. You must also update your service principal to reference the appropriate government environment.


:::note

The Azure government region cannot be selected using the guided terminal prompts
from the installation program. You must define the region manually in the
`install-config.yaml` file. Remember to also set the dedicated cloud instance,
like `AzureUSGovernmentCloud`, based on the region specified. 

:::


**Additional resources**
{._additional-resources}

*   [Microsoft Azure Government (MAG)](https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome)
*   [Impact Level 5 Provisional Authorization](https://docs.microsoft.com/en-us/microsoft-365/compliance/offering-dod-disa-l2-l4-l5?view=o365-worldwide#dod-impact-level-5-provisional-authorization)