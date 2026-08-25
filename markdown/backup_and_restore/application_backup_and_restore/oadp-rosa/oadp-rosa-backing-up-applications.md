---
title: Backing up applications on ROSA clusters using OADP
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}

# Backing up applications on ROSA clusters using OADP {id="oadp-rosa-backing-up-applications"}

{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}

# Installing OADP {id="_installing_oadp"}

{% endif %}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "oadp-rosa-backing-up-applications" %}

{% if openshift_rosa or openshift_rosa_hcp %}
Use {{ oadp_first }} with {{ product_title }} clusters to back up and restore application data.
{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
Use {{ oadp_first }} with {{ product_rosa }} (ROSA) clusters to back up and restore application data. {._abstract}

ROSA is a fully-managed, turnkey application platform that allows you to deliver value to your customers by building and deploying applications.

ROSA provides seamless integration with a wide range of {{ aws_first }} compute, database, analytics, machine learning, networking, mobile, and other services to speed up the building and delivery of differentiating experiences to your customers.

You can subscribe to the service directly from your {{ aws_short }} account.

After you create your clusters, you can operate your clusters with the {{ product_title }} web console or through {{ cluster_manager_first }}. You can also use ROSA with OpenShift APIs and command-line interface (CLI) tools.

For additional information about ROSA installation, see _Installing Red Hat OpenShift Service on AWS (ROSA)_ interactive walk-through.

{% endif %}

Before installing {{ oadp_first }}, you must set up role and policy credentials for OADP so that it can use the {{ aws_full }} API.

This process is performed in the following two stages:

1.  Prepare {{ aws_short }} credentials
1.  Install the OADP Operator and give it an IAM role

{% leveloffset +1 %}{% include "./modules/preparing-aws-credentials-for-oadp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-oadp-rosa-sts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/updating-role-arn-oadp-rosa-sts.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{%- if not (openshift_rosa or openshift_rosa_hcp) %}

*   [Installing from the software catalog using the web console](/operators/user/olm-installing-operators-in-namespace#olm-installing-from-software-catalog-using-web-console_olm-installing-operators-in-namespace)

{% endif %}
*   [Backing up applications](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)
*   [Installing Red Hat OpenShift Service on AWS interactive walkthrough](https://www.redhat.com/en/products/interactive-walkthrough/install-rosa)
*   [{{ cluster_manager_first }}](https://docs.openshift.com/dedicated/ocm/ocm-overview.html)

{%- if not (openshift_rosa or openshift_rosa_hcp) %}

{% leveloffset +1 %}{% include "./modules/performing-a-backup-oadp-rosa-sts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cleanup-a-backup-oadp-rosa-sts.md" %}{% endleveloffset %}

{% endif %}