{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Troubleshoot Red&#160;Hat build of Karpenter configuration and operational issues {id="rosa-troubleshooting-autonode"}

{%- set context = "rosa-troubleshooting-autonode" %}

Understanding common failure categories for the {{ autonode }} helps you quickly identify the root cause and restore automatic scaling capabilities. Use the following table to identify which procedure addresses your symptom: {._abstract}

**Symptom-to-procedure mapping**

| Symptom | Procedure |
| --- | --- |
| Karpenter Custom Resource Definitions (CRDs) are not visible after enabling the {{ autonode }} | [Verify Karpenter CRDs are installed](#verify-karpenter-crds-installed_rosa-troubleshooting-autonode) |
| EC2NodeClass shows `SubnetsReady` or `SecurityGroupsReady` = `False` | [Resolve EC2NodeClass not ready status](#resolve-ec2nodeclass-not-ready-status_rosa-troubleshooting-autonode) |
| CloudTrail shows `Client.UnauthorizedOperation` for `ec2:CreateTags` | [Resolve AWS Identity and Access Management (IAM) permissions for AWS resource tagging](#resolve-iam-permissions-for-tagging_rosa-troubleshooting-autonode) |

## Prerequisites {id="rosa-troubleshooting-autonode-prereqs"}

*   You have enabled the {{ autonode }} on your {{ product_title }} cluster.
*   You have `cluster-admin` privileges.
*   You have installed the `oc` CLI and authenticated to your cluster.
*   You have installed the `rosa` CLI and authenticated.
*   You have installed the `jq` command-line JSON processor.
*   You have installed and configured the `aws` CLI.

{% leveloffset +1 %}{% include "./modules/autonode-troubleshooting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/karpenter-resource-readiness.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/query-ec2nodeclass-condition-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/verify-karpenter-crds.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/resolve-ec2nodeclass-not-ready.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/resolve-iam-permissions-tagging.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_rosa-troubleshooting-autonode_{{ context }}" ._additional-resources}

*   [About {{ autonode }}](/rosa_cluster_admin/autonode/rosa-autonode-about#rosa-autonode-about)
*   [Set up {{ autonode }}](/rosa_cluster_admin/autonode/rosa-autonode-setup#rosa-autonode-setup)