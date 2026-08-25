{%- set _mod_docs_content_type = "PROCEDURE" %}

# Upgrading the {{ oadp_short }} Operator {id="oadp-upgrading-dpa-operator-1-6-0_{{ context }}"}

You can upgrade the {{ oadp_first }} Operator by using the following procedure.  {._abstract}


:::note

Do not install {{ oadp_short }} 1.6.0 on a {{ OCP_short }} 4.21 cluster.

:::


**Prerequisites**

*   You have installed the latest {{ oadp_short }} {{ oadp_version_1_5 }}.
*   You have backed up your data.

**Procedure**

1.  Upgrade {{ OCP_short }} 4.21 to {{ OCP_short }} 4.22.
1.  Ensure your subscription channel for the {{ oadp_short }} Operator is `stable`.
1.  Wait for the Operator and containers to update and restart.