{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster notifications {id="sd-cluster-notifications_{{ context }}"}

Cluster notifications are messages about the status, health, or performance of your cluster. They are the primary way that Red&#160;Hat Site Reliability Engineering (SRE) communicates with you about the health of your managed cluster. {._abstract}

Red&#160;Hat SRE may also use cluster notifications to prompt you to perform an action in order to resolve or prevent an issue with your cluster.

Cluster owners and administrators must regularly review and action cluster notifications to ensure clusters remain healthy and supported.

You can view cluster notifications in the {{ hybrid_console }}, in the **Cluster history** tab for your cluster. By default, only the cluster owner receives cluster notifications as emails. If other users need to receive cluster notification emails, add each user as a notification contact for your cluster.

**Additional resources**
{._additional-resources}

{% if openshift_dedicated %}
*   [Customer responsibilities: Review and action cluster notifications](/osd_architecture/osd_policy/policy-process-security#review-action-notifications_policy-process-security)
{%- endif %}
*   [Red Hat Customer Portal account management](https://access.redhat.com/articles/1757953)