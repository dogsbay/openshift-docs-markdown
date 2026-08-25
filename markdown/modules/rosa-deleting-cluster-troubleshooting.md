{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster deletion {id="rosa-deleting-cluster-troubleshooting_{{ context }}"}

Troubleshooting issues that prevent cluster deletion involves verifying IAM configurations and confirming the removal of resource dependencies. {._abstract}

**Procedure**

1.  If the cluster cannot be deleted because of missing IAM roles, see [Repairing a cluster that cannot be deleted](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/support/index#rosa-troubleshooting-cluster-deletion_rosa-troubleshooting-cluster-deployments).
1.  If the cluster cannot be deleted for other reasons:
    1.  Check that there are no Add-ons for your cluster pending in the [{{ hybrid_console_second }}](https://console.redhat.com/openshift).
    1.  Check that all AWS resources and dependencies have been deleted in the Amazon Web Console.