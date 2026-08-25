{% if context == "gathering-cluster-data" %}
{%- set support = true -%}
{% endif %}
{% if context == "audit-log-view" %}
{%- set viewing = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering audit logs {id="gathering-data-audit-logs_{{ context }}"}

{% if support %}
You can gather audit logs, which are a security-relevant chronological set of records documenting the sequence of activities that have affected the system by individual users, administrators, or other components of the system. You can gather audit logs for: {._abstract}

*   etcd server
*   Kubernetes API server
*   OpenShift OAuth API server
*   OpenShift API server

{% endif %}
{% if viewing %}

You can use the must-gather tool to collect the audit logs for debugging your cluster, which you can review or send to Red Hat Support.

{% if openshift_dedicated %}

:::note

In {{ product_title }} deployments, customers who are not using the Customer Cloud Subscription (CCS) model must request a copy of your cluster’s audit logs by contacting Red Hat Support. This is because using the must-gather tool requires `cluster-admin` privileges.

:::

{% endif %}
{% endif %}

**Procedure**

1.  Run the `oc adm must-gather` command with `-- /usr/bin/gather_audit_logs`:
    ```terminal
    $ oc adm must-gather -- /usr/bin/gather_audit_logs
    ```

{% if not openshift_origin %}
1.  Create a compressed file from the `must-gather` directory that was just created in your working directory. For example, on a computer that uses a Linux operating system, run the following command:
    ```terminal
    $ tar cvaf must-gather.tar.gz must-gather.local.472290403699006248
    ```

    Replace `must-gather.local.472290403699006248` with the actual directory name.
1.  Attach the compressed file to your support case on the [the **Customer Support** page](https://access.redhat.com/support/cases/#/case/list) of the Red Hat Customer Portal.
{% endif %}

{% if context == "gathering-cluster-data" %}
{%- set support = "" -%}
{% endif %}
{% if context == "audit-log-view" %}
{%- set viewing = "" -%}
{% endif %}