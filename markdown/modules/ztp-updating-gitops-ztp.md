{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of the {{ ztp }} update process {id="ztp-updating-gitops-ztp_{{ context }}"}

You can update {{ ztp_first }} for a fully operational hub cluster running an earlier version of the {{ ztp }} infrastructure. The update process avoids impact on managed clusters. {._abstract}


:::note

Any changes to policy settings, including adding recommended content, results in updated policies that must be rolled out to the managed clusters and reconciled.

:::


At a high level, the strategy for updating the {{ ztp }} infrastructure is as follows:

1.  Label all existing clusters with the `ztp-done` label.
1.  Stop the ArgoCD applications.
1.  Install the new {{ ztp }} tools.
1.  Update required content and optional changes in the Git repository.
1.  Enable pulling the ISO images for the desired {{ product_title }} version.
1.  Update and restart the application configuration.