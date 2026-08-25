{%- set _mod_docs_content_type = "PROCEDURE" %}
# Downloading the Velero CLI tool {id="velero-obtaining-by-downloading_{{ context }}"}

Download and install the `velero` CLI tool from the Velero documentation page, which provides instructions for macOS by using Homebrew, GitHub, and Windows by using Chocolatey. This helps you to access the `velero` CLI for debugging backup and restore operations. {._abstract}

**Prerequisites**

*   You have access to a Kubernetes cluster, v1.16 or later, with DNS and container networking enabled.
*   You have installed `kubectl` locally.

**Procedure**

1.  Open a browser and navigate to {{ velero_cli_install }}.
1.  Follow the appropriate procedure for macOS, GitHub, or Windows.
1.  Download the Velero version appropriate for your version of OADP and {{ product_title }}.