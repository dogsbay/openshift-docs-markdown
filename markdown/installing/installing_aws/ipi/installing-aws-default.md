---
title: Installing a cluster on AWS
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on AWS {id="installing-aws-default"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-aws-default" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on Amazon Web Services (AWS) that uses the default configuration options.

{% leveloffset +1 %}{% include "./modules/installing-aws-default-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuration and credential file settings ({{ aws_short }} documentation)](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-in-by-using-the-web-console.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Accessing the web console](/web_console/web-console#web-console)
*   [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
*   [Available cluster customizations](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Removing cloud provider credentials](/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)